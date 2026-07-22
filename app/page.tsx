import { AboutSection } from '@/components/AboutSection';
import { BusinessLineUpSection } from '@/components/BusinessLineUpSection';
import { ComprehensiveServicesSection } from '@/components/ComprehensiveServicesSection';
import { CoreValuesSection } from '@/components/CoreValuesSection';
import HeroSection from '@/components/HeroSection'
import { ProjectReferencesSection } from '@/components/ProjectReferencesSection';
import ServicesSection from '@/components/Services'
import { TrustedPartnersSection } from '@/components/TrustedPartnersSection';

const page = () => {
  return (
    <>
      {/* <Home /> */}
      <HeroSection />
      <AboutSection/>
      <ServicesSection />
      <TrustedPartnersSection />
      <BusinessLineUpSection />
      <ComprehensiveServicesSection />
      <ProjectReferencesSection />
      <CoreValuesSection />
    </>
  );
}

export default page