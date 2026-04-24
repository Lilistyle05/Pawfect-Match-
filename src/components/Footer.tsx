export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-3">
            <span className="text-2xl font-serif font-bold tracking-tighter text-ink">
              Pawfect <span className="text-accent italic">Match</span>
            </span>
            <p className="mt-4 text-ink/60 max-w-md text-sm leading-relaxed">
              La première plateforme de mode dédiée à l'harmonie stylistique entre vous et votre compagnon à quatre pattes.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-ink/60">
              <li>hello@pawfectmatch.com</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-ink/40">
          <p>© 2026 Pawfect Match. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
