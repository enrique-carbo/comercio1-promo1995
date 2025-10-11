import React from 'react';
import Section from './Section';

const Menu: React.FC = () => {
  return (
    <Section id="menu">
      <div className="bg-brand-light/5 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
        <h2 className="text-3xl font-bold text-brand-light">Un Menú para Recordar</h2>
        <p className="mt-4 text-lg text-brand-text-light/80 max-w-2xl mx-auto">
          Hemos preparado una selección gastronómica especial para esta noche única. Descubre las delicias que nos acompañarán durante la cena.
        </p>
        <div className="mt-8">
          <a
            href="/menu-aniversario-1995.pdf" // Dummy link
            download
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-brand-primary text-brand-light hover:bg-brand-light hover:text-brand-dark transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descargar Menú (PDF)
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Menu;