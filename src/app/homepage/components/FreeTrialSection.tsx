"use client";

import { useEffect, useRef } from "react";

const trialFeatures = [
  { icon: "🌐", text: "Free subdomain (yourhospital.doctorbooking.in)" },
  { icon: "💻", text: "Full system access — no restrictions" },
  { icon: "📱", text: "QR Scanner booking system" },
  { icon: "👥", text: "Unlimited patient bookings" },
  { icon: "🏥", text: "Hospital admin dashboard" },
  { icon: "🔧", text: "Free maintenance & updates" },
  { icon: "💰", text: "Zero setup cost, zero hidden charges" },
  { icon: "🎯", text: "Dedicated onboarding support" },
];

export default function FreeTrialSection() {
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

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-[#0A5F5F]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.3)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(5,150,105,0.2)_0%,transparent_60%)]" />
      {/* Decorative rings */}
      <div className="absolute top-10 right-10 w-72 h-72 border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-52 h-52 border border-white/5 rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="reveal hidden-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <span className="text-sm">🎁</span>
              <span className="text-xs font-semibold text-white/90">Risk-Free Onboarding</span>
            </div>

            <h2 className="reveal hidden-reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              30 दिन का{" "}
              <span className="text-[#D4F268]">Free Trial</span>
              <br />— बिना किसी Risk के
            </h2>

            <p className="reveal hidden-reveal reveal-delay-2 text-lg text-white/70 leading-relaxed mb-8">
              Credit card नहीं चाहिए। Setup cost नहीं। बस register करें और आज से ही अपने hospital का appointment system digital करें।
            </p>

            <div className="reveal hidden-reveal reveal-delay-3 flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white text-primary font-bold font-heading text-base hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Free Trial शुरू करें
              </a>
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20a%20demo%20of%20DoctorBooking"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold font-heading text-base"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Demo
              </a>
            </div>
          </div>

          {/* Right: Features checklist */}
          <div className="reveal hidden-reveal">
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8">
              <h3 className="font-heading font-bold text-white text-xl mb-6 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                Free Trial में क्या-क्या मिलेगा:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trialFeatures?.map((feature, index) => (
                  <div
                    key={feature?.text}
                    className="flex items-start gap-3 p-3 bg-white/8 rounded-xl border border-white/10"
                    style={{ transitionDelay: `${index * 0.05}s` }}
                  >
                    <span className="text-lg flex-shrink-0">{feature?.icon}</span>
                    <span className="text-sm text-white/85 font-medium leading-snug">{feature?.text}</span>
                  </div>
                ))}
              </div>

              {/* Timer urgency */}
              <div className="mt-6 p-4 bg-[#D4F268]/15 border border-[#D4F268]/30 rounded-2xl flex items-center gap-3">
                <span className="text-xl flex-shrink-0">⏰</span>
                <p className="text-sm text-white/90 font-medium">
                  <span className="text-[#D4F268] font-bold">Limited Offer:</span> पहले 100 hospitals को 30 दिन free + 1 month extra
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}