import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, Upload, Briefcase, Target, Settings, Clock } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_STEPS = 5;

const stepIcons = [Briefcase, Settings, Target, Settings, Clock];
const stepLabels = [
  "Business Info",
  "Operations",
  "Goals",
  "Processes",
  "Timeline",
];

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industryType: string;
  manualProcesses: string;
  departments: string[];
  dailyWorkload: string;
  improvements: string[];
  expectedOutcomes: string;
  processesToAutomate: string[];
  customProcesses: string;
  timeline: string;
  budgetRange: string;
  agreement: boolean;
}

const initialFormData: FormData = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  industryType: "",
  manualProcesses: "",
  departments: [],
  dailyWorkload: "",
  improvements: [],
  expectedOutcomes: "",
  processesToAutomate: [],
  customProcesses: "",
  timeline: "",
  budgetRange: "",
  agreement: false,
};

const departmentOptions = ["HR", "Finance", "Sales", "Support", "Marketing", "Operations", "IT", "Legal"];
const improvementOptions = ["Reduce manual work", "Save time", "Minimize errors", "Improve efficiency"];
const processOptions = ["Data entry", "Invoice processing", "Customer support workflows", "Reporting & analytics"];

const StartAutomation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: keyof FormData, value: string) => {
    setFormData((prev) => {
      const arr = prev[field] as string[];
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const validateStep = (): boolean => {
    switch (step) {
      case 1:
        if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone || !formData.industryType) {
          toast.error("Please fill in all required fields.");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          toast.error("Please enter a valid email address.");
          return false;
        }
        return true;
      case 2:
        if (!formData.manualProcesses || formData.departments.length === 0 || !formData.dailyWorkload) {
          toast.error("Please complete all required fields.");
          return false;
        }
        return true;
      case 3:
        if (formData.improvements.length === 0) {
          toast.error("Please select at least one improvement goal.");
          return false;
        }
        return true;
      case 4:
        if (formData.processesToAutomate.length === 0 && !formData.customProcesses) {
          toast.error("Please select or describe at least one process.");
          return false;
        }
        return true;
      case 5:
        if (!formData.timeline || !formData.agreement) {
          toast.error("Please select a timeline and confirm the agreement.");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleContinue = () => {
    if (!validateStep()) return;
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center section-padding relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
          <div className="section-container relative z-10 w-full">
            <AnimatedSection className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8"
              >
                <CheckCircle className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              <h1 className="font-display text-3xl lg:text-5xl font-bold mb-6">
                Thank You!{" "}
                <span className="gradient-text">Your Request Has Been Received.</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-4">
                Our team has started analyzing your processes.
              </p>
              <p className="text-muted-foreground text-lg mb-10">
                You will receive a tailored plan shortly. A confirmation has been sent to your email.
              </p>
              <a href="/" className="btn-primary inline-flex items-center gap-2">
                Back to Home
                <ArrowRight className="w-5 h-5" />
              </a>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    );
  }

  const progressPercent = (step / TOTAL_STEPS) * 100;

  const inputClass =
    "w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all";
  const labelClass = "block text-sm font-medium text-foreground mb-2";

  const renderChipGroup = (options: string[], field: keyof FormData) => (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const selected = (formData[field] as string[]).includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => toggleArrayField(field, option)}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
              selected
                ? "bg-primary/20 border-primary text-primary"
                : "bg-muted/30 border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );

  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

        <div className="section-container relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                Let's Get Started
              </span>
              <h1 className="font-display text-3xl lg:text-5xl font-bold mb-4">
                Start Your{" "}
                <span className="gradient-text">Automation Project</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Tell us about your operations and we'll begin streamlining your workflows.
              </p>
            </div>

            {/* Progress */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">
                  Step {step} of {TOTAL_STEPS}
                </span>
                <span className="text-sm text-muted-foreground">{stepLabels[step - 1]}</span>
              </div>
              <div className="w-full h-2 bg-muted/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={false}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
              {/* Step indicators */}
              <div className="flex justify-between mt-4">
                {stepLabels.map((label, i) => {
                  const StepIcon = stepIcons[i];
                  const isActive = i + 1 === step;
                  const isDone = i + 1 < step;
                  return (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isDone
                            ? "bg-primary text-primary-foreground"
                            : isActive
                            ? "bg-primary/20 border-2 border-primary text-primary"
                            : "bg-muted/30 border border-border text-muted-foreground"
                        }`}
                      >
                        {isDone ? <CheckCircle className="w-4 h-4" /> : <StepIcon className="w-4 h-4" />}
                      </div>
                      <span className={`text-xs hidden sm:block ${isActive ? "text-primary font-medium" : "text-muted-foreground"}`}>
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Card */}
            <GlassCard className="p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="font-display text-xl font-bold mb-2">Business & Contact Information</h2>
                      <p className="text-muted-foreground text-sm mb-6">Help us understand who you are and how to reach you.</p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className={labelClass}>Company Name *</label>
                          <input className={inputClass} placeholder="Acme Corporation" value={formData.companyName} onChange={(e) => updateField("companyName", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Contact Person Name *</label>
                          <input className={inputClass} placeholder="John Smith" value={formData.contactName} onChange={(e) => updateField("contactName", e.target.value)} />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className={labelClass}>Email Address *</label>
                          <input type="email" className={inputClass} placeholder="john@company.com" value={formData.email} onChange={(e) => updateField("email", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Phone Number *</label>
                          <input type="tel" className={inputClass} placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Industry Type *</label>
                        <select className={inputClass} value={formData.industryType} onChange={(e) => updateField("industryType", e.target.value)}>
                          <option value="">Select your industry</option>
                          <option value="finance">Finance & Accounting</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="agency">Marketing Agency</option>
                          <option value="saas">SaaS</option>
                          <option value="enterprise">Enterprise</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="font-display text-xl font-bold mb-2">Current Operations Overview</h2>
                      <p className="text-muted-foreground text-sm mb-6">Tell us about your day-to-day processes so we can identify opportunities.</p>
                      <div>
                        <label className={labelClass}>What processes do you currently handle manually? *</label>
                        <textarea
                          className={`${inputClass} resize-none`}
                          rows={4}
                          placeholder="Describe the tasks your team handles manually each day..."
                          value={formData.manualProcesses}
                          onChange={(e) => updateField("manualProcesses", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Departments Involved *</label>
                        {renderChipGroup(departmentOptions, "departments")}
                      </div>
                      <div>
                        <label className={labelClass}>Approximate Daily Workload *</label>
                        <select className={inputClass} value={formData.dailyWorkload} onChange={(e) => updateField("dailyWorkload", e.target.value)}>
                          <option value="">Select workload range</option>
                          <option value="light">Light (1-20 tasks/day)</option>
                          <option value="moderate">Moderate (20-100 tasks/day)</option>
                          <option value="heavy">Heavy (100-500 tasks/day)</option>
                          <option value="very-heavy">Very Heavy (500+ tasks/day)</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="font-display text-xl font-bold mb-2">Your Goals</h2>
                      <p className="text-muted-foreground text-sm mb-6">What would you like to achieve? Select all that apply.</p>
                      <div>
                        <label className={labelClass}>What would you like to improve? *</label>
                        {renderChipGroup(improvementOptions, "improvements")}
                      </div>
                      <div>
                        <label className={labelClass}>Expected Outcomes</label>
                        <textarea
                          className={`${inputClass} resize-none`}
                          rows={4}
                          placeholder="Describe the results you're hoping to see..."
                          value={formData.expectedOutcomes}
                          onChange={(e) => updateField("expectedOutcomes", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 4 */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <h2 className="font-display text-xl font-bold mb-2">Processes to Streamline</h2>
                      <p className="text-muted-foreground text-sm mb-6">Select the processes you'd like us to review, or describe your own.</p>
                      <div>
                        <label className={labelClass}>Select Processes</label>
                        {renderChipGroup(processOptions, "processesToAutomate")}
                      </div>
                      <div>
                        <label className={labelClass}>Custom Processes</label>
                        <textarea
                          className={`${inputClass} resize-none`}
                          rows={3}
                          placeholder="Describe any additional processes you'd like to optimize..."
                          value={formData.customProcesses}
                          onChange={(e) => updateField("customProcesses", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Upload Supporting Documents (optional)</label>
                        <label className="flex items-center justify-center gap-3 px-6 py-8 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 transition-all bg-muted/20">
                          <Upload className="w-5 h-5 text-muted-foreground" />
                          <span className="text-muted-foreground text-sm">Click to upload files</span>
                          <input type="file" className="hidden" multiple />
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Step 5 */}
                  {step === 5 && (
                    <div className="space-y-6">
                      <h2 className="font-display text-xl font-bold mb-2">Timeline & Confirmation</h2>
                      <p className="text-muted-foreground text-sm mb-6">Let us know your preferred timeline so we can plan accordingly.</p>
                      <div>
                        <label className={labelClass}>Preferred Project Start Timeline *</label>
                        <select className={inputClass} value={formData.timeline} onChange={(e) => updateField("timeline", e.target.value)}>
                          <option value="">Select timeline</option>
                          <option value="immediately">Immediately</option>
                          <option value="1-2-weeks">Within 1–2 weeks</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="3-months">Within 3 months</option>
                          <option value="flexible">Flexible / Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Budget Range (optional)</label>
                        <select className={inputClass} value={formData.budgetRange} onChange={(e) => updateField("budgetRange", e.target.value)}>
                          <option value="">Prefer not to say</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-15k">$5,000 – $15,000</option>
                          <option value="15k-50k">$15,000 – $50,000</option>
                          <option value="50k-plus">$50,000+</option>
                        </select>
                      </div>
                      <div className="pt-4">
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div
                            onClick={() => updateField("agreement", !formData.agreement)}
                            className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                              formData.agreement ? "bg-primary border-primary" : "border-border group-hover:border-primary/50"
                            }`}
                          >
                            {formData.agreement && <CheckCircle className="w-3.5 h-3.5 text-primary-foreground" />}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            I confirm that the information provided is accurate and I'm ready to proceed. *
                          </span>
                        </label>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                {step > 1 ? (
                  <button onClick={handleBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < TOTAL_STEPS ? (
                  <button onClick={handleContinue} className="btn-primary flex items-center gap-2">
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="btn-primary flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit & Start My Automation Project
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default StartAutomation;
