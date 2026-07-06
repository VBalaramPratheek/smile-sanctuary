import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useAppointmentModal } from "../components/AppointmentModal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Keerthi Dental Care" },
      {
        name: "description",
        content:
          "Book your consultation at Keerthi Dental Care. Call, email or fill out our appointment form to visit our Machilipatnam clinic.",
      },
      { property: "og:title", content: "Contact — Keerthi Dental Care" },
      {
        property: "og:description",
        content:
          "Book your consultation at Keerthi Dental Care. Call, email or fill out our appointment form to visit our Machilipatnam clinic.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { open } = useAppointmentModal();

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
              Walk in for a consultation or call ahead to reserve a slot with the specialist of your
              choice.
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
                Find our clinic location on the map or contact us directly.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div className="flex gap-4 items-start">
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

                <div className="flex gap-4 items-start">
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

                <div className="flex gap-4 items-start">
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

                <div className="flex gap-4 items-start">
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
            </div>

            <div className="w-full h-full min-h-[450px] rounded-[32px] overflow-hidden border border-brand-900/5 bg-background shadow-soft">
              <iframe
                src="https://maps.google.com/maps?q=Keerthi%20Dental%20Care%20Challarastha%20Machilipatnam&t=k&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full min-h-[450px] border-none"
                allowFullScreen
                loading="lazy"
                title="Keerthi Dental Care Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 border-t border-brand-900/5 bg-brand-50/30">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-900">
            Need a consultation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-900/60 leading-relaxed">
            Connect with our dental consultants for expert advice and treatment options tailored to
            you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
              <span>Call: +91 9603465372</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
