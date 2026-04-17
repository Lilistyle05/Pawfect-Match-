import Hero from '../components/Hero';
import LookCard from '../components/LookCard';
import { LOOKS } from '../data/mock';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />

      {/* Inspiration Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="max-w-xl">
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Inspiration</span>
            <h2 className="text-4xl md:text-5xl font-serif">Les looks du moment</h2>
            <p className="mt-4 text-ink/60 text-lg">
              Découvrez notre sélection de looks assortis pour vous et votre compagnon.
            </p>
          </div>
          <Link to="/category/small" className="flex items-center space-x-2 text-sm font-medium uppercase tracking-widest group">
            <span>Tout explorer</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {LOOKS.map((look) => (
            <LookCard key={look.id} look={look} />
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Nos Marques Partenaires</h2>
          <p className="text-ink/60 uppercase tracking-widest text-[10px] font-bold">Une sélection experte pour votre style</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {['Maxbone', 'Spark Paws', 'Milk & Pepper', 'Cloud7', 'Hunter', 'Barbour', 'Ralph Lauren'].map((brand) => (
            <span key={brand} className="text-xl font-serif font-bold tracking-tighter">{brand}</span>
          ))}
        </div>
      </section>

      {/* Trends / Selection du moment */}
      <section className="bg-pink-pale/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Sélection Saisonnière</h2>
            <p className="text-ink/60 uppercase tracking-widest text-xs font-bold">Printemps 2026</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="aspect-[3/4] overflow-hidden rounded-2xl relative group cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1583511655857-d19b40a7a54e' : i === 2 ? '1537151608828-ea2b11777ee8' : i === 3 ? '1541364983171-a8ba01d95cfc' : '1583337130417-3346a1be7dee'}?auto=format&fit=crop&q=80&w=600`}
                  alt={`Trend ${i}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white p-16 rounded-[3rem] shadow-sm border border-black/5">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Prêt à trouver le match <br />
            <span className="italic text-accent">parfait</span> ?
          </h2>
          <Link
            to="/my-outfit"
            className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white text-sm font-medium uppercase tracking-widest hover:bg-accent/90 transition-all rounded-full shadow-lg shadow-accent/20"
          >
            Analyser ma tenue
          </Link>
        </div>
      </section>
    </div>
  );
}
