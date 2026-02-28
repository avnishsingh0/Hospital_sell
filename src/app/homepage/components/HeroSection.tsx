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
                1,200+ Hospitals Already Using — <span className="text-primary">India भर में</span>
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
                  <path d="M2 4 Q100 2 198 4" stroke="#0B6E6E" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4"/>
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
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
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
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="m8 21 4-4 4 4"/>
                  <path d="M12 17v4"/>
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

          {/* Right: Dashboard Mockup with floating cards */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="float-a relative z-10 bg-white rounded-[2rem] mockup-shadow overflow-hidden border border-[#E2E8F0]">
                {/* Browser bar */}
                <div className="bg-[#F8FAFB] px-5 py-3 border-b border-[#E2E8F0] flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C940]" />
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-xs text-[#718096] border border-[#E2E8F0] flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                    app.doctorbooking.in/dashboard
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-5 bg-[#F8FAFB]">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs text-[#718096] font-medium mb-0.5">Welcome back,</p>
                      <h3 className="font-heading font-bold text-[#0F1923] text-base">City Care Hospital</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-success/10 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
                        <span className="text-xs font-semibold text-success">Live</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white text-xs font-bold">CC</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Today's Appointments", value: "47", color: "text-primary", bg: "bg-primary/8" },
                      { label: "Waiting Patients", value: "12", color: "text-warning", bg: "bg-warning/8" },
                      { label: "Completed", value: "35", color: "text-success", bg: "bg-success/8" },
                    ]?.map((stat) => (
                      <div key={stat?.label} className={`${stat?.bg} rounded-xl p-3`}>
                        <p className={`font-heading font-bold text-xl ${stat?.color}`}>{stat?.value}</p>
                        <p className="text-[10px] text-[#718096] font-medium leading-tight mt-0.5">{stat?.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Appointment list */}
                  <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
                    <div className="px-4 py-3 border-b border-[#F1F5F9] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0F1923]">Today's Queue</span>
                      <span className="text-xs text-primary font-medium">View All →</span>
                    </div>
                    <div className="divide-y divide-[#F1F5F9]">
                      {[
                        { token: "T-001", name: "Ramesh Kumar", doctor: "Dr. Sharma", time: "10:00 AM", status: "In Consultation", statusColor: "bg-success/10 text-success" },
                        { token: "T-002", name: "Priya Patel", doctor: "Dr. Mehta", time: "10:15 AM", status: "Waiting", statusColor: "bg-warning/10 text-warning" },
                        { token: "T-003", name: "Sunita Devi", doctor: "Dr. Sharma", time: "10:30 AM", status: "Scheduled", statusColor: "bg-accent/10 text-accent" },
                      ]?.map((apt) => (
                        <div key={apt?.token} className="flex items-center gap-3 px-4 py-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                            <span className="text-[9px] font-bold text-primary">{apt?.token}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-[#0F1923] truncate">{apt?.name}</p>
                            <p className="text-[10px] text-[#718096]">{apt?.doctor} · {apt?.time}</p>
                          </div>
                          <span className={`text-[9px] font-semibold px-2 py-1 rounded-full ${apt?.statusColor}`}>
                            {apt?.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1: QR Scanner */}
              <div className="float-b absolute -left-8 top-1/4 z-20 glass-card rounded-2xl p-4 w-52 hidden lg:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B6E6E" strokeWidth="2" strokeLinecap="round">
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                      <path d="M14 14h3v3h-3zM17 17h3v3h-3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F1923]">QR Scan Done!</p>
                    <p className="text-[10px] text-[#718096]">Patient checked in</p>
                  </div>
                </div>
                <div className="h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full w-3/4 transition-all duration-1000" />
                </div>
                <p className="text-[10px] text-[#718096] mt-1.5">Token T-048 assigned</p>
              </div>

              {/* Floating Card 2: New Booking */}
              <div className="float-c absolute -right-6 top-8 z-20 glass-card rounded-2xl p-4 w-48 hidden lg:block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-success/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
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

              {/* Floating Card 3: App Download */}
              <div className="float-b absolute -right-4 bottom-16 z-20 glass-card rounded-2xl p-4 w-52 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 0v18m-4-4 4 4 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F1923]">Branded App Live</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[1,2,3,4,5]?.map(i => (
                        <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#F59E0B">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
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
            { value: "1,200+", label: "Hospitals Onboarded", icon: "🏥" },
            { value: "50,000+", label: "Daily Appointments", icon: "📅" },
            { value: "99.9%", label: "System Uptime", icon: "⚡" },
            { value: "₹0", label: "Setup Cost", icon: "🎁" },
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