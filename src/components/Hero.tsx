
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Music, ExternalLink } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image / Banner Style */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/mcpablo_banner/2560/1440" 
          alt="Banner" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="inline-block p-10 md:p-20"
        >
          {/* Logo or Brand Mark in the center if requested, but site just has banner */}
          <h1 className="font-display text-7xl md:text-[12rem] font-black text-white leading-none tracking-tighter mix-blend-difference">
            WHAM
          </h1>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent opacity-50" />
      </div>
    </section>
  );
}
