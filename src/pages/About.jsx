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
        {/* CORRECTION: <a> remplacé par <Link> */}
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