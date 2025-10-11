import React from 'react';
import Section from './Section';

const Menu: React.FC = () => {
  return (
    <Section id="menu">
      <div className="bg-brand-light/5 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
        <h2 className="text-3xl font-bold text-brand-light">Menú</h2>
        <p className="mt-4 text-lg text-brand-text-light/80 max-w-2xl mx-auto">
          El Menú es a confirmar. Bebidas a la canasta o conservadora.
        </p>
      </div>
    </Section>
  );
};

export default Menu;