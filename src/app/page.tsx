"use client";
import AISection from "./_components/AISection/AISection";
import Footer from "./_components/Footer/Footer";
import HeroSection from "./_components/HeroSection/HeroSection";
import HowItWorks from "./_components/HowItWorks/HowItWorks";
import Pricing from "./_components/Pricing/Pricing";
import WhatWeHave from "./_components/WhatWeHave/WhatWeHave";
import RevealOnScroll from "./_components/ScrollReveal/ScrollReveal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <HeroSection />

      <RevealOnScroll y={60}>
        <HowItWorks />
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} y={60}>
        <WhatWeHave />
      </RevealOnScroll>

      <RevealOnScroll delay={0.2} y={60}>
        <AISection />
      </RevealOnScroll>

      <RevealOnScroll delay={0.3} y={60}>
        <Pricing />
      </RevealOnScroll>

      <Footer />
    </div>
  );
}
