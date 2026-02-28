"use client";

import { useEffect, useRef } from "react";

const freeFeatures = [
  "Free subdomain included",
  "QR Scanner booking system",
  "Patient self-booking portal",
  "Token queue management",
  "Hospital admin dashboard",
  "Basic analytics",
  "Free maintenance",
  "Email support",
];

const paidFeatures = [
  "Everything in Free Trial +",
  "Play Store branded app",
  "App download via QR code",
  "Custom domain (1 year free)",
  "Priority support 24/7",
  "Advanced analytics & reports",
  "Hospital branding throughout",
  "No hidden charges — ever",
];

export default function PricingSection() {
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
    <section id="pricing" ref={sectionRef} className="py-24 bg-[#F8FAFB] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,110,110,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal hidden-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B6E6E" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-xs font-semibold text-primary">Simple, Transparent Pricing</span>
          </div>
          <h2 className="reveal hidden-reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F1923] mb-5 leading-tight">
            शुरू करें Free में,{" "}
            <span className="gradient-text">Grow करें Paid से</span>
          </h2>
          <p className="reveal hidden-reveal reveal-delay-2 text-lg text-[#4A5568] max-w-xl mx-auto">
            कोई hidden charge नहीं। कोई long-term contract नहीं। जब चाहें upgrade या downgrade करें।
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Free Trial Card */}
          <div className="reveal hidden-reveal pricing-card bg-white rounded-3xl border-2 border-[#E2E8F0] overflow-hidden shadow-sm">
            {/* Header */}
            <div className="p-8 border-b border-[#F1F5F9]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#F8FAFB] border border-[#E2E8F0] rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">🎁</span>
                </div>
                <span className="px-3 py-1.5 bg-success/10 text-success text-xs font-bold rounded-full border border-success/20">
                  30 Days Free
                </span>
              </div>
              <h3 className="font-heading font-bold text-[#0F1923] text-2xl mb-2">Free Trial</h3>
              <p className="text-[#4A5568] text-sm mb-6">आज शुरू करें, बिना किसी risk के</p>
              
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-bold text-5xl text-[#0F1923]">₹0</span>
                <span className="text-[#718096] text-sm">/30 days</span>
              </div>
              <p className="text-xs text-[#718096] mt-1.5">No credit card required</p>
            </div>

            {/* Features */}
            <div className="p-8">
              <ul className="space-y-3 mb-8">
                {freeFeatures?.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/15 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-sm text-[#4A5568] font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20start%20the%20free%20trial%20of%20DoctorBooking"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full btn-secondary py-4 rounded-2xl text-center font-bold font-heading text-base"
              >
                Free Trial शुरू करें →
              </a>
              <p className="text-center text-xs text-[#718096] mt-3">
                कोई commitment नहीं • Cancel anytime
              </p>
            </div>
          </div>

          {/* Paid Plan Card */}
          <div className="reveal hidden-reveal reveal-delay-2 pricing-card pricing-featured bg-white rounded-3xl border-2 border-primary overflow-hidden relative">
            {/* Popular badge */}
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1.5 bg-gradient-to-r from-primary to-primary-light text-white text-xs font-bold rounded-full shadow-teal-sm">
                ⭐ Most Popular
              </span>
            </div>

            {/* Header */}
            <div className="p-8 border-b border-primary/10 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-[#0F1923] text-2xl mb-2">Paid Plan</h3>
              <p className="text-[#4A5568] text-sm mb-6">Full-featured hospital app + everything</p>
              
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-bold text-5xl gradient-text">₹2,000</span>
                <span className="text-[#718096] text-sm">/month</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-success font-semibold bg-success/10 px-2.5 py-1 rounded-full">
                  ₹24,000/year · No hidden charges
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="p-8">
              <ul className="space-y-3 mb-8">
                {paidFeatures?.map((feature, i) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${i === 0 ? 'bg-primary/10' : 'bg-primary/10'}`}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0B6E6E" strokeWidth="3" strokeLinecap="round">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className={`text-sm font-medium ${i === 0 ? 'text-primary font-bold' : 'text-[#4A5568]'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20upgrade%20to%20the%20Paid%20Plan%20of%20DoctorBooking"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full btn-primary py-4 rounded-2xl text-center font-bold font-heading text-base"
              >
                Paid Plan लें — ₹2,000/month
              </a>
              <p className="text-center text-xs text-[#718096] mt-3">
                या पहले free trial try करें
              </p>
            </div>
          </div>
        </div>

        {/* Comparison note */}
        <div className="reveal hidden-reveal text-center mt-10">
          <p className="text-sm text-[#718096]">
            💡 <span className="font-semibold text-[#4A5568]">Tip:</span> Free trial से शुरू करें, अपनी team को train करें, फिर Paid plan upgrade करें। कोई data loss नहीं होगा।
          </p>
        </div>
      </div>
    </section>
  );
}