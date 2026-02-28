import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/FeaturesSection";
import FreeTrialSection from "./components/FreeTrialSection";
import PricingSection from "./components/PricingSection";
import WhyUsSection from "./components/WhyUsSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "DoctorBooking — Hospital Appointment System | Free 30-Day Trial",
  description:
    "India के hospitals, clinics और private doctors के लिए complete appointment management system। QR booking, live dashboard, branded app। 30 दिन free trial। ₹2000/month।",
  keywords: [
    "hospital appointment system India",
    "doctor booking software",
    "clinic management system",
    "hospital software India",
    "QR code appointment booking",
    "doctor appointment app",
    "hospital management software",
  ],
  openGraph: {
    title: "DoctorBooking — Hospital Appointment System",
    description: "QR booking, live dashboard, branded Play Store app। 30-day free trial। Made for Indian hospitals.",
    type: "website",
    locale: "en_IN",
  },
};

export default function HomepagePage() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <FreeTrialSection />
        <PricingSection />
        <WhyUsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}