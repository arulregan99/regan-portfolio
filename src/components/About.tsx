import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 bg-background">
      <div className="max-w-6xl w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-left"
          >
            About
          </motion.h2>

          {/* First paragraph - in bordered box with unique sentence styling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="p-10 md:p-12 bg-card border border-border rounded-2xl"
          >
            <p className="text-[28px] md:text-[32px] leading-[1.5] text-foreground font-normal">
              <span className="inline">I'm a product manager who bridges the gap between innovative AI, SaaS & consumer-tech and real people using it. </span>
              <span className="inline">I believe great products emerge when you pair deep user empathy with data-driven decision-making.</span>
            </p>
          </motion.div>

          {/* Second paragraph - in matching bordered box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="p-10 md:p-12 bg-card border border-border rounded-2xl"
          >
            <p className="text-[28px] md:text-[32px] leading-[1.5] text-foreground font-normal">
              <span className="inline">Beyond features and KPIs, I focus on one question: Does this make someone's life just a little easier or more meaningful? </span>
              <span className="inline">If yes, I keep going. </span>
              <span className="inline">If not, I go back to the drawing board.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
