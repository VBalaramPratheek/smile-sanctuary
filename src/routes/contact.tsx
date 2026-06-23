import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lumina Dental" },
      {
        name: "description",
        content:
          "Book your consultation at Lumina Dental. Call, email or fill out our appointment form to visit our Bangalore clinic.",
      },
      { property: "og:title", content: "Contact — Lumina Dental" },
      {
        property: "og:description",
        content:
          "Book your consultation at Lumina Dental. Call, email or fill out our appointment form to visit our Bangalore clinic.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background">
      <section className="bg-brand-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl">
              Plan your visit.
            </h1>
            <p className="mt-4 text-lg text-brand-900/60">
              Walk in for a consultation or call ahead to reserve a slot with the specialist of your choice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight lg:text-4xl">
                Visit the Practice
              </h2>
              <p className="mt-4 text-brand-900/60">
                Our coordinator responds within 2 business hours.
              </p>

              <div className="mt-10 space-y-6 text-sm">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-900/50">Address</p>
                  <p className="mt-2 leading-relaxed">
                    112 Sterling Grove, Level 4<br />
                    Healthcare District, Bangalore 560001
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-900/50">Reach Us</p>
                  <p className="mt-2 leading-relaxed">
                    <a href="tel:+918045529000" className="block font-bold text-brand-600 hover:underline">+91 (80) 4552 9000</a>
                    <a href="mailto:hello@luminadental.com" className="block hover:underline">hello@luminadental.com</a>
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-900/50">Clinical Hours</p>
                  <dl className="mt-2 space-y-1">
                    <div className="flex justify-between border-b border-brand-900/5 py-1.5"><dt>Mon — Fri</dt><dd>09:00 — 20:00</dd></div>
                    <div className="flex justify-between border-b border-brand-900/5 py-1.5"><dt>Saturday</dt><dd>10:00 — 16:00</dd></div>
                    <div className="flex justify-between py-1.5"><dt>Sunday</dt><dd className="italic text-brand-900/60">Emergency Only</dd></div>
                  </dl>
                </div>
              </div>
            </div>

            <form
              id="book"
              onSubmit={(e) => e.preventDefault()}
              className="rounded-[32px] border border-brand-900/5 bg-background p-8 shadow-soft md:p-10"
            >
              <h3 className="font-heading text-2xl font-bold tracking-tight">Book an Appointment</h3>
              <p className="mt-2 text-sm text-brand-900/60">Our coordinator responds within 2 business hours.</p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-900/50">Full Name</span>
                  <input type="text" required placeholder="Your name" className="w-full rounded-xl border-none bg-brand-50/60 p-3 text-sm outline-none ring-1 ring-brand-900/5 transition-shadow focus:ring-brand-600/40" />
                </label>
                <label className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-900/50">Contact Number</span>
                  <input type="tel" required placeholder="+91" className="w-full rounded-xl border-none bg-brand-50/60 p-3 text-sm outline-none ring-1 ring-brand-900/5 transition-shadow focus:ring-brand-600/40" />
                </label>
                <label className="space-y-2 md:col-span-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-900/50">Primary Concern</span>
                  <select className="w-full appearance-none rounded-xl border-none bg-brand-50/60 p-3 text-sm outline-none ring-1 ring-brand-900/5 transition-shadow focus:ring-brand-600/40">
                    <option>General Consultation</option>
                    <option>Cosmetic Assessment</option>
                    <option>Orthodontic Inquiry</option>
                    <option>Implant Consultation</option>
                    <option>Root Canal / Emergency</option>
                  </select>
                </label>
                <label className="space-y-2 md:col-span-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-900/50">Notes (Optional)</span>
                  <textarea rows={4} placeholder="Tell us about your concern or any anxiety..." className="w-full resize-none rounded-xl border-none bg-brand-50/60 p-3 text-sm outline-none ring-1 ring-brand-900/5 transition-shadow focus:ring-brand-600/40" />
                </label>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-brand-600 py-4 text-sm font-bold text-white shadow-brand transition-all hover:bg-brand-900 md:col-span-2"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
