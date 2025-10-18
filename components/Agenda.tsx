import React from 'react';
import Section, { SectionTitle } from './Section';

const AgendaItem: React.FC<{ time: string; title: string; description: string }> = ({ time, title, description }) => (
    <div className="relative flex items-start">
        <div className="absolute left-0 top-0 ml-[-2px] h-full w-0.5 bg-brand-primary/50" aria-hidden="true"></div>
        <div className="relative flex items-center justify-center w-8 h-8 bg-brand-primary/30 rounded-full ring-4 ring-brand-dark">
            <span className="text-brand-primary text-lg font-bold">»</span>
        </div>
        <div className="ml-8">
            <p className="font-bold text-brand-light">{title}</p>
            <p className="text-sm text-brand-primary">{time}</p>
            <p className="mt-2 text-brand-text-light/80">{description}</p>
        </div>
    </div>
);

const Agenda: React.FC = () => {
    const schedule = [
        { time: '20:00', title: 'Llegan los primeros', description: 'Para los más ansiosos. Empezamos a reencontrarnos con una copa de bienvenida y buena charla.' },
        { time: '21:00', title: 'Comienzo y Aperitivos', description: 'Ahora sí, ¡arrancamos! Tragos, música y una exquisita selección de bocaditos.' },
        { time: '22:00', title: 'Comemos y tomamos algo', description: 'Disfrutaremos de un menú especial para ponernos al día con todas las anécdotas.' },
        { time: '00:00', title: '¡A Bailar! Hits de los 90s', description: 'El DJ nos hará revivir la mejor música de nuestra época y los hits actuales.' },
        { time: '01:30', title: 'Brindis, Torta y Fotos', description: 'Un momento para brindar por estos 30 años y capturar el recuerdo para siempre.' },
        { time: '02:00', title: 'Fin de Fiesta', description: 'La noche termina, pero los recuerdos quedan. ¡Hasta la próxima!' },
    ];

    return (
        <Section id="agenda" className="bg-brand-light/5">
            <SectionTitle>Agenda de la Noche</SectionTitle>
            <div className="max-w-2xl mx-auto">
                <div className="space-y-12">
                    {schedule.map((item, index) => (
                        <AgendaItem key={index} time={item.time} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Agenda;