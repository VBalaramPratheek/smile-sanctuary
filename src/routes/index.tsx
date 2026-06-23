import { createFileRoute, Link } from "@tanstack/react-router";
import heroClinic from "@/assets/hero-clinic.jpg";
import patientCare from "@/assets/patient-care.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import smile1 from "@/assets/smile-1.jpg";
import smile2 from "@/assets/smile-2.jpg";
import smile3 from "@/assets/smile-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumina Dental — Multi-Specialty Dental Hospital" },
      {
        name: "description",
        content:
          "Lumina Dental is a multi-specialty dental hospital offering implants, orthodontics, cosmetic dentistry, root canal and pediatric care with master clinicians.",
      },
      { property: "og:title", content: "Lumina Dental — Multi-Specialty Dental Hospital" },
      {
        property: "og:description",
        content:
          "Precision dentistry, redefined. Book your consultation with our specialist team.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Digital Smile Design",
    desc: "Visualize your perfect smile before we begin. 3D scans and facial analysis for predictable, beautiful results.",
    icon: "square",
  },
  {
    title: "Dental Implants",
    desc: "Permanent, biocompatible titanium replacements — including complex full-arch and zygomatic restorations.",
    icon: "circle",
  },
  {
    title: "Clear Orthodontics",
    desc: "Discreet alignment using AI-planned, medical-grade thermoplastic aligners suitable for teens and adults.",
    icon: "corner",
  },
  {
    title: "Root Canal Therapy",
    desc: "Microscope-assisted endodontics that relieve pain while preserving the natural structure of your tooth.",
    icon: "circle",
  },
  {
    title: "Cosmetic & Veneers",
    desc: "Hand-crafted porcelain veneers and whitening protocols tailored to your facial aesthetics.",
    icon: "square",
  },
  {
    title: "Pediatric Dentistry",
    desc: "Gentle, calm care for our youngest patients — building lifelong positive dental habits.",
    icon: "corner",
  },
];

const testimonials = [
  {
    name: "Ananya R.",
    role: "Implant Patient",
    quote:
      "From the first scan to the final crown, every step was explained. I forgot I was even at a dental clinic.",
  },
  {
    name: "Marcus J.",
    role: "Orthodontics",
    quote:
      "18 months with aligners and the difference is unreal. The team made the journey effortless.",
  },
  {
    name: "Priya S.",
    role: "Veneers",
    quote:
      "They studied my face, my smile lines — the veneers look like they were always mine.",
  },
];

const faqs = [
  {
    q: "Do you accept dental insurance and EMI?",
    a: "Yes. We work with all major insurance providers and offer interest-free EMI plans for treatments above ₹25,000.",
  },
  {
    q: "Is your clinic sterilization certified?",
    a: "Our hospital follows ISO-certified sterilization protocols with autoclave-tracked instruments for every patient.",
  },
  {
    q: "How long does a dental implant procedure take?",
    a: "Implant placement typically takes 45–60 minutes per tooth. Full restoration is staged over 3–6 months for optimal integration.",
  },
  {
    q: "Do you treat dental emergencies on weekends?",
    a: "Yes. Same-day emergency appointments are available 7 days a week — call our 24/7 emergency line.",
  },
];

function IconForService({ kind }: { kind: string }) {
  if (kind === "square")
    return <div className="size-6 rounded-sm bg-brand-600/20 border-2 border-brand-600" />;
  if (kind === "circle")
    return <div className="size-6 rounded-full bg-brand-600/20 border-2 border-brand-600" />;
  return <div className="w-6 h-6 border-b-2 border-r-2 border-brand-600" />;
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-brand-900">

      {/* Hero */}
      <header className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative z-10">
              <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
                Advanced Multi-Specialty Care
              </span>
              <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight lg:text-7xl">
                Precision Dentistry, <span className="text-brand-600">Redefined.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-900/60">
                Experience world-class dental care at Lumina. From aesthetic transformations
                to complex rehabilitations, we combine master artistry with clinical precision.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  hash="book"
                  className="rounded-full bg-brand-600 px-8 py-4 font-bold text-white shadow-brand transition-all hover:bg-brand-900"
                >
                  Schedule Visit
                </Link>
                <Link
                  to="/specialties"
                  className="rounded-full border border-brand-900/10 px-8 py-4 font-bold transition-all hover:bg-brand-50"
                >
                  View Specialties
                </Link>
              </div>
              <dl className="mt-12 flex items-center gap-6 border-t border-brand-900/5 pt-8">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-widest text-brand-900/50">Smiles Crafted</dt>
                  <dd className="text-2xl font-bold tracking-tight">15k+</dd>
                </div>
                <div className="h-8 w-px bg-brand-900/10" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-widest text-brand-900/50">Patient Rating</dt>
                  <dd className="text-2xl font-bold tracking-tight">4.9/5</dd>
                </div>
                <div className="h-8 w-px bg-brand-900/10" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-widest text-brand-900/50">Specialists</dt>
                  <dd className="text-2xl font-bold tracking-tight">12</dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[40px] bg-brand-50/60 blur-3xl" />
              <img
                src={heroClinic}
                alt="Bright, modern Lumina Dental clinic interior"
                width={1200}
                height={1200}
                className="aspect-square w-full rounded-[40px] object-cover outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="bg-brand-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight lg:text-4xl">
                Full-Spectrum Oral Health
              </h2>
              <p className="mt-4 text-brand-900/60">
                Specialized departments led by industry-leading consultants using the latest intra-oral technology.
              </p>
            </div>
            <Link to="/specialties" className="text-sm font-bold text-brand-600 hover:underline">
              Explore all 12 specialties &rarr;
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-3xl bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/5"
              >
                <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-brand-50">
                  <IconForService kind={s.icon} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-brand-900/60">{s.desc}</p>
                <div className="mt-8 h-1 w-full origin-left scale-x-0 bg-brand-600 transition-transform group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology / Trust */}
      <section id="technology" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative flex flex-col items-center gap-16 overflow-hidden rounded-[48px] bg-brand-900 p-8 text-white lg:flex-row lg:p-16">
            <div className="relative z-10 lg:w-1/2">
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-50">
                Technology & Care
              </span>
              <h2 className="font-heading text-4xl font-bold leading-tight">
                Gentle Care for Every Generation
              </h2>
              <p className="mt-6 text-lg text-brand-50/70">
                Our multidisciplinary team of clinicians ensures that from pediatric preventative
                care to geriatric prosthetics, your family is in expert hands.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Pain-free laser treatment options",
                  "Zero-interest financing available",
                  "Same-day emergency appointments",
                  "ISO-certified sterilization protocols",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="grid size-5 place-items-center rounded-full bg-brand-600 text-[10px] font-bold">
                      ✓
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={patientCare}
                alt="Dentist talking with a relaxed patient"
                width={1000}
                height={800}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover outline-1 -outline-offset-1 outline-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team / Lead Doctor */}
      <section id="team" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <img
            src={doctorPortrait}
            alt="Dr. Aravind Rao, Chief Clinician at Lumina Dental"
            width={800}
            height={1000}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[32px] object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <div>
            <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
              Chief Clinician
            </span>
            <h2 className="font-heading text-4xl font-bold leading-tight lg:text-5xl">
              Dr. Aravind Rao
            </h2>
            <p className="mt-2 font-medium text-brand-900/60">
              MDS, Implantology · Fellowship in Aesthetic Dentistry
            </p>
            <p className="mt-6 text-lg leading-relaxed text-brand-900/70">
              With over two decades of clinical experience across India and the UK, Dr. Rao leads
              Lumina with a philosophy of conservative intervention — preserving as much natural
              tooth structure as possible through advanced digital planning.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-brand-900/5 pt-8">
              <div>
                <p className="text-2xl font-bold tracking-tight">22+</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-brand-900/50">Years Active</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight">400+</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-brand-900/50">Implants / Year</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight">12</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-brand-900/50">Specialists Led</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smile Gallery */}
      <section id="gallery" className="bg-brand-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight lg:text-4xl">
                Results that speak for themselves
              </h2>
              <p className="mt-4 text-brand-900/60">
                A selection of restorative and cosmetic cases from our clinical archives.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: smile1, label: "Ceramic Veneers", id: "#4021" },
              { img: smile2, label: "Invisalign Treatment", id: "#3892" },
              { img: smile3, label: "Full-Mouth Rehab", id: "#4110" },
            ].map((g) => (
              <figure key={g.id} className="space-y-4">
                <img
                  src={g.img}
                  alt={g.label}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full rounded-3xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <figcaption className="flex justify-between text-xs font-medium">
                  <span className="text-brand-900/50">Case {g.id}</span>
                  <span>{g.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 max-w-2xl font-heading text-3xl font-bold tracking-tight lg:text-4xl">
            Trusted by thousands of patients across the city.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-3xl border border-brand-900/5 bg-background p-8 shadow-soft"
              >
                <p className="text-lg leading-relaxed text-brand-900/80">“{t.quote}”</p>
                <footer className="mt-6 border-t border-brand-900/5 pt-4">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs font-medium uppercase tracking-widest text-brand-900/50">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-50/50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight lg:text-4xl">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-brand-900/5 bg-background p-6 transition-all hover:shadow-soft"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold">
                  <span>{f.q}</span>
                  <span className="grid size-6 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-brand-900/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
