"use client";

import { useEffect, useRef } from "react";

export default function FinalCTASection() {
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
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,110,110,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="reveal hidden-reveal relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-dark via-primary to-[#0A7A7A]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[radial-gradient(circle,rgba(37,99,235,0.2)_0%,transparent_70%)]" />
          <div className="absolute top-10 left-10 w-40 h-40 border border-white/8 rounded-full" />
          <div className="absolute bottom-10 right-20 w-24 h-24 border border-white/8 rounded-full" />

          <div className="relative z-10 text-center py-20 px-8 sm:px-16">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/12 border border-white/20 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4F268] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4F268]"></span>
              </span>
              <span className="text-sm font-semibold text-white">Limited Time Offer — Free Trial अभी Available है</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6">
              आपका Hospital Digital होने से{" "}
              <span className="text-[#D4F268]">सिर्फ 1 Click दूर है</span>
            </h2>

            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              आज join करें और देखें कैसे patients खुश होते हैं, staff का काम आसान होता है, और revenue बढ़ता है — बिल्कुल Free 30 दिनों के लिए।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20start%20the%20free%20trial%20of%20DoctorBooking"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-primary font-bold font-heading text-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 shadow-xl w-full sm:w-auto justify-center"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                30-Day Free Trial शुरू करें
              </a>
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20see%20a%20live%20demo%20of%20DoctorBooking"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center gap-3 px-8 py-4 rounded-2xl font-bold font-heading text-lg w-full sm:w-auto justify-center"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Live Demo Book करें
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {["✓ No Credit Card", "✓ Free Setup & Onboarding", "✓ Cancel Anytime", "✓ 24/7 Support"]?.map((item) => (
                <span key={item} className="text-sm text-white/60 font-medium">{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Strip */}
        <div className="reveal hidden-reveal mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.57 3.38 2 2 0 0 1 3.54 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              ),
              label: "Call Us",
              value: "+91 99999 99999",
              href: "tel:+919999999999",
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              ),
              label: "WhatsApp",
              value: "Chat on WhatsApp",
              href: "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20know%20more%20about%20DoctorBooking",
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
              label: "Email",
              value: "hello@doctorbooking.in",
              href: "mailto:hello@doctorbooking.in",
            },
          ]?.map((contact) => (
            <a
              key={contact?.label}
              href={contact?.href}
              target={contact?.href?.startsWith("http") ? "_blank" : undefined}
              rel={contact?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-5 bg-white border border-[#E2E8F0] rounded-2xl hover:border-primary/30 hover:shadow-teal-sm transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                {contact?.icon}
              </div>
              <div>
                <p className="text-xs text-[#718096] font-medium">{contact?.label}</p>
                <p className="text-sm font-semibold text-[#0F1923]">{contact?.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}