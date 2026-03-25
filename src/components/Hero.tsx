import { Download, ArrowDown } from 'lucide-react';
import { downloadCV } from '../utils/cvGenerator';

export default function Hero() {
  const handleDownloadCV = () => {
    downloadCV();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <div className="mb-8 inline-block">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 mx-auto shadow-2xl overflow-hidden border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Mohammed Djoumi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
            Mohammed Djoumi
          </h1>

          <div className="inline-block px-6 py-2 bg-slate-800 text-white rounded-full text-lg mb-6">
            Student in Experimental Sciences
          </div>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Motivated and disciplined student with a strong academic background in experimental sciences.
            Developed solid skills in mathematics, physics, and scientific analysis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
            <button
              onClick={handleDownloadCV}
              className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105"
            >
              <Download className="inline-block w-5 h-5 mr-2" />
              Download CV
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
