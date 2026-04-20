import Image from "next/image";

export function FeaturedFragrances() {
  return (
    <section id="collection" className="bg-[#0e0e0e] py-32 sm:py-48 px-8 sm:px-14 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 max-w-3xl mx-auto">
          <p className="font-body text-[9px] uppercase tracking-[0.4rem] text-[#C8A96A] mb-8">
            Collections Privées
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-white mb-10 tracking-tight">
            Featured <span className="italic">Fragrances</span>
          </h2>
          <p className="font-body text-white/40 leading-relaxed text-lg max-w-2xl mx-auto">
            Discover our most coveted creations, where each fragrance embodies
            elegance, mystery, and timeless sophistication.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 items-center">
          {/* Product 1: Noir Essence */}
          <div className="md:col-span-5 group">
            <div className="relative bg-[#0a0a0a] aspect-3/4 rounded-xl overflow-hidden mb-10 border border-white/5">
              <Image
                alt="Noir Essence Fragrance"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                src="/images/noir-essence.png"
                fill
              />
              <div className="absolute inset-0 bg-[#0e0e0e]/30 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-4xl text-white font-light">
                Noir Essence
              </h3>
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#C8A96A]">
                Amber &amp; Musk
              </p>
              <button className="mt-8 flex items-center gap-4 font-body text-[9px] uppercase tracking-[0.3em] text-white/50 hover:text-[#C8A96A] transition-all duration-500 group/btn">
                <span>Discover the Fragrance</span>
                <div className="h-px w-10 bg-[#C8A96A]/30 group-hover/btn:w-16 group-hover/btn:bg-[#C8A96A] transition-all duration-500"></div>
              </button>
            </div>
          </div>
          <div className="hidden md:block md:col-span-2"></div>
          {/* Product 2: Velvet Rose (Asymmetrical Offset) */}
          <div className="md:col-span-5 md:-mt-32 group">
            <div className="relative bg-[#0a0a0a] rounded-xl aspect-4/5 overflow-hidden mb-10 border border-white/5">
              <Image
                alt="Velvet Rose Fragrance"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK1tp0JnI0Dvsz32oEPC8bjHACpUMeRfSVoQKd4bXLA8XJXwcm4HbOSmSnNqRHLCIFyMZ_U_c2bt3VxBbbLXkyUk8_2uaB6_yzAPy3kPBHgBrbGz94TwfnCJCcHH5N2gsV19GnC-LxZ_WALnszOIVhI0bofvR5aJRkCDpTOmZLZbFxvcG0FJUFTrcxwRFz8GE8zZ28hMFigh5jfU58Y35m4RAnX-4CpFMbBiYBvY5O4sa3z_pxqrGPg4pdXmy5OXGlawOo1gZllgpZ"
                fill
              />
              <div className="absolute inset-0 bg-[#0e0e0e]/30 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-4xl text-white font-light">
                Velvet Rose
              </h3>
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#C8A96A]">
                Damask Rose &amp; Vanilla
              </p>
              <button className="mt-8 flex items-center gap-4 font-body text-[9px] uppercase tracking-[0.3em] text-white/50 hover:text-[#C8A96A] transition-all duration-500 group/btn">
                <span>Discover the Fragrance</span>
                <div className="h-px w-10 bg-[#C8A96A]/30 group-hover/btn:w-16 group-hover/btn:bg-[#C8A96A] transition-all duration-500"></div>
              </button>
            </div>
          </div>
          {/* Product 3: Golden Oud */}
          <div className="md:col-span-6 group">
            <div className="relative bg-[#0a0a0a] aspect-video rounded-xl overflow-hidden mb-10 border border-white/5">
              <Image
                alt="Golden Oud Fragrance"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXa_6pL-mEwTncttEAsVUkKcrbeUjj7zLLJQUYJZxJ96_7fmg5NR7mdPGWsJauf4qhoM2TMO66y6qjcyGl3A6u9EDabIW0b3RKs02neCeWp-Z0oO6hQ8IXP58WvTQVogkRj9XA9unNqXQ4T6zIntPVEdcqe6_BvtceevHPPqbOQgi4Zbq6cOaBZF1Q8GuL3UYkI0TEtZMKu2BhuRHLrU9DDbcBLIIp4sih44-Y7W_sLsc8zqWY3xmFoa8_TfBlWttoGedvdS55Rj3T"
                fill
              />
              <div className="absolute inset-0 bg-[#0e0e0e]/30 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-4xl text-white font-light">
                Golden Oud
              </h3>
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#C8A96A]">
                Oud &amp; Saffron
              </p>
              <button className="mt-8 flex items-center gap-4 font-body text-[9px] uppercase tracking-[0.3em] text-white/50 hover:text-[#C8A96A] transition-all duration-500 group/btn">
                <span>Discover the Fragrance</span>
                <div className="h-px w-10 bg-[#C8A96A]/30 group-hover/btn:w-16 group-hover/btn:bg-[#C8A96A] transition-all duration-500"></div>
              </button>
            </div>
          </div>
          <div className="hidden md:block md:col-span-1"></div>
          {/* Product 4: Midnight Amber */}
          <div className="md:col-span-5 md:mt-24 group">
            <div className="relative bg-[#0a0a0a] rounded-xl aspect-3/4 overflow-hidden mb-10 border border-white/5">
              <Image
                alt="Midnight Amber Fragrance"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYE1rLNyMbgjrCyYCffSlVAOaVnvdsWRE-OGGHbGsK44x2ET7FD75ZgHNRb37acHl-ZQit08EAFLmMgWdvqKOoJWPLkiZWioQTkA4V9qylfSGDDnKWIbODdR_hrp1roaiAtB6VzDU3os2csDMpjA6Tzc29uFd3BS5fG6wx0hOP9htqCXUf6KVBWJnYFQI9TNLPcHcY-Uiutj-sZU_H1EFmxOnme1xwEhA_asxsY2XkyQpxQBfd7E6meMCn58OcCcV74_RZvfqhr7cy"
                fill
              />
              <div className="absolute inset-0 bg-[#0e0e0e]/30 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-4xl text-white font-light">
                Midnight Amber
              </h3>
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#C8A96A]">
                Amber &amp; Spices
              </p>
              <button className="mt-8 flex items-center gap-4 font-body text-[9px] uppercase tracking-[0.3em] text-white/50 hover:text-[#C8A96A] transition-all duration-500 group/btn">
                <span>Discover the Fragrance</span>
                <div className="h-px w-10 bg-[#C8A96A]/30 group-hover/btn:w-16 group-hover/btn:bg-[#C8A96A] transition-all duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
