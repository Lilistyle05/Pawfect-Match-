import { useParams } from 'react-router-dom';
import { LOOKS } from '../data/mock';
import LookCard from '../components/LookCard';
import { useState } from 'react';
import { DogSize, Style, Weather } from '../types';
import { Filter, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Category() {
  const { size } = useParams<{ size: string }>();
  const [styleFilter, setStyleFilter] = useState<Style | 'all'>('all');
  const [weatherFilter, setWeatherFilter] = useState<Weather | 'all'>('all');

  const filteredLooks = LOOKS.filter((look) => {
    const sizeMatch = look.size === size;
    const styleMatch = styleFilter === 'all' || look.style === styleFilter;
    const weatherMatch = weatherFilter === 'all' || look.weather === weatherFilter;
    return sizeMatch && styleMatch && weatherMatch;
  });

  const sizeTitle = size === 'small' ? 'Petits chiens' : size === 'medium' ? 'Chiens moyens' : 'Grands chiens';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">{sizeTitle}</h1>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-ink/40">
            <Filter className="w-4 h-4" />
            <span>Filtrer par :</span>
          </div>
          
          <div className="relative group">
            <select
              value={styleFilter}
              onChange={(e) => setStyleFilter(e.target.value as any)}
              className="appearance-none bg-white border border-black/5 px-6 py-3 pr-12 rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer hover:border-accent transition-colors outline-none"
            >
              <option value="all">Tous les styles</option>
              <option value="casual">Casual</option>
              <option value="chic">Chic</option>
              <option value="streetwear">Streetwear</option>
              <option value="elegant">Élégant</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40 pointer-events-none" />
          </div>

          <div className="relative group">
            <select
              value={weatherFilter}
              onChange={(e) => setWeatherFilter(e.target.value as any)}
              className="appearance-none bg-white border border-black/5 px-6 py-3 pr-12 rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer hover:border-accent transition-colors outline-none"
            >
              <option value="all">Toutes météos</option>
              <option value="rain">Pluie</option>
              <option value="winter">Hiver</option>
              <option value="mid-season">Mi-saison</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40 pointer-events-none" />
          </div>
        </div>
      </div>

      {filteredLooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {filteredLooks.map((look) => (
            <LookCard key={look.id} look={look} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-ink/40 font-serif text-2xl italic">Aucun look ne correspond à vos critères pour le moment.</p>
        </div>
      )}
    </div>
  );
}
