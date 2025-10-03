import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface FormData {
  companyName: string;
  yourName: string;
  email: string;
  phone?: string;
  companySize: string;
  industry: string;
  primaryInterest: string;
  complianceRequirements: string[];
  timeline: string;
  budgetRange?: string;
  projectDescription?: string;
}

const ConsultationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', data);

    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-12 text-center">
        <div className="inline-flex p-4 bg-green-100 rounded-full mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-slate-800 mb-4">
          Thank You!
        </h3>
        <p className="text-lg text-slate-600 mb-6">
          We've received your consultation request. Our team will reach out within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Badge variant="success" size="md">
            Response time: 24 hours
          </Badge>
          <Badge variant="primary" size="md">
            Enterprise priority support
          </Badge>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Company & Contact Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('companyName', { required: 'Company name is required' })}
              type="text"
              id="companyName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              placeholder="Acme Corporation"
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-red-500">{errors.companyName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="yourName" className="block text-sm font-medium text-slate-700 mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('yourName', { required: 'Your name is required' })}
              type="text"
              id="yourName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              placeholder="John Doe"
            />
            {errors.yourName && (
              <p className="mt-1 text-sm text-red-500">{errors.yourName.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              placeholder="john@acme.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Phone (Optional)
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Company Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="companySize" className="block text-sm font-medium text-slate-700 mb-2">
              Company Size <span className="text-red-500">*</span>
            </label>
            <select
              {...register('companySize', { required: 'Please select company size' })}
              id="companySize"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            >
              <option value="">Select size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="500+">500+ employees</option>
            </select>
            {errors.companySize && (
              <p className="mt-1 text-sm text-red-500">{errors.companySize.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-2">
              Industry <span className="text-red-500">*</span>
            </label>
            <select
              {...register('industry', { required: 'Please select an industry' })}
              id="industry"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            >
              <option value="">Select industry</option>
              <option value="healthtech">HealthTech</option>
              <option value="fintech">FinTech</option>
              <option value="government">Government/Public Sector</option>
              <option value="saas">Enterprise SaaS</option>
              <option value="other">Other</option>
            </select>
            {errors.industry && (
              <p className="mt-1 text-sm text-red-500">{errors.industry.message}</p>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label htmlFor="primaryInterest" className="block text-sm font-medium text-slate-700 mb-2">
            Primary Interest <span className="text-red-500">*</span>
          </label>
          <select
            {...register('primaryInterest', { required: 'Please select a service' })}
            id="primaryInterest"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          >
            <option value="">Select service</option>
            <option value="cloud">Cloud & Infrastructure Services</option>
            <option value="app-dev">Application Development & Modernization</option>
            <option value="data-ai">Data & AI Engineering</option>
            <option value="security">Security & Compliance Engineering</option>
            <option value="devops">DevOps & Site Reliability Engineering</option>
            <option value="managed">Managed Services & 24/7 Support</option>
          </select>
          {errors.primaryInterest && (
            <p className="mt-1 text-sm text-red-500">{errors.primaryInterest.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Compliance Requirements (select all that apply)
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {['HIPAA', 'SOC2', 'PCI-DSS', 'FedRAMP', 'GDPR', 'ISO 27001'].map((compliance) => (
              <label key={compliance} className="flex items-center space-x-2 cursor-pointer">
                <input
                  {...register('complianceRequirements')}
                  type="checkbox"
                  value={compliance}
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-slate-700">{compliance}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
              Project Timeline <span className="text-red-500">*</span>
            </label>
            <select
              {...register('timeline', { required: 'Please select a timeline' })}
              id="timeline"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP (within 1 month)</option>
              <option value="1-3">1-3 months</option>
              <option value="3-6">3-6 months</option>
              <option value="6+">6+ months</option>
            </select>
            {errors.timeline && (
              <p className="mt-1 text-sm text-red-500">{errors.timeline.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="budgetRange" className="block text-sm font-medium text-slate-700 mb-2">
              Budget Range (Optional)
            </label>
            <select
              {...register('budgetRange')}
              id="budgetRange"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            >
              <option value="">Prefer not to say</option>
              <option value="<50k">Less than $50K</option>
              <option value="50-100k">$50K - $100K</option>
              <option value="100-250k">$100K - $250K</option>
              <option value="250k+">$250K+</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="projectDescription" className="block text-sm font-medium text-slate-700 mb-2">
            Project Description (Optional)
          </label>
          <textarea
            {...register('projectDescription')}
            id="projectDescription"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            placeholder="Tell us about your project, technical challenges, or specific requirements..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            onClick={() => {}}
          >
            {isSubmitting ? (
              <>
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              <>
                Schedule Consultation
                <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
          <p className="text-sm text-slate-500 text-center mt-4">
            We'll respond within 24 hours. All information is kept confidential.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ConsultationForm;
