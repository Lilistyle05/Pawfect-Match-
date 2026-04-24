import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white p-3 rounded-xl shadow-sm border border-black/5">
      <div className="aspect-square overflow-hidden rounded-lg bg-beige mb-3">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-ink/50 font-medium">
          {product.brand}
        </p>
        <h4 className="text-sm font-medium text-ink truncate italic">{product.name}</h4>
      </div>
    </div>
  );
}
