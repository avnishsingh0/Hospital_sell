"use client";

import { useEffect, useRef } from "react";

export default function SolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hidden-reveal");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef?.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  const beforeItems = [
    "📋 Manual paper register",
    "📞 Phone calls all day",
    "😤 Patients waiting 2+ hours",
    "❌ No status updates",
    "💸 Revenue loss from no-shows",
    "📊 Zero data or analytics",
  ];

  const afterItems = [
    "💻 Digital dashboard, real-time",
    "📱 QR code self-booking",
    "⚡ Smart token queue system",
    "📲 Auto SMS/WhatsApp updates",
    "✅ Reminders reduce no-shows 60%",
    "📈 Full analytics & reports",
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#F8FAFB] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal hidden-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B6E6E" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            <span className="text-xs font-semibold text-primary">DoctorBooking का Solution</span>
          </div>
          <h2 className="reveal hidden-reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F1923] mb-5 leading-tight">
            Before vs After:{" "}
            <span className="gradient-text">DoctorBooking के साथ</span>
          </h2>
          <p className="reveal hidden-reveal reveal-delay-2 text-lg text-[#4A5568] max-w-xl mx-auto">
            देखिए कैसे हमारा system आपके hospital को transform करता है।
          </p>
        </div>

        {/* Before / After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <div className="reveal hidden-reveal bg-white rounded-3xl border-2 border-red-100 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-red-500 to-rose-500 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✗</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg">BEFORE</h3>
                  <p className="text-red-100 text-xs">Traditional Manual System</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-3">
              {beforeItems?.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-red-50/50 rounded-xl border border-red-50"
                >
                  <span className="text-base">{item?.split(" ")?.[0]}</span>
                  <span className="text-sm text-[#4A5568] font-medium">{item?.split(" ")?.slice(1)?.join(" ")}</span>
                </div>
              ))}
              <div className="pt-3 text-center">
                <span className="text-sm font-semibold text-red-500 bg-red-50 px-4 py-2 rounded-full">
                  😰 Staff & Patients दोनों परेशान
                </span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="reveal hidden-reveal reveal-delay-2 bg-white rounded-3xl border-2 border-primary/30 overflow-hidden shadow-teal-sm">
            <div className="bg-gradient-to-r from-primary to-primary-light px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg">AFTER</h3>
                  <p className="text-primary-100 text-xs">DoctorBooking System</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-3">
              {afterItems?.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl border border-primary/10"
                >
                  <span className="text-base">{item?.split(" ")?.[0]}</span>
                  <span className="text-sm text-[#4A5568] font-medium">{item?.split(" ")?.slice(1)?.join(" ")}</span>
                </div>
              ))}
              <div className="pt-3 text-center">
                <span className="text-sm font-semibold text-primary bg-primary/8 px-4 py-2 rounded-full">
                  😊 सब खुश — Staff, Doctors & Patients!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA nudge */}
        <div className="reveal hidden-reveal text-center mt-12">
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold font-heading"
          >
            अभी Transform करें — Free में
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}