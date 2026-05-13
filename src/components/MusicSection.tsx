
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Play, Apple as AppleMusic, Speaker, Music2, Share2 } from 'lucide-react';

const albums = [
  { id: 1, title: 'SKAM', artist: 'MCPABLO15', cover: '/skamthumb600x600.jpg' },
  { id: 2, title: 'HEYATI', artist: 'MCPABLO15', cover: '/heyatithumb600x600.jpg' },
  { id: 3, title: 'COMING SOON', artist: 'MCPABLO15', cover: '/music1.jpg' },
  { id: 4, title: 'COMING SOON', artist: 'MCPABLO15', cover: '/music2.jpg' },
];

export default function MusicSection() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <section id="music" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
        >
          Music
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {albums.map((album) => (
            <div key={album.id} className="relative group">
              <div className="aspect-square overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
                <img 
                  src={album.cover} 
                  alt={album.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="mt-6 flex flex-col items-center">
                {/* Custom Linkfire-style Dropdown */}
                <div className="w-full space-y-2">
                  <div className="flex flex-col items-center mb-4">
                    <h3 className="font-bold text-white text-lg tracking-tight">{album.title}</h3>
                    <p className="text-gray-500 text-xs font-bold tracking-widest">{album.artist}</p>
                  </div>

                  <button 
                    onClick={() => toggleDropdown(album.id)}
                    className="w-full py-3 bg-white text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
                  >
                    Listen Now <ChevronDown size={14} className={`transition-transform ${activeDropdown === album.id ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === album.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-neutral-900 border border-white/10 rounded-sm"
                      >
                        <div className="flex flex-col">
                          {[
                            { name: 'Apple Music', icon: AppleMusic },
                            { name: 'Spotify', icon: Speaker },
                            { name: 'YouTube', icon: Play },
                            { name: 'Deezer', icon: Music2 },
                          ].map((plat) => (
                            <a 
                              key={plat.name}
                              href="#" 
                              className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/[0.03] transition-colors group/item"
                            >
                              <div className="flex items-center gap-3">
                                <plat.icon size={16} className="text-gray-400 group-hover/item:text-white" />
                                <span className="text-[10px] font-black uppercase tracking-wider text-gray-300 group-hover/item:text-white">{plat.name}</span>
                              </div>
                              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Listen</span>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
