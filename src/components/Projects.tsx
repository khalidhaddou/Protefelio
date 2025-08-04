import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import image1 from '../asset/image/1/1.png'
import image2 from '../asset/image/1/2.png'
import image3 from '../asset/image/1/3.png'
import image4 from '../asset/image/1/4.png'
import image5 from '../asset/image/1/5.png'
import image6 from '../asset/image/1/6.png'
import img_ecommerce_web1 from '../asset/image/2/1.png'
import img_ecommerce_web2 from '../asset/image/2/2.png'
import img_ecommerce_web3 from '../asset/image/2/3.png'
import img_ecommerce_web4 from '../asset/image/2/4.png'
import img_ecommerce_web5 from '../asset/image/2/5.png'
import img_ecommerce_web6 from '../asset/image/2/6.png'
import img_ecommerce_web7 from '../asset/image/2/7.png'
import img_ecommerce_web8 from '../asset/image/2/8.png'
import img_ecommerce_web9 from '../asset/image/2/9.png'
import img_ecommerce_web10 from '../asset/image/2/10.png'
interface ProjectsProps {
  onProjectSelect?: (projectId: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const projects = [
    {
      id: 'ecommerce-animals',
      title: 'Site e-commerce pour produits animaliers',
      description: 'Développement complet d\'un site e-commerce pour animaux de compagnie avec interface moderne et backend robuste.',
      fullDescription: 'Plateforme e-commerce complète dédiée aux produits pour animaux de compagnie, développée avec React.js pour le frontend et Spring Boot pour le backend. Le projet inclut un système de gestion des produits, panier d\'achat, processus de commande et interface d\'administration.',
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&=600',
      screenshots: [
       image1, image2,image3,image4,image5,image6,
      ],
      technologies: ['React.js', 'Spring Boot', 'Java', 'REST API', 'MySQL', 'Bootstrap'],
      features: [
        'Catalogue de produits avec filtres avancés',
        'Système de panier et processus de commande',
        'Gestion des utilisateurs et authentification',
        'Interface d\'administration complète',
        'Système de paiement sécurisé',
        'Gestion des stocks en temps réel'
      ],
      challenges: [
        'Intégration React.js avec Spring Boot',
        'Optimisation des performances pour le catalogue',
        'Sécurisation des transactions',
        'Gestion des sessions utilisateurs'
      ],
      results: [
        'Interface utilisateur intuitive et responsive',
        'Performance optimisée avec temps de chargement < 2s',
        'Architecture scalable et maintenable',
        'Tests unitaires couvrant 85% du code'
      ],
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      duration: '3 mois',
      team: 'Projet individuel'
    },
    {
      id: 'ecommerce-web',
      title: 'Application web e-commerce',
      description: 'Site e-commerce complet avec interface d\'administration pour la gestion des produits, commandes et utilisateurs.',
      fullDescription: 'Application e-commerce full-stack développée avec Laravel pour le backend et React.js pour le frontend. Comprend un système complet de gestion des produits, commandes, utilisateurs avec une interface d\'administration avancée.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      screenshots: [
     img_ecommerce_web1,img_ecommerce_web2,img_ecommerce_web3,img_ecommerce_web4,img_ecommerce_web5,img_ecommerce_web6,img_ecommerce_web7,img_ecommerce_web8,img_ecommerce_web9,img_ecommerce_web10
      ],
      technologies: ['Laravel', 'React.js', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      features: [
        'Dashboard administrateur complet',
        'Gestion avancée des produits et catégories',
        'Système de commandes et facturation',
        'Gestion des clients et historique',
        'Rapports et statistiques de vente',
        'Système de notifications en temps réel'
      ],
      challenges: [
        'Architecture MVC avec Laravel',
        'Intégration API REST avec React',
        'Optimisation des requêtes base de données',
        'Gestion des droits utilisateurs'
      ],
      results: [
        'Interface d\'administration intuitive',
        'Système de gestion complet et efficace',
        'Performance optimisée pour grandes données',
        'Sécurité renforcée avec authentification JWT'
      ],
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      duration: '4 mois',
      team: 'Projet individuel'
    },
    {
      id: 'dashboard-analytics',
      title: 'Mini-dashboard d\'analyse des paniers d\'achat',
      description: 'Tableau de bord interactif pour visualiser et analyser les comportements d\'achat avec des graphiques dynamiques.',
      fullDescription: 'Dashboard analytique développé avec Node.js et Vue.js pour analyser les comportements d\'achat des utilisateurs. Intègre des graphiques interactifs, des métriques en temps réel et des rapports détaillés sur les performances des ventes.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      screenshots: [
       image1, image2,image3,image4,image5,image6,
      ],
      technologies: ['Node.js', 'Vue.js', 'Postman', 'Chart.js', 'Express.js', 'MongoDB'],
      features: [
        'Visualisation des données de vente en temps réel',
        'Graphiques interactifs avec Chart.js',
        'Analyse des tendances d\'achat',
        'Rapports personnalisables',
        'Filtres avancés par période et catégorie',
        'Export des données en PDF/Excel'
      ],
      challenges: [
        'Traitement de grandes volumes de données',
        'Optimisation des requêtes MongoDB',
        'Mise à jour en temps réel des graphiques',
        'Interface responsive pour tous les écrans'
      ],
      results: [
        'Dashboard interactif et intuitif',
        'Amélioration de 40% dans l\'analyse des ventes',
        'Temps de chargement optimisé < 1.5s',
        'Interface adaptée mobile et desktop'
      ],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      duration: '2 mois',
      team: 'Projet individuel'
    },
    {
      id: 'academic-management',
      title: 'Solution de gestion du parcours académique',
      description: 'Plateforme de suivi académique pour étudiants en ingénierie avec gestion des notes, planning et progression.',
      fullDescription: 'Système complet de gestion académique développé avec Laravel 9 pour les étudiants en ingénierie. La plateforme permet le suivi des notes, la gestion des emplois du temps, l\'inscription aux modules et le suivi de la progression académique.',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600',
      screenshots: [
      image1, image2,image3,image4,image5,image6,
      ],
      technologies: ['Laravel 9', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'MySQL'],
      features: [
        'Gestion des notes et évaluations',
        'Planning des cours et examens',
        'Inscription aux modules',
        'Suivi de progression académique',
        'Génération de relevés de notes',
        'Notifications automatiques'
      ],
      challenges: [
        'Modélisation complexe des données académiques',
        'Gestion des droits multi-utilisateurs',
        'Calcul automatique des moyennes',
        'Interface adaptée aux différents profils'
      ],
      results: [
        'Système complet de gestion académique',
        'Réduction de 60% du temps de gestion administrative',
        'Interface intuitive pour étudiants et professeurs',
        'Génération automatique des documents officiels'
      ],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      duration: '3 mois',
      team: 'Projet académique'
    },
    {
      id: 'business-studies',
      title: 'Plateforme d\'Études d\'Entreprises Françaises',
      description: 'Application web pour la gestion et l\'analyse d\'études d\'entreprises françaises avec interface moderne.',
      fullDescription: 'Plateforme web complète développée avec Laravel et React.js pour la gestion et l\'analyse d\'études d\'entreprises françaises. Permet la collecte, l\'analyse et la présentation de données d\'entreprises avec des outils de recherche et de filtrage avancés.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      screenshots: [
      image1, image2,image3,image4,image5,image6,
      ],
      technologies: ['Laravel', 'React.js', 'PHP', 'JavaScript', 'MySQL', 'Chart.js'],
      features: [
        'Base de données d\'entreprises françaises',
        'Outils de recherche et filtrage avancés',
        'Génération de rapports d\'analyse',
        'Visualisation de données avec graphiques',
        'Export des données en différents formats',
        'Interface de gestion administrative'
      ],
      challenges: [
        'Intégration de données externes',
        'Optimisation des recherches complexes',
        'Visualisation de grandes quantités de données',
        'Architecture scalable pour croissance'
      ],
      results: [
        'Plateforme complète d\'analyse d\'entreprises',
        'Interface utilisateur moderne et intuitive',
        'Système de recherche performant',
        'Rapports détaillés et personnalisables'
      ],
      liveUrl: '#',
      githubUrl: '#',
      date: '2022',
      duration: '2 mois',
      team: 'Projet individuel'
    }
  ];

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Mes Projets</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Une sélection de projets qui démontrent mes compétences techniques et ma créativité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm text-slate-600 flex items-center gap-1">
                  <Calendar size={14} />
                  {project.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <button
                    onClick={() => onProjectSelect?.(project.id)}
                    className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
                  >
                    Voir détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium"
          >
            <Github size={20} />
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;