import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar } from 'lucide-react';

interface WorkExperienceItem {
  startDate: string;
  endDate: string;
  role: string;
  company: string;
  location: string;
  logo?: string;
  responsibilities: string[];
}

const workExperience: WorkExperienceItem[] = [
  {
    startDate: "Dec 2023",
    endDate: "Dec 2025",
    role: "Associate Product Manager",
    company: "TangoEye (In-store video analytics)",
    location: "Chennai",
    logo: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FZZIijZl1ImYUhGRTE2gS0NoKGhV2%2Fimage__e0fd5080.png?alt=media&token=2636a8a0-1728-408c-b73c-c9e96431c981",
    responsibilities: [
      "Drove multiple computer-vision and AI initiatives, improving automation across quality checks and retail operations",
      "Reduced factory product defects by 30% by fine-tuning CV models for real-time QC monitoring",
      "Improved eye-examination consistency using a CV-based compliance system adopted across Lenskart retail stores",
      "Built an AI-powered Optometrist, combining decision-tree logic with LLM reasoning to automate the eye-test workflow",
      "Enhanced sales coaching through an audio analytics pipeline that surfaced pitch gaps and customer sentiment patterns"
    ]
  },
  {
    startDate: "Feb 2023",
    endDate: "Dec 2023",
    role: "Product Intern",
    company: "Vajro (Shopify Mobile App Builder)",
    location: "Chennai",
    logo: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FZZIijZl1ImYUhGRTE2gS0NoKGhV2%2Fimage__3f04ec0c.png?alt=media&token=85ed3910-f63e-4f62-bd20-a46bbb4dd7df",
    responsibilities: [
      "Evaluated merchant behaviour and identified critical onboarding friction using Microsoft Clarity insights",
      "Collaborated with engineering to streamline the onboarding flow, accelerating user activation",
      "Supported product discovery and requirement definition for features improving store performance and conversion",
      "Analyzed merchant usage patterns to guide prioritization of features with the highest impact on adoption",
      "Worked cross-functionally to ensure feature readiness, quality, and a smoother merchant experience end-to-end"
    ]
  }
];

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="min-h-screen py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-left">
            My Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
            Experience and growth through meaningful roles in product management.
          </p>

          <div className="space-y-8">
            {workExperience.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.startDate}`}
                className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Logo and Company Header */}
                <div className="flex items-center gap-4 mb-4">
                  {item.logo && (
                    <motion.img
                      src={item.logo}
                      alt={item.company}
                      className="w-[48px] h-[48px] rounded-lg flex-shrink-0 object-contain"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <div>
                    {/* Company Name - Bold */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {item.company}
                    </h3>

                    {/* Job Title - Bold */}
                    <p className="text-xl font-bold text-primary">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Location and Dates */}
                <div className="flex flex-col md:flex-row gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{item.startDate} - {item.endDate}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="text-muted-foreground flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span className="text-sm md:text-base">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}