import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Define the wedding date in WAT (UTC+1)
    const weddingDate = new Date('2025-04-26T10:00:00+01:00').getTime(); // WAT time (UTC+1)

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-4 sm:space-x-8 md:space-x-12 animate-fade-in">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-3xl sm:text-5xl md:text-6xl font-playfair font-bold text-wedding-sand">
            {value}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-wedding-cream font-cormorant uppercase tracking-wider">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;