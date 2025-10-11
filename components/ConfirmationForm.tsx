import React, { useState } from 'react';
import Section, { SectionTitle } from './Section';

const ConfirmationForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [guests, setGuests] = useState('0');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email) {
            setError('Por favor, completa tu nombre y email.');
            return;
        }
        setError('');
        console.log({ name, email, guests });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <Section id="confirmar" className="bg-brand-light/5">
                <div className="text-center max-w-lg mx-auto bg-brand-light/5 p-10 rounded-lg shadow-xl">
                    <SectionTitle>¡Gracias por confirmar!</SectionTitle>
                    <p className="text-lg text-brand-text-light">
                        ¡Qué alegría que vengas, {name}! Te hemos enviado un email a {email} con los detalles.
                        Nos vemos el 29 de Noviembre para celebrar.
                    </p>
                </div>
            </Section>
        );
    }

    return (
        <Section id="confirmar" className="bg-brand-light/5">
            <SectionTitle>Confirmá tu Asistencia</SectionTitle>
            <div className="max-w-lg mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6 bg-brand-light/5 p-8 rounded-lg shadow-xl">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-text-light">Nombre y Apellido</label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full px-3 py-2 bg-brand-dark/50 border border-brand-primary/30 rounded-md shadow-sm placeholder-brand-text-light/50 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm text-brand-light"
                                placeholder="Tu nombre completo"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-text-light">Email</label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                className="block w-full px-3 py-2 bg-brand-dark/50 border border-brand-primary/30 rounded-md shadow-sm placeholder-brand-text-light/50 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm text-brand-light"
                                placeholder="tu@email.com"
                            />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-brand-text-light">¿Vienes con acompañante?</label>
                        <select
                            id="guests"
                            name="guests"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-brand-dark/50 border-brand-primary/30 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md text-brand-light"
                        >
                            <option value="0">Vengo solo/a</option>
                            <option value="1">Vengo con 1 acompañante</option>
                        </select>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-brand-primary text-brand-light hover:bg-brand-light hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light focus:ring-offset-brand-dark transition-colors duration-300"
                        >
                            ¡Sí, voy a ir!
                        </button>
                    </div>
                </form>
            </div>
        </Section>
    );
};

export default ConfirmationForm;