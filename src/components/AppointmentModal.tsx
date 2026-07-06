import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CalendarCheck, Check, Sparkles } from "lucide-react";

type AppointmentModalContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const AppointmentModalContext = React.createContext<AppointmentModalContextType | undefined>(
  undefined,
);

export function AppointmentModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const open = () => {
    setIsOpen(true);
    setSubmitted(false);
  };
  const close = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Reset submitted state when modal is closed
  React.useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setSubmitted(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <AppointmentModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[620px] rounded-[32px] p-10 md:p-12 border border-brand-900/5 bg-background shadow-soft focus:outline-none">
          {submitted ? (
            <div className="text-center py-6 flex flex-col items-center animate-in fade-in-0 zoom-in-95 duration-300">
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-8 ring-brand-50/40">
                <CalendarCheck className="h-10 w-10 animate-bounce" />
                <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md ring-2 ring-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
              </div>

              <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-600">
                <Sparkles className="size-3" /> Request Received
              </span>

              <h3 className="font-heading text-3xl font-bold tracking-tight text-brand-900 mt-2">
                Thank You!
              </h3>

              <p className="mt-4 max-w-sm text-base leading-relaxed text-brand-900/70">
                Our staff will contact you soon...
              </p>

              <button
                onClick={close}
                className="mt-8 w-full rounded-full bg-brand-900 py-4 text-sm font-bold text-white shadow-brand transition-all hover:bg-brand-600 active:scale-95 cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <DialogHeader className="text-left">
                <DialogTitle className="font-heading text-3xl font-bold tracking-tight text-brand-900">
                  Book an Appointment
                </DialogTitle>
                <DialogDescription className="mt-2 text-base text-brand-900/60">
                  Our coordinator responds within 2 business hours.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="space-y-2 flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-900/50 text-left">
                      Full Name
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-xl border-none bg-brand-50/60 p-4 text-base outline-none ring-1 ring-brand-900/5 transition-shadow focus:ring-brand-600/40"
                    />
                  </label>
                  <label className="space-y-2 flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-900/50 text-left">
                      Mobile Number
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl border-none bg-brand-50/60 p-4 text-base outline-none ring-1 ring-brand-900/5 transition-shadow focus:ring-brand-600/40"
                    />
                  </label>
                  <label className="space-y-2 flex flex-col md:col-span-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-900/50 text-left">
                      Village/Town Name
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Enter your village or town name"
                      className="w-full rounded-xl border-none bg-brand-50/60 p-4 text-base outline-none ring-1 ring-brand-900/5 transition-shadow focus:ring-brand-600/40"
                    />
                  </label>
                  <label className="space-y-2 flex flex-col md:col-span-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-900/50 text-left">
                      Email (Optional)
                    </span>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="w-full rounded-xl border-none bg-brand-50/60 p-4 text-base outline-none ring-1 ring-brand-900/5 transition-shadow focus:ring-brand-600/40"
                    />
                  </label>
                  <label className="space-y-2 flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-900/50 text-left">
                      Preferred Date
                    </span>
                    <input
                      type="date"
                      required
                      className="w-full rounded-xl border-none bg-brand-50/60 p-4 text-base outline-none ring-1 ring-brand-900/5 transition-shadow focus:ring-brand-600/40"
                    />
                  </label>
                  <label className="space-y-2 flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-900/50 text-left">
                      Preferred Time Slot
                    </span>
                    <select
                      required
                      className="w-full rounded-xl border-none bg-brand-50/60 p-4 text-base outline-none ring-1 ring-brand-900/5 transition-shadow focus:ring-brand-600/40 bg-white"
                    >
                      <option value="">Select a time slot</option>
                      <option value="morning">Morning (09:00 AM - 01:00 PM)</option>
                      <option value="evening">Evening (05:00 PM - 08:00 PM)</option>
                    </select>
                  </label>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-full bg-brand-600 py-4.5 text-base font-bold text-white shadow-brand transition-all hover:bg-brand-900 md:col-span-2 active:scale-95 cursor-pointer"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </AppointmentModalContext.Provider>
  );
}

export function useAppointmentModal() {
  const context = React.useContext(AppointmentModalContext);
  if (!context) {
    throw new Error("useAppointmentModal must be used within an AppointmentModalProvider");
  }
  return context;
}
