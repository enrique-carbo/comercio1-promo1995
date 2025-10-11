import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  días: number;
  horas: number;
  minutos: number;
  segundos: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft | {} => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft | {} = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval as keyof TimeLeft] && timeLeft[interval as keyof TimeLeft] !== 0) {
      return null;
    }

    return (
      <div key={interval} className="flex flex-col items-center justify-center bg-brand-light/5 p-4 rounded-lg min-w-[80px] sm:min-w-[100px] shadow-lg">
        <span className="text-3xl sm:text-5xl font-bold text-brand-primary">
          {String(timeLeft[interval as keyof TimeLeft]).padStart(2, '0')}
        </span>
        <span className="text-sm sm:text-base uppercase text-brand-text-light/80 mt-2">{interval}</span>
      </div>
    );
  });

  return (
    <div className="bg-brand-dark/50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-2 sm:space-x-4 text-center">
          {timerComponents.length ? timerComponents : <span className="text-2xl text-brand-light">¡El gran día ha llegado!</span>}
        </div>
      </div>
    </div>
  );
};

export default Countdown;