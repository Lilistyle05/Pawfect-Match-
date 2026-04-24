import { Look } from '../types';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface LookCardProps {
  look: Look;
  compact?: boolean;
  key?: string | number;
}

export default function LookCard({ look }: LookCardProps) {
  const pinterestUrl = look.pinterestUrl || `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(look.title + ' dog owner matching outfit style')}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="break-inside-avoid mb-6 flex flex-col group"
    >
      <div className="relative overflow-hidden rounded-[24px] cursor-pointer">
        <img
          src={look.imageUrl}
          alt={look.title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex flex-col justify-between p-4">
          <div className="flex justify-end">
            <button className="bg-accent text-white px-5 py-2.5 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
              Enregistrer
            </button>
          </div>
          
          <div className="flex justify-start">
            <a 
              href={pinterestUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 hover:bg-white text-ink px-3 py-2 rounded-full text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1.5 shadow-md transform translate-y-2 group-hover:translate-y-0"
            >
              <ExternalLink className="w-3 h-3" />
              Pinterest
            </a>
          </div>
        </div>
      </div>

      <div className="mt-3 px-1">
        <h3 className="text-sm font-bold text-ink truncate">{look.title}</h3>
        <p className="text-[11px] text-ink/50 line-clamp-1">{look.description}</p>
      </div>
    </motion.div>
  );
}
