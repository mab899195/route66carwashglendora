import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

const washPackages = [
  {
    title: "Silver Wash",
    price: "$24.99",
    img: "/images/hero-main.jpeg",
    features: [
      "Tunnel wash",
      "Tire dressing",
      "Dusting of dash & console",
      "Clean windows",
      "Sealer and polish wax",
      "Air fragrance of choice",
      "Trunk vacuum (upon request)",
      "Basic Vacuum",
    ],
    note: null,
  },
  {
    title: "Gold Wash",
    price: "$29.99",
    img: "/images/exterior-full.jpeg",
    features: [
      "Everything in Silver, plus:",
      "Clean front cup holder",
      "Rainbow Wax",
      "Lava Shine",
    ],
    note: "Small trucks & SUVs +$2 · Large SUVs & double-cab trucks +$4",
  },
  {
    title: "VIP Wash",
    price: "$39.99",
    img: "/images/clean-suv.jpeg",
    features: [
      "Everything in Gold, plus:",
      "Hand spray wax",
      "All cup holders cleaned",
      "Air blow vacuum",
      "Backside of driver & passenger seats wiped (leather only)",
    ],
    note: "Non-original tire size +$5",
  },
  {
    title: "Hand Wash",
    price: "From $45",
    img: "/images/detailing-work.jpeg",
    features: [
      "Soft wash",
      "Interior vacuum",
      "Dusting of dash & console",
      "Tire dressing",
      "Wheels cleaned & wiped",
      "Sedan $45 · Small trucks & SUVs $55",
    ],
    note: "We also wash and detail boats & RVs",
  },
];

const extraServices = [
  { label: "Engine Wash", price: "Ask manager" },
  { label: "Pet hair removal", price: "Ask manager" },
  { label: "Water spot in windows", price: "Ask manager" },
  { label: "Bug removal", price: "Ask manager" },
  { label: "Odor removal", price: "$80" },
  { label: "Deep & heavy scratch reduction", price: "$99 / panel" },
  { label: "Water spot in paint", price: "$99 / panel" },
  { label: "Over spray removal", price: "$99 / panel" },
  { label: "Tar removal", price: "$99 / panel" },
  { label: "Tree sap removal", price: "$79.99 / panel" },
  { label: "Beach sand removal", price: "$125 / hr" },
  { label: "One spot in carpet or seat", price: "$125 / hr" },
  { label: "Floor mat wash", price: "$79.99" },
  { label: "Headlight restoration", price: "$49.99 / ea." },
  { label: "Windshield chip repair", price: "Now available" },
];

const expressTiers = [
  {
    title: "Basic",
    color: "bg-gray-500",
    badge: null,
    singleWash: "$10",
    monthlyClub: "$19.99",
    features: [
      "Soft Cloth Wash",
      "Sealant Wax",
      "Free Self Vacuum",
      "Wheel Blaster",
    ],
  },
  {
    title: "Gold",
    color: "bg-yellow-600",
    badge: null,
    singleWash: "$13",
    monthlyClub: "$27.99",
    features: [
      "Soft Cloth Wash",
      "Sealant Wax",
      "Free Self Vacuum",
      "Wheel Blaster",
      "Wheel Brite",
      "Triple Foam Wax & Conditioner",
      "Tire Shine",
    ],
  },
  {
    title: "Diamond",
    color: "bg-sky-500",
    badge: "Best Value",
    singleWash: "$15",
    monthlyClub: "$29.99",
    features: [
      "Soft Cloth Wash",
      "Sealant Wax",
      "Free Self Vacuum",
      "Wheel Blaster",
      "Wheel Brite",
      "Triple Foam Wax & Conditioner",
      "Tire Shine",
      "Sonic Blower",
      "Super Dry & Shine",
      "Clear Coat Wax",
    ],
  },
  {
    title: "VIP",
    color: "bg-teal",
    badge: null,
    singleWash: "$18",
    monthlyClub: "$34.99",
    features: [
      "Soft Cloth Wash",
      "Sealant Wax",
      "Free Self Vacuum",
      "Wheel Blaster",
      "Wheel Brite",
      "Triple Foam Wax & Conditioner",
      "Tire Shine",
      "Sonic Blower",
      "Super Dry & Shine",
      "Clear Coat Wax",
      "Underbody Spray",
      "Lava Shine Wax",
      "Ceramic Wax",
      "Extreme Shine Ceramic",
    ],
  },
];

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

        {/* Services */}
        <section id="services" className="scroll-mt-16 bg-sky pt-10 pb-20 sm:pt-12 sm:pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="font-display text-xl tracking-[0.3em] text-teal">What We Do</p>
              <h2 className="font-display mt-2 text-5xl text-ink sm:text-6xl">Full Service</h2>
              <div className="road-line mt-5 w-40" />
              <p className="mt-6 max-w-3xl text-ink/80">
                All washes are tunnel wash with hand dry. Prep Wash add-ons available starting at $14.99.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:grid-rows-2">
              {washPackages.map((s, i) => (
                <Reveal key={s.title} delay={(i % 2) * 120} className="h-full">
                  <div className="card-light group overflow-hidden rounded-2xl flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-display text-3xl text-ink">{s.title}</h3>
                        <span className="shrink-0 rounded-full bg-teal px-4 py-1.5 font-display text-xl text-white shadow">
                          {s.price}
                        </span>
                      </div>
                      <ul className="mt-3 space-y-1 text-ink/75">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <span className="mt-1 text-teal">✓</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      {s.note && (
                        <p className="mt-4 text-sm text-ink/50 italic">{s.note}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Disclaimer */}
            <Reveal delay={100}>
              <div className="mt-10 rounded-2xl border border-teal/20 bg-white/70 px-6 py-5 text-sm text-ink/70">
                <strong className="text-ink">Note:</strong> The above washes are tunnel wash and hand dry only. Bugs, pollen, bird droppings, tree sap, and other stubborn stains may not come out with a standard wash. Ask about our Prep Wash add-ons starting at <strong>$14.99</strong>.
              </div>
            </Reveal>

            {/* Extra Services */}
            <Reveal delay={120}>
              <h3 className="font-display mt-16 text-4xl text-ink">Extra Services</h3>
              <div className="road-line mt-3 w-28" />
            </Reveal>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {extraServices.map((e, i) => (
                <Reveal key={e.label} delay={i * 30}>
                  <div className="flex items-center justify-between rounded-xl bg-white px-5 py-3 shadow-sm">
                    <span className="text-ink/80">{e.label}</span>
                    <span className="font-semibold text-teal">{e.price}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Express */}
        <section id="express" className="scroll-mt-16 bg-white pt-10 pb-20 sm:pt-12 sm:pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="font-display text-xl tracking-[0.3em] text-teal">Tunnel Wash</p>
              <h2 className="font-display mt-2 text-5xl text-ink sm:text-6xl">Express</h2>
              <div className="road-line mt-5 w-40" />
              <p className="mt-6 max-w-3xl text-ink/80">
                Fast, automated tunnel wash. Go monthly and save — unlimited washes, cancel anytime.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-12 flex justify-center">
                <Image
                  src="/images/memberships2.png"
                  alt="Express Wash Packages — Basic, Gold, Diamond, VIP pricing and features"
                  width={700}
                  height={1020}
                  className="rounded-2xl shadow-lg w-full max-w-xl"
                />
              </div>
            </Reveal>
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
