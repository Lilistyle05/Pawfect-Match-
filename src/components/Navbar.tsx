import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Petits chiens', href: '/category/small' },
  { name: 'Chiens moyens', href: '/category/medium' },
  { name: 'Grands chiens', href: '/category/large' },
  { name: 'Ma tenue', href: '/my-outfit' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold tracking-tighter text-ink">
              Pawfect <span className="text-accent italic">Match</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent",
                  location.pathname === link.href ? "text-accent" : "text-ink/70"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-beige border-t border-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-lg font-serif py-2 transition-colors",
                    location.pathname === link.href ? "text-accent" : "text-ink"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
