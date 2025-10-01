"use client";
import AISection from "./_components/AISection/AISection";
import Footer from "./_components/Footer/Footer";
import HeroSection from "./_components/HeroSection/HeroSection";
import HowItWorks from "./_components/HowItWorks/HowItWorks";
import Pricing from "./_components/Pricing/Pricing";
import WhatWeHave from "./_components/WhatWeHave/WhatWeHave";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <HeroSection />
      <HowItWorks />
      <WhatWeHave />
      <AISection />
      <Pricing />
      <Footer />
    </div>
  );
}
