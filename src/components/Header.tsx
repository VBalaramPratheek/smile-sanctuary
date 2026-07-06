import { Link } from "@tanstack/react-router";
import { useAppointmentModal } from "./AppointmentModal";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

function ToothIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M 12,4.8 C 13.8,3.5 17.5,3.5 19.5,5.2 C 21.5,7.0 21.5,10.5 20.2,13.0 C 19.2,15.0 18.5,17.2 18.8,19.8 C 19.0,21.0 18.2,22.0 17.0,22.0 C 16.0,22.0 15.2,20.8 15.0,19.0 C 14.5,15.5 9.5,15.5 9.0,19.0 C 8.8,20.8 8.0,22.0 7.0,22.0 C 5.8,22.0 5.0,21.0 5.2,19.8 C 5.5,17.2 4.8,15.0 3.8,13.0 C 2.5,10.5 2.5,7.0 4.5,5.2 C 6.5,3.5 10.2,3.5 12,4.8 Z" />
    </svg>
  );
}

export default function Header() {
  const { open } = useAppointmentModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-brand-900/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="flex size-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <ToothIcon className="size-5" />
          </div>
          <span className="font-heading text-xl font-bold tracking-tight">Keerthi Dental Care</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="text-brand-900/70 transition-colors hover:text-brand-600 data-[status=active]:text-brand-900 data-[status=active]:font-semibold"
          >
            Home
          </Link>
          <Link
            to="/"
            hash="team"
            className="text-brand-900/70 transition-colors hover:text-brand-600 data-[status=active]:text-brand-900 data-[status=active]:font-semibold"
          >
            Chief Clinician
          </Link>
          <Link
            to="/"
            hash="services"
            className="text-brand-900/70 transition-colors hover:text-brand-600 data-[status=active]:text-brand-900 data-[status=active]:font-semibold"
          >
            Specialties
          </Link>
          <Link
            to="/contact"
            className="text-brand-900/70 transition-colors hover:text-brand-600 data-[status=active]:text-brand-900 data-[status=active]:font-semibold"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+919603465372"
            className="hidden items-center gap-2 text-sm font-semibold text-brand-900 hover:text-brand-600 transition-colors sm:flex"
          >
            <Phone className="size-4 text-brand-600" />
            <span>+91 9603465372</span>
          </a>
          <button
            onClick={open}
            className="hidden rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-900 active:scale-95 cursor-pointer shadow-brand sm:block"
          >
            Book Appointment
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-900 transition-all hover:bg-brand-100 md:hidden cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-brand-900/5 bg-background px-6 py-6 md:hidden flex flex-col gap-5">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            onClick={closeMenu}
            className="text-base font-semibold text-brand-900/80 hover:text-brand-600 transition-colors py-2 border-b border-brand-900/5"
          >
            Home
          </Link>
          <Link
            to="/"
            hash="team"
            onClick={closeMenu}
            className="text-base font-semibold text-brand-900/80 hover:text-brand-600 transition-colors py-2 border-b border-brand-900/5"
          >
            Chief Clinician
          </Link>
          <Link
            to="/"
            hash="services"
            onClick={closeMenu}
            className="text-base font-semibold text-brand-900/80 hover:text-brand-600 transition-colors py-2 border-b border-brand-900/5"
          >
            Specialties
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-base font-semibold text-brand-900/80 hover:text-brand-600 transition-colors py-2 border-b border-brand-900/5"
          >
            Contact Us
          </Link>
          <div className="flex flex-col gap-4 pt-2">
            <a
              href="tel:+919603465372"
              className="flex items-center gap-2 text-base font-semibold text-brand-900 hover:text-brand-600 transition-colors"
            >
              <Phone className="size-5 text-brand-600" />
              <span>+91 9603465372</span>
            </a>
            <button
              onClick={() => {
                closeMenu();
                open();
              }}
              className="w-full rounded-full bg-brand-600 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-900 active:scale-95 cursor-pointer shadow-brand"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
