import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="border-t border-brand-900/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-6 rounded-md bg-brand-900" aria-hidden />
          <span className="font-heading font-bold tracking-tight">Lumina Dental</span>
        </Link>
        <p className="text-xs text-brand-900/40">
          © {new Date().getFullYear()} Lumina Dental Care Group. Services by licensed clinicians.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-brand-600">Instagram</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-brand-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
