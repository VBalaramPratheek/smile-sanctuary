import { createFileRoute, Link } from "@tanstack/react-router";
import { useAppointmentModal } from "../components/AppointmentModal";
import { MapPin, Phone, Mail, Clock, Zap, ShieldCheck, Calendar, Smile } from "lucide-react";
import drKiranImg from "../assets/dr-kiran.jpeg";
import drKiImg from "../assets/dr-ki.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keerthi Dental Care — Multi-Specialty Dental Hospital" },
      {
        name: "description",
        content:
          "Keerthi Dental Care is a multi-specialty dental hospital offering implants, orthodontics, cosmetic dentistry, root canal and pediatric care with master clinicians.",
      },
      { property: "og:title", content: "Keerthi Dental Care — Multi-Specialty Dental Hospital" },
      {
        property: "og:description",
        content: "Precision dentistry, redefined. Book your consultation with our specialist team.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Dental Implants",
    desc: "State-of-the-art permanent teeth replacements with biocompatible titanium implants.",
  },
  {
    title: "Clear Orthodontics",
    desc: "Discreet, comfortable orthodontic alignment with custom-made clear aligners.",
  },
  {
    title: "Root Canal Therapy",
    desc: "Microscope-assisted endodontics to save damaged teeth and eliminate dental pain.",
  },
  {
    title: "Cosmetic & Veneers",
    desc: "Handcrafted porcelain veneers and custom teeth whitening for stunning aesthetics.",
  },
  {
    title: "Pediatric Dentistry",
    desc: "Gentle, stress-free dental care designed specifically to keep young smiles healthy.",
  },
  {
    title: "Oral & Maxillofacial Surgery",
    desc: "Advanced surgical care including wisdom tooth extractions and reconstructive surgery.",
  },
  {
    title: "Periodontics & Gum Care",
    desc: "Advanced therapy for gum disease, tissue grafting, and bone regeneration.",
  },
  {
    title: "Prosthodontics",
    desc: "Custom crowns, bridges, and full-mouth rehabilitations to restore bite and beauty.",
  },
  {
    title: "Preventive Dentistry",
    desc: "Regular cleanings, sealants, and comprehensive exams to protect long-term oral health.",
  },
  {
    title: "Laser Dentistry",
    desc: "Minimally invasive, virtually painless soft-tissue procedures using state-of-the-art dental lasers.",
  },
  {
    title: "Sedation Dentistry",
    desc: "Safe, controlled sedation options to ensure a relaxed and anxiety-free treatment experience.",
  },
];

function Index() {
  const { open } = useAppointmentModal();

  return (
    <div className="min-h-screen relative font-body text-brand-900 bg-background">
      <div className="relative">
        {/* Hero */}
        <header
          className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-cover bg-center bg-no-repeat border-b border-white/10"
          style={{ backgroundImage: `url(${drKiImg})` }}
        >
          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[1px] pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Advanced Dental Care
                </span>

                <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl text-white">
                  Keerthi Dental Care
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
                  Experience world-class dental care at Keerthi Dental Care. From aesthetic
                  transformations to complex rehabilitations, we combine master artistry with
                  clinical precision.
                </p>

                {/* Translucent visual badges */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm">
                    <ShieldCheck className="size-3.5 text-sky-400" />
                    Precision Implants
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm">
                    <Zap className="size-3.5 text-sky-400" />
                    Painless Laser Care
                  </span>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={open}
                    className="rounded-full bg-brand-600 px-8 py-4 font-bold text-white shadow-brand transition-all hover:bg-brand-900 cursor-pointer active:scale-95"
                  >
                    Book Appointment
                  </button>
                  <Link
                    to="/"
                    hash="services"
                    className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition-all hover:bg-white/10 backdrop-blur-sm"
                  >
                    View Specialties
                  </Link>
                </div>

                <dl className="mt-12 flex items-center justify-center gap-8 border-t border-white/10 pt-8">
                  <div className="text-center">
                    <dd className="text-3xl font-extrabold tracking-tight text-white">13+ Years</dd>
                    <dt className="text-xs font-bold uppercase tracking-widest text-slate-300 mt-1">
                      Of Experience
                    </dt>
                  </div>
                  <div className="h-8 w-px bg-white/15" />
                  <div className="text-center">
                    <dd className="text-3xl font-extrabold tracking-tight text-white">2k+</dd>
                    <dt className="text-xs font-bold uppercase tracking-widest text-slate-300 mt-1">
                      Smiles Crafted
                    </dt>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </header>

        {/* Team / Lead Doctor (Chief Clinician) */}
        <section id="team" className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="mb-6 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
              Chief Clinician
            </span>
            <img
              src={drKiranImg}
              alt="Dr. V. Kiran Kumar"
              className="mx-auto mb-6 h-64 w-64 rounded-2xl object-cover shadow-md border-4 border-brand-50"
            />
            <h2 className="font-heading text-4xl font-bold leading-tight lg:text-5xl">
              Dr. V. Kiran Kumar
            </h2>
            <p className="mt-4 text-xl font-medium text-brand-900/60">Dental Surgeon, BDS</p>
          </div>
        </section>

        {/* Services (Specialties) */}
        <section id="services" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl font-bold tracking-tight lg:text-4xl">
                  Full-Spectrum Oral Health
                </h2>
                <p className="mt-4 text-brand-900/60">
                  Specialized departments led by industry-leading consultants using the latest
                  intra-oral technology.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl flex flex-col gap-6">
              {services.map((s, index) => (
                <article
                  key={s.title}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 md:p-8 transition-all duration-300 hover:translate-x-2 hover:shadow-soft border border-brand-900/5 flex flex-col gap-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <h3 className="font-heading text-xl font-bold text-brand-900 group-hover:text-brand-600 transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-base text-brand-900/60 leading-relaxed font-body">
                    {s.desc}
                  </p>
                  {/* Subtle decorative hover glow */}
                  <div className="absolute -bottom-2 -right-2 size-24 rounded-full bg-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
                Get in Touch
              </span>
              <h2 className="font-heading text-3xl font-bold tracking-tight lg:text-4xl">
                Contact Us
              </h2>
              <p className="mt-4 text-brand-900/60">
                Find our clinic location, contact numbers, and operational hours below.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4 items-start p-6 rounded-3xl border border-brand-900/5 bg-white/80 backdrop-blur-sm shadow-soft">
                  <div className="flex-shrink-0 grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-900">Visit Us</h4>
                    <p className="mt-1 text-sm text-brand-900/60 leading-relaxed">
                      D.No 10/84, Balaramunipet,
                      <br />
                      Challarastha Centre,
                      <br />
                      Machilipatnam, AP-521001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 rounded-3xl border border-brand-900/5 bg-white/80 backdrop-blur-sm shadow-soft">
                  <div className="flex-shrink-0 grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-900">Call Us</h4>
                    <p className="mt-1 text-sm text-brand-900/60 leading-relaxed">
                      <a
                        href="tel:+919603465372"
                        className="block font-bold text-brand-600 hover:underline"
                      >
                        +91 9603465372
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 rounded-3xl border border-brand-900/5 bg-white/80 backdrop-blur-sm shadow-soft">
                  <div className="flex-shrink-0 grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-900">Email Us</h4>
                    <p className="mt-1 text-sm text-brand-900/60 leading-relaxed">
                      <a
                        href="mailto:Keerthidentalcare999@gmail.com"
                        className="block hover:underline"
                      >
                        Keerthidentalcare999@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 rounded-3xl border border-brand-900/5 bg-white/80 backdrop-blur-sm shadow-soft">
                  <div className="flex-shrink-0 grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-900">Working Hours</h4>
                    <p className="mt-1 text-sm text-brand-900/60 leading-relaxed">
                      Mon - Sat:- 9:30 am - 8:30 pm
                      <br />
                      Sunday - Holiday
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-full min-h-[350px] rounded-[32px] overflow-hidden border border-brand-900/5 bg-background shadow-soft">
                <iframe
                  src="https://maps.google.com/maps?q=Keerthi%20Dental%20Care%20Challarastha%20Machilipatnam&t=k&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="w-full min-h-[350px] border-none"
                  allowFullScreen
                  loading="lazy"
                  title="Keerthi Dental Care Location"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
