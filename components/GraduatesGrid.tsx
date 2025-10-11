import React from 'react';
import Section, { SectionTitle } from './Section';

interface GraduatesGridProps {
    onSelectDivision: (division: string) => void;
    loading: boolean;
    error: string | null;
}

const DivisionCard: React.FC<{ division: string; onClick: () => void }> = ({ division, onClick }) => (
    <div 
        onClick={onClick}
        className="bg-brand-light/5 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center justify-center text-center"
    >
        <h3 className="text-2xl font-bold text-brand-primary">{division}</h3>
        <p className="mt-2 text-brand-text-light/80">Ver listado de egresados</p>
    </div>
);


const GraduatesGrid: React.FC<GraduatesGridProps> = ({ onSelectDivision, loading, error }) => {

    const divisions = ["5to A", "5to B", "5to C"];

    return (
        <Section id="egresados">
            <SectionTitle>Nuestros Egresados '95</SectionTitle>
            {loading && <p className="text-center text-brand-primary">Cargando...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {divisions.map(div => (
                        <DivisionCard 
                            key={div}
                            division={div}
                            onClick={() => onSelectDivision(div)}
                        />
                    ))}
                </div>
            )}
        </Section>
    );
};

export default GraduatesGrid;