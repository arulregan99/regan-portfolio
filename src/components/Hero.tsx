import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    const resumeUrl = 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FZZIijZl1ImYUhGRTE2gS0NoKGhV2%2FArulReganPMResume__351fee0b.pdf?alt=media&token=63fc3a93-def6-4089-852f-c784a4385220';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary/5" />
        <motion.div
          className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 right-0 w-80 h-80 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Name */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Arul Regan
          </motion.h1>

          {/* Role/Title */}
          <motion.p
            className="text-lg md:text-xl text-primary font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Associate Product Manager | AI & SaaS Products
          </motion.p>

          {/* Contact Information */}
          <motion.div
            className="flex flex-col gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Email */}
            <a
              href="mailto:arulregan12@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>arulregan12@gmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919585987002"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 9585987002</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/arulregan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>linkedin.com/in/arulregan</span>
            </a>
          </motion.div>

          {/* View Resume CTA */}
          <motion.button
            onClick={handleResumeDownload}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform duration-200 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            View Resume
          </motion.button>
        </motion.div>

        {/* Right side - Profile Image with animated background */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Animated background circle - REDUCED SIZE */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Outer animated gradient ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/30 to-transparent opacity-20 blur-2xl"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, repeatType: "reverse" },
              }}
            />

            {/* Inner animated waves */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Profile Image */}
            <div className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
              <img
                src="/arul-profile.png"
                alt="Arul Regan"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating accent elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"
              animate={{
                y: [0, -10, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
              animate={{
                y: [0, 10, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        whileHover={{ y: 5 }}
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
