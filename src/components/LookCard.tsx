import { Look } from '../types';
import ProductCard from './ProductCard';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface LookCardProps {
  look: Look;
  compact?: boolean;
  key?: string | number;
}

export default function LookCard({ look, compact = false }: LookCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col space-y-6"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group">
        <img
          src={look.imageUrl}
          alt={look.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <h3 className="text-white text-3xl font-serif mb-2">{look.title}</h3>
          <p className="text-white/80 text-sm mb-4 max-w-xs">{look.description}</p>
          <button className="flex items-center space-x-2 text-white text-sm font-medium uppercase tracking-widest group/btn">
            <span>Voir le look</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {!compact && (
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-serif">{look.title}</h3>
            <span className="text-[10px] uppercase tracking-widest bg-pink-pale px-2 py-1 rounded-full">
              {look.style}
            </span>
          </div>
        )}
        <div className="grid grid-cols-3 gap-3">
          {look.products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
