import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  imageSrc?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  title,
  company,
  imageSrc,
  className = '',
}: TestimonialCardProps) => {
  return (
    <div
      className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 hover:border-brand-blue-400/50 transition-all duration-300 animate-slide-up ${className}`}
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
        <Quote className="w-6 h-6 text-white" />
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Author Image */}
        {imageSrc && (
          <div className="flex-shrink-0">
            <img
              src={imageSrc}
              alt={author}
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-white/20"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1">
          {/* Quote Text */}
          <p className="text-lg lg:text-xl text-white mb-4 lg:mb-6 leading-relaxed italic">
            "{quote}"
          </p>

          {/* Author Info */}
          <div className="space-y-1">
            <div className="text-white font-bold text-base lg:text-lg">{author}</div>
            <div className="text-brand-blue-300 text-sm lg:text-base font-medium">{title}</div>
            <div className="text-slate-300 text-sm">{company}</div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-500/5 to-brand-cyan-500/5 rounded-2xl pointer-events-none" />
    </div>
  );
};

export default TestimonialCard;
