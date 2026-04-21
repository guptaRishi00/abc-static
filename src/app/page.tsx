import AbcHub from "@/components/homepage/AbcHub";
import CoreValues from "@/components/homepage/CoreValues";
import FlexiblePricing from "@/components/homepage/FlexiblePricing";
import GapBetween from "@/components/homepage/GapBetween";
import HeroSection from "@/components/homepage/HeroSection";
import HowItWorks from "@/components/homepage/HowItWorks";
import Learning from "@/components/homepage/Learning";
import Quote from "@/components/homepage/Quote";
import Safe from "@/components/homepage/Safe";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <GapBetween />
      <CoreValues />
      <HowItWorks />
      <Safe />
      <AbcHub />
      <FlexiblePricing />
      <Quote />
      <Learning />
    </div>
  );
}
