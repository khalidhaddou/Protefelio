import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import Photo from '../asset/image/profile/myPhoto.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Créer un lien de téléchargement pour le CV
    const link = document.createElement('a');
    link.href = '/cv-developpeur-fullstack.pdf'; // Le fichier sera placé dans le dossier public
    link.download = 'CV-Developpeur-FullStack.pdf';
    link.click();
  };
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Développeur
              <span className="block text-blue-600">Full Stack</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Passionné par la création d’expériences web modernes et performantes,
             j’allie expertise technique et sens du détail
              pour transformer vos idées en solutions digitales efficaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('projets')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Voir mes projets
              </button>
              <button 
                onClick={downloadCV}
                className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 font-medium flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Télécharger CV
              </button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full opacity-20 absolute -top-4 -left-4"></div>
              <img
                src={Photo}
                alt="Profil développeur"
                className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('competences')}
            className="text-slate-400 hover:text-slate-600 transition-colors duration-200 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;