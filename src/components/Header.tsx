
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Twitter, Youtube, Music, Send, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'News', href: '#news' },
  { name: 'Music', href: '#music' },
  { name: 'Videos', href: '#gallery' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 border-b border-white/5 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-12 md:h-16">
        
        {/* Left: Nav & Toggle */}
        <div className="flex items-center gap-4 flex-1">
          <button 
            className="text-[#e7d2cf] hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
          
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e7d2cf] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center flex-1">
          <a href="#home" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>
        </div>

        {/* Right: Socials */}
        <div className="flex items-center justify-end gap-3 md:gap-5 flex-1">
          <div className="hidden md:flex items-center gap-4">
             <a href="#" className="text-[#e7d2cf] hover:text-white transition-colors opacity-80 hover:opacity-100"><Facebook size={16} /></a>
             <a href="https://www.instagram.com/mc.pablo15.off/" className="text-[#e7d2cf] hover:text-white transition-colors opacity-80 hover:opacity-100"><Instagram size={16} /></a>
             <a href="#" className="text-[#e7d2cf] hover:text-white transition-colors opacity-80 hover:opacity-100"><Twitter size={16} /></a>
             <a href="https://www.youtube.com/@mcpablo15.Officiel" className="text-[#e7d2cf] hover:text-white transition-colors opacity-80 hover:opacity-100"><Youtube size={16} /></a>
             <a href="#" className="text-[#e7d2cf] hover:text-white transition-colors opacity-80 hover:opacity-100"><Music size={16} /></a>
          </div>
          <button className="text-[#e7d2cf] hover:text-white transition-all">
            <Mail size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full max-w-[300px] bg-black z-[60] p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-[10px] font-black text-[#e7d2cf] tracking-[0.3em] uppercase">Navigation</span>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black text-white hover:text-[#e7d2cf] transition-colors uppercase italic"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-auto pt-10 border-t border-white/10">
                <p className="text-[9px] font-bold text-gray-500 tracking-[0.2em] mb-6 uppercase">Follow McPablo15</p>
                <div className="flex flex-wrap gap-6">
                  <a href="#" className="text-[#e7d2cf] hover:text-white transition-colors"><Facebook size={18} /></a>
                  <a href="https://www.instagram.com/mc.pablo15.off/" className="text-[#e7d2cf] hover:text-white transition-colors"><Instagram size={18} /></a>
                  <a href="#" className="text-[#e7d2cf] hover:text-white transition-colors"><Twitter size={18} /></a>
                  <a href="https://www.youtube.com/@mcpablo15.Officiel" className="text-[#e7d2cf] hover:text-white transition-colors"><Youtube size={18} /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
