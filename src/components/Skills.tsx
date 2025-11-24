import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Variants } from 'framer-motion';

const coreSkills = [
  'AI Product Strategy',
  'AI Workflow Automation',
  'Conversational AI',
  'Conversion Funnel Optimization',
  'Cross-functional Collaboration',
  'Customer Journey Optimization',
  'Data-Driven Decision Making',
  'GenAI-Powered CX',
  'LLM Application Design',
];

const technicalSkills = [
  'JIRA',
  'Figma',
  'Confluence',
  'Microsoft Clarity',
  'HotJar',
  'N8N',
  'Canva',
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section 
      id="skills" 
      className="min-h-screen flex items-center justify-center py-32 px-6 bg-white"
      ref={ref}
    >
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-left"
          >
            Skills
          </motion.h2>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Core Skills - Left Column */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Core Skills
                </h3>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {coreSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                  >
                    <div className="px-5 py-3 rounded-full border-2 border-muted-foreground/30 text-muted-foreground text-sm md:text-base hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300 cursor-default">
                      {skill}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Technical Skills - Right Column */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Technical Skills
                </h3>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {technicalSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                  >
                    <div className="px-5 py-3 rounded-full border-2 border-muted-foreground/30 text-muted-foreground text-sm md:text-base hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300 cursor-default">
                      {skill}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}