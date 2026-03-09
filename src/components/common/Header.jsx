import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo avec image SVG */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/logo/logo.svg" 
                alt="Alioune Faye Diouf" 
                className="w-12 h-12 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
              />
              {/* Petit point de notification (effet décoratif) */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Alioune Faye Diouf
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                Développeur React
              </span>
            </div>
          </Link>
          
          {/* Suite du code... (menu, boutons, etc.) */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                location.pathname === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                location.pathname === '/about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              À propos
            </Link>
            <Link 
              to="/projects" 
              className={`font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                location.pathname === '/projects' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Projets
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                location.pathname === '/contact' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isDarkMode ? <span className="text-xl">☀️</span> : <span className="text-xl">🌙</span>}
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">Accueil</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">À propos</Link>
            <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">Projets</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;