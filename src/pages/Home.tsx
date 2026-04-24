import { useState } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import LookCard from '../components/LookCard';
import { LOOKS } from '../data/mock';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLooks = LOOKS.filter(look => 
    look.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    look.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    look.style.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Impactful Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-ink mb-4">
          Sublimez <span className="italic text-accent">l'élégance</span> de vos balades
        </h1>
        <p className="text-lg md:text-xl text-ink/60 max-w-2xl mx-auto">
          Le premier lookbook dédié au style coordonné pour vous et votre compagnon à quatre pattes.
        </p>
      </motion.div>

      {/* Search Bar */}
      <div className="flex items-center space-x-4 mb-12">
        <div className="flex-grow bg-black/5 hover:bg-black/10 focus-within:bg-white focus-within:ring-2 focus-within:ring-accent/20 transition-all rounded-full px-6 py-4 flex items-center space-x-3">
          <Search className="w-5 h-5 text-ink/30" />
          <input 
            type="text"
            placeholder="Rechercher des inspirations (chic, décontracté, hiver...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow bg-transparent border-none outline-none text-ink placeholder:text-ink/30 font-medium"
          />
        </div>
      </div>

      {/* Masonry Feed */}
      {filteredLooks.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6">
          {filteredLooks.map((look) => (
            <LookCard key={look.id} look={look} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-ink/40 text-lg">Aucun résultat trouvé pour "{searchQuery}"</p>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-4 text-accent font-medium hover:underline"
          >
            Effacer la recherche
          </button>
        </div>
      )}
    </div>
  );
}
