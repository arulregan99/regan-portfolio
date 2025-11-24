import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectContent {
  problem: string;
  solution: string;
  outcome: string;
}

interface Project {
  title: string;
  isIndependent?: boolean;
  content: ProjectContent;
  logo?: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Quality Check Monitoring",
    content: {
      problem: "High defect rates due to manual QC checks in the manufacturing line.",
      solution: "Trained and fine-tuned a computer vision model to automate real-time quality checks.",
      outcome: "Reduced product defects by 30% and improved QC compliance across the factory."
    },
    logo: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FZZIijZl1ImYUhGRTE2gS0NoKGhV2%2Fimage__e0fd5080.png?alt=media&token=2636a8a0-1728-408c-b73c-c9e96431c981",
    link: "#"
  },
  {
    title: "Eye Examination Monitoring",
    content: {
      problem: "Inconsistent eye-test workflow and variation in optometrist compliance.",
      solution: "Enhanced a CV-based monitoring system to track and evaluate eye-test procedures.",
      outcome: "Increased test accuracy and improved customer experience at retail stores."
    },
    logo: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FZZIijZl1ImYUhGRTE2gS0NoKGhV2%2Fimage__e0fd5080.png?alt=media&token=2636a8a0-1728-408c-b73c-c9e96431c981",
    link: "#"
  },
  {
    title: "AI-Powered Optometrist",
    content: {
      problem: "Shortage of skilled optometrists leading to long wait times and inconsistent tests.",
      solution: "Combined LLM reasoning with decision-tree logic to automate the entire eye-test flow.",
      outcome: "Enabled assisted, end-to-end eye examinations with high consistency and reliability."
    },
    logo: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FZZIijZl1ImYUhGRTE2gS0NoKGhV2%2Fimage__e0fd5080.png?alt=media&token=2636a8a0-1728-408c-b73c-c9e96431c981",
    link: "#"
  },
  {
    title: "Audio Analytics for Sales Coaching",
    content: {
      problem: "Store staff struggled to deliver consistent sales conversations that lead to better conversions.",
      solution: "Fine-tuned an open-source STT model to detect conversation gaps and sentiment cues.",
      outcome: "Helped frontline workers improve pitch quality, communication patterns, and customer sentiment."
    },
    logo: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FZZIijZl1ImYUhGRTE2gS0NoKGhV2%2Fimage__e0fd5080.png?alt=media&token=2636a8a0-1728-408c-b73c-c9e96431c981",
    link: "#"
  },
  {
    title: "AI-Assisted Checklist Management",
    content: {
      problem: "Regional managers lacked visibility into real-time store compliance across locations.",
      solution: "Built a checklist and SOP-monitoring tool powered by VLM-based insight detection.",
      outcome: "Improved operational compliance and reduced manual monitoring effort across regions."
    },
    logo: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FZZIijZl1ImYUhGRTE2gS0NoKGhV2%2Fimage__e0fd5080.png?alt=media&token=2636a8a0-1728-408c-b73c-c9e96431c981",
    link: "#"
  },
  {
    title: "User Onboarding Optimization",
    content: {
      problem: "New users were dropping off due to friction and interruptions in the onboarding flow.",
      solution: "Used Microsoft Clarity to analyze user behaviour, identify high-friction steps, and collaborated with developers to streamline the experience.",
      outcome: "Reduced onboarding interruptions and enabled a significantly faster, smoother activation journey."
    },
    logo: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FZZIijZl1ImYUhGRTE2gS0NoKGhV2%2Fimage__3f04ec0c.png?alt=media&token=85ed3910-f63e-4f62-bd20-a46bbb4dd7df",
    link: "#"
  },
  {
    title: "Thesis Paper Finder",
    isIndependent: true,
    content: {
      problem: "Researchers spent days finding relevant citations for thesis topics.",
      solution: "Developed an AI citation-discovery tool using Gemini APIs to surface papers instantly.",
      outcome: "Reduced research discovery time from 7 days to 3 days, boosting productivity for writers."
    },
    link: "#"
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen py-32 px-6 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground text-left">
            Projects
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
              >
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative overflow-hidden border border-border rounded-2xl p-8 md:p-10 bg-white hover:border-primary transition-all duration-300 hover:shadow-xl">
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId={`project-${index}`}
                    />

                    <div className="relative z-10">
                      {/* Logo and Title Section */}
                      <div className="flex items-center gap-4 mb-6">
                        {project.logo ? (
                          <motion.img
                            src={project.logo}
                            alt={project.title}
                            className="w-[42px] h-[42px] rounded-lg flex-shrink-0 object-contain"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          />
                        ) : null}
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                              {project.title}
                              {project.isIndependent && !project.logo && <span className="text-base font-normal text-muted-foreground ml-2">(Independent Project)</span>}
                            </h3>
                            <motion.div
                              initial={{ opacity: 0.6, x: 0, y: 0 }}
                              whileHover={{ opacity: 1, x: 4, y: -4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Content Sections */}
                      <div className="space-y-5">
                        {/* Problem */}
                        <motion.div
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                          className="transition-opacity"
                        >
                          <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">Problem</h4>
                          <p className="text-base text-foreground leading-relaxed">
                            {project.content.problem}
                          </p>
                        </motion.div>

                        {/* Solution */}
                        <motion.div
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                          className="transition-opacity"
                        >
                          <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">What I Built</h4>
                          <p className="text-base text-foreground leading-relaxed">
                            {project.content.solution}
                          </p>
                        </motion.div>

                        {/* Outcome */}
                        <motion.div
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                          className="transition-opacity"
                        >
                          <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">Outcome</h4>
                          <p className="text-base text-foreground leading-relaxed">
                            {project.content.outcome}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
