import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Copy, Check, AlertCircle, Globe, Server, Settings } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

type DNSProvider = 'namecheap' | 'godaddy' | 'google' | 'cloudflare' | 'aws' | 'other';
type RecordType = 'CNAME' | 'A' | 'ALIAS';

interface DNSSetupGuideProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  projectName?: string;
}

const providerGuides: Record<DNSProvider, { name: string; steps: string[] }> = {
  namecheap: {
    name: 'Namecheap',
    steps: [
      'Log in to your Namecheap account',
      'Go to "Domain List" in the left sidebar',
      'Find your domain and click "Manage"',
      'Click on the "Advanced DNS" tab',
      'Add a new DNS record (scroll to find "Add New Record" button)',
      'Select the record type and enter the required values',
      'Click the checkmark to save',
      'DNS changes typically propagate within 24 hours',
    ],
  },
  godaddy: {
    name: 'GoDaddy',
    steps: [
      'Log in to your GoDaddy account',
      'Go to "My Products" and select your domain',
      'Click "DNS" or "Manage DNS"',
      'Click "Add" under DNS records',
      'Select the record type from the dropdown',
      'Fill in the required values (Name, Type, Value)',
      'Click "Save" to confirm',
      'Wait for DNS propagation (typically 24-48 hours)',
    ],
  },
  google: {
    name: 'Google Domains',
    steps: [
      'Visit google.com/domains',
      'Select your domain from the list',
      'Click "DNS" in the left menu',
      'Scroll down to "Custom records"',
      'Click "Create new record"',
      'Select the record type and enter the values',
      'Click "Create" to add the record',
      'Monitor DNS propagation status',
    ],
  },
  cloudflare: {
    name: 'Cloudflare',
    steps: [
      'Log in to your Cloudflare dashboard',
      'Select your domain from the account menu',
      'Go to the "DNS" tab',
      'Click "+ Add record"',
      'Select the record type from the dropdown',
      'Enter the required fields (Name, Value, TTL)',
      'Click "Save" to apply the DNS record',
      'Verify the record is active (DNS propagation)',
    ],
  },
  aws: {
    name: 'AWS Route 53',
    steps: [
      'Log in to your AWS Management Console',
      'Navigate to Route 53',
      'Select "Hosted zones" from the left menu',
      'Click on your domain',
      'Click "Create record"',
      'Choose simple or weighted routing policy',
      'Select the record type and enter values',
      'Click "Create records" to save',
    ],
  },
  other: {
    name: 'Other Providers',
    steps: [
      'Log in to your domain registrar account',
      'Look for "DNS Management" or "Advanced DNS" settings',
      'Find the option to "Add DNS Record" or "+ Add"',
      'Select the appropriate record type',
      'Enter the required values from Blink',
      'Save your changes',
      'Check your provider documentation if uncertain',
      'Allow 24-48 hours for DNS propagation',
    ],
  },
};

const dnsRecordTypes: Record<RecordType, { description: string; use: string }> = {
  CNAME: {
    description: 'Canonical Name Record',
    use: 'Points your domain to another domain name (recommended for most subdomains)',
  },
  A: {
    description: 'Address Record',
    use: 'Points your domain directly to an IP address',
  },
  ALIAS: {
    description: 'Alias Record (ALIAS/ANAME)',
    use: 'AWS/Cloudflare specific record type for root domains',
  },
};

export function DNSSetupGuide({ isOpen, onOpenChange, projectName = 'Your Project' }: DNSSetupGuideProps) {
  const [selectedProvider, setSelectedProvider] = useState<DNSProvider | null>(null);
  const [selectedRecordType, setSelectedRecordType] = useState<RecordType>('CNAME');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  // Example DNS values (in real app, these would come from Blink dashboard)
  const dnsValues = {
    CNAME: {
      name: 'www',
      value: 'cname.blink.new',
      ttl: '3600',
    },
    A: {
      name: '@',
      value: '198.51.100.1',
      ttl: '3600',
    },
    ALIAS: {
      name: '@',
      value: 'alias.blink.new',
      ttl: '3600',
    },
  };

  const currentValues = dnsValues[selectedRecordType];
  const currentProviderSteps = selectedProvider ? providerGuides[selectedProvider].steps : [];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Set Up Custom Domain with DNS</DialogTitle>
          <DialogDescription>
            Complete step-by-step guide to configure your domain with {projectName}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Step 1: Choose DNS Provider */}
          {!selectedProvider ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold">Select Your DNS Provider</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(providerGuides).map(([key, provider]) => (
                  <motion.button
                    key={key}
                    onClick={() => setSelectedProvider(key as DNSProvider)}
                    className="p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{provider.name}</span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {/* Header with back button */}
              <button
                onClick={() => {
                  setSelectedProvider(null);
                  setCurrentStep(0);
                }}
                className="flex items-center gap-2 text-primary hover:underline font-medium"
              >
                ← Back to Provider Selection
              </button>

              {/* Step 2: Choose Record Type */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold">Select DNS Record Type</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {(Object.keys(dnsRecordTypes) as RecordType[]).map((type) => (
                    <motion.button
                      key={type}
                      onClick={() => setSelectedRecordType(type)}
                      className={`p-4 border-2 rounded-lg transition-all text-left ${
                        selectedRecordType === type
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-semibold text-sm mb-1">{type}</div>
                      <div className="text-xs text-muted-foreground">
                        {dnsRecordTypes[type].description}
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">{dnsRecordTypes[type].use}</div>
                    </motion.button>
                  ))}
                </div>

                {selectedRecordType === 'CNAME' && (
                  <Alert>
                    <Globe className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Recommended for subdomains:</strong> Use CNAME for www.yourdomain.com
                    </AlertDescription>
                  </Alert>
                )}
              </div>

              {/* Step 3: DNS Values */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold">DNS Record Values</h3>
                </div>

                <Card className="p-4 bg-muted/50 space-y-3">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground">Record Type</label>
                    <div className="flex items-center justify-between p-3 bg-background rounded border border-border">
                      <code className="font-mono font-semibold">{selectedRecordType}</code>
                      <button
                        onClick={() => copyToClipboard(selectedRecordType, 'type')}
                        className="p-1 hover:bg-muted rounded transition-colors"
                      >
                        {copiedField === 'type' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground">Name (Subdomain)</label>
                    <div className="flex items-center justify-between p-3 bg-background rounded border border-border">
                      <code className="font-mono font-semibold">{currentValues.name}</code>
                      <button
                        onClick={() => copyToClipboard(currentValues.name, 'name')}
                        className="p-1 hover:bg-muted rounded transition-colors"
                      >
                        {copiedField === 'name' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground">Value (Target)</label>
                    <div className="flex items-center justify-between p-3 bg-background rounded border border-border">
                      <code className="font-mono font-semibold text-sm break-all">{currentValues.value}</code>
                      <button
                        onClick={() => copyToClipboard(currentValues.value, 'value')}
                        className="p-1 hover:bg-muted rounded transition-colors"
                      >
                        {copiedField === 'value' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground">TTL (Time to Live)</label>
                    <div className="flex items-center justify-between p-3 bg-background rounded border border-border">
                      <code className="font-mono font-semibold">{currentValues.ttl} (seconds)</code>
                      <button
                        onClick={() => copyToClipboard(currentValues.ttl, 'ttl')}
                        className="p-1 hover:bg-muted rounded transition-colors"
                      >
                        {copiedField === 'ttl' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                </Card>

                <Alert>
                  <Server className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Save these values</strong> – you'll need them when adding the DNS record with your provider.
                  </AlertDescription>
                </Alert>
              </div>

              {/* Step 4: Provider-Specific Instructions */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold">
                    Add DNS Record to {providerGuides[selectedProvider]?.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  {currentProviderSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                      onClick={() => setCurrentStep(index)}
                    >
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-sm pt-0.5">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Step 5: Verification */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <h3 className="text-lg font-semibold">Verify DNS Configuration</h3>
                </div>

                <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
                  <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <AlertDescription className="text-blue-800 dark:text-blue-200">
                    <strong>DNS propagation can take 24-48 hours.</strong> You can check status with:
                    <div className="mt-2 space-y-1 text-sm">
                      <div>• Online tools: mxtoolbox.com, whatsmydns.net</div>
                      <div>• Command: `nslookup yourdomain.com`</div>
                      <div>• After propagation, your site will be accessible at your custom domain</div>
                    </div>
                  </AlertDescription>
                </Alert>
              </div>

              {/* Troubleshooting */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Troubleshooting</h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-primary">DNS not resolving?</strong>
                    <ul className="list-disc list-inside mt-1 text-muted-foreground">
                      <li>Check that you entered the correct values</li>
                      <li>Verify the record type matches your setup</li>
                      <li>Wait up to 48 hours for propagation</li>
                      <li>Clear your browser cache and try again</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          {selectedProvider && (
            <Button
              onClick={() => {
                // In real app, this would save settings or open Blink dashboard
                alert('DNS configuration guide saved. Check your provider dashboard to add the record.');
                onOpenChange(false);
              }}
            >
              Open {providerGuides[selectedProvider]?.name} Dashboard
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
