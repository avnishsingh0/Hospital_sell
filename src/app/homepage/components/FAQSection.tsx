"use client";

import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "क्या मुझे technical knowledge होना जरूरी है?",
    answer: "बिल्कुल नहीं! DoctorBooking को specifically non-technical hospital owners के लिए design किया गया है। Simple interface, step-by-step setup guide, और हमारी team हमेशा help के लिए available है।",
  },
  {
    question: "Free trial में कोई hidden charge तो नहीं है?",
    answer: "नहीं। Free trial completely free है — कोई credit card नहीं, कोई setup fee नहीं, कोई hidden charge नहीं। 30 दिन बाद आप decide करें कि paid plan लेना है या नहीं।",
  },
  {
    question: "Play Store App किसके नाम से होगी?",
    answer: "Paid plan में आपकी hospital के नाम से Play Store पर app publish होगी। जैसे 'City Care Hospital' या 'Dr. Sharma Clinic'। App icon, color scheme — सब आपके branding के हिसाब से।",
  },
  {
    question: "क्या एक hospital में multiple doctors add कर सकते हैं?",
    answer: "हाँ! Unlimited doctors add करें। हर doctor का अलग schedule, अलग queue, अलग booking page। Multi-department hospitals के लिए भी perfect।",
  },
  {
    question: "Patients को app download करना होगा?",
    answer: "Free plan में patients को कोई app download नहीं करना। बस QR scan करें और browser में booking हो जाती है। Paid plan में आपकी branded app भी available होगी।",
  },
  {
    question: "अगर internet नहीं है तो system काम करेगा?",
    answer: "Basic token management offline भी काम करता है। Internet आने पर automatically sync हो जाता है। Remote areas के hospitals के लिए भी suitable।",
  },
  {
    question: "Data कितना secure है?",
    answer: "Patient data encrypted servers पर store होता है। HIPAA-compliant infrastructure। Regular backups। आपका data कभी third party को नहीं दिया जाता।",
  },
  {
    question: "Paid plan में contract कितने समय का है?",
    answer: "कोई long-term contract नहीं। Month-to-month basis पर। जब चाहें cancel करें। Annual plan पर discount available है।",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`faq-item rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
        open ? "border-primary/30 shadow-teal-sm bg-primary/3" : "bg-white"
      }`}
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
      aria-expanded={open}
    >
      <div className="flex items-center gap-4 px-6 py-5">
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open ? "bg-primary text-white" : "bg-primary/8 text-primary"
          }`}
        >
          <span className="text-xs font-bold">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className={`flex-1 font-heading font-semibold text-base leading-snug ${open ? "text-primary" : "text-[#0F1923]"}`}>
          {faq.question}
        </h3>
        <div
          className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open ? "border-primary bg-primary text-white rotate-45" : "border-[#E2E8F0] text-[#718096]"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </div>
      </div>
      {open && (
        <div className="px-6 pb-5">
          <div className="pl-12">
            <p className="text-sm text-[#4A5568] leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
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
    <section id="faq" ref={sectionRef} className="py-24 bg-[#F8FAFB] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal hidden-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B6E6E" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span className="text-xs font-semibold text-primary">Frequently Asked Questions</span>
          </div>
          <h2 className="reveal hidden-reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F1923] mb-5 leading-tight">
            आपके{" "}
            <span className="gradient-text">सवालों के जवाब</span>
          </h2>
          <p className="reveal hidden-reveal reveal-delay-2 text-lg text-[#4A5568]">
            कोई सवाल नहीं मिला? WhatsApp करें — <span className="font-semibold text-primary">तुरंत reply</span> मिलेगी।
          </p>
        </div>

        {/* FAQ Items */}
        <div className="reveal hidden-reveal space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>

        {/* Still have questions */}
        <div className="reveal hidden-reveal mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-[#E2E8F0] rounded-2xl px-8 py-5 shadow-sm">
            <div className="text-2xl">💬</div>
            <p className="text-[#4A5568] font-medium">
              और सवाल हैं? <span className="font-bold text-[#0F1923]">हमसे बात करें</span>
            </p>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20have%20a%20question%20about%20DoctorBooking"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold font-heading"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp करें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}