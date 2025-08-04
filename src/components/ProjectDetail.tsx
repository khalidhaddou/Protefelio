import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Database, Smartphone, ChevronLeft, ChevronRight, Target, Zap, Award, CheckCircle } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    context: string;
    objectives: string[];
    image: string;
    screenshots: string[];
    technologies: string[];
    features: string[];
    challenges: string[];
    results: string[];
    liveUrl: string;
    githubUrl: string;
    date: string;
    duration: string;
    team: string;
  };
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header avec bouton retour */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6 font-medium group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Retour aux projets
          </button>
          
          {/* En-tête du projet */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">{project.title}</h1>
                <p className="text-xl text-slate-600 mb-6 leading-relaxed">{project.fullDescription}</p>
                
                {/* Contexte du projet */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Contexte du projet</h3>
                  <p className="text-blue-800">{project.context}</p>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-4 py-2 rounded-lg">
                    <Calendar size={16} />
                    <span className="font-medium">{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-4 py-2 rounded-lg">
                    <Users size={16} />
                    <span className="font-medium">{project.team}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-4 py-2 rounded-lg">
                    <Code size={16} />
                    <span className="font-medium">{project.duration}</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={16} />
                    Voir la démo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 font-medium"
                  >
                    <Github size={16} />
                    Code source
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                  Projet principal
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Objectifs du projet */}
        <div className="mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Target className="text-emerald-600" size={32} />
              Objectifs du projet
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                  <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{objective}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Galerie de captures d'écran */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Smartphone className="text-purple-600" size={32} />
            Captures d'écran du projet
          </h2>
          
          {/* Image principale avec navigation */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <div className="relative">
              <img
                src={project.screenshots[currentImageIndex]}
                alt={`Screenshot ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
              
              {/* Boutons de navigation */}
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              
              {/* Indicateur de position */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white">
                {currentImageIndex + 1} / {project.screenshots.length}
              </div>
            </div>
          </div>
          
          {/* Miniatures */}
          {project.screenshots.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'ring-4 ring-blue-500 shadow-lg scale-105' 
                      : 'hover:shadow-md hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={screenshot}
                    alt={`Miniature ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Détails techniques du projet */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Technologies et fonctionnalités */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <Code className="text-blue-600" size={24} />
                Technologies utilisées
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium hover:from-blue-200 hover:to-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <Database className="text-emerald-600" size={24} />
                Fonctionnalités principales
              </h3>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-200">
                    <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Défis et résultats */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <Zap className="text-orange-600" size={24} />
                Défis techniques relevés
              </h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200">
                    <Zap className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <Award className="text-purple-600" size={24} />
                Résultats obtenus
              </h3>
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                    <Award className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section d'appel à l'action */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-8 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Intéressé par ce projet ?</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Découvrez d'autres réalisations similaires ou contactez-moi pour discuter de vos besoins en développement web
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBack}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Voir d'autres projets
            </button>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  onBack(); // Retour à la page principale pour voir la section contact
                }
              }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200"
            >
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;