import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Compass, Calendar, Briefcase, BookOpen, ShoppingBag } from 'lucide-react';

export default function Home() {
  const [days, setDays] = useState(3);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);

      if (difference <= 0) {
        clearInterval(interval);
      }
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
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  const features = [
    { icon: <Calendar className="text-green-600" size={24} />, name: "Events" },
    { icon: <Briefcase className="text-green-600" size={24} />, name: "Jobs" },
    { icon: <BookOpen className="text-green-600" size={24} />, name: "Blogs" },
    { icon: <ShoppingBag className="text-green-600" size={24} />, name: "Marketplace" },
    { icon: <Compass className="text-green-600" size={24} />, name: "Community" },
  ];

  return (
    <>
      <Head>
        <title>Muslim Compass - Coming Soon</title>
      </Head>
      
      <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden islamic-pattern">
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
          className="tilt-card relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl w-full border border-green-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Logo and Content */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative"
              >
                <div className="absolute -inset-4 bg-green-100 rounded-full opacity-50 animate-pulse"></div>
                <Image 
                  src="https://i.imgur.com/YQjjBpM.png" 
                  alt="Muslim Compass Logo" 
                  width={150}
                  height={150}
                  className="relative animate-float"
                />
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold text-green-800 mb-4 text-center md:text-left font-serif"
                style={{ transform: 'translateZ(40px)' }}
              >
                Muslim Compass
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl md:text-2xl text-green-700 mb-8 text-center md:text-left"
                style={{ transform: 'translateZ(30px)' }}
              >
                Your Guide to the Muslim Community
              </motion.p>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-gray-600 mb-10 text-center md:text-left max-w-md"
                style={{ transform: 'translateZ(20px)' }}
              >
                Connecting you with events, opportunities, and resources in your local Muslim community.
              </motion.p>

              {/* Features */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="grid grid-cols-3 gap-6 mb-8 w-full"
                style={{ transform: 'translateZ(30px)' }}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                    className="flex flex-col items-center gap-2 bg-green-50 p-4 rounded-xl hover:bg-green-100 transition-colors"
                  >
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-green-800">{feature.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Countdown Timer */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col items-center"
              style={{ transform: 'translateZ(50px)' }}
            >
              <h2 className="text-2xl font-semibold text-green-800 mb-6 font-serif">Launching In</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                    {days}
                  </div>
                  <span className="text-sm mt-2 text-gray-600 font-medium">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                    {hours}
                  </div>
                  <span className="text-sm mt-2 text-gray-600 font-medium">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                    {minutes}
                  </div>
                  <span className="text-sm mt-2 text-gray-600 font-medium">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                    {seconds}
                  </div>
                  <span className="text-sm mt-2 text-gray-600 font-medium">Seconds</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gold-200 rounded-full opacity-50 blur-md"></div>
          <div className="absolute -top-3 -left-3 w-16 h-16 bg-green-200 rounded-full opacity-50 blur-md"></div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 text-center text-green-800"
        >
          <p>© 2025 Muslim Compass. All rights reserved.</p>
        </motion.div>
      </div>
    </>
  );
}