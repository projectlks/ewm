"use client"
// import AboutSection from '@/components/AboutSection';
import { AboutSection } from '@/components/AboutSection';
import { BusinessLineUpSection } from '@/components/BusinessLineUpSection';
import { ComprehensiveServicesSection } from '@/components/ComprehensiveServicesSection';
import { CTASection } from '@/components/ContactSection';
// import  ContactSection from '@/components/ContactSection';
import { CoreValuesSection } from '@/components/CoreValuesSection';
import CustomerSupportSection from '@/components/CustomerSupportSection';
import HeroSection from '@/components/HeroSection'
import ProjectReferencesSection from '@/components/ProjectReferencesSection';
// import { ProjectReferencesSection } from '@/components/ProjectReferencesSection';
import ServicesSection from '@/components/Services'
import TeamSection from '@/components/TeamSection';
import { TrustedPartnersSection } from '@/components/TrustedPartnersSection';

const page = () => {

  return (
    <>
      {/* <Home /> */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CustomerSupportSection />
      <TeamSection />
      <TrustedPartnersSection />
      <BusinessLineUpSection />
      <ComprehensiveServicesSection />
      <ProjectReferencesSection />
      <CoreValuesSection />

      <CTASection />
    </>
  );
}

export default page