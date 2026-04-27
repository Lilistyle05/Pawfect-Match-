import { Accessory } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ShoppingCart, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

interface AccessoryModalProps {
  accessory: Accessory | null;
  onClose: () => void;
}

export default function AccessoryModal({ accessory, onClose }: AccessoryModalProps) {
  if (!accessory) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-[32px] overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button Mobile */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full md:hidden shadow-lg"
          >
            <X className="w-6 h-6 text-ink" />
          </button>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img 
              src={accessory.imageUrl} 
              alt={accessory.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 hidden md:block">
               <span className="bg-white/90 text-ink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                {accessory.category}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
            <div className="flex justify-between items-start mb-6 hidden md:flex">
              <div className="space-y-1">
                <p className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase">{accessory.brand}</p>
                <h2 className="text-3xl font-serif font-bold italic text-ink">{accessory.name}</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-ink" />
              </button>
            </div>

            {/* Mobile Header (Content section) */}
            <div className="md:hidden space-y-1 mb-6">
                <p className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase">{accessory.brand}</p>
                <h2 className="text-2xl font-serif font-bold italic text-ink">{accessory.name}</h2>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className={`text-3xl font-medium ${accessory.originalPrice ? 'text-red-500' : 'text-ink'}`}>
                {accessory.price}€
              </span>
              {accessory.originalPrice && (
                <>
                  <span className="text-xl text-ink/30 line-through">
                    {accessory.originalPrice}€
                  </span>
                  <span className="bg-red-500/10 text-red-500 px-3 py-1 rounded-lg text-xs font-bold uppercase">
                    -{Math.round((1 - accessory.price / accessory.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            <div className="space-y-6 mb-10">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-ink/40 mb-3">Description</h4>
                <p className="text-ink/70 leading-relaxed text-sm">
                  {accessory.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 py-6 border-y border-black/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-xl">
                    <Truck className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-[13px] font-medium text-ink/80">Livraison offerte dès 50€</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-xl">
                    <RefreshCcw className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-[13px] font-medium text-ink/80">Retours gratuits sous 30 jours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-[13px] font-medium text-ink/80">Garantie satisfaction Pawfect</span>
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <button className="w-full py-4 bg-ink text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-ink/90 transition-all active:scale-[0.98]">
                <ShoppingCart className="w-5 h-5" />
                Ajouter au panier
              </button>
              <a 
                href={accessory.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 border-2 border-black/5 hover:border-black/10 text-ink rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Voir sur le site officiel
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
