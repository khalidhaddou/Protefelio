import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Stage : Ingénieur Études et Développements',
      company: 'Avantages PME',
      location: 'Casablanca, Maroc',
      period: 'Février 2024 - Août 2024',
      type: 'Stage',
      description: [
        'Participation à l\'amélioration d\'un logiciel de gestion de caisse, axé sur la performance, la sécurité et l\'ergonomie',
        'Optimisation et mise à jour du logiciel selon les exigences clés identifiées',
        'Déploiement de tests unitaires et fonctionnels rigoureux',
        'Application des bonnes pratiques : revue de code, merge requests, intégration continue avec GitLab CI',
        'Technologies : HTML5, CSS, Bootstrap, React.js, PHP, Laravel, JavaScript, jQuery, Flutter, MySQL'
      ]
    },
    {
      title: 'Freelance : Rédacteur Technique',
      company: 'Alphorm',
      location: 'Rabat, Maroc',
      period: 'Juillet 2024 - Novembre 2024',
      type: 'Freelance',
      description: [
        'Rédaction d\'articles SEO avancés sur des thématiques technologiques et éducatives à destination d\'un public professionnel',
        'Conception et structuration de supports de formation en collaboration avec des experts',
        'Développement de stratégies d\'optimisation des mots-clés et de référencement pour améliorer la visibilité des contenus'
      ]
    },
    {
      title: 'Projet Académique - Application de Gestion des Masters',
      company: 'Faculté des Sciences et Techniques',
      location: 'Errachidia, Maroc',
      period: 'Juillet 2023 - Octobre 2023',
      type: 'Projet',
      description: [
        'Analyse des besoins utilisateurs et conception de solutions logicielles adaptées',
        'Conception et développement complet de l\'application avec création de la base de données',
        'Technologies : PHP/Laravel, JavaScript, MySQL, HTML5, CSS3'
      ]
    },
    {
      title: 'Stage : Développeur Full Stack',
      company: 'LA RIFENIA',
      location: 'Oujda, Maroc',
      period: 'Juin 2022 - Août 2022',
      type: 'Stage',
      description: [
        'Conception et développement d\'une application web pour la gestion d\'un espace de coworking',
        'Identification des fonctionnalités clés : réservation, gestion des membres, facturation',
        'Conception d\'une architecture modulaire et évolutive',
        'Développement complet backend et frontend avec optimisation de l\'expérience utilisateur'
      ]
    }
  ];


  const certifications = [
    'Microsoft Azure Fundamentals',
    'Google Cloud Platform Essentials',
    'GitLab CI/CD Certification',
    'Agile & Scrum Methodology'
  ];

  return (
    <section id="parcours" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Mon Parcours</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Une progression continue dans le développement web avec des expériences enrichissantes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
              <Calendar className="text-blue-600" size={24} />
              Expérience Professionnelle
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-slate-900">{exp.title}</h4>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-slate-500">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-medium">
                        {exp.type}
                      </span>
                    </div>
                    
                    <ul className="text-slate-600 space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <Award className="text-emerald-600" size={24} />
                Formation
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-slate-900">Diplôme d'Ingénieur d'État en Génie Informatique</h4>
                  <p className="text-emerald-600 font-medium text-sm">FST Errachidia, Université Moulay Ismail de Meknès</p>
                  <p className="text-slate-500 text-sm flex items-center gap-1 mt-1">
                    <MapPin size={12} />
                    Errachidia, Maroc
                  </p>
                  <p className="text-slate-500 text-sm flex items-center gap-1">
                    <Calendar size={12} />
                    2021 - 2024
                  </p>
                  <p className="text-slate-600 text-sm mt-2">Spécialité Génie Logiciel</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-slate-900">DEUST Mathématiques, Informatique, Physique (MIP)</h4>
                  <p className="text-emerald-600 font-medium text-sm">FST Errachidia, Université Moulay Ismail de Meknès</p>
                  <p className="text-slate-500 text-sm flex items-center gap-1 mt-1">
                    <MapPin size={12} />
                    Errachidia, Maroc
                  </p>
                  <p className="text-slate-500 text-sm flex items-center gap-1">
                    <Calendar size={12} />
                    2019 - 2021
                  </p>
                  <p className="text-slate-600 text-sm mt-2">Formation pluridisciplinaire en sciences exactes</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-slate-900">Baccalauréat Sciences Mathématiques A</h4>
                  <p className="text-emerald-600 font-medium text-sm">Lycée Mohamed VI</p>
                  <p className="text-slate-500 text-sm flex items-center gap-1 mt-1">
                    <MapPin size={12} />
                    Alnif, Maroc
                  </p>
                  <p className="text-slate-500 text-sm flex items-center gap-1">
                    <Calendar size={12} />
                    2018 - 2019
                  </p>
                  <p className="text-slate-600 text-sm mt-2">Option Sciences Mathématiques</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Certifications</h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-blue-500">
                    <p className="text-slate-700 text-sm font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;