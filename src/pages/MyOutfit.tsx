import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';
import { LOOKS } from '../data/mock';
import LookCard from '../components/LookCard';
import { cn } from '../lib/utils';

export default function MyOutfit() {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  } as any);

  const analyzeOutfit = async () => {
    if (!image) return;
    setIsAnalyzing(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const model = 'gemini-3-flash-preview';
      
      const base64Data = image.split(',')[1];
      
      const response = await ai.models.generateContent({
        model,
        contents: [
          {
            parts: [
              { text: "Analyse cette tenue vestimentaire et détermine le style dominant (casual, chic, streetwear, ou elegant). Réponds uniquement avec le mot-clé du style en minuscule." },
              { inlineData: { data: base64Data, mimeType: 'image/jpeg' } }
            ]
          }
        ]
      });

      const style = response.text?.trim().toLowerCase() || 'casual';
      
      // Simulate processing time for UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Find matching looks from our mock data
      const matches = LOOKS.filter(l => l.style === style);
      const match = matches.length > 0 
        ? matches[Math.floor(Math.random() * matches.length)] 
        : LOOKS[0];
      
      setResult({ style, match });
    } catch (error) {
      console.error('Analysis error:', error);
      // Fallback to a random match if AI fails
      setResult({ style: 'chic', match: LOOKS[0] });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Ma Tenue</h1>
        <p className="text-ink/60 text-lg">
          Téléchargez une photo de votre tenue et notre IA trouvera le manteau parfaitement assorti pour votre chien.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Upload Section */}
        <div className="space-y-8">
          <div
            {...getRootProps()}
            className={cn(
              "relative aspect-square rounded-[2rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-12 cursor-pointer overflow-hidden",
              isDragActive ? "border-accent bg-accent/5" : "border-black/10 hover:border-accent/50 bg-white",
              image ? "border-none" : ""
            )}
          >
            <input {...getInputProps()} />
            {image ? (
              <>
                <img src={image} alt="Votre tenue" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-sm font-bold uppercase tracking-widest">Changer de photo</p>
                </div>
              </>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mx-auto">
                  <Upload className="w-6 h-6 text-ink/40" />
                </div>
                <div>
                  <p className="text-lg font-serif">Glissez votre photo ici</p>
                  <p className="text-sm text-ink/40">ou cliquez pour parcourir</p>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={analyzeOutfit}
            disabled={!image || isAnalyzing}
            className={cn(
              "w-full py-5 rounded-full text-sm font-medium uppercase tracking-widest transition-all flex items-center justify-center space-x-3",
              !image || isAnalyzing 
                ? "bg-black/5 text-ink/20 cursor-not-allowed" 
                : "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20"
            )}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Analyse en cours...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Trouver mon match</span>
              </>
            )}
          </button>
        </div>

        {/* Results Section */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {isAnalyzing ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center space-y-6 text-center"
              >
                <div className="relative">
                  <div className="w-24 h-24 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
                  <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-accent animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-2">Analyse stylistique...</h3>
                  <p className="text-ink/40 text-sm uppercase tracking-widest">Notre IA définit votre look</p>
                </div>
              </motion.div>
            ) : result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-3xl border border-black/5">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Résultat de l'analyse</span>
                  <h3 className="text-3xl font-serif mb-4">
                    Votre style est <span className="italic text-accent">{result.style}</span>
                  </h3>
                  <p className="text-ink/60 leading-relaxed">
                    Basé sur votre tenue, nous avons sélectionné le look parfait pour votre compagnon afin de créer une harmonie visuelle élégante.
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-ink/40">Notre recommandation</h4>
                  <LookCard look={result.match} compact />
                </div>
                
                <button className="w-full py-5 bg-ink text-white rounded-full text-sm font-medium uppercase tracking-widest hover:bg-ink/90 transition-all flex items-center justify-center space-x-2 group">
                  <span>Shopper ce look</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed border-black/5 rounded-[2rem]"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Sparkles className="w-6 h-6 text-ink/20" />
                </div>
                <p className="text-ink/40 font-serif text-xl italic">
                  Téléchargez une photo pour <br /> voir la magie opérer.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
