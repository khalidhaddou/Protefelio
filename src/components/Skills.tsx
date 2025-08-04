import React from 'react';
import { Code, Database, Globe, Smartphone, Cloud, Settings, GitBranch, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Développement Web',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'JavaScript / PHP', level: 90 },
        { name: 'React / Laravel', level: 88 },
        { name: 'Node.js / Express.js', level: 85 },
        { name: 'Bootstrap / Tailwind', level: 92 },
        { name: 'RESTful APIs / AJAX', level: 87 }
      ]
    },
    {
      title: 'Bases de Données',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'Oracle', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Modélisation UML', level: 88 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: 'Microsoft Azure', level: 85 },
        { name: 'Google Cloud Platform', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 78 },
        { name: 'GitLab CI/CD', level: 82 },
        { name: 'GitHub Actions', level: 80 }
      ]
    },
    {
      title: 'Mobile & Autres',
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: 'Android (Java/Kotlin)', level: 85 },
        { name: 'Flutter', level: 80 },
        { name: 'Java JEE / Spring Boot', level: 88 },
        { name: 'Python / C/C++', level: 75 }
      ]
    },
    {
      title: 'Architecture & Gestion',
      icon: <Settings className="w-8 h-8" />,
      skills: [
        { name: 'Design Patterns', level: 85 },
        { name: 'Clean Architecture', level: 82 },
        { name: 'Microservices', level: 80 },
        { name: 'Méthodologies Agiles', level: 90 }
      ]
    },
    {
      title: 'IA & Innovation',
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: 'Machine Learning', level: 75 },
        { name: 'Intelligence Artificielle', level: 70 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Bash/Shell Scripting', level: 80 }
      ]
    }
  ];

  return (
    <section id="competences" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Mes Compétences</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Une expertise technique solide acquise à travers des projets variés et une veille technologique constante
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-slate-600">Technologies maîtrisées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">6</div>
              <div className="text-slate-600">Domaines d'expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">Full Stack</div>
              <div className="text-slate-600">Développeur polyvalent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">Cloud Ready</div>
              <div className="text-slate-600">Azure & GCP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;