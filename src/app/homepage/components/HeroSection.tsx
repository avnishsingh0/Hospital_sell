"use client";

import { useEffect, useRef } from "react";


export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef?.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-gradient relative min-h-screen flex items-center overflow-hidden pt-20 pb-16"
    >
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(11,110,110,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(5,150,105,0.04)_0%,transparent_70%)] pointer-events-none" />
      {/* Animated ring */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-dashed border-primary/10 rounded-full animate-spin-slow pointer-events-none hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-40 h-40 border border-dashed border-accent/10 rounded-full animate-spin-slow pointer-events-none hidden lg:block" style={{ animationDirection: 'reverse' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-6 xl:col-span-5">
            {/* Live badge */}
            <div className="reveal hidden-reveal inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-primary/20 shadow-teal-sm mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
              </span>
              <span className="text-xs font-semibold text-[#0F1923]">
                Early Access Live — <span className="text-primary">अभी Free में Join करें</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="reveal hidden-reveal reveal-delay-1 font-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight text-[#0F1923] mb-6">
              Hospital का{" "}
              <span className="gradient-text">Appointment System</span>{" "}
              अब Digital करें —{" "}
              <span className="relative">
                बिल्कुल Free
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                  <path d="M2 4 Q100 2 198 4" stroke="#0B6E6E" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="reveal hidden-reveal reveal-delay-2 text-lg text-[#4A5568] leading-relaxed mb-8 max-w-xl">
              QR Scanner booking, patient status tracking, doctor dashboard — सब कुछ एक system में।
              <span className="font-semibold text-[#0F1923]"> 30 दिन का free trial, कोई setup cost नहीं।</span>
            </p>

            {/* CTA Buttons */}
            <div className="reveal hidden-reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#pricing"
                className="btn-primary flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold font-heading shadow-teal-md"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                30-Day Free Trial
              </a>
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20book%20a%20demo%20of%20DoctorBooking"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold font-heading"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="m8 21 4-4 4 4" />
                  <path d="M12 17v4" />
                </svg>
                Live Demo देखें
              </a>
            </div>

            {/* Trust signals */}
            <div className="reveal hidden-reveal reveal-delay-4 flex flex-wrap items-center gap-5">
              {[
                { icon: "✓", text: "No Credit Card" },
                { icon: "✓", text: "Free Setup" },
                { icon: "✓", text: "24/7 Support" },
              ]?.map((item) => (
                <div key={item?.text} className="flex items-center gap-1.5 text-sm text-[#4A5568]">
                  <span className="w-5 h-5 rounded-full bg-success/15 flex items-center justify-center text-success text-xs font-bold">
                    {item?.icon}
                  </span>
                  <span className="font-medium">{item?.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Mockup — DentalCare Admin Panel style */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative pb-8 xl:pb-10">

              {/* Browser chrome wrapper */}
              <div className="float-a relative z-10 rounded-[1.5rem] mockup-shadow overflow-hidden border border-[#E2E8F0]">
                {/* Browser bar */}
                <div className="bg-[#F0EDE6] px-4 py-2.5 flex items-center gap-2.5 border-b border-[#E2DDD0]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C940]" />
                  </div>
                  <div className="flex-1 bg-white/70 rounded-md px-3 py-1 text-[10px] text-[#8A7F72] border border-[#DDD5C8] flex items-center gap-1.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                    app.doctorbooking.in/dashboard
                  </div>
                </div>

                {/* Dashboard shell: sidebar + main */}
                <div className="flex" style={{ minHeight: 380 }}>

                  {/* ── Sidebar ── */}
                  <div className="w-[148px] flex-shrink-0 bg-[#1C2536] flex flex-col" style={{ minHeight: 380 }}>
                    {/* Logo */}
                    <div className="px-4 pt-4 pb-3 border-b border-white/8">
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="w-6 h-6 rounded-md bg-[#C9A96E] flex items-center justify-center flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                        </div>
                        <span className="font-heading font-bold text-white text-xs">DoctorBook</span>
                      </div>
                      <p className="text-[9px] text-white/40 pl-8">Admin Panel</p>
                    </div>

                    {/* Nav */}
                    <nav className="flex-1 px-2 py-3 space-y-0.5">
                      {/* Active item */}
                      <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-[#C9A96E]/20 border border-[#C9A96E]/30">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
                        <span className="text-[10px] font-semibold text-[#C9A96E]">Overview</span>
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                      </div>
                      {[
                        { label: "User Management", icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></> },
                        { label: "Appointments", icon: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></> },
                        { label: "Today's Queue", icon: <><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></> },
                        { label: "Patients", icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></> },
                        { label: "Settings", icon: <><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93l-1.41 1.41M4.93 19.07l1.41-1.41M2 12h2m16 0h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41M12 2v2m0 16v2" /></> },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-white/5 cursor-pointer group">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                          <span className="text-[10px] text-white/45 group-hover:text-white/70 transition-colors truncate">{item.label}</span>
                        </div>
                      ))}
                    </nav>

                    {/* User footer */}
                    <div className="px-3 pb-3 border-t border-white/8 pt-3">
                      <p className="text-[9px] font-semibold text-white/70 truncate">City Care Hospital</p>
                      <p className="text-[8px] text-white/35 truncate">admin@citycarehosp.in</p>
                      <button className="mt-2 flex items-center gap-1.5 text-[9px] text-red-400/80 hover:text-red-400 transition-colors">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                        Sign Out
                      </button>
                    </div>
                  </div>

                  {/* ── Main content ── */}
                  <div className="flex-1 bg-[#F2EDE4] p-4 overflow-hidden">

                    {/* Section label */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#4CAF82] animate-pulse flex-shrink-0" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6B6255]">Today's Snapshot</span>
                    </div>

                    {/* Stat cards — 3×2 grid */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />, icon2: <circle cx="9" cy="7" r="4" />, value: "24", label: "Total Patients" },
                        { icon: <rect x="3" y="4" width="18" height="18" rx="2" />, icon2: <><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>, value: "6", label: "Today's Appts" },
                        { icon: <circle cx="12" cy="12" r="10" />, icon2: <><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>, value: "0", label: "Pending", sub: "Needs attention" },
                        { icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />, icon2: null, value: "3", label: "Doctors" },
                        { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, icon2: null, value: "2", label: "Admin Staff" },
                        { icon: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>, icon2: null, value: "5", label: "Departments" },
                      ].map((card) => (
                        <div key={card.label} className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="w-7 h-7 rounded-lg bg-[#F2EDE4] flex items-center justify-center mb-2">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8A7F72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              {card.icon}
                              {card.icon2}
                            </svg>
                          </div>
                          <p className="font-heading font-bold text-lg text-[#1C2536] leading-none">{card.value}</p>
                          <p className="text-[9px] text-[#8A8070] mt-0.5 leading-tight">{card.label}</p>
                          {card.sub && <p className="text-[8px] text-[#A89A87] leading-tight">{card.sub}</p>}
                        </div>
                      ))}
                    </div>

                    {/* Charts row */}
                    <div className="grid grid-cols-5 gap-2">

                      {/* Bar chart */}
                      <div className="col-span-3 bg-white rounded-xl p-3 shadow-sm">
                        <p className="text-[10px] font-bold text-[#1C2536] mb-3">Weekly Appointments</p>
                        <div className="flex items-end gap-1.5 h-16">
                          {[
                            { day: "Sun", h: 0 },
                            { day: "Mon", h: 0 },
                            { day: "Tue", h: 30 },
                            { day: "Wed", h: 100 },
                            { day: "Thu", h: 55 },
                            { day: "Fri", h: 0 },
                            { day: "Sat", h: 75 },
                          ].map((b) => (
                            <div key={b.day} className="flex-1 flex flex-col items-center gap-1">
                              <div className="w-full rounded-sm bg-[#C9A96E]" style={{ height: b.h === 0 ? 2 : `${b.h}%`, opacity: b.h === 0 ? 0.18 : 1 }} />
                              <span className="text-[7px] text-[#A89A87]">{b.day}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Donut chart */}
                      <div className="col-span-2 bg-white rounded-xl p-3 shadow-sm flex flex-col">
                        <p className="text-[10px] font-bold text-[#1C2536] mb-2">Department Load</p>
                        <div className="flex-1 flex items-center justify-center">
                          <div className="relative w-16 h-16">
                            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                              <circle cx="18" cy="18" r="13" fill="none" stroke="#E8E0D4" strokeWidth="5" />
                              {/* Dental Implants — golden ~52% */}
                              <circle cx="18" cy="18" r="13" fill="none" stroke="#C9A96E" strokeWidth="5"
                                strokeDasharray="42 82" strokeDashoffset="0" strokeLinecap="butt" />
                              {/* Cosmetic Dentistry — dark ~32% */}
                              <circle cx="18" cy="18" r="13" fill="none" stroke="#1C2536" strokeWidth="5"
                                strokeDasharray="26 82" strokeDashoffset="-42" strokeLinecap="butt" />
                              {/* Teeth Whitening — blue ~16% */}
                              <circle cx="18" cy="18" r="13" fill="none" stroke="#6BAED6" strokeWidth="5"
                                strokeDasharray="14 82" strokeDashoffset="-68" strokeLinecap="butt" />
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-1 mt-1">
                          {[
                            { color: "#C9A96E", label: "Dental Implants" },
                            { color: "#1C2536", label: "Cosmetic Dent." },
                            { color: "#6BAED6", label: "Teeth Whitening" },
                          ].map((d) => (
                            <div key={d.label} className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: d.color }} />
                              <span className="text-[8px] text-[#8A7F72]">{d.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1: QR Scanner — bottom-left, peeking below the mockup */}
              <div className="float-b absolute -left-4 -bottom-5 z-20 glass-card rounded-2xl p-4 w-52 hidden xl:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B6E6E" strokeWidth="2" strokeLinecap="round">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" /><path d="M14 14h3v3h-3zM17 17h3v3h-3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F1923]">QR Scan Done!</p>
                    <p className="text-[10px] text-[#718096]">Patient checked in</p>
                  </div>
                </div>
                <div className="h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full w-3/4" />
                </div>
                <p className="text-[10px] text-[#718096] mt-1.5">Token T-048 assigned</p>
              </div>

              {/* Floating Card 2: New Booking — top-right, peeking above the browser chrome */}
              <div className="float-c absolute -right-4 -top-5 z-20 glass-card rounded-2xl p-4 w-48 hidden xl:block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#0F1923]">New Booking</p>
                    <p className="text-[9px] text-[#718096]">Just now</p>
                  </div>
                </div>
                <p className="text-xs text-[#4A5568]">
                  <span className="font-semibold text-[#0F1923]">Amit Verma</span> booked with Dr. Gupta
                </p>
              </div>

              {/* Floating Card 3: Play Store — bottom-right, peeking below the mockup */}
              <div className="float-b absolute right-[15%] -bottom-5 z-20 glass-card rounded-2xl p-4 w-52 hidden xl:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 0v18m-4-4 4 4 4-4" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F1923]">Branded App Live</p>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map(i => (
                        <svg key={i} width="9" height="9" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      ))}
                      <span className="text-[9px] text-[#718096] ml-0.5">4.8 Play Store</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "30 Days", label: "Free Trial Period", icon: "🎁" },
            { value: "₹0", label: "Zero Setup Cost", icon: "✅" },
            { value: "5 Min", label: "Quick Setup", icon: "⚡" },
            { value: "99.9%", label: "System Uptime", icon: "🔒" },
          ]?.map((stat) => (
            <div
              key={stat?.label}
              className="stat-card bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm text-center hover:border-primary/30 hover:shadow-teal-sm transition-all duration-300"
            >
              <div className="text-2xl mb-1.5">{stat?.icon}</div>
              <p className="font-heading font-bold text-2xl text-[#0F1923] mb-0.5">{stat?.value}</p>
              <p className="text-xs text-[#718096] font-medium">{stat?.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}