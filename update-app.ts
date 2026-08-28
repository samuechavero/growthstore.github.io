import fs from 'fs';
let content = fs.readFileSync('artifacts/growth-store/src/App.tsx', 'utf8');

// Remove static categories import
content = content.replace("import { categories, loadProducts, type Product } from '@/lib/products';", "import { loadProducts, type Product } from '@/lib/products';");

// Use state for categories
content = content.replace("const [products, setProducts] = useState<Product[]>([]);", "const [products, setProducts] = useState<Product[]>([]);\n  const [categories, setCategories] = useState<string[]>(['Todos los productos']);");

// Update refreshProducts
content = content.replace(/loadProducts\(\)\.then\(\(items\) => \{[\s\S]*?\}\)\.catch\(\(\) => \{/m, 
`loadProducts().then((res) => {
      if (active) {
        setProducts(res.products);
        if (res.categories && res.categories.length > 1) {
          setCategories(res.categories);
        }
        setLoading(false);
      }
    }).catch(() => {`);

// Change pageSize to 24 (between 20 and 30)
content = content.replace("const pageSize = 4;", "const pageSize = 24;");

// Update ProductCard to use highlighting for price
content = content.replace(
  '<p className="font-mono-ui text-[15px] font-bold text-[#3E6B4F]" data-testid={`text-price-product-${product.id}`}>{formatPrice(product.price)}</p>',
  '<p className="font-mono-ui text-[15px] font-bold rounded bg-[#171A18] px-1.5 py-0.5 text-[#B7D84B]" data-testid={`text-price-product-${product.id}`}>{formatPrice(product.price)}</p>'
);

// Update description in ProductCard to respect newlines
content = content.replace(
  '<p className="mt-2 min-h-8 text-[12px] leading-[1.35] text-[#68716A]">{product.description}</p>',
  '<p className="mt-2 min-h-8 text-[12px] leading-[1.35] text-[#68716A] whitespace-pre-wrap">{product.description}</p>'
);

// If product.image is a URL, render it instead of ProductArtwork
content = content.replace(
  'function ProductArtwork({ product }: { product: Product }) {',
  `function ProductArtwork({ product }: { product: Product }) {
  if (product.image && product.image.startsWith('http')) {
    return (
      <div className="relative flex h-[190px] items-center justify-center overflow-hidden rounded-[18px] bg-[#E7EBDE]" style={{ backgroundColor: product.accent }} aria-label={\`Imagen ilustrativa de \${product.name}\`}>
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <span className="absolute bottom-3 left-3 font-mono-ui text-[9px] font-bold uppercase tracking-[.16em] text-[#171A18]/80 bg-[#F5F3ED]/70 px-2 py-0.5 rounded-full backdrop-blur-sm">growth / pick</span>
      </div>
    );
  }`
);

fs.writeFileSync('artifacts/growth-store/src/App.tsx', content);
