import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-brand-900/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-brand-600" aria-hidden />
          <span className="font-heading text-xl font-bold tracking-tight">Lumina Dental</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="text-brand-900/70 transition-colors hover:text-brand-600 data-[status=active]:text-brand-900 data-[status=active]:font-semibold"
          >
            Home
          </Link>
          <Link
            to="/specialties"
            className="text-brand-900/70 transition-colors hover:text-brand-600 data-[status=active]:text-brand-900 data-[status=active]:font-semibold"
          >
            Specialties
          </Link>
          <Link
            to="/contact"
            className="text-brand-900/70 transition-colors hover:text-brand-600 data-[status=active]:text-brand-900 data-[status=active]:font-semibold"
          >
            Contact
          </Link>
        </div>

        <Link
          to="/contact"
          hash="book"
          className="rounded-full bg-brand-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-600 active:scale-95"
        >
          Book Consultation
        </Link>
      </div>
    </nav>
  );
}
