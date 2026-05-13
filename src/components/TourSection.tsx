
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const tourDates = [
  { date: 'SEP 29', city: 'TO BE ANNOUNCED', venue: 'TO BE ANNOUNCED', status: 'STAY TUNED' },
  { date: 'DEC 31', city: 'TO BE ANNOUNCED', venue: 'TO BE ANNOUNCED', status: 'STAY TUNED' },
];

export default function TourSection() {
  return (
    <section id="tour" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-black mb-12 text-center uppercase tracking-tighter"
        >
          News
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {tourDates.map((tour, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-all group"
            >
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 w-full md:w-auto mb-4 md:mb-0">
                <span className="font-display text-2xl font-bold text-white min-w-[100px] text-center md:text-left">{tour.date}</span>
                <div className="text-center md:text-left">
                  <div className="font-black text-lg text-white uppercase">{tour.city}</div>
                  <div className="text-gray-500 text-sm font-bold uppercase">{tour.venue}</div>
                </div>
              </div>
              
              <button 
                disabled={tour.status === 'Sold Out'}
                className={`w-full md:w-auto px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                  tour.status === 'Sold Out' 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {tour.status}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-black text-xs uppercase tracking-[0.3em]">
            View All News <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
