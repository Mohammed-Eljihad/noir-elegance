"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#050505] py-32 sm:py-48 px-8 sm:px-14 lg:px-24 border-t border-white/5"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-32 max-w-3xl">
          <p className="font-body text-[9px] uppercase tracking-[0.4rem] text-[#C8A96A] mb-8">
            Voices of Elegance
          </p>

          <h2
            id="testimonials-heading"
            className="font-display text-5xl md:text-7xl font-light text-white mb-10 tracking-tight"
          >
            The Circle of <span className="italic">Noir.</span>
          </h2>

          <div className="h-px w-24 bg-[#C8A96A]/30 mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col items-center text-center group transition-all duration-500"
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 mb-10 rounded-full overflow-hidden ring-1 ring-white/5 group-hover:ring-[#C8A96A]/30 transition-all duration-500">
                <Image
                  src={testimonial.avatarUrl}
                  alt={`Portrait of ${testimonial.name}`}
                  fill
                  sizes="80px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  priority={testimonial.id === "testimonial-001"}
                  unoptimized
                />
              </div>

              {/* Rating */}
              <div
                className="flex gap-1 mb-8 text-[#C8A96A]/60"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span key={index} className="text-[10px]">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="font-body text-xl italic text-white/50 font-light mb-10 leading-relaxed">
                “{testimonial.text}”
              </blockquote>

              {/* Name */}
              <p className="font-display text-lg tracking-tight text-white mb-2">
                {testimonial.name}
              </p>

              {/* Role, Company, Location */}
              <p className="font-body text-[9px] text-[#C8A96A] uppercase tracking-[0.2em] opacity-60">
                {testimonial.role}
                {testimonial.company && `, ${testimonial.company}`}
              </p>

              {testimonial.location && (
                <p className="font-body text-[9px] text-white/20 mt-1 uppercase tracking-[0.2em]">
                  {testimonial.location}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
