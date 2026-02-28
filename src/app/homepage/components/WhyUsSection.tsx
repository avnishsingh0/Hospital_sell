"use client";

import { useEffect, useRef } from "react";

const usps = [
  {
    icon: "🇮🇳",
    title: "Made for India",
    description: "Indian healthcare workflow के लिए बनाया गया। Hindi-English support। Indian payment methods।",
    highlight: "India-First",
  },
  {
    icon: "⚡",
    title: "5-Minute Setup",
    description: "कोई IT team नहीं चाहिए। कोई training नहीं। बस register करें और शुरू करें।",
    highlight: "Zero Tech Skills",
  },
  {
    icon: "🔒",
    title: "Data Secure & Private",
    description: "Patient data 100% secure। HIPAA-compliant storage। आपका data हमेशा आपका।",
    highlight: "Bank-Level Security",
  },
  {
    icon: "📱",
    title: "Works on Any Device",
    description: "Mobile, tablet, desktop — कहीं से भी access करें। No app needed for basic use।",
    highlight: "Cross-Platform",
  },
  {
    icon: "🛠️",
    title: "Free Maintenance",
    description: "Updates, bug fixes, new features — सब free। आपको कुछ नहीं करना।",
    highlight: "Hassle-Free",
  },
  {
    icon: "💬",
    title: "WhatsApp Support",
    description: "Problem आए तो WhatsApp करें। हमारी team 24/7 available है।",
    highlight: "Always Available",
  },
];

const useCases = [
  {
    icon: "🏥",
    title: "Small Clinics",
    description: "1-2 doctors, छोटी clinic। QR booking और basic queue management।",
    patients: "10-50 patients/day",
    color: "from-primary/8 to-primary/4",
    border: "border-primary/20",
  },
  {
    icon: "🏨",
    title: "Medium Hospitals",
    description: "Multiple departments, 5-20 doctors। Full dashboard और analytics।",
    patients: "50-200 patients/day",
    color: "from-accent/8 to-accent/4",
    border: "border-accent/20",
  },
  {
    icon: "👨‍⚕️",
    title: "Private Doctors",
    description: "Solo practice। Personal booking page और WhatsApp integration।",
    patients: "20-80 patients/day",
    color: "from-success/8 to-success/4",
    border: "border-success/20",
  },
];

export default function WhyUsSection() {
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
    <>
      {/* Why Choose Us */}
      <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(11,110,110,0.04)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="reveal hidden-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-6">
              <span className="text-xs font-semibold text-primary">Why DoctorBooking?</span>
            </div>
            <h2 className="reveal hidden-reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F1923] mb-5 leading-tight">
              हमें क्यों चुनें?{" "}
              <span className="gradient-text">6 Strong Reasons</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
            {usps?.map((usp, index) => (
              <div
                key={usp?.title}
                className="reveal hidden-reveal feature-card bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm group"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {usp?.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/8 px-2 py-0.5 rounded-full">
                      {usp?.highlight}
                    </span>
                    <h3 className="font-heading font-bold text-[#0F1923] text-base mt-2 mb-2">{usp?.title}</h3>
                    <p className="text-sm text-[#4A5568] leading-relaxed">{usp?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div>
            <div className="text-center mb-12">
              <h2 className="reveal hidden-reveal font-heading text-3xl sm:text-4xl font-bold text-[#0F1923] mb-4 leading-tight">
                किसके लिए है{" "}
                <span className="gradient-text">DoctorBooking?</span>
              </h2>
              <p className="reveal hidden-reveal text-[#4A5568] text-lg max-w-xl mx-auto">
                Clinic से लेकर multi-specialty hospital तक — सबके लिए perfect solution।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases?.map((uc, index) => (
                <div
                  key={uc?.title}
                  className={`reveal hidden-reveal bg-gradient-to-br ${uc?.color} border ${uc?.border} rounded-3xl p-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-400`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-5">{uc?.icon}</div>
                  <h3 className="font-heading font-bold text-[#0F1923] text-xl mb-3">{uc?.title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-5">{uc?.description}</p>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B6E6E" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                    </svg>
                    <span className="text-xs font-semibold text-primary">{uc?.patients}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}