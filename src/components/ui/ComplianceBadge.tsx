import { Shield, CheckCircle2 } from 'lucide-react';

interface ComplianceBadgeProps {
  name: string;
  icon?: 'shield' | 'check';
  variant?: 'default' | 'compact';
  className?: string;
}

const ComplianceBadge = ({
  name,
  icon = 'shield',
  variant = 'default',
  className = '',
}: ComplianceBadgeProps) => {
  const IconComponent = icon === 'shield' ? Shield : CheckCircle2;

  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white hover:bg-white/15 transition-all duration-200 ${className}`}
      >
        <IconComponent className="w-3 h-3" />
        <span>{name}</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-200 ${className}`}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue-500/20 border border-brand-blue-400/30">
        <IconComponent className="w-4 h-4 text-brand-blue-400" />
      </div>
      <span className="text-sm font-semibold text-white">{name}</span>
    </div>
  );
};

export default ComplianceBadge;
