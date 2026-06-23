import { createFileRoute, Link } from "@tanstack/react-router";

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
  {
    title: "Oral & Maxillofacial Surgery",
    desc: "Wisdom tooth extractions, jaw corrections and trauma reconstruction by board-certified surgeons.",
    icon: "square",
  },
  {
    title: "Periodontics & Gum Care",
    desc: "Laser-assisted treatment of gum disease, grafting and aesthetic gum contouring.",
    icon: "circle",
  },
  {
    title: "Prosthodontics",
    desc: "Crowns, bridges and full-mouth rehabilitations designed for comfort, function and natural appearance.",
    icon: "corner",
  },
];

function IconForService({ kind }: { kind: string }) {
  if (kind === "square")
    return <div className="size-6 rounded-sm bg-brand-600/20 border-2 border-brand-600" />;
  if (kind === "circle")
    return <div className="size-6 rounded-full bg-brand-600/20 border-2 border-brand-600" />;
  return <div className="w-6 h-6 border-b-2 border-r-2 border-brand-600" />;
}

export const Route = createFileRoute("/specialties")({
  head: () => ({
    meta: [
      { title: "Specialties — Lumina Dental" },
      {
        name: "description",
        content:
          "Explore the full range of dental specialties at Lumina Dental: implants, orthodontics, smile design, root canal, cosmetic dentistry and more.",
      },
      { property: "og:title", content: "Specialties — Lumina Dental" },
      {
        property: "og:description",
        content:
          "Explore the full range of dental specialties at Lumina Dental: implants, orthodontics, smile design, root canal, cosmetic dentistry and more.",
      },
    ],
  }),
  component: SpecialtiesPage,
});

function SpecialtiesPage() {
  return (
    <div className="bg-background">
      <section className="bg-brand-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
              Clinical Departments
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl">
              Every specialty under one roof.
            </h1>
            <p className="mt-4 text-lg text-brand-900/60">
              Led by specialist consultants who combine advanced training with a commitment to gentle, patient-first care.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-3xl bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/5"
              >
                <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-brand-50">
                  <IconForService kind={s.icon} />
                </div>
                <h2 className="mb-3 font-heading text-xl font-bold">{s.title}</h2>
                <p className="text-sm leading-relaxed text-brand-900/60">{s.desc}</p>
                <div className="mt-8 h-1 w-full origin-left scale-x-0 bg-brand-600 transition-transform group-hover:scale-x-100" />
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              hash="book"
              className="inline-flex rounded-full bg-brand-600 px-8 py-4 font-bold text-white shadow-brand transition-all hover:bg-brand-900"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
