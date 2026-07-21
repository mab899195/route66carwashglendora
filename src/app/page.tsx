import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Services from "@/components/Services";

const amenities = [
  { icon: "🥤", label: "Convenience Store" },
  { icon: "🌀", label: "Vacuum Stations" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Quick info bar */}
        <section className="border-y border-teal/15 bg-sky">
          <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-teal/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="px-6 py-4 text-center">
              <p className="font-display text-lg tracking-widest text-teal">Open Daily</p>
              <p className="font-semibold text-ink">8:00 AM – 7:30 PM</p>
            </div>
            <a href="tel:+16269632600" className="px-6 py-4 text-center transition-colors hover:bg-teal/5">
              <p className="font-display text-lg tracking-widest text-teal">Call Us</p>
              <p className="font-semibold text-ink">(626) 963-2600</p>
            </a>
            <div className="px-6 py-4 text-center">
              <p className="font-display text-lg tracking-widest text-teal">Find Us</p>
              <p className="font-semibold text-ink">525 E. Route 66, Glendora, CA</p>
            </div>
          </div>
        </section>

        <Services />

        {/* Why us */}
        <section id="about" className="scroll-mt-16 bg-white pt-10 pb-20 sm:pt-12 sm:pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="font-display text-xl tracking-[0.3em] text-teal">Why Route 66</p>
              <h2 className="font-display mt-2 text-5xl text-ink sm:text-6xl">
                The Best Wash on the Mother Road
              </h2>
              <div className="road-line mt-5 w-40" />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Fast & Efficient",
                  body: "State-of-the-art automated equipment for shiny, squeaky-clean results every time — without the wait.",
                },
                {
                  title: "Since 1997",
                  body: "Nearly 30 years serving Glendora and the surrounding area with affordable, quality washes.",
                },
                {
                  title: "Historic Route 66",
                  body: "Stretching across eight states, three time zones, and 2,000+ miles — your car gets messy on the Mother Road. That's what we're here for.",
                },
              ].map((card, i) => (
                <Reveal key={card.title} delay={i * 120}>
                  <div className="card-light h-full rounded-2xl p-8">
                    <h3 className="font-display text-3xl text-teal">{card.title}</h3>
                    <p className="mt-3 text-ink/80">{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section id="photos" className="scroll-mt-20 bg-sky py-16">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="font-display text-xl tracking-[0.3em] text-teal">Amenities</p>
              <h2 className="font-display mt-2 text-5xl text-ink sm:text-6xl">While You Wait</h2>
              <div className="road-line mt-5 w-40" />
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {amenities.map((a, i) => (
                <Reveal key={a.label} delay={i * 80}>
                  <div className="card-light rounded-xl px-4 py-6 text-center">
                    <div className="text-3xl" aria-hidden>{a.icon}</div>
                    <p className="font-display mt-2 text-xl tracking-wide text-teal">{a.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 bg-sky pt-10 pb-20 sm:pt-12 sm:pb-28">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <p className="font-display text-xl tracking-[0.3em] text-teal">Find Us</p>
              <h2 className="font-display mt-2 text-5xl text-ink sm:text-6xl">Visit Us</h2>
              <div className="road-line mt-5 w-40" />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10 card-light rounded-2xl p-8">
                <h3 className="font-display text-3xl text-ink">Hours</h3>
                <dl className="mt-4 space-y-2 text-ink/80">
                  <div className="flex justify-between border-b border-teal/15 pb-2">
                    <dt>Monday – Sunday</dt>
                    <dd className="font-semibold text-ink">8:00 AM – 7:30 PM</dd>
                  </div>
                  <div className="flex justify-between pt-1">
                    <dt>Full Service</dt>
                    <dd className="font-semibold text-ink">8:00 AM – 6:00 PM</dd>
                  </div>
                </dl>
                <p className="mt-6 text-ink/80">
                  525 E. Route 66, Glendora, CA 91740
                  <br />
                  <a href="tel:+16269632600" className="text-teal hover:underline">
                    (626) 963-2600
                  </a>
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <iframe
                title="Route 66 Car Wash location map"
                src="https://www.google.com/maps?q=525+E+Route+66,+Glendora,+CA+91740&output=embed"
                className="mt-6 h-80 w-full rounded-2xl border border-teal/20"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-teal/15 bg-white py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Image
            src="/images/logo-new.png"
            alt="Route 66 Car Wash Glendora logo"
            width={72}
            height={72}
            className="mx-auto"
          />
          <p className="font-display mt-4 text-2xl text-ink">Route 66 Car Wash</p>
          <p className="mt-1 text-ink/70">
            525 E. Route 66, Glendora, CA 91740 · (626) 963-2600
          </p>
          <div className="mt-5 flex justify-center gap-6 text-ink/70">
            <a href="https://www.facebook.com/474387949439096" target="_blank" rel="noopener noreferrer" className="hover:text-teal">Facebook</a>
            <a href="https://www.instagram.com/route66carwashca" target="_blank" rel="noopener noreferrer" className="hover:text-teal">Instagram</a>
            <a href="https://www.x.com/Route66_CarWash" target="_blank" rel="noopener noreferrer" className="hover:text-teal">X</a>
            <a href="https://www.yelp.com/biz/8Qiq5-vuhVmJIb-i33yiBg" target="_blank" rel="noopener noreferrer" className="hover:text-teal">Yelp</a>
          </div>
          <p className="mt-6 text-sm text-ink/50">
            Copyright © 2026 Route 66 Car Wash — All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
