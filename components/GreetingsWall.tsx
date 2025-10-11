import React, { useState } from 'react';
import { Saludo } from '../types';
import Section, { SectionTitle } from './Section';

const initialGreetings: Saludo[] = [
    { id: 1, nombre: 'Ana García', mensaje: '¡Qué emoción! No puedo creer que ya pasaron 30 años. ¡Nos vemos ahí!' },
    { id: 2, nombre: 'Martín Gonzalez', mensaje: 'Contando los días para el reencuentro. ¡Preparen las anécdotas!' },
];

const GreetingsWall: React.FC = () => {
    const [greetings, setGreetings] = useState<Saludo[]>(initialGreetings);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) {
            setError('Por favor, completa tu nombre y tu saludo.');
            return;
        }
        const newGreeting: Saludo = {
            id: Date.now(),
            nombre: name,
            mensaje: message,
        };
        setGreetings([newGreeting, ...greetings]);
        setName('');
        setMessage('');
        setError('');
    };

    return (
        <Section id="saludos">
            <SectionTitle>Muro de Saludos</SectionTitle>
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="lg:pr-8">
                    <h3 className="text-2xl font-bold text-brand-light mb-6">Dejá tu mensaje</h3>
                    <form onSubmit={handleSubmit} className="space-y-4 bg-brand-light/5 p-6 rounded-lg shadow-lg">
                         <div>
                            <label htmlFor="greeting-name" className="block text-sm font-medium text-brand-text-light">Tu Nombre</label>
                            <input
                                type="text"
                                id="greeting-name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-brand-dark/50 border border-brand-primary/30 rounded-md text-brand-light focus:ring-brand-primary focus:border-brand-primary"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label htmlFor="greeting-message" className="block text-sm font-medium text-brand-text-light">Tu Saludo</label>
                            <textarea
                                id="greeting-message"
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-brand-dark/50 border border-brand-primary/30 rounded-md text-brand-light focus:ring-brand-primary focus:border-brand-primary"
                                placeholder="Escribí un recuerdo o un saludo para la promo..."
                            />
                        </div>
                         {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button type="submit" className="w-full py-2 px-4 bg-brand-primary text-brand-light font-semibold rounded-md hover:bg-brand-light hover:text-brand-dark transition-colors duration-300">
                            Publicar Saludo
                        </button>
                    </form>
                </div>
                <div className="max-h-96 overflow-y-auto pr-4 -mr-4 space-y-4">
                    {greetings.map((greeting) => (
                        <div key={greeting.id} className="bg-brand-light/5 p-4 rounded-lg shadow-md animate-fade-in">
                            <p className="text-brand-text-light/80 italic">"{greeting.mensaje}"</p>
                            <p className="text-right font-semibold text-brand-primary mt-2">- {greeting.nombre}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default GreetingsWall;