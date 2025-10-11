import React from 'react';
import Section, { SectionTitle } from './Section';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex flex-col items-center text-center bg-brand-light/5 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-brand-light">
                {icon}
            </div>
        </div>
        <div className="mt-4">
            <h3 className="text-lg leading-6 font-medium text-brand-light">{title}</h3>
            <p className="mt-2 text-base text-brand-text-light/80">
                {children}
            </p>
        </div>
    </div>
);


const EventInfo: React.FC = () => {
    return (
        <Section id="info">
            <SectionTitle>El Reencuentro del Año</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <InfoCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                    title="Fecha"
                >
                    Viernes, 29 de Noviembre de 2025
                </InfoCard>
                <InfoCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    title="Hora"
                >
                    A partir de las 21:00 hs
                </InfoCard>
                <InfoCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                    title="Lugar"
                >
                    Salón de Eventos "Los Tilos" <br/> Av. de las Américas 1234, Paraná
                </InfoCard>
            </div>
        </Section>
    );
};

export default EventInfo;