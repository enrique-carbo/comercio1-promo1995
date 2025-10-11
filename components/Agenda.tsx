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
        { time: '21:00', title: 'Recepción y Aperitivos', description: 'Comenzamos la noche con tragos, buena música y los primeros abrazos.' },
        { time: '22:00', title: 'Cena de Reencuentro', description: 'Disfrutaremos de un menú especial mientras compartimos anécdotas.' },
        { time: '23:30', title: 'Video de Recuerdos', description: 'Un viaje emotivo a nuestros días en la escuela con fotos y videos de 1995.' },
        { time: '00:30', title: '¡A Bailar!', description: 'Nuestro DJ nos hará revivir los hits de los 90s y la mejor música actual.' },
        { time: '03:00', title: 'Brindis y Torta', description: 'Un momento para brindar por estos 30 años y por muchos más reencuentros.' },
        { time: '04:00', title: 'Fin de Fiesta', description: 'Despedida y promesas de no dejar pasar tanto tiempo para volver a vernos.' },
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