import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Lightbulb, Target, Rocket, Users, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollAnimations() {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Floating icon animations based on scroll
  const icon1Y = useTransform(scrollY, [0, 500], [0, -100]);
  const icon2Y = useTransform(scrollY, [0, 500], [0, 150]);
  const icon3Y = useTransform(scrollY, [0, 500], [0, -80]);
  const icon4Y = useTransform(scrollY, [500, 1500], [0, -120]);
  const icon5Y = useTransform(scrollY, [500, 1500], [0, 100]);
  const icon6Y = useTransform(scrollY, [1000, 2000], [0, -90]);

  const icon1Rotate = useTransform(scrollY, [0, 500], [0, 360]);
  const icon2Rotate = useTransform(scrollY, [0, 500], [0, -180]);
  const icon3Rotate = useTransform(scrollY, [500, 1500], [0, 270]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Code Icon - Top Left */}
      <motion.div
        className="absolute top-20 left-10 opacity-10"
        style={{ y: icon1Y, rotate: icon1Rotate }}
      >
        <Code className="w-16 h-16 text-primary" strokeWidth={1.5} />
      </motion.div>

      {/* Lightbulb Icon - Top Right */}
      <motion.div
        className="absolute top-40 right-20 opacity-10"
        style={{ y: icon2Y, rotate: icon2Rotate }}
      >
        <Lightbulb className="w-20 h-20 text-primary" strokeWidth={1.5} />
      </motion.div>

      {/* Target Icon - Middle Left */}
      <motion.div
        className="absolute top-1/3 left-20 opacity-10"
        style={{ y: icon3Y }}
      >
        <Target className="w-24 h-24 text-primary" strokeWidth={1.5} />
      </motion.div>

      {/* Rocket Icon - Middle Right */}
      <motion.div
        className="absolute top-1/2 right-10 opacity-10"
        style={{ y: icon4Y, rotate: icon3Rotate }}
      >
        <Rocket className="w-18 h-18 text-primary" strokeWidth={1.5} />
      </motion.div>

      {/* Users Icon - Bottom Left */}
      <motion.div
        className="absolute bottom-1/4 left-32 opacity-10"
        style={{ y: icon5Y }}
      >
        <Users className="w-20 h-20 text-primary" strokeWidth={1.5} />
      </motion.div>

      {/* Trending Up Icon - Bottom Right */}
      <motion.div
        className="absolute bottom-1/3 right-24 opacity-10"
        style={{ y: icon6Y }}
      >
        <TrendingUp className="w-22 h-22 text-primary" strokeWidth={1.5} />
      </motion.div>

      {/* Animated gradient orbs that follow scroll */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        style={{
          y: useTransform(scrollY, [0, 1000], [0, 200]),
          opacity: useTransform(scrollY, [0, 500, 1000], [0.5, 0.3, 0.5]),
        }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        style={{
          y: useTransform(scrollY, [500, 1500], [0, -150]),
          opacity: useTransform(scrollY, [500, 1000, 1500], [0.5, 0.3, 0.5]),
        }}
      />

      {/* Scroll direction indicator */}
      {scrollDirection === 'down' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute bottom-10 right-10"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-12 h-12 text-primary"
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}

      {scrollDirection === 'up' && lastScrollY > 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute top-10 right-10"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-12 h-12 text-primary"
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}
