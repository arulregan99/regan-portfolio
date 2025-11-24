import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Linkedin, Twitter, Github, Mail, Globe } from 'lucide-react';
import { DNSSetupGuide } from './DNSSetupGuide';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDNSGuideOpen, setIsDNSGuideOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Something
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, 
            or just chatting about product and AI.
          </p>

          <motion.a
            href="mailto:regan@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:scale-105 transition-transform duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-border hover:border-primary hover:text-primary transition-all duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-border hover:border-primary hover:text-primary transition-all duration-200"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-border hover:border-primary hover:text-primary transition-all duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center text-sm text-muted-foreground space-y-3">
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={scrollToTop}
                className="text-primary hover:underline"
              >
                Back to top ↑
              </button>
              <button
                onClick={() => setIsDNSGuideOpen(true)}
                className="text-primary hover:underline flex items-center gap-1"
              >
                <Globe className="w-4 h-4" />
                Custom Domain Setup
              </button>
            </div>
            <p>© 2024 Regan. Built with curiosity.</p>
          </div>
        </motion.div>
      </div>

      {/* DNS Setup Guide Modal */}
      <DNSSetupGuide
        isOpen={isDNSGuideOpen}
        onOpenChange={setIsDNSGuideOpen}
        projectName="Your Portfolio"
      />
    </footer>
  );
}
