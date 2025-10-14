import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark/50">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-brand-text-light/80">
                <p>30 Aniversario Promoción 1995</p>
                <p>Escuela de Comercio N°1 "Cap. Gral. Justo José de Urquiza" - Paraná, Entre Ríos</p>
                <p className="mt-2">{new Date().getFullYear()}. Hecho con ❤️ por un egresado.</p>
            </div>
        </footer>
    );
};

export default Footer;