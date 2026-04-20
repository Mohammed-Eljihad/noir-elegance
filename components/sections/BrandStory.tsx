import Image from "next/image";

export function BrandStory() {
  return (
    <section
      id="story"
      className="relative bg-[#050505] overflow-hidden py-32 md:py-48 px-8 sm:px-14 lg:px-24 border-t border-white/5"
    >
      {/* Background Aesthetic */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0e0e0e]/40"></div>
        <Image
          alt="Atmospheric fragrance visual"
          className="object-cover opacity-10 mix-blend-screen scale-125 translate-x-20"
          src="/images/background-img-perfume.png"
          fill
          priority={false}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,169,106,0.05)_0%,transparent_70%)]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Story Text */}
        <div className="flex flex-col items-start space-y-12">
          <div className="opacity-60">
            <p className="font-body text-[9px] uppercase tracking-[0.4rem] text-[#C8A96A]">
              Heritage &amp; Craft
            </p>
          </div>
          <h2 className="font-display text-6xl md:text-8xl font-light text-white leading-[1.1] tracking-tight">
            A Trace of <br />
            <span className="italic text-[#C8A96A]">Presence.</span>
          </h2>
          <div className="space-y-10 max-w-xl">
            <p className="font-body text-xl md:text-2xl text-white/50 leading-relaxed font-light">
              Noir Élégance was born from the desire to capture the ephemeral.
              Inspired by the quiet moments between dusk and dawn, each note is
              a curated memory, a whisper of a time forgotten and a promise of a
              story yet to be told.
            </p>
            <p className="font-body text-base text-white/30 leading-relaxed italic border-l border-[#C8A96A]/20 pl-8">
              Crafted in limited drops, ensuring that your signature remains as
              exclusive as the moments you wear it for.
            </p>
          </div>
          <div className="pt-8">
            <a
              className="group flex items-center gap-6 font-body text-[10px] uppercase tracking-[0.3em] text-[#C8A96A] transition-all duration-300"
              href="/#contact"
            >
              <span>Read our manifesto</span>
              <div className="h-px w-16 bg-[#C8A96A]/30 group-hover:w-28 group-hover:bg-[#C8A96A] transition-all duration-500"></div>
            </a>
          </div>
        </div>
        {/* Immersive Visual */}
        <div className="relative rounded-xl aspect-square md:aspect-auto md:h-[800px] group overflow-hidden border border-white/5">
          <Image
            alt="Noir Elegance Heritage"
            src="/images/hero-img.png"
            className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110 grayscale group-hover:grayscale-0"
            fill
          />
          <div className="absolute inset-0 border-[32px] border-[#0e0e0e]/40 pointer-events-none"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#0e0e0e] via-transparent to-transparent opacity-60"></div>
          {/* Artistic Overlay Particles (Abstract Representation) */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#C8A96A] rounded-full blur-[1px] animate-pulse"></div>
            <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-[#C8A96A]/50 rounded-full blur-[2px] animate-pulse delay-700"></div>
            <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#C8A96A]/30 rounded-full blur-[1px] animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
