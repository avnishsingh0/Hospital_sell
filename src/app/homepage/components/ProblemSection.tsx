"use client";

import { useEffect, useRef } from "react";

const problems = [
  {
    icon: "📋",
    title: "Long Queues & Chaos",
    description: "Patients wait for hours. Staff gets overwhelmed. No system to manage token numbers.",
    color: "from-red-50 to-orange-50",
    border: "border-red-100",
    iconBg: "bg-red-100",
  },
  {
    icon: "📞",
    title: "Phone Booking Mess",
    description: "Receptionists spend all day on calls. Double bookings happen. Patients forget appointments.",
    color: "from-orange-50 to-yellow-50",
    border: "border-orange-100",
    iconBg: "bg-orange-100",
  },
  {
    icon: "📝",
    title: "Paper Register Problems",
    description: "Register खो जाता है। Data corrupt होता है। कोई digital record नहीं।",
    color: "from-yellow-50 to-amber-50",
    border: "border-yellow-100",
    iconBg: "bg-yellow-100",
  },
  {
    icon: "😤",
    title: "Patient Complaints",
    description: "\"मेरा नंबर कब आएगा?\" — No status updates. Patients leave frustrated.",
    color: "from-rose-50 to-pink-50",
    border: "border-rose-100",
    iconBg: "bg-rose-100",
  },
  {
    icon: "💸",
    title: "Missed Revenue",
    description: "No-shows without notice. Last-minute cancellations. Empty slots waste doctor time.",
    color: "from-red-50 to-rose-50",
    border: "border-red-100",
    iconBg: "bg-red-100",
  },
  {
    icon: "📊",
    title: "Zero Analytics",
    description: "कितने patients आए? Which doctor is busiest? कोई report नहीं।",
    color: "from-gray-50 to-slate-50",
    border: "border-gray-100",
    iconBg: "bg-gray-100",
  },
];

export default function ProblemSection() {
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal hidden-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
            <span className="text-red-500 text-sm">😩</span>
            <span className="text-xs font-semibold text-red-600">क्या आपका Hospital भी इन Problems से जूझ रहा है?</span>
          </div>
          <h2 className="reveal hidden-reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F1923] mb-5 leading-tight">
            Traditional Appointment System की{" "}
            <span className="text-red-500">बड़ी Problems</span>
          </h2>
          <p className="reveal hidden-reveal reveal-delay-2 text-lg text-[#4A5568] max-w-2xl mx-auto">
            India के ज़्यादातर hospitals और clinics आज भी manual systems use कर रहे हैं — जो time, money और patients waste करते हैं।
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems?.map((problem, index) => (
            <div
              key={problem?.title}
              className={`reveal hidden-reveal bg-gradient-to-br ${problem?.color} border ${problem?.border} rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className={`w-12 h-12 ${problem?.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {problem?.icon}
              </div>
              <h3 className="font-heading font-bold text-[#0F1923] text-lg mb-2">{problem?.title}</h3>
              <p className="text-sm text-[#4A5568] leading-relaxed">{problem?.description}</p>
            </div>
          ))}
        </div>

        {/* Transition Arrow */}
        <div className="text-center mt-16">
          <div className="reveal hidden-reveal inline-flex flex-col items-center gap-3">
            <p className="text-[#4A5568] font-medium text-base">
              इन सभी problems का एक solution है ↓
            </p>
            <div className="flex flex-col gap-1">
              {[0, 1, 2]?.map((i) => (
                <div
                  key={i}
                  className="w-0.5 h-3 bg-primary/40 mx-auto rounded-full"
                  style={{ opacity: 1 - i * 0.25 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}