import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 grid size-12 place-items-center rounded-full bg-brand-600 text-white font-heading font-bold text-lg">
                KD
              </div>
              <div>
                <h4 className="font-heading font-bold text-white leading-tight">
                  Keerthi Dental Care
                </h4>
                <p className="text-xs text-slate-400">Dental Hospital</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mt-4">
              Experience world-class dental care at Keerthi Dental Care. From aesthetic
              transformations to complex rehabilitations, we combine master artistry with clinical
              precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-heading font-bold text-white text-base mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#team"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Chief Clinician
                </a>
              </li>
              <li>
                <Link
                  to="/"
                  hash="services"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Specialties
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Treatments */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-white text-base mb-4 uppercase tracking-wider">
              Our Treatments
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-400">
              <li>Dental Implants</li>
              <li>Clear Orthodontics</li>
              <li>Root Canal Therapy</li>
              <li>Cosmetic & Veneers</li>
              <li>Pediatric Dentistry</li>
              <li>Oral & Maxillofacial Surgery</li>
              <li>Periodontics & Gum Care</li>
              <li>Prosthodontics</li>
              <li>Preventive Dentistry</li>
              <li>Laser Dentistry</li>
              <li>Sedation Dentistry</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="font-heading font-bold text-white text-base mb-4 uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="size-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  D.No 10/84, Balaramunipet,
                  <br />
                  Challarastha Centre,
                  <br />
                  Machilipatnam, AP-521001
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="size-5 text-sky-400 flex-shrink-0" />
                <a
                  href="tel:+919603465372"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  +91 9603465372
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="size-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-400 space-y-1">
                  <a
                    href="mailto:Keerthidentalcare999@gmail.com"
                    className="block hover:text-white transition-colors break-all"
                  >
                    Keerthidentalcare999@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Keerthi Dental Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
