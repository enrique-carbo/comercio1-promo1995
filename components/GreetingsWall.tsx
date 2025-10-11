import React, { useState } from "react";
import { Saludo } from "../types";
import Section, { SectionTitle } from "./Section";

const initialGreetings: Saludo[] = [
  {
    id: 1,
    nombre: "Ana García",
    mensaje:
      "¡Qué emoción! No puedo creer que ya pasaron 30 años. ¡Nos vemos ahí!",
  },
  {
    id: 2,
    nombre: "Martín Gonzalez",
    mensaje: "Contando los días para el reencuentro. ¡Preparen las anécdotas!",
  },
];

const GreetingsWall: React.FC = () => {
  const [greetings, setGreetings] = useState<Saludo[]>(initialGreetings);

  return (
    <Section id="saludos">
      <SectionTitle>Muro de Saludos</SectionTitle>
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:pr-8">
          <h3 className="text-2xl font-bold text-brand-light mb-6">
            Dejá tu mensaje
          </h3>
          <a
            href="https://forms.gle/tquyJyoN1D787wfH8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium bg-brand-primary text-brand-light hover:bg-brand-light hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light focus:ring-offset-brand-dark transition-colors duration-300"
          >
            Dejar un saludo
          </a>
        </div>
        <div className="max-h-96 overflow-y-auto pr-4 -mr-4 space-y-4">
          {greetings.map((greeting) => (
            <div
              key={greeting.id}
              className="bg-brand-light/5 p-4 rounded-lg shadow-md animate-fade-in"
            >
              <p className="text-brand-text-light/80 italic">
                "{greeting.mensaje}"
              </p>
              <p className="text-right font-semibold text-brand-primary mt-2">
                - {greeting.nombre}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default GreetingsWall;
