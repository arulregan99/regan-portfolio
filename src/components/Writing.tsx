import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface Post {
  title: string;
  summary: string;
  date: string;
  readTime: string;
  link: string;
}

const posts: Post[] = [
  {
    title: "Why AI Product Managers Need to Code (But Not Too Much)",
    summary: "The sweet spot between technical fluency and product thinking. How I use coding to prototype faster, communicate with engineers, and make better product decisions.",
    date: "March 15, 2024",
    readTime: "5 min read",
    link: "#"
  },
  {
    title: "Building with LLMs: Lessons from Shipping 3 AI Features",
    summary: "What I learned shipping GPT-powered features at scale: prompt engineering, handling latency, managing user expectations, and when NOT to use AI.",
    date: "February 28, 2024",
    readTime: "8 min read",
    link: "#"
  },
  {
    title: "The Product Manager's Guide to Speech-to-Text",
    summary: "A deep dive into voice interfaces — from choosing the right API to designing for accuracy and building workflows users actually want.",
    date: "January 20, 2024",
    readTime: "6 min read",
    link: "#"
  },
  {
    title: "How to Run Better Product Discovery Interviews",
    summary: "The framework I use to uncover real user problems. Includes question templates, common mistakes, and how to turn insights into features.",
    date: "December 10, 2023",
    readTime: "7 min read",
    link: "#"
  }
];

export function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="writing" className="min-h-screen py-32 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-left">
            Writing & Thoughts
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
            Reflections on product management, AI, and building things that matter.
          </p>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.a
                key={post.title}
                href={post.link}
                className="group block"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="border-2 border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all flex-shrink-0" />
                  </div>

                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
