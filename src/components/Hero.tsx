"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    type NetworkInformation = { saveData?: boolean };
    const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    if (!reduced && !conn?.saveData) setUseVideo(true);
  }, []);

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      {/* Background: video with photo fallback */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-main.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
        {useVideo && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-main.jpeg"
            onError={() => setUseVideo(false)}
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-32 text-center">
        <p className="font-display text-xl tracking-[0.35em] text-teal-light sm:text-2xl">
          Glendora, California &middot; Since 2004
        </p>
        <h1 className="font-display mt-4 text-6xl leading-[0.95] text-white sm:text-8xl">
          Welcome to
          <br />
          Route 66 Car Wash
        </h1>
        <div className="road-line mx-auto mt-6 w-48" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
          When you&rsquo;re in need of a car wash in Glendora, head to Route 66
          Car Wash! Our friendly staff will have your car looking like you just
          drove it off the lot.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-teal px-8 py-3.5 font-display text-xl tracking-wider text-white shadow-lg shadow-teal/40 transition-all hover:bg-teal-dark"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="glass rounded-full px-8 py-3.5 font-display text-xl tracking-wider text-white transition-colors hover:border-teal-light"
          >
            Our Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-teal/60">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
