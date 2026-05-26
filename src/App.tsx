/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ServicesSection } from './components/ServicesSection';
import { QuoteSection } from './components/QuoteSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { ProjectsSection } from './components/ProjectsSection';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';
import { CopyrightBar } from './components/CopyrightBar';
import { BottomNav } from './components/BottomNav';

export default function App() {
  return (
    <main className="min-h-screen bg-[#030D12] text-slate-100 selection:bg-slate-700 selection:text-white">
      <Header />
      <Hero />
      <Marquee />
      <ServicesSection />
      <QuoteSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </main>
  );
}
