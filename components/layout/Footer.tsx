"use client";
import Logo from "../shared/Logo";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#050505] pt-32 pb-12 px-8 sm:px-14 lg:px-24 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <Logo className="mb-20 scale-125 transition-transform duration-700 hover:scale-130" />
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 justify-between w-full mb-24 border-b border-white/5 pb-24">
          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-32">
            <div>
              <h4 className="font-body text-[9px] uppercase tracking-[0.4rem] text-[#C8A96A] mb-8">
                Collections
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    className="font-body text-xs text-white/40 hover:text-[#C8A96A] transition-all duration-300"
                    href="/#collection"
                  >
                    L'Ombre
                  </a>
                </li>
                <li>
                  <a
                    className="font-body text-xs text-white/40 hover:text-[#C8A96A] transition-all duration-300"
                    href="/#collection"
                  >
                    Minuit
                  </a>
                </li>
                <li>
                  <a
                    className="font-body text-xs text-white/40 hover:text-[#C8A96A] transition-all duration-300"
                    href="/#collection"
                  >
                    Éternel
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-body text-[9px] uppercase tracking-[0.4rem] text-[#C8A96A] mb-8">
                About
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    className="font-body text-xs text-white/40 hover:text-[#C8A96A] transition-all duration-300"
                    href="/#story"
                  >
                    The Maison
                  </a>
                </li>
                <li>
                  <a
                    className="font-body text-xs text-white/40 hover:text-[#C8A96A] transition-all duration-300"
                    href="/#story"
                  >
                    Craftsmanship
                  </a>
                </li>
                <li>
                  <a
                    className="font-body text-xs text-white/40 hover:text-[#C8A96A] transition-all duration-300"
                    href="/#story"
                  >
                    Journal
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-sm">
            <h4 className="font-body text-[9px] uppercase tracking-[0.4rem] text-[#C8A96A] mb-8">
              Join the Inner Circle
            </h4>
            <p className="font-body text-sm text-white/30 mb-10 leading-relaxed font-light">
              Subscribe to receive exclusive access to limited drops, private
              events, and our editorial journal.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-between w-full border-b border-white/5 pb-3"
            >
              <input
                className="bg-transparent border-none outline-none font-body text-sm text-white w-full placeholder:text-white/10"
                placeholder="Email Address"
                type="email"
              />
              <button
                type="submit"
                className="font-body text-[10px] uppercase tracking-[0.3em] text-[#C8A96A]/60 hover:text-white transition-all duration-500 shrink-0 ml-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <p className="font-body text-[9px] uppercase tracking-[0.3em] text-white/10">
            © 2024 NOIR ÉLÉGANCE. All Rights Reserved.
          </p>
          <div className="flex gap-10 mt-10 md:mt-0">
            <a
              className="font-body text-[9px] uppercase tracking-[0.3em] text-white/20 hover:text-[#C8A96A] transition-all duration-500"
              href="#"
            >
              Instagram
            </a>
            <a
              className="font-body text-[9px] uppercase tracking-[0.3em] text-white/20 hover:text-[#C8A96A] transition-all duration-500"
              href="#"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
