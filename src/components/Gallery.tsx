
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const videos = [
  { id: 1, title: 'SKAM', thumbnail: '/skamthumb.jpg', url: 'https://www.youtube.com/watch?v=AOk2p2yrvFg' },
  { id: 2, title: 'HEYATI', thumbnail: '/heyatithumb.jpg', url: 'https://www.youtube.com/watch?v=AATKEew4u2g' },
  { id: 3, title: 'COMING SOON', thumbnail: '/thumb3.jpg', url: '#' },
];

export default function Gallery() {
  const handleVideoClick = (url: string) => {
    if (url !== '#') {
      window.open(url, '_blank');
    }
  };
  return (
    <section id="gallery" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter">Videos</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {videos.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => handleVideoClick(vid.url)}
            >
              <div className="relative aspect-video overflow-hidden rounded-sm bg-neutral-900 mb-6">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:scale-110 transition-transform">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-black text-[#e7d2cf] uppercase tracking-wider line-clamp-2 text-center group-hover:text-white transition-colors">
                {vid.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
