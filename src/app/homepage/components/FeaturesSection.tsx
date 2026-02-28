"use client";

import { useEffect, useRef } from "react";
import Icon from "@/components/ui/AppIcon";

const features = [
  {
    icon: "QrCodeIcon",
    title: "QR Code Booking",
    description: "Patients scan QR code और instantly appointment book करें। No app download needed.",
    color: "text-primary",
    bg: "bg-primary/8",
    size: "large",
  },
  {
    icon: "ComputerDesktopIcon",
    title: "Live Dashboard",
    description: "Real-time में सब कुछ देखें — queue, waiting time, doctor availability।",
    color: "text-accent",
    bg: "bg-accent/8",
    size: "small",
  },
  {
    icon: "DevicePhoneMobileIcon",
    title: "Branded Mobile App",
    description: "Play Store पर आपके hospital के नाम से app। Paid plan में included।",
    color: "text-success",
    bg: "bg-success/8",
    size: "small",
  },
  {
    icon: "BellAlertIcon",
    title: "Auto Notifications",
    description: "Patients को SMS/WhatsApp से automatic appointment reminders। No-shows 60% कम होते हैं।",
    color: "text-warning",
    bg: "bg-warning/8",
    size: "small",
  },
  {
    icon: "ChartBarIcon",
    title: "Analytics & Reports",
    description: "Daily, weekly, monthly reports। Doctor performance, peak hours, revenue tracking।",
    color: "text-purple-600",
    bg: "bg-purple-50",
    size: "small",
  },
  {
    icon: "UserGroupIcon",
    title: "Multi-Doctor Support",
    description: "एक hospital में multiple doctors और departments manage करें — सब एक dashboard से।",
    color: "text-primary",
    bg: "bg-primary/8",
    size: "small",
  },
  {
    icon: "ClipboardDocumentListIcon",
    title: "Token Management",
    description: "Smart token queue system। Patients को real-time token status updates मिलते हैं।",
    color: "text-accent",
    bg: "bg-accent/8",
    size: "small",
  },
  {
    icon: "GlobeAltIcon",
    title: "Custom Domain",
    description: "yourhospital.com पर booking page। Professional image build होती है। (Paid plan)",
    color: "text-success",
    bg: "bg-success/8",
    size: "small",
  },
];

export default function FeaturesSection() {
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
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-[#F8FAFB] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal hidden-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B6E6E" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-xs font-semibold text-primary">Powerful Features</span>
          </div>
          <h2 className="reveal hidden-reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F1923] mb-5 leading-tight">
            सब कुछ जो आपके Hospital को{" "}
            <span className="gradient-text">चाहिए</span>
          </h2>
          <p className="reveal hidden-reveal reveal-delay-2 text-lg text-[#4A5568] max-w-xl mx-auto">
            एक platform पर complete appointment management ecosystem — from booking to analytics।
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large feature card */}
          <div
            className="reveal hidden-reveal lg:col-span-2 feature-card bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm"
          >
            <div className={`w-14 h-14 ${features[0].bg} rounded-2xl flex items-center justify-center ${features[0].color} mb-6`}>
              <Icon name={features[0].icon as any} size={28} variant="outline" />
            </div>
            <h3 className="font-heading font-bold text-[#0F1923] text-xl mb-3">{features[0].title}</h3>
            <p className="text-[#4A5568] leading-relaxed mb-6">{features[0].description}</p>
            
            {/* QR Demo Visual */}
            <div className="bg-[#F8FAFB] rounded-2xl p-5 border border-[#E2E8F0] flex items-center gap-5">
              <div className="grid grid-cols-5 gap-1 flex-shrink-0">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-sm ${
                      [0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,6,12,18,7,11,17,8,16].includes(i)
                        ? "bg-primary" :"bg-[#E2E8F0]"
                    }`}
                  />
                ))}
              </div>
              <div>
                <p className="font-heading font-bold text-[#0F1923] text-sm mb-1">Scan करें & Book करें</p>
                <p className="text-xs text-[#718096]">No app needed • Works on any phone • Instant token</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs text-success font-semibold">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small feature cards */}
          {features.slice(1).map((feature, index) => (
            <div
              key={feature.title}
              className="reveal hidden-reveal feature-card bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm"
              style={{ transitionDelay: `${(index + 1) * 0.07}s` }}
            >
              <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center ${feature.color} mb-4`}>
                <Icon name={feature.icon as any} size={22} variant="outline" />
              </div>
              <h3 className="font-heading font-bold text-[#0F1923] text-base mb-2">{feature.title}</h3>
              <p className="text-sm text-[#4A5568] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}