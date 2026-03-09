import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const [greeting, setGreeting] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef(null);
  const { isDarkMode } = useTheme(); // On garde mais on l'utilisera plus tard

  const fullTexts = [
    'Développeur React',
    'Créateur d\'expériences web',
    'Passionné de tech',
    'Innovateur digital'
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    let isDeleting = false;
    let timeout;

    const typeEffect = () => {
      const fullText = fullTexts[textIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentIndex - 1);
        currentIndex--;
      } else {
        currentText = fullText.substring(0, currentIndex + 1);
        currentIndex++;
      }

      setTypedText(currentText);

      if (!isDeleting && currentIndex === fullText.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          typeEffect();
        }, 2000);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setTextIndex((prev) => (prev + 1) % fullTexts.length);
        timeout = setTimeout(typeEffect, 500);
      } else {
        timeout = setTimeout(typeEffect, isDeleting ? 50 : 100);
      }
    };

    timeout = setTimeout(typeEffect, 1000);
    return () => clearTimeout(timeout);
  }, [textIndex]);

  useEffect(() => {
    setShowContent(true);
    
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Bonjour');
    else if (hour < 18) setGreeting('Bon après-midi');
    else setGreeting('Bonsoir');
  }, []);

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: 'Tailwind', level: 90, icon: '🎨' },
    { name: 'Node.js', level: 75, icon: '🚀' },
    { name: 'HTML/CSS', level: 95, icon: '🌐' },
    { name: 'Git', level: 80, icon: '📦' },
    { name: 'MongoDB', level: 70, icon: '🍃' },
    { name: 'Express', level: 75, icon: '⚡' },
  ];

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      {/* Hero Section avec image tech */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Image tech en arrière-plan */}
        <div className="absolute inset-0">
          <img 
            src="/images/tech-bg.jpg"
            alt="Tech Background"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              console.error("Erreur de chargement de l'image:", e);
              e.target.src = "https://images.unsplash.com/photo-1555066937-4365d14bab8c?w=1200&h=800&fit=crop";
            }}
          />
          {/* Superposition de couleur - s'adapte au mode sombre/clair */}
          <div className={`absolute inset-0 bg-gradient-to-br ${
            isDarkMode 
              ? 'from-blue-900/90 via-purple-900/90 to-pink-900/90' 
              : 'from-blue-600/80 via-purple-600/80 to-pink-600/80'
          }`}></div>
        </div>

        {/* Effet de particules */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 5}s`,
                opacity: 0.3 + Math.random() * 0.5
              }}
            />
          ))}
        </div>

        {/* Contenu principal */}
        <div className="container-custom relative z-10">
          <div 
            className={`text-center transform transition-all duration-1000 ${
              showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
            }`}
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`
            }}
          >
            {/* Badge de bienvenue */}
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-white animate-bounce-slow">
              <span className="text-lg">✨ {greeting} ✨</span>
            </div>

            {/* Titre avec animation */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
              Je suis{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-gradient-x">
                Alioune
              </span>
            </h1>

            {/* Texte animé */}
            <div className="text-2xl md:text-4xl text-white/90 mb-8 h-16">
              <span className="font-light">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>

            {/* Description */}
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              Je transforme des idées en expériences web exceptionnelles.
              Spécialisé en React et technologies modernes.
            </p>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/projects"
                className="group relative px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">🚀 Voir mes projets</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">📧 Me contacter</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Indicateur de scroll */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences - CORRIGÉE ET COMPLÈTE */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Compétences</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Des technologies modernes pour des solutions innovantes
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-500 hover:scale-105 ${
                  showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Carte avec effet 3D */}
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl">
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  {/* Icône */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Nom de la compétence */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  
                  {/* Barre de progression animée */}
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                      style={{ width: showContent ? `${skill.level}%` : '0%' }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Pourcentage */}
                  <span className="absolute top-4 right-4 text-sm font-bold text-blue-600 dark:text-blue-400">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Call-to-Action avec image tech */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop" 
            alt="Tech Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à donner vie à vos projets ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transformons vos idées en réalité. Je suis disponible pour discuter de votre prochain projet.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Commençons maintenant →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;