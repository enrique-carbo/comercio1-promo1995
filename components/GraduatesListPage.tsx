import React from 'react';
import { Egresado } from '../types';
import Section from './Section';

interface GraduatesListPageProps {
    division: string;
    graduates: Egresado[];
    onBack: () => void;
}

const GraduatesListPage: React.FC<GraduatesListPageProps> = ({ division, graduates, onBack }) => {
    return (
        <Section id={`egresados-${division.replace(' ', '-')}`}>
            <div className="relative mb-12 flex items-center justify-center">
                 <button 
                    onClick={onBack}
                    className="absolute left-0 flex items-center text-brand-primary hover:text-brand-light transition-colors duration-200 font-semibold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                    Volver
                </button>
                 <h2 className="text-3xl font-bold text-center text-brand-light sm:text-4xl">
                    Egresados {division}
                </h2>
            </div>
           
            {graduates.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {graduates.map((grad) => (
                        <div key={grad.id} className="bg-brand-light/5 text-center p-4 rounded-lg shadow-md">
                            <p className="font-medium text-brand-light">{grad.nombre}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-brand-text-light/80">No se encontraron egresados para esta división.</p>
            )}
        </Section>
    );
};

export default GraduatesListPage;