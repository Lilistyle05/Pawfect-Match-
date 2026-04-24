import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Loader2 } from 'lucide-react';
import { ACCESSORIES } from '../data/mock';
import AccessoryCard from '../components/AccessoryCard';
import AccessoryModal from '../components/AccessoryModal';
import { Accessory } from '../types';

export default function Accessories() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedAccessory, setSelectedAccessory] = useState<Accessory | null>(null);

  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 400);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [searchQuery]);

  const filteredAccessories = ACCESSORIES.filter(acc => 
    acc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    acc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    acc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    acc.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AccessoryModal 
        accessory={selectedAccessory} 
        onClose={() => setSelectedAccessory(null)} 
      />
      {/* Impactful Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-ink mb-4">
          Les essentiels de <span className="italic text-accent">l'accessoire</span>
        </h1>
        <p className="text-lg md:text-xl text-ink/60 max-w-2xl mx-auto">
          Complétez votre look avec notre sélection de laisses, lits, jouets et plus encore.
        </p>
      </motion.div>

      {/* Search Bar */}
      <div className="flex items-center space-x-4 mb-12 relative">
        <div className="flex-grow bg-black/5 hover:bg-black/10 focus-within:bg-white focus-within:ring-2 focus-within:ring-accent/20 transition-all rounded-full px-6 py-4 flex items-center space-x-3">
          <Search className="w-5 h-5 text-ink/30" />
          <input 
            type="text"
            placeholder="Rechercher des accessoires (laisse, panier, jouet...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow bg-transparent border-none outline-none text-ink placeholder:text-ink/30 font-medium"
          />
          {isSearching && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loader2 className="w-5 h-5 text-accent animate-spin" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Grid Container */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {isSearching ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6"
            >
              {[...Array(10)].map((_, i) => (
                <div key={i} className="break-inside-avoid mb-6 rounded-[24px] bg-black/5 animate-pulse aspect-[4/5]" />
              ))}
            </motion.div>
          ) : filteredAccessories.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6"
            >
              {filteredAccessories.map((accessory) => (
                <AccessoryCard 
                  key={accessory.id} 
                  accessory={accessory} 
                  onDetails={setSelectedAccessory}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-ink/40 text-lg">Aucun accessoire trouvé pour "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-accent font-medium hover:underline"
              >
                Effacer la recherche
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
