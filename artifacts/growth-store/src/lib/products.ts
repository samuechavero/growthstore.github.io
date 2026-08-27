export type Product = {
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

export const mockProducts: Product[] = [
  {
    id: 'gs-001',
    name: 'Termo acero mate 1L',
    category: 'Termos y Vasos',
    description: 'Conserva la temperatura y acompaña tus días.',
    price: 28500,
    image: 'thermo',
    badge: 'Más elegido',
    accent: '#d7e6ba',
  },
  {
    id: 'gs-002',
    name: 'Auriculares TWS Air',
    category: 'Auriculares',
    description: 'Sonido claro, estuche compacto y conexión rápida.',
    price: 18900,
    image: 'earbuds',
    badge: 'Nuevo',
    accent: '#cfe0d5',
  },
  {
    id: 'gs-003',
    name: 'Cargador rápido USB-C 20W',
    category: 'Cables y Cargadores',
    description: 'Carga ágil para tu teléfono, tablet y más.',
    price: 12400,
    image: 'charger',
    accent: '#e4dfb9',
  },
  {
    id: 'gs-004',
    name: 'Parlante portátil Beat Mini',
    category: 'Parlantes',
    description: 'Pequeño por fuera, potente para cualquier plan.',
    price: 23900,
    image: 'speaker',
    badge: 'Oferta',
    accent: '#d9d0c1',
  },
];

/**
 * Product source is intentionally kept behind a loader.
 * When the public catalogue is ready, replace the mock return with a
 * fetch('/productos.csv') + parser without changing the store UI.
 */
export async function loadProducts(): Promise<Product[]> {
  return Promise.resolve(mockProducts);
}