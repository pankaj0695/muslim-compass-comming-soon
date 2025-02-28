import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function App() {
  const [days, setDays] = useState(3);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetDate = new Date("March 3, 2025 10:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden islamic-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-600 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      {/* Main Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-12 max-w-5xl w-full border border-green-100 flex flex-col items-center justify-center min-h-[70vh]"
      >
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Logo and Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-8 relative"
          >
            <div className="absolute -inset-4 bg-green-100 rounded-full opacity-50 animate-pulse"></div>
            <img
              src="/muslim-compass-logo.png"
              alt="Muslim Compass Logo"
              className="w-24 h-24 md:w-36 md:h-36 object-contain relative animate-float"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-green-800 mb-4 font-serif"
            style={{ transform: "translateZ(40px)" }}
          >
            Muslim Compass
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl text-green-700 mb-4"
            style={{ transform: "translateZ(30px)" }}
          >
            Your Guide to the Muslim Community
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-600 mb-10 md:mb-16 max-w-md"
            style={{ transform: "translateZ(20px)" }}
          >
            Connecting you with events, opportunities, and resources in your
            local Muslim community.
          </motion.p>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-green-800 mb-8 md:mb-10 font-serif"
          >
            COMING SOON
          </motion.h2>

          {/* Countdown Timer */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-10"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-24 md:h-24 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl flex items-center justify-center text-xl md:text-3xl font-bold shadow-lg">
                {days}
              </div>
              <span className="text-sm mt-2 text-green-800 font-medium">
                Days
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-24 md:h-24 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl flex items-center justify-center text-xl md:text-3xl font-bold shadow-lg">
                {hours}
              </div>
              <span className="text-sm mt-2 text-green-800 font-medium">
                Hours
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-24 md:h-24 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl flex items-center justify-center text-xl md:text-3xl font-bold shadow-lg">
                {minutes}
              </div>
              <span className="text-sm mt-2 text-green-800 font-medium">
                Minutes
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-24 md:h-24 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl flex items-center justify-center text-xl md:text-3xl font-bold shadow-lg">
                {seconds}
              </div>
              <span className="text-sm mt-2 text-green-800 font-medium">
                Seconds
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-green-800">
        <p className="font-medium">
          © 2025 Muslim Compass. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
