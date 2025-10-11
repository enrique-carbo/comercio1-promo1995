import React, { useState } from 'react';
import Section, { SectionTitle } from './Section';

const ConfirmationFormGoogle: React.FC = () => {
  return (
    <Section id="confirmar" className="bg-brand-light/5">
      <SectionTitle>Confirmá tu Asistencia</SectionTitle>
      <div className="max-w-lg mx-auto">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScRop59EqBCgFk9LGavo3-gp1tg6jWz9LudkuJoOX_kGQvFzg/viewform?embedded=true"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-brand-primary text-brand-light hover:bg-brand-light hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light focus:ring-offset-brand-dark transition-colors duration-300"
        >
          ¡Sí, voy a ir!
        </a>
      </div>
    </Section>
  );
};

export default ConfirmationFormGoogle;

