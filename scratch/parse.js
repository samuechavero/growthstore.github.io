const fs = require('fs');

const raw = fs.readFileSync('scratch/raw_data.txt', 'utf8');
const lines = raw.split('\n').map(l => l.trim()).filter(l => l);

const products = [];
let currentCategory = 'Hogar y Bazar'; // default
let currentProduct = null;

// Category mappings based on headers in text
const categoryMap = {
  'TERMOS Y VASOS': 'Termos y Vasos',
  'AURICULARES': 'Auriculares',
  'CABLES Y CARGADORES': 'Cables y Cargadores',
  'PARLANTES': 'Parlantes',
  'RELOJ': 'Relojes',
  'HOGAR y BAZAR': 'Hogar y Bazar',
  'DIA DEL NIÑO/A': 'Juguetería y Niños',
  'PERFUMES ARABES': 'Cuidado Personal',
  'PILAS': 'Pilas y Baterías',
  'ADAPTADORES, RECEPTORES,CABLES': 'Cables y Cargadores',
  'ESPEJOS': 'Hogar y Bazar',
};

const knownCategories = [
  'Termos y Vasos',
  'Auriculares',
  'Cables y Cargadores',
  'Parlantes',
  'Relojes',
  'Hogar y Bazar',
  'Juguetería y Niños',
  'Cuidado Personal',
  'Iluminación',
  'Herramientas y Seguridad',
  'Pilas y Baterías',
];

// Heuristics for categories
function guessCategory(text) {
  const t = text.toLowerCase();
  if (t.includes('auricular') || t.includes('airpods')) return 'Auriculares';
  if (t.includes('termo') || t.includes('vaso') || t.includes('botella') || t.includes('taza') || t.includes('mate')) return 'Termos y Vasos';
  if (t.includes('cable') || t.includes('cargador') || t.includes('fuente')) return 'Cables y Cargadores';
  if (t.includes('parlante') || t.includes('karaoke')) return 'Parlantes';
  if (t.includes('reloj') || t.includes('smartwatch')) return 'Relojes';
  if (t.includes('plancha') || t.includes('secador') || t.includes('perfume') || t.includes('espejo') || t.includes('vape')) return 'Cuidado Personal';
  if (t.includes('luz') || t.includes('reflector') || t.includes('tira neon') || t.includes('iluminacion') || t.includes('guirnalda') || t.includes('lampara')) return 'Iluminación';
  if (t.includes('juguete') || t.includes('muñeca') || t.includes('consola') || t.includes('niño') || t.includes('pelota')) return 'Juguetería y Niños';
  if (t.includes('herramienta') || t.includes('taladro') || t.includes('candado') || t.includes('camara ip') || t.includes('linterna')) return 'Herramientas y Seguridad';
  if (t.includes('pila')) return 'Pilas y Baterías';
  return 'Hogar y Bazar';
}

function parsePrice(str) {
  const clean = str.replace(/[^0-9,-]/g, '').replace(',', '.');
  return parseFloat(clean) || 0;
}

let i = 0;
while (i < lines.length) {
  let line = lines[i];

  // Ignore useless lines
  if (line === '#VALUE!' || line === '0' || line.includes('ACTUALIZACIÓN') || line === 'ULTIMOS INGRESOS' || line === 'Precio de Venta al publico' || line === 'LISTA DE PRECIOS' || line.match(/^\$[0-9,.]+$/) && parsePrice(line) < 100) {
    i++;
    continue;
  }

  // Check if it's a category header
  if (categoryMap[line] || categoryMap[line.toUpperCase()]) {
    currentCategory = categoryMap[line] || categoryMap[line.toUpperCase()];
    i++;
    continue;
  }

  // A product block usually ends with a price
  if (line.match(/^\$[0-9.,]+$/)) {
      // It's a price, but for what? This shouldn't be the start of a product.
      i++;
      continue;
  }

  // We assume the current line is the product name
  let name = line;
  let description = [];
  let image = 'https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen';
  let price = 0;

  i++;
  // read until we hit a price
  while (i < lines.length) {
    let nextLine = lines[i];

    if (nextLine === '#VALUE!') {
      i++;
      continue;
    }

    if (nextLine.match(/^\$[0-9.,]+$/) && parsePrice(nextLine) >= 100) {
      price = parsePrice(nextLine);
      i++;
      break;
    }

    // Is it an image link?
    if (nextLine.includes('drive.google.com/file/d/')) {
        let match = nextLine.match(/id=([a-zA-Z0-9_-]+)/) || nextLine.match(/d\/([a-zA-Z0-9_-]+)\//);
        if (match) {
            image = `https://drive.google.com/uc?export=view&id=${match[1]}`;
        }
    } else if (nextLine.includes('http')) {
        // Maybe another link
    } else {
        description.push(nextLine);
    }
    
    i++;
  }

  if (name && price > 0) {
      let finalCat = currentCategory;
      if (finalCat === 'Hogar y Bazar') { // refine
          finalCat = guessCategory(name + ' ' + description.join(' '));
      }
      
      // clean name
      name = name.replace(/[\*\[\]]/g, '').trim();

      products.push({
          id: `prod-${products.length + 1}`,
          name: name,
          category: finalCat,
          description: description.join('\n').trim(),
          price: price,
          image: image,
          accent: '#d7e6ba'
      });
  }
}

// Ensure categories are correctly assigned to the permitted list
products.forEach(p => {
    if (!knownCategories.includes(p.category)) {
        p.category = 'Hogar y Bazar';
    }
});

// Remove duplicates based on name
const uniqueProducts = [];
const seen = new Set();
for (const p of products) {
    if (!seen.has(p.name.toLowerCase())) {
        seen.add(p.name.toLowerCase());
        uniqueProducts.push(p);
    }
}

const fileContent = `export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  accent: string;
};

export const categories = [
  'Todos los productos',
  'Termos y Vasos',
  'Auriculares',
  'Cables y Cargadores',
  'Parlantes',
  'Relojes',
  'Hogar y Bazar',
  'Juguetería y Niños',
  'Cuidado Personal',
  'Iluminación',
  'Herramientas y Seguridad',
  'Pilas y Baterías',
] as const;

export const mockProducts: Product[] = ${JSON.stringify(uniqueProducts, null, 2)};

export async function loadProducts(): Promise<{ products: Product[], categories: string[] }> {
  return { products: mockProducts, categories: [...categories] };
}
`;

fs.writeFileSync('artifacts/growth-store/src/lib/products.ts', fileContent);
console.log('Parsed ' + uniqueProducts.length + ' unique products successfully.');
