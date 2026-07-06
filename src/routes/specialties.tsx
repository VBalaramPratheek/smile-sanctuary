import { createFileRoute } from "@tanstack/react-router";
import { useAppointmentModal } from "../components/AppointmentModal";
import { Clock } from "lucide-react";

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

export const Route = createFileRoute("/specialties")({
  head: () => ({
    meta: [
      { title: "Specialties — Keerthi Dental Care" },
      {
        name: "description",
        content:
          "Explore the full range of dental specialties at Keerthi Dental Care: implants, orthodontics, smile design, root canal, cosmetic dentistry and more.",
      },
      { property: "og:title", content: "Specialties — Keerthi Dental Care" },
      {
        property: "og:description",
        content:
          "Explore the full range of dental specialties at Keerthi Dental Care: implants, orthodontics, smile design, root canal, cosmetic dentistry and more.",
      },
    ],
  }),
  component: SpecialtiesPage,
});

function SpecialtiesPage() {
  const { open } = useAppointmentModal();

  return (
    <div className="bg-background">
      {/* Hero Banner without Background Image */}
      <section className="bg-brand-50/50 py-24 border-b border-brand-900/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
              Clinical Departments
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl text-brand-900">
              Every specialty under one roof.
            </h1>
            <p className="mt-4 text-lg text-brand-900/60 leading-relaxed">
              Led by specialist consultants who combine advanced training with a commitment to
              gentle, patient-first care.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties List Section (One by One) */}
      <section className="py-24 bg-gradient-to-b from-brand-50/20 to-background">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-6">
            {services.map((s, index) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 md:p-8 transition-all duration-300 hover:translate-x-2 hover:shadow-soft border border-brand-900/5 flex flex-col gap-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h2 className="font-heading text-xl font-bold text-brand-900 group-hover:text-brand-600 transition-colors duration-300">
                  {s.title}
                </h2>
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

      {/* Call to Action Section */}
      <section className="py-16 border-t border-brand-900/5 bg-brand-50/30">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-900">
            Need to consult a specialist?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-900/60 leading-relaxed">
            Our expert team is ready to provide personalized care for your unique needs. Book a
            comprehensive evaluation today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={open}
              className="rounded-full bg-brand-600 px-8 py-4 font-bold text-white shadow-brand transition-all hover:bg-brand-900 active:scale-95 cursor-pointer"
            >
              Book Appointment
            </button>
            <a
              href="tel:+919603465372"
              className="inline-flex items-center gap-2 rounded-full border border-brand-900/10 bg-white px-8 py-4 font-bold text-brand-900 hover:bg-brand-50 transition-all"
            >
              <Clock className="size-4 text-brand-600" />
              <span>Call: +91 9603465372</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
