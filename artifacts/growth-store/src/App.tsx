import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BatteryCharging,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  Headphones,
  Home as HomeIcon,
  Lightbulb,
  Menu,
  MessageCircle,
  MapPin,
  CreditCard,
  Banknote,
  Map,
  Truck,
  Loader2,
  Minus,
  PackageCheck,
  Plus,
  Search,
  ShoppingBag,
  ShieldCheck,
  Speaker,
  Thermometer,
  Trash2,
  UserRound,
  Watch,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { loadProducts, type Product } from '@/lib/products';

type CartLine = Product & { quantity: number };

const queryClient = new QueryClient();

const formatPrice = (price: number) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(price);

const productIcon = (image: string) => {
  const icons = {
    thermo: Thermometer,
    earbuds: Headphones,
    charger: Zap,
    speaker: Speaker,
  };
  return icons[image as keyof typeof icons] ?? ShoppingBag;
};

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`group flex items-center text-left transition-transform duration-200 hover:-translate-y-0.5 ${compact ? 'scale-90 origin-left' : ''}`}
      data-testid="button-brand-home"
      aria-label="Volver al inicio de Growth Store"
    >
      <img src="./logo.jpeg" alt="Growth Store Logo" className="h-[50px] w-auto object-contain rounded-lg" />
    </button>
  );
}

function LogisticsNote({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex items-center gap-2 text-[11px] font-semibold tracking-[.01em] ${dark ? 'text-[#D7E5D0]' : 'text-[#3E6B4F]'}`} data-testid="text-logistics-message">
      <span className={`flex size-6 items-center justify-center rounded-full ${dark ? 'bg-[#B7D84B] text-[#171A18]' : 'bg-[#DCE9C2] text-[#3E6B4F]'}`}>
        <PackageCheck size={13} strokeWidth={2.4} aria-hidden="true" />
      </span>
      <span>Envíos a domicilio, entrega inmediata.</span>
    </div>
  );
}

function ProductArtwork({ product }: { product: Product }) {
  if (product.image && product.image.startsWith('http')) {
    return (
      <div className="relative flex h-[190px] items-center justify-center overflow-hidden rounded-[18px] bg-[#E7EBDE]" style={{ backgroundColor: product.accent }} aria-label={`Imagen ilustrativa de ${product.name}`}>
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <span className="absolute bottom-3 left-3 font-mono-ui text-[9px] font-bold uppercase tracking-[.16em] text-[#171A18]/80 bg-[#F5F3ED]/70 px-2 py-0.5 rounded-full backdrop-blur-sm">growth / pick</span>
      </div>
    );
  }
  const Icon = productIcon(product.image);
  return (
    <div className="relative flex h-[190px] items-center justify-center overflow-hidden rounded-[18px] bg-[#E7EBDE]" style={{ backgroundColor: product.accent }} aria-label={`Imagen ilustrativa de ${product.name}`}>
      <div className="absolute -right-10 -top-12 size-40 rounded-full border-[20px] border-[#F5F3ED]/25" />
      <div className="absolute -bottom-16 -left-10 size-40 rounded-full border-[26px] border-[#3E6B4F]/10" />
      <div className="relative flex size-[104px] items-center justify-center rounded-[30px] bg-[#F5F3ED]/70 text-[#171A18] shadow-[0_15px_25px_rgba(23,26,24,.1)] transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-105">
        <Icon size={54} strokeWidth={1.35} aria-hidden="true" />
      </div>
      <span className="absolute bottom-3 left-3 font-mono-ui text-[9px] font-bold uppercase tracking-[.16em] text-[#3E6B4F]/65">growth / pick</span>
    </div>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: (product: Product) => void }) {
  return (
    <article className="group relative flex flex-col rounded-[20px] border border-[#D9DFD2] bg-[#F5F3ED] p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#3E6B4F]/35 hover:shadow-[0_18px_40px_rgba(62,107,79,.12)] animate-rise-in" data-testid={`card-product-${product.id}`}>
      <div className="relative">
        <ProductArtwork product={product} />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#171A18] px-2.5 py-1 font-mono-ui text-[9px] font-bold uppercase tracking-[.1em] text-[#B7D84B]" data-testid={`badge-product-${product.id}`}>
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={() => onAdd(product)}
          className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full bg-[#B7D84B] text-[#171A18] shadow-[0_4px_0_#7F9B2F] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_2px_0_#7F9B2F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3E6B4F] focus-visible:ring-offset-2"
          aria-label={`Agregar ${product.name} al carrito`}
          data-testid={`button-add-product-${product.id}`}
        >
          <Plus size={19} strokeWidth={2.5} />
        </button>
      </div>
      <div className="flex flex-1 flex-col px-1.5 pb-1 pt-4">
        <p className="font-mono-ui text-[9px] font-bold uppercase tracking-[.13em] text-[#8A918B]" data-testid={`text-category-product-${product.id}`}>{product.category}</p>
        <h3 className="mt-1.5 text-[17px] font-bold leading-[1.08] tracking-[-.04em] text-[#171A18]" data-testid={`text-name-product-${product.id}`}>{product.name}</h3>
        <p className="mt-2 min-h-8 text-[12px] leading-[1.35] text-[#68716A] whitespace-pre-wrap">{product.description}</p>
        <div className="mt-4 flex items-end justify-between gap-2">
          <p className="font-mono-ui text-[15px] font-bold rounded bg-[#171A18] px-1.5 py-0.5 text-[#B7D84B]" data-testid={`text-price-product-${product.id}`}>{formatPrice(product.price)}</p>
          <span className="text-[10px] font-semibold text-[#8A918B]">IVA inc.</span>
        </div>
      </div>
    </article>
  );
}

function CategoryIcon({ category }: { category: string }) {
  const Icon = category === 'Termos y Vasos' ? Thermometer
    : category === 'Auriculares' ? Headphones
      : category === 'Cables y Cargadores' ? Zap
        : category === 'Parlantes' ? Speaker
          : category === 'Relojes' ? Watch
              : category === 'Hogar y Bazar' ? HomeIcon
              : category === 'Cuidado Personal' ? UserRound
                : category === 'Iluminación' ? Lightbulb
                  : category === 'Herramientas y Seguridad' ? Wrench
                    : category === 'Pilas y Baterías' ? BatteryCharging
                      : ShoppingBag;
  return <Icon size={15} strokeWidth={1.8} aria-hidden="true" />;
}

function CartDrawer({ cart, onClose, onUpdate, onRemove }: {
  cart: CartLine[];
  onClose: () => void;
  onUpdate: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}) {
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const deliveryInfo = useMemo(() => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    
    if (day === 0 || (day === 6 && hour >= 16)) {
      return {
        ui: '🚚 La entrega de tu pedido se realizará el LUNES de 16 a 20 hs.',
        whatsapp: 'el LUNES de 16 a 20 hs'
      };
    } else if (hour >= 16) {
      return {
        ui: '🚚 La entrega de tu pedido se realizará MAÑANA de 16 a 20 hs.',
        whatsapp: 'MAÑANA de 16 a 20 hs'
      };
    } else {
      return {
        ui: '🚚 La entrega de tu pedido se realizará HOY de 16 a 20 hs.',
        whatsapp: 'HOY de 16 a 20 hs'
      };
    }
  }, []);
  const [paymentMethod, setPaymentMethod] = useState<'Transferencia' | 'Efectivo'>('Transferencia');

  const [shippingCost, setShippingCost] = useState<number | null>(null);
  const [shippingDistance, setShippingDistance] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [shippingError, setShippingError] = useState('');
  const [needsCoordination, setNeedsCoordination] = useState(false);

  const subtotal = cart.reduce((total, line) => total + line.price * line.quantity, 0);
  const finalTotal = subtotal + (shippingCost || 0);

  const applyDistanceCost = (distanceKm: number) => {
    setShippingDistance(distanceKm);
    if (distanceKm <= 3.0) {
      setShippingCost(1500);
      setNeedsCoordination(false);
    } else if (distanceKm <= 5.0) {
      setShippingCost(5000);
      setNeedsCoordination(false);
    } else if (distanceKm <= 9.0) {
      setShippingCost(7000);
      setNeedsCoordination(false);
    } else if (distanceKm <= 12.0) {
      setShippingCost(9000);
      setNeedsCoordination(false);
    } else if (distanceKm <= 18.0) {
      setShippingCost(12000);
      setNeedsCoordination(false);
    } else {
      setShippingCost(0);
      setNeedsCoordination(true);
    }
  };

  const calculateDistance = async () => {
    if (!address.trim()) {
      setShippingError('Ingresá una dirección para calcular el envío.');
      return;
    }

    setIsCalculating(true);
    setShippingError('');
    setShippingDistance(null);
    setNeedsCoordination(false);
    
    try {
      const originQuery = encodeURIComponent('Talma 2855, Córdoba, Argentina');
      const originRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${originQuery}`);
      const originData = await originRes.json();
      if (!originData || originData.length === 0) {
        throw new Error('No se pudo encontrar el origen.');
      }
      const { lat: lat_origen, lon: lon_origen } = originData[0];

      const destQuery = encodeURIComponent(address + ', Córdoba, Argentina');
      const destRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${destQuery}`);
      const destData = await destRes.json();
      if (!destData || destData.length === 0) {
        throw new Error('No pudimos ubicar la dirección exacta.');
      }
      const { lat: lat_destino, lon: lon_destino } = destData[0];

      const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${lon_origen},${lat_origen};${lon_destino},${lat_destino}?overview=false`;
      const osrmRes = await fetch(osrmUrl);
      const osrmData = await osrmRes.json();
      
      if (osrmData.code !== 'Ok' || !osrmData.routes || osrmData.routes.length === 0) {
        throw new Error('No pudimos calcular la ruta.');
      }

      const distanceKm = osrmData.routes[0].distance / 1000;
      applyDistanceCost(distanceKm);
    } catch (error: any) {
      setShippingError('No se encontró la dirección exacta. El envío será a coordinar.');
      setShippingCost(0);
      setShippingDistance(null);
      setNeedsCoordination(true);
    } finally {
      setIsCalculating(false);
    }
  };

  const isCheckoutValid = name.trim() && address.trim() && (shippingDistance !== null || needsCoordination) && !isCalculating;

  const getWhatsappUrl = () => {
    const productsText = cart.map((line) => `- ${line.quantity}x ${line.name} (${formatPrice(line.price)})`).join('\\n');
    const transferNote = paymentMethod === 'Transferencia' ? '\\n📎 Recordatorio: Por favor, enviá tu comprobante de transferencia respondiendo a este mensaje.' : '';
    
    const message = `🛒 *NUEVO PEDIDO - GROWTH STORE*
👤 *Nombre:* ${name}
📦 *Productos:* 
${productsText}
📍 *Dirección:* ${address}
🚚 *Entrega:* ${deliveryInfo.whatsapp}
📏 *Distancia:* ${shippingDistance !== null ? `${shippingDistance.toFixed(1)} km` : 'No calculada (A coordinar)'}
💳 *Forma de pago:* ${paymentMethod}

💵 *Subtotal:* ${formatPrice(subtotal)}
🚚 *Envío:* ${needsCoordination ? 'A coordinar con el vendedor' : formatPrice(shippingCost || 0)}
💰 *TOTAL A PAGAR:* ${needsCoordination ? 'A coordinar' : formatPrice(finalTotal)}
${transferNote}`;

    return `https://wa.me/5493512570174?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <button type="button" aria-label="Cerrar carrito" onClick={onClose} className="fixed inset-0 z-40 cursor-default bg-[#171A18]/35 backdrop-blur-[2px]" data-testid="button-close-cart-overlay" />
      <aside className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[430px] flex-col border-l border-[#D9DFD2] bg-[#F5F3ED] shadow-[-20px_0_60px_rgba(23,26,24,.16)] animate-drawer-in" aria-label="Carrito de compras" data-testid="drawer-cart">
        <div className="flex items-center justify-between border-b border-[#D9DFD2] px-5 py-5 sm:px-7">
          <div className="flex items-center gap-3">
            {step === 'checkout' && (
              <button type="button" onClick={() => setStep('cart')} className="flex size-8 items-center justify-center rounded-full bg-[#E7EBDE] text-[#3E6B4F] hover:bg-[#DCE9C2]" aria-label="Volver al carrito">
                <ChevronLeft size={18} />
              </button>
            )}
            <div>
              <p className="font-mono-ui text-[10px] font-bold uppercase tracking-[.18em] text-[#8A918B]">{step === 'cart' ? 'Tu selección' : 'Paso final'}</p>
              <h2 className="mt-1 text-2xl font-bold tracking-[-.06em] text-[#171A18]">{step === 'cart' ? 'Carrito' : 'Checkout'}</h2>
            </div>
          </div>
          <button type="button" onClick={onClose} className="flex size-10 items-center justify-center rounded-full border border-[#D9DFD2] text-[#3E6B4F] transition-colors hover:bg-[#DCE9C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3E6B4F]" aria-label="Cerrar carrito" data-testid="button-close-cart">
            <X size={19} />
          </button>
        </div>
        
        {step === 'cart' ? (
          <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
            <LogisticsNote />
            {cart.length === 0 ? (
              <div className="flex h-full min-h-[350px] flex-col items-center justify-center text-center">
                <span className="flex size-16 items-center justify-center rounded-[22px] bg-[#DCE9C2] text-[#3E6B4F]"><ShoppingBag size={28} strokeWidth={1.6} /></span>
                <h3 className="mt-5 text-lg font-bold tracking-[-.035em] text-[#171A18]">Tu carrito está vacío</h3>
                <p className="mt-2 max-w-[230px] text-sm leading-relaxed text-[#68716A]">Sumá productos y armamos tu pedido por WhatsApp.</p>
                <button type="button" onClick={onClose} className="mt-6 rounded-full bg-[#171A18] px-5 py-3 text-xs font-bold text-[#F5F3ED] transition-colors hover:bg-[#3E6B4F]" data-testid="button-continue-shopping">Ver productos</button>
              </div>
            ) : (
              <div className="mt-6 space-y-3">
                {cart.map((line) => (
                  <div key={line.id} className="flex gap-3 rounded-[16px] border border-[#D9DFD2] bg-[#FBFAF6] p-3" data-testid={`row-cart-${line.id}`}>
                    <div className="flex size-[68px] shrink-0 items-center justify-center rounded-[12px]" style={{ backgroundColor: line.accent }}>
                      {(() => { const Icon = productIcon(line.image); return <Icon size={29} strokeWidth={1.4} />; })()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="truncate text-sm font-bold text-[#171A18]">{line.name}</h3>
                        <button type="button" onClick={() => onRemove(line.id)} className="text-[#8A918B] transition-colors hover:text-[#B4453E]" aria-label={`Quitar ${line.name}`} data-testid={`button-remove-cart-${line.id}`}><Trash2 size={15} /></button>
                      </div>
                      <p className="mt-1 font-mono-ui text-xs font-bold text-[#3E6B4F]">{formatPrice(line.price)}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <button type="button" onClick={() => onUpdate(line.id, line.quantity - 1)} className="flex size-6 items-center justify-center rounded-md border border-[#D9DFD2] text-[#3E6B4F] hover:bg-[#DCE9C2]" aria-label="Reducir cantidad" data-testid={`button-decrease-cart-${line.id}`}><Minus size={12} /></button>
                        <span className="font-mono-ui w-5 text-center text-xs font-bold" data-testid={`text-quantity-cart-${line.id}`}>{line.quantity}</span>
                        <button type="button" onClick={() => onUpdate(line.id, line.quantity + 1)} className="flex size-6 items-center justify-center rounded-md border border-[#D9DFD2] text-[#3E6B4F] hover:bg-[#DCE9C2]" aria-label="Aumentar cantidad" data-testid={`button-increase-cart-${line.id}`}><Plus size={12} /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
            <div className="space-y-5">
              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#171A18]">Nombre y Apellido</label>
                <div className="relative">
                  <UserRound size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A918B]" />
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej. Juan Pérez" className="h-11 w-full rounded-[12px] border border-[#C8D2C3] bg-[#FBFAF6] pl-10 pr-4 text-sm text-[#171A18] outline-none transition-all placeholder:text-[#8A918B] focus:border-[#3E6B4F] focus:ring-2 focus:ring-[#DCE9C2]" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#171A18]">Dirección de entrega</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A918B]" />
                    <input type="text" value={address} onChange={(e) => { setAddress(e.target.value); setShippingDistance(null); setShippingCost(null); }} placeholder="Ej. San Martín 123" className="h-11 w-full rounded-[12px] border border-[#C8D2C3] bg-[#FBFAF6] pl-10 pr-4 text-sm text-[#171A18] outline-none transition-all placeholder:text-[#8A918B] focus:border-[#3E6B4F] focus:ring-2 focus:ring-[#DCE9C2]" />
                  </div>
                  <button type="button" onClick={calculateDistance} disabled={!address.trim() || isCalculating} className="flex h-11 shrink-0 items-center gap-1.5 rounded-[12px] bg-[#3E6B4F] px-4 text-xs font-bold text-[#F5F3ED] transition-colors hover:bg-[#2C513A] disabled:opacity-50">
                    {isCalculating ? <Loader2 size={15} className="animate-spin" /> : <Map size={15} />}
                    Calcular
                  </button>
                </div>
                {shippingError && <p className="mt-2 text-[11px] font-bold text-[#B4453E]">{shippingError}</p>}
                {shippingDistance !== null && (
                  <div className="mt-2 flex items-start gap-2 rounded-lg bg-[#DCE9C2]/50 p-2.5">
                    <Truck size={14} className="mt-0.5 shrink-0 text-[#3E6B4F]" />
                    <div>
                      <p className="text-xs font-bold text-[#171A18]">Distancia: {shippingDistance.toFixed(1)} km</p>
                      <p className="text-[11px] text-[#3E6B4F]">Costo: {needsCoordination ? 'A coordinar con el vendedor' : formatPrice(shippingCost || 0)}</p>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#171A18]">Entrega Estimada</label>
                <div className="flex items-center gap-2 rounded-[12px] border border-[#B7D84B] bg-[#DCE9C2]/30 p-3">
                  <Clock3 size={16} className="text-[#3E6B4F] shrink-0" />
                  <p className="text-xs font-bold text-[#3E6B4F]">{deliveryInfo.ui}</p>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-[#171A18]">Método de Pago</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`flex cursor-pointer items-center justify-center gap-2 rounded-[12px] border p-3 text-xs font-bold transition-all ${paymentMethod === 'Transferencia' ? 'border-[#B7D84B] bg-[#171A18] text-[#B7D84B]' : 'border-[#C8D2C3] bg-[#FBFAF6] text-[#68716A] hover:bg-[#E7EDDF]'}`}>
                    <input type="radio" name="payment" value="Transferencia" className="sr-only" checked={paymentMethod === 'Transferencia'} onChange={() => setPaymentMethod('Transferencia')} />
                    <CreditCard size={16} /> Transferencia
                  </label>
                  <label className={`flex cursor-pointer items-center justify-center gap-2 rounded-[12px] border p-3 text-xs font-bold transition-all ${paymentMethod === 'Efectivo' ? 'border-[#B7D84B] bg-[#171A18] text-[#B7D84B]' : 'border-[#C8D2C3] bg-[#FBFAF6] text-[#68716A] hover:bg-[#E7EDDF]'}`}>
                    <input type="radio" name="payment" value="Efectivo" className="sr-only" checked={paymentMethod === 'Efectivo'} onChange={() => setPaymentMethod('Efectivo')} />
                    <Banknote size={16} /> Efectivo
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {cart.length > 0 && (
          <div className="border-t border-[#D9DFD2] bg-[#FBFAF6] px-5 py-5 sm:px-7">
            {step === 'cart' ? (
              <>
                <div className="flex items-center justify-between text-sm text-[#68716A]">
                  <span>Subtotal</span>
                  <strong className="font-mono-ui text-lg text-[#171A18]" data-testid="text-cart-subtotal">{formatPrice(subtotal)}</strong>
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-[11px] leading-relaxed text-[#8A918B]"><Clock3 size={13} /> Coordinamos el envío al confirmar.</p>
                <button type="button" onClick={() => setStep('checkout')} className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3E6B4F] text-sm font-bold text-[#F5F3ED] transition-all hover:bg-[#2C513A] hover:shadow-[0_6px_18px_rgba(62,107,79,.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7D84B] focus-visible:ring-offset-2">
                  <ShoppingBag size={18} /> Finalizar Pedido
                  <ArrowRight size={15} />
                </button>
              </>
            ) : (
              <>
                <div className="space-y-1.5 border-b border-[#D9DFD2]/60 pb-3">
                  <div className="flex items-center justify-between text-sm text-[#68716A]">
                    <span>Productos</span>
                    <strong className="font-mono-ui font-bold text-[#171A18]">{formatPrice(subtotal)}</strong>
                  </div>
                  <div className="flex items-center justify-between text-sm text-[#68716A]">
                    <span>Envío</span>
                    <strong className="font-mono-ui font-bold text-[#171A18]">{shippingDistance === null ? 'Pendiente' : needsCoordination ? 'A coordinar' : formatPrice(shippingCost || 0)}</strong>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 text-sm font-bold text-[#171A18]">
                  <span>TOTAL A PAGAR</span>
                  <strong className="font-mono-ui text-xl text-[#3E6B4F]">{needsCoordination && shippingDistance === null ? '---' : formatPrice(finalTotal)}</strong>
                </div>
                <a href={isCheckoutValid ? getWhatsappUrl() : '#'} target={isCheckoutValid ? '_blank' : undefined} rel="noreferrer" aria-disabled={!isCheckoutValid} onClick={(e) => !isCheckoutValid && e.preventDefault()} className={`mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7D84B] focus-visible:ring-offset-2 ${isCheckoutValid ? 'bg-[#171A18] text-[#B7D84B] hover:shadow-[0_6px_18px_rgba(23,26,24,.25)]' : 'cursor-not-allowed bg-[#E7EBDE] text-[#A6B2A8]'}`}>
                  <MessageCircle size={18} /> Confirmar Pedido
                </a>
              </>
            )}
          </div>
        )}
      </aside>
    </>
  );
}

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(['Todos los productos']);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>(categories[0]);
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileCategories, setMobileCategories] = useState(false);
  const pageSize = 24;

  const refreshProducts = () => {
    setLoading(true);
    setLoadError(false);
    let active = true;
    loadProducts().then((res) => {
      if (active) {
        setProducts(res.products);
        if (res.categories && res.categories.length > 1) {
          setCategories(res.categories);
        }
        setLoading(false);
      }
    }).catch(() => {
      if (active) {
        setLoadError(true);
        setLoading(false);
      }
    });
    return () => { active = false; };
  };

  useEffect(refreshProducts, []);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLocaleLowerCase('es');
    return products.filter((product) => {
      const matchesCategory = category === categories[0] || product.category === category;
      const matchesSearch = !query || `${product.name} ${product.category} ${product.description}`.toLocaleLowerCase('es').includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [products, search, category]);
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const visibleProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const chooseCategory = (next: string) => {
    setCategory(next);
    setPage(1);
    setMobileCategories(false);
  };
  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((line) => line.id === product.id);
      return existing
        ? current.map((line) => line.id === product.id ? { ...line, quantity: line.quantity + 1 } : line)
        : [...current, { ...product, quantity: 1 }];
    });
  };
  const updateQuantity = (id: string, quantity: number) => {
    setCart((current) => quantity <= 0 ? current.filter((line) => line.id !== id) : current.map((line) => line.id === id ? { ...line, quantity } : line));
  };
  const totalLabel = filteredProducts.length === 1 ? '1 producto' : `${filteredProducts.length} productos`;

  return (
    <div className="noise-overlay min-h-[100dvh] bg-[#F5F3ED] text-[#171A18]">
      <header className="sticky top-0 z-30 border-b border-[#D9DFD2]/80 bg-[#F5F3ED]/95 backdrop-blur-md">
        <div className="store-shell flex h-[70px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[80px] lg:px-10">
          <BrandMark />
          <div className="hidden items-center gap-6 lg:flex">
            <LogisticsNote />
            <span className="h-7 w-px bg-[#D9DFD2]" />
            <span className="flex items-center gap-2 text-[11px] font-medium text-[#68716A]"><ShieldCheck size={15} className="text-[#3E6B4F]" /> Compra segura y simple</span>
          </div>
          <button type="button" onClick={() => setCartOpen(true)} className="relative flex h-11 items-center gap-2 rounded-full border border-[#C8D2C3] bg-[#FBFAF6] px-4 text-sm font-bold text-[#171A18] transition-all hover:border-[#3E6B4F] hover:bg-[#DCE9C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3E6B4F]" aria-label={`Abrir carrito${cartCount ? `, ${cartCount} productos` : ''}`} data-testid="button-open-cart">
            <ShoppingBag size={18} strokeWidth={1.8} />
            <span className="hidden sm:inline">Carrito</span>
            {cartCount > 0 && <span className="flex size-5 items-center justify-center rounded-full bg-[#B7D84B] font-mono-ui text-[10px] font-bold" data-testid="text-cart-count">{cartCount}</span>}
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 border-t border-[#D9DFD2]/70 bg-[#ECF0E6] px-4 py-2.5 lg:hidden">
          <LogisticsNote />
        </div>
      </header>

      <main className="store-shell px-4 pb-16 pt-7 sm:px-6 sm:pt-10 lg:px-10">
        <section className="relative overflow-hidden rounded-[24px] bg-[#3E6B4F] px-5 py-7 text-[#F5F3ED] sm:px-9 sm:py-10 lg:px-12 lg:py-12">
          <div className="absolute right-[-7%] top-[-55%] size-[420px] rounded-full border-[38px] border-[#B7D84B]/15 sm:size-[580px]" />
          <div className="absolute bottom-[-85px] right-[21%] size-[210px] rounded-full border-[22px] border-[#F5F3ED]/10" />
          <div className="relative max-w-[640px]">
            <div className="mb-5 flex items-center gap-2 font-mono-ui text-[10px] font-bold uppercase tracking-[.18em] text-[#DCE9C2]">
              <span className="size-1.5 rounded-full bg-[#B7D84B]" /> Córdoba, Argentina
            </div>
            <h1 className="max-w-[630px] text-[clamp(2.5rem,6vw,5.4rem)] font-bold leading-[.91] tracking-[-.08em]">Lo que buscás.<br /><span className="text-[#B7D84B]">Sin vueltas.</span></h1>
            <p className="mt-6 max-w-[390px] text-sm leading-relaxed text-[#D7E5D0] sm:text-base">Importados elegidos para tu día a día, listos para entregar en Córdoba.</p>
          </div>
          <div className="relative mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
            <span className="rounded-full bg-[#B7D84B] px-4 py-2 font-mono-ui text-[10px] font-bold uppercase tracking-[.1em] text-[#171A18]">Stock real</span>
            <span className="rounded-full border border-[#D7E5D0]/30 px-4 py-2 font-mono-ui text-[10px] font-bold uppercase tracking-[.1em] text-[#D7E5D0]">Entrega inmediata</span>
          </div>
        </section>

        <div className="mt-8 grid gap-9 lg:grid-cols-[236px_1fr] lg:gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-[110px]">
              <div className="flex items-center justify-between">
                <p className="font-mono-ui text-[10px] font-bold uppercase tracking-[.18em] text-[#8A918B]">Explorar</p>
                <span className="font-mono-ui text-[10px] text-[#8A918B]">{products.length.toString().padStart(2, '0')}</span>
              </div>
              <nav className="mt-4 space-y-1" aria-label="Categorías de productos">
                {categories.map((item) => (
                  <button type="button" key={item} onClick={() => chooseCategory(item)} className={`group flex w-full items-center gap-3 rounded-[10px] px-3 py-2.5 text-left text-[12px] font-semibold transition-colors ${category === item ? 'bg-[#3E6B4F] text-[#F5F3ED]' : 'text-[#68716A] hover:bg-[#E7EDDF] hover:text-[#171A18]'}`} aria-pressed={category === item} data-testid={`button-category-${item.toLowerCase().replaceAll(' ', '-')}`}>
                    <span className={`${category === item ? 'text-[#B7D84B]' : 'text-[#8A918B] group-hover:text-[#3E6B4F]'}`}><CategoryIcon category={item} /></span>
                    <span className="leading-tight">{item}</span>
                    {category === item && <Check size={14} className="ml-auto shrink-0 text-[#B7D84B]" />}
                  </button>
                ))}
              </nav>
              <div className="mt-8 rounded-[16px] bg-[#E3EBD8] p-4">
                <CircleHelp size={17} className="text-[#3E6B4F]" />
                <p className="mt-3 text-xs font-bold leading-snug text-[#171A18]">¿No encontrás lo que buscás?</p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-[#68716A]">Escribinos y lo rastreamos por vos.</p>
                <a href="https://wa.me/5493512570174?text=Hola%20Growth%20Store%2C%20estoy%20buscando%20un%20producto." target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#3E6B4F] hover:text-[#171A18]" data-testid="link-help-whatsapp">Consultar <ArrowRight size={12} /></a>
              </div>
            </div>
          </aside>

          <section aria-label="Catálogo de productos">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono-ui text-[10px] font-bold uppercase tracking-[.18em] text-[#8A918B]">Catálogo / <span className="text-[#3E6B4F]">{category}</span></p>
                <div className="mt-2 flex items-baseline gap-3">
                  <h2 className="text-3xl font-bold tracking-[-.065em] text-[#171A18] sm:text-4xl">Elegí fácil.</h2>
                  <span className="font-mono-ui text-[11px] text-[#8A918B]" data-testid="text-product-count">{totalLabel}</span>
                </div>
              </div>
              <div className="flex w-full items-center gap-2 sm:w-auto">
                <div className="relative flex-1 sm:w-[280px] sm:flex-none">
                  <Search size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A918B]" />
                  <input type="search" value={search} onChange={(event) => { setSearch(event.target.value); setPage(1); }} placeholder="Buscar productos..." className="h-11 w-full rounded-full border border-[#C8D2C3] bg-[#FBFAF6] pl-10 pr-10 text-sm text-[#171A18] outline-none transition-all placeholder:text-[#8A918B] focus:border-[#3E6B4F] focus:ring-2 focus:ring-[#DCE9C2]" aria-label="Buscar productos" data-testid="input-search-products" />
                  {search && <button type="button" onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A918B] hover:text-[#171A18]" aria-label="Limpiar búsqueda" data-testid="button-clear-search"><X size={15} /></button>}
                </div>
                <button type="button" onClick={() => setMobileCategories(!mobileCategories)} className="flex h-11 items-center gap-2 rounded-full border border-[#C8D2C3] bg-[#FBFAF6] px-3 text-xs font-bold text-[#3E6B4F] lg:hidden" aria-expanded={mobileCategories} data-testid="button-toggle-categories"><Menu size={16} /><span className="hidden xs:inline">Filtrar</span><ChevronDown size={14} className={`transition-transform ${mobileCategories ? 'rotate-180' : ''}`} /></button>
              </div>
            </div>

            {mobileCategories && (
              <div className="mt-4 rounded-[16px] border border-[#D9DFD2] bg-[#FBFAF6] p-2 lg:hidden animate-rise-in" data-testid="menu-mobile-categories">
                {categories.map((item) => <button type="button" key={item} onClick={() => chooseCategory(item)} className={`flex w-full items-center gap-2 rounded-[9px] px-3 py-2.5 text-left text-xs font-semibold ${category === item ? 'bg-[#DCE9C2] text-[#3E6B4F]' : 'text-[#68716A]'}`} data-testid={`button-mobile-category-${item.toLowerCase().replaceAll(' ', '-')}`}><CategoryIcon category={item} />{item}</button>)}
              </div>
            )}

            {loading ? (
              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2" data-testid="state-loading-products">
                {[1, 2, 3, 4].map((item) => <div key={item} className="h-[370px] animate-pulse rounded-[20px] border border-[#D9DFD2] bg-[#E7EBDE]" />)}
              </div>
            ) : loadError ? (
              <div className="mt-7 flex min-h-[320px] flex-col items-center justify-center rounded-[20px] border border-dashed border-[#D8B8A9] bg-[#F3E8DF] px-5 text-center" data-testid="state-error-products">
                <CircleHelp size={25} className="text-[#B4453E]" />
                <h3 className="mt-4 text-lg font-bold tracking-[-.04em]">No pudimos cargar el catálogo</h3>
                <p className="mt-2 text-sm text-[#68716A]">Revisá tu conexión e intentá de nuevo.</p>
                <button type="button" onClick={refreshProducts} className="mt-5 rounded-full bg-[#171A18] px-5 py-2.5 text-xs font-bold text-[#F5F3ED] hover:bg-[#3E6B4F]" data-testid="button-retry-products">Intentar de nuevo</button>
              </div>
            ) : visibleProducts.length > 0 ? (
              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={addToCart} />)}
              </div>
            ) : (
              <div className="mt-7 flex min-h-[320px] flex-col items-center justify-center rounded-[20px] border border-dashed border-[#B9C6B6] bg-[#ECF0E6] px-5 text-center" data-testid="state-empty-products">
                <Search size={25} className="text-[#3E6B4F]" />
                <h3 className="mt-4 text-lg font-bold tracking-[-.04em]">No encontramos productos</h3>
                <p className="mt-2 text-sm text-[#68716A]">Probá con otra búsqueda o elegí otra categoría.</p>
                <button type="button" onClick={() => { setSearch(''); chooseCategory(categories[0]); }} className="mt-5 rounded-full bg-[#171A18] px-5 py-2.5 text-xs font-bold text-[#F5F3ED] hover:bg-[#3E6B4F]" data-testid="button-clear-filters">Limpiar filtros</button>
              </div>
            )}

            {!loading && filteredProducts.length > 0 && (
              <div className="mt-8 flex items-center justify-between border-t border-[#D9DFD2] pt-5">
                <p className="font-mono-ui text-[10px] text-[#8A918B]">Página <span className="font-bold text-[#171A18]">{page}</span> de {pageCount}</p>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} className="flex size-9 items-center justify-center rounded-full border border-[#C8D2C3] text-[#3E6B4F] transition-colors hover:bg-[#DCE9C2] disabled:cursor-not-allowed disabled:opacity-35" aria-label="Página anterior" data-testid="button-pagination-previous"><ChevronLeft size={17} /></button>
                  <span className="flex size-9 items-center justify-center rounded-full bg-[#171A18] font-mono-ui text-[11px] font-bold text-[#B7D84B]" data-testid="text-pagination-current">{page}</span>
                  <button type="button" onClick={() => setPage((current) => Math.min(pageCount, current + 1))} disabled={page === pageCount} className="flex size-9 items-center justify-center rounded-full border border-[#C8D2C3] text-[#3E6B4F] transition-colors hover:bg-[#DCE9C2] disabled:cursor-not-allowed disabled:opacity-35" aria-label="Página siguiente" data-testid="button-pagination-next"><ChevronRight size={17} /></button>
                </div>
              </div>
            )}
          </section>
        </div>

        <section className="mt-14 grid gap-3 border-t border-[#D9DFD2] pt-6 sm:grid-cols-3">
          {[
            { icon: PackageCheck, title: 'Entrega inmediata', text: 'Coordinamos tu envío a domicilio en Córdoba.' },
            { icon: ShieldCheck, title: 'Compra sin vueltas', text: 'Te confirmamos disponibilidad antes de cobrar.' },
            { icon: MessageCircle, title: 'Atención humana', text: 'Respondemos tus consultas por WhatsApp.' },
          ].map(({ icon: Icon, title, text }) => (
            <div className="flex gap-3 rounded-[14px] p-3 transition-colors hover:bg-[#ECF0E6]" key={title}>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#DCE9C2] text-[#3E6B4F]"><Icon size={17} /></span>
              <div><h3 className="text-xs font-bold text-[#171A18]">{title}</h3><p className="mt-1 text-[11px] leading-relaxed text-[#8A918B]">{text}</p></div>
            </div>
          ))}
        </section>
      </main>
      <footer className="border-t border-[#D9DFD2] px-4 py-6 sm:px-6 lg:px-10">
        <div className="store-shell flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <BrandMark compact />
          <p className="font-mono-ui text-[9px] uppercase tracking-[.13em] text-[#8A918B]">Importados para todos los días · Córdoba</p>
        </div>
      </footer>
      {cartOpen && <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onUpdate={updateQuantity} onRemove={(id) => updateQuantity(id, 0)} />}
    </div>
  );
}

function Router() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
