"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  x = 0,
  y = 50,
}: RevealOnScrollProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
