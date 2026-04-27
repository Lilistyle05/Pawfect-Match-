import { Accessory } from '../types';
import { motion } from 'motion/react';
import { ExternalLink, ShoppingCart } from 'lucide-react';

interface AccessoryCardProps {
  accessory: Accessory;
  key?: string | number;
  onDetails: (accessory: Accessory) => void;
}

export default function AccessoryCard({ accessory, onDetails }: AccessoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="break-inside-avoid mb-6 flex flex-col group cursor-pointer"
      onClick={() => onDetails(accessory)}
    >
      <div className="relative overflow-hidden rounded-[24px]">
        <img
          src={accessory.imageUrl}
          alt={accessory.name}
          className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {accessory.originalPrice && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
              Promotion
            </span>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex flex-col justify-between p-4">
          <div className="flex justify-between items-start">
            <span className="bg-white/90 text-ink px-3 py-1 rounded-full text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all uppercase tracking-wider">
              {accessory.category}
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="bg-accent text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 shadow-lg"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex justify-center">
            <button 
              className="bg-white text-ink px-4 py-2.5 rounded-full text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0"
            >
              Voir les détails
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 px-2">
        <div className="flex justify-between items-baseline mb-1">
          <h3 className="text-sm font-serif font-bold text-ink italic">{accessory.name}</h3>
          <div className="flex items-center gap-2">
            {accessory.originalPrice && (
              <span className="text-[10px] text-ink/30 line-through">{accessory.originalPrice}€</span>
            )}
            <span className={`text-xs font-medium ${accessory.originalPrice ? 'text-red-500 font-bold' : 'text-ink/70'}`}>
              {accessory.price}€
            </span>
          </div>
        </div>
        <p className="text-[11px] text-ink/50 line-clamp-1">{accessory.description}</p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mt-2">{accessory.brand}</p>
      </div>
    </motion.div>
  );
}
