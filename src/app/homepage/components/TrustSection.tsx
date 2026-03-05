"use client";

import { useEffect, useRef } from "react";

const stats = [
    {
        value: "30 Days",
        label: "Free Trial",
        sublabel: "No strings attached",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12V22H4V12" />
                <path d="M22 7H2v5h20V7z" />
                <path d="M12 22V7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
        ),
        color: "text-primary",
        bg: "bg-primary/8",
    },
    {
        value: "24/7",
        label: "Support Available",
        sublabel: "WhatsApp + Call",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        color: "text-accent",
        bg: "bg-accent/8",
    },
    {
        value: "₹0",
        label: "Setup & Trial Cost",
        sublabel: "No credit card needed",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        color: "text-success",
        bg: "bg-success/8",
    },
    {
        value: "5 Min",
        label: "Setup Time",
        sublabel: "Zero tech skills needed",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        color: "text-warning",
        bg: "bg-warning/8",
    },
];

const testimonials = [
    {
        quote: "पहले रोज़ 200 phone calls आते थे। अब patients खुद QR scan करके book करते हैं। Staff stress बिल्कुल खत्म।",
        name: "Dr. Ramesh Gupta",
        role: "City Care Hospital, Jaipur",
        initials: "RG",
        color: "from-primary to-primary-light",
    },
    {
        quote: "Setup में 10 minutes लगे। पहले week से ही difference दिखा। हमारे patients बहुत खुश हैं।",
        name: "Dr. Priya Mehta",
        role: "Mehta Clinic, Pune",
        initials: "PM",
        color: "from-accent to-accent-light",
    },
    {
        quote: "₹2000/month में Play Store पर अपनी branded app! Patients हमें बहुत professional doctor समझते हैं।",
        name: "Dr. Sunil Sharma",
        role: "Sharma Multispecialty, Delhi",
        initials: "SS",
        color: "from-success to-emerald-500",
    },
];

export default function TrustSection() {
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
        <section ref={sectionRef} className="py-16 bg-white border-b border-[#F1F5F9] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,110,110,0.025)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top label */}
                <div className="reveal hidden-reveal text-center mb-10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#718096]">
                        India के hospitals already experience कर रहे हैं
                    </p>
                </div>

                {/* Stats Row */}
                <div className="reveal hidden-reveal grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex items-center gap-4 p-5 bg-[#F8FAFB] rounded-2xl border border-[#E2E8F0] hover:border-primary/20 hover:shadow-teal-sm transition-all duration-300 group"
                        >
                            <div className={`w-11 h-11 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>
                            <div>
                                <p className={`font-heading font-bold text-xl ${stat.color}`}>{stat.value}</p>
                                <p className="text-xs font-semibold text-[#0F1923] leading-tight">{stat.label}</p>
                                <p className="text-[10px] text-[#718096]">{stat.sublabel}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="section-divider mb-14" />

                {/* Testimonials Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className="reveal hidden-reveal bg-[#F8FAFB] rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-teal-sm hover:border-primary/20 transition-all duration-300"
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-sm text-[#4A5568] leading-relaxed mb-5 italic">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                                    <span className="text-white text-xs font-bold">{t.initials}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#0F1923]">{t.name}</p>
                                    <p className="text-xs text-[#718096]">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom trust badges */}
                <div className="reveal hidden-reveal mt-10 flex flex-wrap items-center justify-center gap-6">
                    {[
                        { icon: "🔒", text: "Data 100% Secure" },
                        { icon: "☁️", text: "Cloud-Based" },
                        { icon: "📲", text: "Works on Any Phone" },
                        { icon: "🇮🇳", text: "Made for India" },
                        { icon: "🛠️", text: "Free Maintenance" },
                    ].map((badge) => (
                        <div
                            key={badge.text}
                            className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFB] border border-[#E2E8F0] rounded-full text-sm font-medium text-[#4A5568]"
                        >
                            <span>{badge.icon}</span>
                            <span>{badge.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
