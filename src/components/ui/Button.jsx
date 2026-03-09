const Button = ({ children, variant = 'primary', onClick, type = 'button', className = '' }) => {
  const baseClasses = 'px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;