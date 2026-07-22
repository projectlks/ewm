import { BusinessLineUpSection } from '@/components/BusinessLineUpSection';
import { ComprehensiveServicesSection } from '@/components/ComprehensiveServicesSection';
import HeroSection from '@/components/HeroSection'
import { ProjectReferencesSection } from '@/components/ProjectReferencesSection';
import ServicesSection from '@/components/Services'
import { TrustedPartnersSection } from '@/components/TrustedPartnersSection';

const page = () => {
  return (
    <>
      {/* <Home /> */}
      <HeroSection />
      <ServicesSection />
      <TrustedPartnersSection />
      <BusinessLineUpSection />
      <ComprehensiveServicesSection/>
      <ProjectReferencesSection />
    </>
  );
}

export default page