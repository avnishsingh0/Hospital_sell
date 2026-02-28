


export default function Footer() {
  return (
    <footer className="bg-[#0F1923] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-teal-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Doctor<span className="text-primary-light">Booking</span>
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              India के hospitals और clinics के लिए complete appointment management system। Simple, affordable, powerful।
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { label: "Twitter", href: "#", icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/> },
                { label: "LinkedIn", href: "#", icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></> },
                { label: "Facebook", href: "#", icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/> },
              ]?.map((social) => (
                <a
                  key={social?.label}
                  href={social?.href}
                  aria-label={social?.label}
                  className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-primary/30 hover:border-primary/40 transition-all duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social?.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-4">Product</h4>
              <ul className="space-y-3">
                {[
                  { label: "Features", href: "#features" },
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Free Trial", href: "#pricing" },
                ]?.map((link) => (
                  <li key={link?.label}>
                    <a href={link?.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                      {link?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-4">Support</h4>
              <ul className="space-y-3">
                {[
                  { label: "FAQ", href: "#faq" },
                  { label: "WhatsApp Demo", href: "https://wa.me/919999999999" },
                  { label: "Contact Us", href: "mailto:hello@doctorbooking.in" },
                  { label: "Help Center", href: "#" },
                ]?.map((link) => (
                  <li key={link?.label}>
                    <a
                      href={link?.href}
                      target={link?.href?.startsWith("http") ? "_blank" : undefined}
                      rel={link?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary-light flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.57 3.38 2 2 0 0 1 3.54 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span className="text-sm text-white/50">+91 99999 99999</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary-light flex-shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span className="text-sm text-white/50">hello@doctorbooking.in</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary-light flex-shrink-0 mt-0.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="text-sm text-white/50 leading-snug">Bengaluru, Karnataka, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 DoctorBooking. All rights reserved. Made with ❤️ in India 🇮🇳
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}