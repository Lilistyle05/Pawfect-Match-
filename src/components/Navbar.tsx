import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
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
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-bold transition-colors ${location.pathname === '/' ? 'text-accent underline underline-offset-8' : 'text-ink/60 hover:text-ink'}`}
            >
              Inspirations
            </Link>
            <Link 
              to="/accessories" 
              className={`text-sm font-bold transition-colors ${location.pathname === '/accessories' ? 'text-accent underline underline-offset-8' : 'text-ink/60 hover:text-ink'}`}
            >
              Accessoires
            </Link>
          </div>

          <div className="w-[140px] flex justify-end">
            <button className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-black/80 transition-colors">
              Connexion
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
