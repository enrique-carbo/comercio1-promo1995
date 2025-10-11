import React, { useState, useEffect } from 'react';

interface CountdownProps   { targetDate: string }
interface TimeLeft         { días: number; horas: number; minutos: number; segundos: number }

const CountdownTwo: React.FC<CountdownProps> = ({ targetDate }) => {
  const calc = (): TimeLeft | {} => {
    const diff = +new Date(targetDate) - +new Date();
    if (diff <= 0) return {};
    return {
      días:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      horas:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((diff / 1000 / 60) % 60),
      segundos:Math.floor((diff / 1000) % 60),
    };
  };

  const [left, setLeft] = useState<TimeLeft | {}>(calc);
  useEffect(() => { const t = setTimeout(() => setLeft(calc), 1000); return () => clearTimeout(t); });

  const pad = (n: number) => String(n).padStart(2, '0');

  const isTime = (v: any): v is TimeLeft => 'días' in v;
  if (!isTime(left)) return (
    <div className="bg-brand-dark/50 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center text-2xl text-brand-light">¡El gran día ha llegado!</div>
    </div>
  );

  return (
    <div className="bg-brand-dark/50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Móvil: 2 filas */}
        <div className="flex flex-col items-center gap-6 sm:hidden">
          <div className="flex gap-4">
            <Box val={left.días}  lbl="días" />
            <Box val={left.horas} lbl="horas" />
          </div>
          <div className="flex gap-4">
            <Box val={left.minutos}  lbl="minutos" />
            <Box val={left.segundos} lbl="segundos" />
          </div>
        </div>

        {/* Desktop: 1 fila */}
        <div className="hidden sm:flex justify-center gap-6">
          <Box val={left.días}  lbl="días" />
          <Box val={left.horas} lbl="horas" />
          <Box val={left.minutos}  lbl="minutos" />
          <Box val={left.segundos} lbl="segundos" />
        </div>
      </div>
    </div>
  );
};

/* Caja simétrica y grande */
const Box: React.FC<{ val: number; lbl: string }> = ({ val, lbl }) => (
  <div className="flex flex-col items-center justify-center
                  w-28 h-28 sm:w-32 sm:h-32
                  bg-brand-light/5 rounded-xl shadow-lg">
    <span className="text-5xl sm:text-6xl font-bold text-brand-primary">{String(val).padStart(2,'0')}</span>
    <span className="text-xs sm:text-sm uppercase text-brand-text-light/80 mt-1">{lbl}</span>
  </div>
);

export default CountdownTwo;