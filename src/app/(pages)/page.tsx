import { NavHeader } from "@/components/layout/nav-header";
import Cta from "@/features/home/components/cta";
import { Features } from "@/features/home/components/feature";
import HeroSection from "@/features/home/components/hero";
import Services from "@/features/home/components/services";

export default function Page() {
  return (
    <div className="relative">
      <NavHeader />
      <HeroSection />
      <Services />
      <Features />
      <Cta />
    </div>
  );
}
