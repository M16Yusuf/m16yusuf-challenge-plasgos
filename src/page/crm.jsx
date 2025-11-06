import BackgroudGrid from "./../components/crm/BackgroudGrid";
import Navbar from "./../components/crm/Navbar";
// main content page
import CrmHero from "./../components/crm/hero";
import CrmProblemSection from "./../components/crm/CrmProblemSection";
import CrmSolutionSection from "./../components/crm/CrmSolutionSection";
import CrmStepsTabsSection from "./../components/crm/CrmStepsTabsSection";
import CrmAiAgentSection from "./../components/crm/CrmAiAgentSection";
import CrmFeatureSection from "./../components/crm/CrmFeatureSection";
import CrmAdvanceFeature from "./../components/crm/CrmAdvanceFeatureSection";
import CrmContactUsSection from "./../components/crm/CrmContactUsSection";
import CrmPricingSection from "./../components/crm/CrmPricingSection";
import CrmFaqSection from "./../components/crm/CrmFaqSection";
import Footer from "./../components/crm/Footer";

function crm() {
  return (
    <div className="flex min-h-screen w-full snap-y snap-mandatory flex-col scroll-smooth">
      <BackgroudGrid />
      <Navbar />
      <main className="flex flex-col gap-y-10">
        <CrmHero />
        <CrmProblemSection />
        <CrmSolutionSection />
        <CrmStepsTabsSection />
        <CrmAiAgentSection />
        <CrmFeatureSection />
        <CrmAdvanceFeature />
        <CrmContactUsSection />
        <CrmPricingSection />
        <CrmFaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default crm;
