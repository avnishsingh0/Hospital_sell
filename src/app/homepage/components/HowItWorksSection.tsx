"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Hospital Register करें",
    description: "5 minutes में free account बनाएं। अपनी hospital details, doctors, और departments add करें।",
    tag: "Setup: 5 Minutes",
    color: "from-primary/10 to-primary/5",
    border: "border-primary/20",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    number: "02",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <path d="M14 14h3v3h-3zM17 17h3v3h-3z" />
      </svg>
    ),
    title: "QR Code लगाएं",
    description: "Unique QR code मिलेगा। Hospital entrance पर print करें। Patients scan करके खुद book करेंगे।",
    tag: "Zero Staff Effort",
    color: "from-accent/10 to-accent/5",
    border: "border-accent/20",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    tagColor: "bg-accent/10 text-accent",
  },
  {
    number: "03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Live Dashboard देखें",
    description: "Real-time में देखें कितने patients आए, कौन waiting है, किस doctor के पास queue है।",
    tag: "Real-Time Updates",
    color: "from-success/10 to-success/5",
    border: "border-success/20",
    iconColor: "text-success",
    iconBg: "bg-success/10",
    tagColor: "bg-success/10 text-success",
  },
  {
    number: "04",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    title: "Grow करें & App लें",
    description: "Paid plan upgrade करें — Play Store पर आपकी branded app live। Patients direct app से book करेंगे।",
    tag: "₹2000/Month",
    color: "from-warning/10 to-orange-50",
    border: "border-warning/20",
    iconColor: "text-warning",
    iconBg: "bg-warning/10",
    tagColor: "bg-warning/10 text-warning",
  },
];

export default function HowItWorksSection() {
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
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,110,110,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal hidden-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B6E6E" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span className="text-xs font-semibold text-primary">Simple 4-Step Process</span>
          </div>
          <h2 className="reveal hidden-reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F1923] mb-5 leading-tight">
            शुरू करना है{" "}
            <span className="gradient-text">बेहद आसान</span>
          </h2>
          <p className="reveal hidden-reveal reveal-delay-2 text-lg text-[#4A5568] max-w-xl mx-auto">
            कोई technical knowledge नहीं चाहिए। बस 4 steps में आपका hospital digital हो जाएगा।
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps?.map((step, index) => (
            <div
              key={step?.number}
              className="reveal hidden-reveal relative z-10"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className={`bg-gradient-to-br ${step?.color} border ${step?.border} rounded-3xl p-6 h-full hover:shadow-lg hover:-translate-y-2 transition-all duration-400 group`}>
                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 ${step?.iconBg} rounded-2xl flex items-center justify-center ${step?.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {step?.icon}
                  </div>
                  <span className="font-heading font-bold text-4xl text-[#0F1923]/8">
                    {step?.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-[#0F1923] text-lg mb-3 leading-tight">
                  {step?.title}
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  {step?.description}
                </p>
              </div>


            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal hidden-reveal text-center mt-14">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-primary/5 border border-primary/15 rounded-2xl px-8 py-5">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <p className="font-medium text-[#0F1923]">
                Ready हैं? <span className="font-bold text-primary">आज ही शुरू करें</span> — 30 दिन completely free
              </p>
            </div>
            <a
              href="#pricing"
              className="btn-primary flex-shrink-0 px-6 py-2.5 rounded-xl text-sm font-bold font-heading"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}