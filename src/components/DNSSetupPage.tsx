import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { DNSSetupGuide } from './DNSSetupGuide';

export function DNSSetupPage() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const steps = [
    {
      title: 'Buy a Domain',
      description: 'Get your domain from a registrar like Namecheap, GoDaddy, or Google Domains',
      icon: Globe,
    },
    {
      title: 'Configure DNS',
      description: 'Follow our step-by-step guide to add DNS records to your provider',
      icon: AlertCircle,
    },
    {
      title: 'Wait for Propagation',
      description: 'DNS changes take 24-48 hours to propagate globally',
      icon: AlertCircle,
    },
    {
      title: 'Live on Your Domain',
      description: 'Your site is now accessible at your custom domain',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Globe className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Custom Domain Setup</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect your own domain to your portfolio in just a few steps. We've made the process simple
            with a guided walkthrough for all major DNS providers.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          <Card className="p-6 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-blue-900 dark:text-blue-100">Current Status</h3>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Your site is currently live at: <br />
                  <code className="font-mono bg-blue-900/20 px-2 py-1 rounded mt-1 inline-block">
                    minimalist-product-manager-portfolio-4qll1nlr.sites.blink.new
                  </code>
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-green-900 dark:text-green-100">Next Step</h3>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Ready to use your own domain? Click below to start the guided DNS setup.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-20"
        >
          <Button
            size="lg"
            onClick={() => setIsGuideOpen(true)}
            className="px-8 py-6 text-lg"
          >
            Start DNS Setup Guide
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Steps Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  <Card className="p-6 h-full">
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{index + 1}. {step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </Card>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How long does DNS setup take?',
                a: 'The setup process itself takes 5-10 minutes. However, DNS propagation typically takes 24-48 hours. Your site will be accessible immediately at your Blink URL, but your custom domain may take time to resolve.',
              },
              {
                q: 'Do I need technical knowledge to set up DNS?',
                a: 'No! Our guided walkthrough handles all the complexity. We provide step-by-step instructions for every major DNS provider, and you just need to copy-paste values.',
              },
              {
                q: 'Can I use a subdomain (www.)?',
                a: 'Yes! The guide supports both root domains (@) and subdomains (www, blog, etc.). We recommend CNAME records for subdomains.',
              },
              {
                q: 'What if my DNS provider is not listed?',
                a: 'We provide generic instructions for any provider. The process is similar across all registrars: log in, find DNS settings, add a new record, and fill in the provided values.',
              },
              {
                q: 'Can I verify my DNS is working?',
                a: 'Yes! Use tools like mxtoolbox.com or whatsmydns.net to check if your DNS records are properly configured. You can also use the `nslookup` command in terminal.',
              },
              {
                q: 'What if I made a mistake?',
                a: 'You can always update or delete DNS records in your provider dashboard. Simply repeat the setup process with the correct values.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 p-8 rounded-lg bg-muted/50 border border-border text-center"
        >
          <h3 className="text-2xl font-semibold mb-3">Still Need Help?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our DNS setup guide walks you through every step with provider-specific instructions. If you need
            additional support, check the troubleshooting section in the guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsGuideOpen(true)}
              size="lg"
            >
              Open DNS Setup Guide
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://blink.new/docs/domains', '_blank')}
            >
              View Documentation
            </Button>
          </div>
        </motion.div>
      </section>

      {/* DNS Setup Guide Modal */}
      <DNSSetupGuide
        isOpen={isGuideOpen}
        onOpenChange={setIsGuideOpen}
        projectName="Your Portfolio"
      />
    </div>
  );
}
