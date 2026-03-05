"use client";

import { useEffect, useRef } from "react";

const costs = [
    {
        icon: "🌐",
        title: "Domain (.in / .com)",
        detail: "आपकी hospital की dedicated website का address — जिससे patients आपको online ढूँढ सकें।",
        amount: "₹200",
        per: "per month",
        note: "Hosting + domain renewal",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
    },
    {
        icon: "📱",
        title: "Google Play Store Account",
        detail: "आपकी branded app को Play Store पर publish करने के लिए Google को यह fee देनी होती है — यह हम नहीं रखते।",
        amount: "₹500",
        per: "per month",
        note: "App build + Play Store publish",
        color: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-100",
    },
    {
        icon: "☁️",
        title: "Cloud Server (AWS)",
        detail: "आपका data 24/7 online रहे, fast load हो, secure रहे — इसके लिए dedicated cloud server चाहिए।",
        amount: "₹1,000",
        per: "per month",
        note: "Server + database + daily backups",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100",
    },
    {
        icon: "👨‍💻",
        title: "Support & Maintenance Team",
        detail: "जो लोग आपको WhatsApp पर तुरंत help करते हैं, bugs fix करते हैं, नए features देते हैं — उनकी salary।",
        amount: "₹300",
        per: "per month",
        note: "Part-time dev + support staff",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-100",
    },
];

export default function WhyPricingSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll(".reveal").forEach((el, i) => {
                            setTimeout(() => el.classList.remove("hidden-reveal"), i * 80);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="reveal hidden-reveal text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                        100% Transparent Pricing
                    </p>
                    <h2 className="reveal hidden-reveal font-heading font-bold text-3xl sm:text-4xl text-[#0F1923] mb-5 leading-tight">
                        आपके ₹2,000 कहाँ जाते हैं?{" "}
                        <br className="hidden sm:block" />
                        <span className="gradient-text">बिल्कुल honestly बताते हैं</span>
                    </h2>
                    <p className="reveal hidden-reveal text-[#4A5568] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        यह पैसा हम अपने पास नहीं रखते। यह सिर्फ उतना है जितना आपकी
                        hospital को actually चलाने में लगता है।
                    </p>
                </div>

                {/* Cost breakdown cards */}
                <div className="space-y-4 mb-10">
                    {costs.map((item, i) => (
                        <div
                            key={i}
                            className={`reveal hidden-reveal flex items-start gap-4 rounded-2xl p-5 border ${item.bg} ${item.border}`}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="text-3xl flex-shrink-0 mt-0.5">{item.icon}</div>
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                    <h3 className="font-heading font-bold text-[#0F1923] text-base">{item.title}</h3>
                                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/80 border ${item.border} ${item.color}`}>
                                        {item.note}
                                    </span>
                                </div>
                                <p className="text-sm text-[#4A5568] leading-relaxed">{item.detail}</p>
                            </div>
                            <div className="text-right flex-shrink-0 pl-2">
                                <p className={`font-heading font-bold text-xl ${item.color}`}>{item.amount}</p>
                                <p className="text-[11px] text-[#718096]">{item.per}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Founder personal note */}
                <div className="reveal hidden-reveal bg-[#F8FAFB] border border-[#E2E8F0] rounded-2xl p-6">
                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-2xl">
                            🙏
                        </div>
                        <div>
                            <p className="font-semibold text-[#0F1923] mb-2 text-base">Founder की बात —</p>
                            <p className="text-sm text-[#4A5568] leading-relaxed">
                                &ldquo;मैंने यह product इसलिए बनाया क्योंकि मैंने खुद देखा है कि छोटे hospitals में
                                patients घंटों लाइन में खड़े रहते हैं और doctors का time waste होता है।
                                मैं एक developer हूँ और अभी शुरुआत कर रहा हूँ — यही honest truth है।
                                ₹2,000 में मैं सिर्फ इतना चाहता हूँ कि server चले, support दे सकूँ, और आपकी
                                app live रहे। अगर आपको 30 दिन में genuinely value नहीं मिली — कोई सवाल
                                नहीं, कोई charge नहीं।&rdquo;
                            </p>
                            <p className="text-xs text-primary font-semibold mt-3">— DoctorBooking Founder 🇮🇳</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
