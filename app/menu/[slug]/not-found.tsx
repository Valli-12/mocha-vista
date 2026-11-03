import Link from "next/link";
import { Utensils, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-[#f5ebdd]">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#b98254]/15 text-[#b98254] mb-6 shadow-inner">
        <Utensils className="w-10 h-10" />
      </div>
      <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#b98254] mb-2 font-sans">
        404 — Item Not Found
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#201b19] mb-4">
        This Recipe Has Moved
      </h1>
      <p className="font-sans text-sm sm:text-base text-[#5a4a3a] max-w-md leading-relaxed mb-8">
        We couldn&apos;t find the dish you were looking for. It may have been a seasonal special or its name may have changed.
      </p>
      <Link
        href="/menu"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#201b19] hover:bg-[#b98254] text-[#f5ebdd] text-xs font-semibold tracking-widest uppercase transition-all shadow-md hover:-translate-y-0.5 font-sans"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Menu</span>
      </Link>
    </div>
  );
}
