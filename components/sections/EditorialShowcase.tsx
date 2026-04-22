"use client";
import Image from "next/image";

export function EditorialShowcase() {
  return (
    <section className="bg-[#0e0e0e] px-8 sm:px-14 lg:px-24 py-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
        <div className="max-w-2xl">
          <p className="font-body text-[9px] uppercase tracking-[0.4rem] text-[#C8A96A] mb-6">
            L'Art de Parfumerie
          </p>
          <h2 className="font-display font-light text-5xl md:text-6xl text-white mb-8 leading-[1.1]">
            The Sensory <span className="italic">Collection.</span>
          </h2>
          <p className="font-body text-white/40 leading-relaxed max-w-lg">
            Curated experiences designed to transcend the ordinary. Each vessel
            holds a story untold, waiting for your pulse to bring it to life.
          </p>
        </div>
        <div className="pb-2">
          <button
            onClick={() =>
              document
                .getElementById("collection")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-body text-[10px] uppercase tracking-[0.25rem] text-secondary border-b border-secondary/20 pb-2 hover:border-secondary hover-effect"
          >
            Explore Entire Series
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 rounded-xl group relative aspect-video bg-[#0a0a0a] overflow-hidden border border-white/5">
          <Image
            alt="Artistic fragrance display"
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-60 md:opacity-40 group-hover:opacity-60 md:grayscale group-hover:grayscale-0"
            src="/images/collection-1.png"
            fill
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0e0e0e] via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-12 left-12 group-hover:translate-x-2 transition-transform duration-500">
            <p className="font-body text-[9px] uppercase tracking-[0.3rem] text-[#C8A96A] mb-4">
              New Release
            </p>
            <h3 className="font-display font-light text-4xl text-white">
              Midnight Silk
            </h3>
          </div>
        </div>
        <div className="md:col-span-4 group rounded-xl relative aspect-4/5 bg-[#0a0a0a] overflow-hidden border border-white/5">
          <Image
            alt="Detail of ingredients"
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-50 md:opacity-30 group-hover:opacity-50 md:grayscale group-hover:grayscale-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ0I1KzC-RmiRuTc4JDf3rNffJCvWpW6ebkiqNDT8D_OyLlMsA3KyDLdZd5lYhsNjE-uN7y6ygbFCLpWSpVSb_rg0IJ5ZFaZdhIDWKtZV36ZmmY-F81bncFRFvVNBDvEIaHfKkWxUJAtUAWR8DLAuhLOFD6L2xvQuXq6e4QNQQA-D7ILiN2HqnWaDAn4o4gB0j8qrIAvSOq373nhgytxz3dVTta_2gNMiNfMCdKpKl8x-Jl3JXfXR7wMk-X9ApMhUmunErxMbC919P"
            fill
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0e0e0e] via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-12 left-12 group-hover:translate-x-2 transition-transform duration-500">
            <p className="font-body text-[9px] uppercase tracking-[0.3rem] text-[#C8A96A] mb-4">
              Limited Edition
            </p>
            <h3 className="font-display font-light text-4xl text-white">
              Earthbound
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
