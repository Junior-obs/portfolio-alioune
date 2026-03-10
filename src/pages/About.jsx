import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const [showContent, setShowContent] = useState(false);
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    setShowContent(true);
  }, []);

  const skills = [
    { name: 'React', level: 90, icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'JavaScript', level: 85, icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
    { name: 'HTML/CSS', level: 95, icon: '🎨', color: 'from-orange-400 to-red-500' },
    { name: 'Node.js', level: 75, icon: '🚀', color: 'from-green-400 to-emerald-600' },
    { name: 'Tailwind CSS', level: 90, icon: '💨', color: 'from-sky-400 to-teal-500' },
    { name: 'Git/GitHub', level: 80, icon: '📦', color: 'from-purple-400 to-purple-600' },
  ];

  const experiences = [
    {
      year: '2025 - Présent',
      title: 'Développeur React Freelance',
      description: 'Création d\'applications web modernes pour divers clients',
      achievements: ['5+ projets livrés', '100% satisfaction client', 'Maintenance continue']
    },
    {
      year: '2024 - 2025',
      title: 'Stage Développeur Web',
      description: 'Développement de sites vitrines et e-commerce',
      achievements: ['Participation à 3 projets majeurs', 'Optimisation des performances', 'Formation équipe']
    },
    {
      year: '2023 - 2024',
      title: 'Formation Développement Web',
      description: 'Licence 2 Génie Informatique',
      achievements: ['Projets académiques', 'Certifications React', 'Hackathon participant']
    }
  ];

  const stats = [
    { value: '10+', label: 'Projets', icon: '🚀' },
    { value: '1+', label: 'Années', icon: '⏳' },
    { value: '5+', label: 'Clients', icon: '🤝' },
    { value: '100%', label: 'Satisfaction', icon: '⭐' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section avec effet de verre */}
      <section className="relative py-20 overflow-hidden">
        {/* Background décoratif */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container-custom relative z-10">
          <div className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              À propos de moi
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionné par le développement web, je crée des expériences numériques 
              <span className="block mt-2 text-blue-600 dark:text-blue-400 font-semibold">
                uniques, performantes et mémorables
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section avec photo */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transform hover:shadow-3xl transition-shadow duration-500">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Photo */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative group w-64">
                  {/* Cercles décoratifs */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>
                  
                  {/* Photo avec bordure dégradée */}
                  <div className="relative rounded-2xl overflow-hidden ring-4 ring-white dark:ring-gray-700 shadow-2xl">
                    <img 
                      src="/images/alioune.jpg"
                      alt="Alioune Faye Diouf"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay au survol */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Badge de statut */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                    👨‍💻 Disponible
                  </div>
                </div>
              </div>

              {/* Bio Text */}
              <div className="md:col-span-8 space-y-6">
                <div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Alioune Faye Diouf
                  </h2>
                  <p className="text-xl text-gray-700 dark:text-gray-200 font-medium mb-2">
                    Développeur React Junior
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Licence 2 Génie Informatique
                  </p>
                </div>

                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p className="leading-relaxed">
                    Je suis un développeur passionné par la création d'applications web modernes et intuitives. 
                    Ma spécialisation en React me permet de transformer des idées complexes en solutions élégantes 
                    et performantes.
                  </p>
                  <p className="leading-relaxed">
                    Ce qui me motive ? Relever des défis techniques, apprendre continuellement et contribuer à 
                    des projets qui ont un impact réel. Je crois fermement que la technologie peut améliorer le 
                    quotidien des gens.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="text-center p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise Technique
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Des compétences solides dans les technologies modernes du web
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
                  showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Effet de bordure dégradée */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  
                  {/* Barre de progression */}
                  <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                      style={{ width: showContent ? `${skill.level}%` : '0%' }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Parcours Professionnel
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Mon évolution dans le monde du développement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 pb-12 last:pb-0 transform transition-all duration-700 ${
                  showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Ligne verticale */}
                <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                
                {/* Point sur la ligne */}
                <div className="absolute left-[-8px] top-2 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white dark:ring-gray-900"></div>
                
                {/* Contenu de l'expérience */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ml-4">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  {/* Réalisations */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Effets décoratifs */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Envie de collaborer ?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Je suis actuellement à la recherche de nouvelles opportunités. 
                N'hésitez pas à me contacter pour discuter de vos projets !
              </p>
              <Link 
                to="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Discutons de votre projet →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;