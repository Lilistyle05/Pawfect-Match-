import { Product } from '../types';
import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-square overflow-hidden rounded-lg bg-beige mb-3">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-ink/50 font-medium">
          {product.brand}
        </p>
        <h4 className="text-sm font-medium text-ink truncate">{product.name}</h4>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-serif font-bold">{product.price}€</span>
          <a
            href={product.buyUrl}
            className="p-1.5 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
            aria-label="Acheter"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
