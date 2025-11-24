import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

interface QuoteItem {
  text: string;
  author: string;
}

const quotes: QuoteItem[] = [
  {
    text: "Knowledge has a beginning but no end",
    author: "Gita"
  },
  {
    text: "You do not truly understand something that you cannot create",
    author: "Richard Feynman"
  }
];

export function InspiredQuotes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="inspired-quotes" className="min-h-screen py-32 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-left">
            Inspired Quotes
          </h2>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-8 min-w-min">
              {quotes.map((quote, index) => (
                <motion.div
                  key={`${quote.author}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="flex-shrink-0 w-[90vw] sm:w-[500px] md:w-[550px]"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative h-full"
                  >
                    <div className="relative overflow-hidden border border-border rounded-2xl p-10 md:p-12 bg-white hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col justify-between">
                      {/* Gradient overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId={`quote-${index}`}
                      />

                      <div className="relative z-10 flex flex-col justify-between h-full">
                        {/* Quote Icon */}
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                          transition={{ delay: index * 0.15 + 0.1, duration: 0.4 }}
                          className="mb-6"
                        >
                          <Quote className="w-10 h-10 text-primary opacity-60" />
                        </motion.div>

                        {/* Quote Text */}
                        <motion.p
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                          className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-8 group-hover:text-primary transition-colors duration-300"
                        >
                          "{quote.text}"
                        </motion.p>

                        {/* Author */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
                          className="pt-6 border-t border-border/50"
                        >
                          <p className="text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-widest">
                            — {quote.author}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex justify-center mt-8 text-muted-foreground text-sm"
      >
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore →
        </motion.span>
      </motion.div>
    </section>
  );
}
