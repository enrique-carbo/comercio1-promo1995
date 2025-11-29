import React from 'react';

const Hero: React.FC = () => {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('confirmar');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-16 pb-20 text-center sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 bg-cover bg-center" 
    style={{ backgroundImage: `url('images/escuela-comercio.jpg')` }}>
      <div className="absolute inset-0 bg-brand-dark/80">
        <div className="absolute inset-0 bg-grid-brand-primary/[0.05] [mask-image:linear-gradient(0deg,transparent,black)]"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-light sm:text-5xl md:text-6xl">
          <span className="block">Promo 1995</span>
          <span className="block text-brand-primary">30 Años No Es Nada</span>
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg text-brand-text-light sm:text-xl md:mt-8 md:max-w-3xl text-balance">
          Pasamos una noche inolvidable de reencuentro, recuerdos y celebración.
          Escuela de Comercio N°1 "Cap. Gral. Justo José de Urquiza", Paraná, Entre Ríos.
        </p>
        {/* <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
          <div className="rounded-md shadow">
            <a
              href="#confirmar"
              onClick={handleCTAClick}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-brand-primary text-brand-light hover:bg-brand-light hover:text-brand-dark transition-colors duration-300 md:py-4 md:text-lg md:px-10 cursor-pointer"
            >
              Confirmar Asistencia
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;