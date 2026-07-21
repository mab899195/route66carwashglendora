"use client";

import { useState } from "react";
import Image from "next/image";
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

type Tab = "full" | "express";

export default function Services() {
  const [tab, setTab] = useState<Tab>("full");

  return (
    <section id="services" className="scroll-mt-16 bg-sky pt-10 pb-20 sm:pt-12 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <Reveal>
          <p className="font-display text-xl tracking-[0.3em] text-teal">What We Do</p>
          <h2 className="font-display mt-2 text-5xl text-ink sm:text-6xl">Services</h2>
          <div className="road-line mt-5 w-40" />
        </Reveal>

        {/* Tabs */}
        <div className="mt-10 flex gap-2">
          <button
            onClick={() => setTab("full")}
            className={`font-display rounded-full px-6 py-2 text-lg tracking-wider transition-colors ${
              tab === "full"
                ? "bg-teal text-white shadow"
                : "bg-white text-ink hover:bg-teal/10"
            }`}
          >
            Full Service
          </button>
          <button
            onClick={() => setTab("express")}
            className={`font-display rounded-full px-6 py-2 text-lg tracking-wider transition-colors ${
              tab === "express"
                ? "bg-teal text-white shadow"
                : "bg-white text-ink hover:bg-teal/10"
            }`}
          >
            Express
          </button>
        </div>

        {/* Full Service content */}
        {tab === "full" && (
          <div className="mt-8">
            <p className="mb-8 max-w-3xl text-ink/80">
              All washes are tunnel wash with hand dry. Prep Wash add-ons available starting at $14.99.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 sm:grid-rows-2">
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
        )}

        {/* Express content */}
        {tab === "express" && (
          <div className="mt-8">
            <p className="mb-8 max-w-3xl text-ink/80">
              Fast, automated tunnel wash. Go monthly and save — unlimited washes, cancel anytime.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/memberships2.png"
                alt="Express Wash Packages — Basic, Gold, Diamond, VIP pricing and features"
                width={700}
                height={1020}
                className="rounded-2xl shadow-lg w-full max-w-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
