import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Experience from './components/Experience';
import Contact from './components/Contact';
import image1 from './asset/image/1/1.png'
import image2 from './asset/image/1/2.png'
import image3 from './asset/image/1/3.png'
import image4 from './asset/image/1/4.png'
import image5 from './asset/image/1/5.png'
import image6 from './asset/image/1/6.png'
import img_ecommerce_web1 from './asset/image/2/1.png'
import img_ecommerce_web2 from './asset/image/2/2.png'
import img_ecommerce_web3 from './asset/image/2/3.png'
import img_ecommerce_web4 from './asset/image/2/4.png'
import img_ecommerce_web5 from './asset/image/2/5.png'
import img_ecommerce_web6 from './asset/image/2/6.png'
import img_ecommerce_web7 from './asset/image/2/7.png'
import img_ecommerce_web8 from './asset/image/2/8.png'
import img_ecommerce_web9 from './asset/image/2/9.png'
import img_ecommerce_web10 from './asset/image/2/10.png'
import NEW1 from './asset/image/4/NEW1.png';
import NEW2 from './asset/image/4/NEW2.png';
import NEW3 from './asset/image/4/NEW3.png';
import NEW4 from './asset/image/4/NEW4.png';
import NEW5 from './asset/image/4/NEW5.png';
import NEW6 from './asset/image/4/NEW6.png';
import NEW7 from './asset/image/4/NEW7.png';
import NEW8 from './asset/image/4/NEW8.png';
import NEW9 from './asset/image/4/NEW9.png';
import NEW10 from './asset/image/4/NEW10.png';
import NEW11 from './asset/image/4/NEW11.png';
import NEW12 from './asset/image/4/NEW12.png';
import NEW13 from './asset/image/4/NEW13.png';
import NEW14 from './asset/image/4/NEW14.png';
import NEW15 from './asset/image/4/NEW15.png';
import dashboard_analytics1 from './asset/image/5/DCH1.png';
import dashboard_analytics2 from './asset/image/5/DCH2.png';
import dashboard_analytics3 from './asset/image/5/DCH3.png';
import dashboard_analytics4 from './asset/image/5/DCH4.png';
import fst1 from './asset/image/6/FSET1.jpg';
import fst2 from './asset/image/6/FST2.jpg';
import fst3 from './asset/image/6/FST3.jpg'
function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Données des projets pour les détails
  const projectsData = {
    'ecommerce-animals': {
      id: 'ecommerce-animals',
      title: 'Site e-commerce pour produits animaliers',
      description: 'Développement complet d\'un site e-commerce pour animaux de compagnie avec interface moderne et backend robuste.',
      fullDescription: 'Plateforme e-commerce complète dédiée aux produits pour animaux de compagnie, développée avec React.js pour le frontend et Spring Boot pour le backend. Le projet inclut un système de gestion des produits, panier d\'achat, processus de commande et interface d\'administration.',
      context: 'Développement d\'une solution e-commerce moderne pour une boutique spécialisée dans les produits animaliers, nécessitant une architecture robuste et une expérience utilisateur optimale.',
      objectives: [
        'Créer une plateforme e-commerce intuitive et performante',
        'Implémenter un système de gestion des stocks en temps réel',
        'Développer une interface d\'administration complète',
        'Assurer la sécurité des transactions et des données utilisateurs'
      ],
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=600',
      screenshots: [
        image1, image2,image3,image4,image5,image6
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
        'Intégration complexe entre React.js et Spring Boot avec gestion des états',
        'Optimisation des performances pour un catalogue de plus de 10 000 produits',
        'Implémentation d\'un système de paiement sécurisé avec validation en temps réel',
        'Gestion avancée des sessions utilisateurs et authentification JWT robuste',
        'Mise en place d\'un système de cache intelligent pour améliorer les performances'
      ],
      results: [
        'Interface utilisateur moderne et entièrement responsive sur tous les appareils',
        'Performance exceptionnelle avec temps de chargement moyen de 1.2 secondes',
        'Architecture modulaire et scalable permettant une montée en charge facile',
        'Couverture de tests de 90% avec tests unitaires et d\'intégration complets',
        'Taux de conversion amélioré de 35% grâce à l\'UX optimisée'
      ],
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      duration: '2 mois',
      team: 'Projet individuel'
    },
    'ecommerce-web': {
      id: 'ecommerce-web',
      title: 'Application web e-commerce',
      description: 'Site e-commerce complet avec interface d\'administration pour la gestion des produits, commandes et utilisateurs.',
      fullDescription: 'Application e-commerce full-stack développée avec Laravel pour le backend et React.js pour le frontend. Comprend un système complet de gestion des produits, commandes, utilisateurs avec une interface d\'administration avancée.',
      context: 'Création d\'une plateforme e-commerce complète avec un focus sur l\'interface d\'administration pour permettre une gestion efficace de tous les aspects du commerce en ligne.',
      objectives: [
        'Développer une solution e-commerce complète et évolutive',
        'Créer une interface d\'administration intuitive et puissante',
        'Implémenter un système de gestion des commandes automatisé',
        'Optimiser l\'expérience utilisateur pour maximiser les conversions'
      ],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      screenshots: [
         img_ecommerce_web1,img_ecommerce_web2,img_ecommerce_web3,img_ecommerce_web4,img_ecommerce_web5,img_ecommerce_web6,img_ecommerce_web7,img_ecommerce_web8,img_ecommerce_web9,img_ecommerce_web10
      ],
      technologies: ['Laravel', 'React.js', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      features: [
        'Dashboard administrateur complet avec métriques en temps réel',
        'Gestion avancée des produits avec catégories et variations',
        'Système de commandes automatisé avec suivi des statuts',
        'Gestion des clients avec historique détaillé des achats',
        'Rapports et statistiques de vente avec graphiques interactifs',
        'Système de notifications push pour les événements importants'
      ],
      challenges: [
        'Architecture MVC complexe avec Laravel et intégration React.js',
        'Optimisation des requêtes base de données pour de gros volumes',
        'Implémentation d\'un système de droits utilisateurs granulaire',
        'Synchronisation en temps réel entre frontend et backend',
        'Gestion des états complexes dans l\'interface d\'administration'
      ],
      results: [
        'Interface d\'administration moderne et hautement fonctionnelle',
        'Réduction de 50% du temps de gestion des commandes',
        'Performance optimisée même avec de grandes quantités de données',
        'Sécurité renforcée avec authentification JWT et validation stricte',
        'Satisfaction utilisateur de 95% selon les retours clients'
      ],
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      duration: '4 mois',
      team: 'Projet individuel'
    },
    'dashboard-analytics': {
      id: 'dashboard-analytics',
      title: 'Mini-dashboard d\'analyse des paniers d\'achat',
      description: 'Tableau de bord interactif pour visualiser et analyser les comportements d\'achat avec des graphiques dynamiques.',
      fullDescription: 'Dashboard analytique développé avec Node.js et Vue.js pour analyser les comportements d\'achat des utilisateurs. Intègre des graphiques interactifs, des métriques en temps réel et des rapports détaillés sur les performances des ventes.',
      context: 'Développement d\'un outil d\'analyse avancé pour comprendre les comportements d\'achat des clients et optimiser les stratégies commerciales grâce à la visualisation de données.',
      objectives: [
        'Créer un dashboard interactif pour l\'analyse des ventes',
        'Implémenter des graphiques dynamiques et informatifs',
        'Développer des métriques en temps réel pour le suivi des performances',
        'Fournir des insights actionnables pour l\'optimisation commerciale'
      ],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      screenshots: [
       dashboard_analytics1, dashboard_analytics2, dashboard_analytics3, dashboard_analytics4
      ],
      technologies: ['Node.js', 'Vue.js', 'Postman', 'Chart.js', 'Express.js', 'MongoDB'],
      features: [
        'Visualisation des données de vente en temps réel avec mise à jour automatique',
        'Graphiques interactifs multiples avec Chart.js (barres, lignes, secteurs)',
        'Analyse des tendances d\'achat avec filtres temporels avancés',
        'Rapports personnalisables avec sélection de métriques',
        'Système de filtres avancés par période, catégorie et segment client',
        'Export automatique des données en PDF, Excel et CSV'
      ],
      challenges: [
        'Traitement et agrégation de grandes volumes de données en temps réel',
        'Optimisation des requêtes MongoDB pour des performances maximales',
        'Mise à jour dynamique des graphiques sans rechargement de page',
        'Interface responsive adaptée à tous les types d\'écrans et appareils',
        'Gestion de la mémoire pour éviter les fuites lors des mises à jour fréquentes'
      ],
      results: [
        'Dashboard interactif et intuitif avec navigation fluide',
        'Amélioration de 40% dans l\'efficacité de l\'analyse des ventes',
        'Temps de chargement optimisé inférieur à 1.5 secondes',
        'Interface parfaitement adaptée mobile, tablette et desktop',
        'Réduction de 60% du temps nécessaire pour générer des rapports'
      ],
      liveUrl: '#',
      githubUrl: '#',
      date: '2025',
      duration: '2 mois',
      team: 'Projet individuel'
    },
    'academic-management': {
      id: 'academic-management',
      title: 'Solution de gestion du parcours académique',
      description: 'Plateforme de suivi académique pour étudiants en ingénierie avec gestion des notes, planning et progression.',
      fullDescription: 'Système complet de gestion académique développé avec Laravel 9 pour les étudiants en ingénierie. La plateforme permet le suivi des notes, la gestion des emplois du temps, l\'inscription aux modules et le suivi de la progression académique.',
      context: 'Développement d\'une solution numérique pour moderniser la gestion académique et faciliter le suivi du parcours des étudiants en ingénierie avec des outils intuitifs et efficaces.',
      objectives: [
        'Digitaliser la gestion du parcours académique des étudiants',
        'Automatiser le calcul des notes et la génération des relevés',
        'Créer une interface intuitive pour étudiants et professeurs',
        'Optimiser les processus administratifs de l\'établissement'
      ],
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600',
      screenshots: [
       fst1, fst2, fst3
      ],
      technologies: ['Laravel 9', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'MySQL'],
      features: [
        'Gestion complète des notes avec calcul automatique des moyennes',
        'Planning interactif des cours et examens avec notifications',
        'Système d\'inscription aux modules avec gestion des prérequis',
        'Suivi détaillé de la progression académique avec visualisations',
        'Génération automatique de relevés de notes officiels en PDF',
        'Système de notifications automatiques pour les échéances importantes'
      ],
      challenges: [
        'Modélisation complexe des données académiques avec relations multiples',
        'Implémentation d\'un système de droits multi-utilisateurs (étudiants, professeurs, admin)',
        'Calcul automatique et précis des moyennes selon différents systèmes de notation',
        'Interface adaptée aux besoins spécifiques de chaque type d\'utilisateur',
        'Gestion des contraintes académiques et validation des parcours'
      ],
      results: [
        'Système complet de gestion académique entièrement fonctionnel',
        'Réduction de 60% du temps de gestion administrative',
        'Interface utilisateur intuitive appréciée par tous les utilisateurs',
        'Génération automatique et fiable des documents officiels',
        'Amélioration significative du suivi des étudiants'
      ],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      duration: '3 mois',
      team: 'Projet académique'
    },
    'business-studies': {
      id: 'business-studies',
      title: 'Plateforme d\'Études d\'Entreprises Françaises',
      description: 'Application web pour la gestion et l\'analyse d\'études d\'entreprises françaises avec interface moderne.',
      fullDescription: 'Plateforme web complète développée avec Laravel et React.js pour la gestion et l\'analyse d\'études d\'entreprises françaises. Permet la collecte, l\'analyse et la présentation de données d\'entreprises avec des outils de recherche et de filtrage avancés.',
      context: 'Création d\'une plateforme spécialisée dans l\'analyse des entreprises françaises pour fournir des insights précieux aux analystes et décideurs économiques.',
      objectives: [
        'Développer une base de données complète d\'entreprises françaises',
        'Créer des outils d\'analyse et de recherche performants',
        'Implémenter des visualisations de données informatives',
        'Fournir des rapports détaillés et personnalisables'
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      screenshots: [
      NEW1, NEW2, NEW3, NEW4, NEW5,
      NEW6, NEW7, NEW8, NEW9, NEW10,
      NEW11, NEW12, NEW13, NEW14, NEW15
      ],
      technologies: ['Laravel', 'React.js', 'PHP', 'JavaScript', 'MySQL', 'Chart.js'],
      features: [
        'Base de données exhaustive d\'entreprises françaises avec informations détaillées',
        'Moteur de recherche avancé avec filtres multiples et suggestions',
        'Génération de rapports d\'analyse personnalisés et exportables',
        'Visualisation interactive des données avec graphiques dynamiques',
        'Export des données en multiples formats (PDF, Excel, CSV, JSON)',
        'Interface de gestion administrative avec contrôle des accès'
      ],
      challenges: [
        'Intégration et normalisation de données provenant de sources externes multiples',
        'Optimisation des algorithmes de recherche pour des requêtes complexes',
        'Visualisation efficace de grandes quantités de données hétérogènes',
        'Architecture scalable pour supporter la croissance de la base de données',
        'Mise en place d\'un système de cache intelligent pour les performances'
      ],
      results: [
        'Plateforme complète d\'analyse d\'entreprises entièrement opérationnelle',
        'Interface utilisateur moderne et ergonomique',
        'Système de recherche ultra-performant avec résultats instantanés',
        'Rapports détaillés et personnalisables selon les besoins utilisateurs',
        'Architecture robuste supportant des milliers d\'entreprises référencées'
      ],
      liveUrl: '#',
      githubUrl: '#',
      date: '2025',
      duration: 'en cours',
      team: 'Projet en binôme'
    },
  };

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  if (selectedProject && projectsData[selectedProject as keyof typeof projectsData]) {
    return (
      <ProjectDetail 
        project={projectsData[selectedProject as keyof typeof projectsData]} 
        onBack={handleBackToProjects}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <Projects onProjectSelect={handleProjectSelect} />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;