import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=2000"
          alt="Hero Fashion Dog"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-white text-sm font-medium uppercase tracking-[0.3em] mb-4">
              L'élégance à quatre pattes
            </span>
            <h1 className="text-white text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
              Match ton style. <br />
              <span className="italic">Sublime</span> ton chien.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/my-outfit"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white text-sm font-medium uppercase tracking-widest hover:bg-accent/90 transition-all rounded-full group"
              >
                Trouver mon match
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/category/small"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium uppercase tracking-widest hover:bg-white/20 transition-all rounded-full"
              >
                Explorer les looks
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto" />
      </motion.div>
    </section>
  );
}
