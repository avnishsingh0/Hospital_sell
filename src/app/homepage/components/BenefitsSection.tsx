"use client";

import { useState, useEffect, useRef } from "react";

const tabs = [
    {
        id: "hospital",
        label: "For Hospital",
        emoji: "🏥",
        headline: "आपकी Hospital की वो Transformation जो आपने सोची थी",
        subline: "Manual chaos से smart digital operation तक — DoctorBooking से।",
        benefits: [
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.57 3.38 2 2 0 0 1 3.54 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                ),
                title: "Phone Calls 80% कम हो जाते हैं",
                description: "QR booking और self-service portal से patients खुद book करते हैं।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12l2 2 4-4" />
                    </svg>
                ),
                title: "Double Booking बिल्कुल बंद",
                description: "Slot-based system — एक slot, एक patient। कभी overlap नहीं।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                ),
                title: "Real-Time Hospital Overview",
                description: "Dashboard से देखें — कितने patients आए, कितने pending हैं, कौन complete हुआ।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                ),
                title: "Growing Digital Patient Database",
                description: "हर appointment automatically record होता है। Searchable, organized, permanent।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                ),
                title: "Lower Operational Cost",
                description: "Staff का time बचता है, errors कम होते हैं, revenue बढ़ता है।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                ),
                title: "Professional Brand Image",
                description: "Custom domain और branded mobile app — patients आपको serious लेते हैं।",
            },
        ],
        visual: {
            bg: "from-primary/8 to-primary/4",
            border: "border-primary/20",
            metric: { value: "80%", label: "Reduction in front-desk calls", color: "text-primary" },
            highlights: ["Zero double bookings", "Live dashboard 24/7", "Digital patient records"],
        },
    },
    {
        id: "doctors",
        label: "For Doctors",
        emoji: "👨‍⚕️",
        headline: "Doctors के लिए — Structured, Peaceful, Productive Day",
        subline: "हर वो interruption बंद हो जाता है जो आपको patient care से distract करता था।",
        benefits: [
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                ),
                title: "पूरे दिन का Schedule सुबह दिख जाता है",
                description: "कितने patients, कब, किसके साथ — consultation शुरू करने से पहले ही पता।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                        <line x1="6" y1="1" x2="6" y2="4" />
                        <line x1="10" y1="1" x2="10" y2="4" />
                        <line x1="14" y1="1" x2="14" y2="4" />
                    </svg>
                ),
                title: "Consultation के बीच Interruption नहीं",
                description: "Staff जानते हैं क्या हो रहा है। \"Next patient कब?\" जैसे सवाल बंद।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                ),
                title: "Patient Care पर 100% Focus",
                description: "Administrative burden दूर होने से ज़्यादा meaningful consultations होती हैं।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                    </svg>
                ),
                title: "Prepared Patients आते हैं",
                description: "Confirmed slot के साथ आने वाला patient less anxious, more cooperative होता है।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                ),
                title: "No-Shows कम, Full Utilization ज़्यादा",
                description: "Auto reminders ensure करते हैं कि हर slot का maximum use हो।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                ),
                title: "Professional Reputation Build होती है",
                description: "Digital system = modern doctor। Patients refer करते हैं, reviews positive आते हैं।",
            },
        ],
        visual: {
            bg: "from-accent/8 to-accent/4",
            border: "border-accent/20",
            metric: { value: "Zero", label: "Scheduling conflicts every day", color: "text-accent" },
            highlights: ["Pre-organised daily schedule", "No mid-consultation interruptions", "Higher patient satisfaction"],
        },
    },
    {
        id: "patients",
        label: "For Patients",
        emoji: "🙋",
        headline: "Patients को मिलता है वो Experience जो वो Deserve करते हैं",
        subline: "बिना wait किए, बिना confusion के — एक smooth, dignified hospital visit।",
        benefits: [
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                        <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                ),
                title: "घर से Book करें — कभी भी, कहीं से भी",
                description: "No phone calls, no queues। बस phone उठाया और appointment book हो गई।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                        <path d="M14 14h3v3h-3zM17 17h3v3h-3z" />
                    </svg>
                ),
                title: "Clinic में QR Scan — 60 Seconds में Done",
                description: "Hospital पहुंचे, QR scan किया, slot मिली। Reception queue नहीं।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                ),
                title: "Exactly पता होता है — कब जाना है",
                description: "Confirmed slot = confirmed time। Hours-long unexpected wait बंद।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                ),
                title: "Live Appointment Status देखें",
                description: "\"मेरा नंबर कब आएगा?\" का जवाब phone पर real-time दिखता है।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    </svg>
                ),
                title: "कोई App Download नहीं",
                description: "Basic booking browser पर काम करता है। Any phone, any age group।",
            },
            {
                icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                ),
                title: "Professional & Trustworthy Experience",
                description: "Hospital के नाम से booking page — confident feeling, positive first impression।",
            },
        ],
        visual: {
            bg: "from-success/8 to-success/4",
            border: "border-success/20",
            metric: { value: "90%", label: "Patients prefer digital booking again", color: "text-success" },
            highlights: ["No waiting room confusion", "Confirmed slot = confirmed time", "Real-time status on phone"],
        },
    },
];

export default function BenefitsSection() {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [animating, setAnimating] = useState(false);

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

    const handleTabChange = (index: number) => {
        if (index === activeTab) return;
        setAnimating(true);
        setTimeout(() => {
            setActiveTab(index);
            setAnimating(false);
        }, 180);
    };

    const tab = tabs[activeTab];

    return (
        <section ref={sectionRef} id="benefits" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.03)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px section-divider" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <div className="reveal hidden-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-6">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B6E6E" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        <span className="text-xs font-semibold text-primary">Real, Tangible Benefits</span>
                    </div>
                    <h2 className="reveal hidden-reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F1923] mb-5 leading-tight">
                        DoctorBooking से क्या{" "}
                        <span className="gradient-text">Change होता है?</span>
                    </h2>
                    <p className="reveal hidden-reveal reveal-delay-2 text-lg text-[#4A5568] max-w-xl mx-auto">
                        Hospital का हर stakeholder better experience पाता है — administrators से लेकर patients तक।
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="reveal hidden-reveal flex items-center justify-center mb-12">
                    <div className="inline-flex items-center gap-1 p-1.5 bg-[#F8FAFB] border border-[#E2E8F0] rounded-2xl">
                        {tabs.map((t, i) => (
                            <button
                                key={t.id}
                                onClick={() => handleTabChange(i)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold font-heading transition-all duration-300 ${activeTab === i
                                        ? "bg-white shadow-sm border border-[#E2E8F0] text-[#0F1923]"
                                        : "text-[#718096] hover:text-[#4A5568] hover:bg-white/60"
                                    }`}
                            >
                                <span className="text-base">{t.emoji}</span>
                                <span className="hidden sm:inline">{t.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div
                    className={`transition-all duration-200 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                        {/* Left — Benefits List */}
                        <div className="lg:col-span-7">
                            <div className="mb-8">
                                <h3 className="font-heading font-bold text-[#0F1923] text-2xl sm:text-3xl mb-3 leading-tight">
                                    {tab.headline}
                                </h3>
                                <p className="text-[#4A5568] text-base leading-relaxed">{tab.subline}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {tab.benefits.map((benefit, i) => (
                                    <div
                                        key={benefit.title}
                                        className="flex items-start gap-4 p-4 bg-[#F8FAFB] border border-[#E2E8F0] rounded-2xl hover:border-primary/20 hover:shadow-teal-sm hover:-translate-y-0.5 transition-all duration-300 group"
                                        style={{ transitionDelay: `${i * 0.05}s` }}
                                    >
                                        <div className="w-9 h-9 bg-primary/8 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[#0F1923] mb-1 leading-tight">{benefit.title}</p>
                                            <p className="text-xs text-[#718096] leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Visual Metric Card */}
                        <div className="lg:col-span-5">
                            <div className={`bg-gradient-to-br ${tab.visual.bg} border ${tab.visual.border} rounded-3xl p-8 h-full`}>

                                {/* Big metric */}
                                <div className="mb-8">
                                    <p className={`font-heading font-bold text-6xl ${tab.visual.metric.color} mb-3`}>
                                        {tab.visual.metric.value}
                                    </p>
                                    <p className="text-[#4A5568] font-medium text-base leading-snug">
                                        {tab.visual.metric.label}
                                    </p>
                                </div>

                                {/* Highlight checklist */}
                                <div className="space-y-3 mb-8">
                                    {tab.visual.highlights.map((h) => (
                                        <div key={h} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-success/15 flex items-center justify-center flex-shrink-0">
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3.5" strokeLinecap="round">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-semibold text-[#0F1923]">{h}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA inside card */}
                                <a
                                    href="#pricing"
                                    className="flex items-center justify-between w-full p-4 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-teal-sm hover:border-primary/30 transition-all duration-300 group"
                                >
                                    <div>
                                        <p className="text-sm font-bold text-[#0F1923]">यह सब Free में try करें</p>
                                        <p className="text-xs text-[#718096]">30 दिन · कोई card नहीं चाहिए</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom CTA strip */}
                <div className="reveal hidden-reveal mt-16">
                    <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-success/5 border border-[#E2E8F0] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-heading font-bold text-[#0F1923] text-base">सभी benefits एक साथ मिलते हैं</p>
                                <p className="text-sm text-[#4A5568]">Hospital, Doctors, और Patients — तीनों को फायदा होता है।</p>
                            </div>
                        </div>
                        <a
                            href="#pricing"
                            className="btn-primary flex-shrink-0 flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold font-heading text-sm"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            30-Day Free Trial शुरू करें
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
