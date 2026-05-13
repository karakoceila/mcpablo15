
export default function Footer() {
  return (
    <footer id="site-footer" className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Label Logo */}
          <div className="flex flex-col items-center gap-4">
             <img 
               src="/logo.png" 
               alt="McPablo15 Records" 
               className="h-12 w-auto grayscale brightness-200"
             />
             <p className="text-[10px] font-black text-[#e7d2cf] tracking-[0.2em] uppercase">
               © 2026 MCPABLO15 RECORDS
             </p>
          </div>

          {/* Legal Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {['Terms', 'Privacy', 'Cookie Choices'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-[10px] font-black text-[#e7d2cf] hover:text-white uppercase tracking-[0.2em] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
