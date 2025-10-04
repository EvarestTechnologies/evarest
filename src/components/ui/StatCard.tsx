import CountUp from './CountUp';

interface StatCardProps {
  value: string | number;
  label: string;
  suffix?: string;
  prefix?: string;
  animated?: boolean;
  decimals?: number;
  className?: string;
}

const StatCard = ({
  value,
  label,
  suffix = '',
  prefix = '',
  animated = true,
  decimals = 0,
  className = '',
}: StatCardProps) => {
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;
  const isNumeric = !isNaN(numericValue);

  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-brand-blue-200/30 hover:border-brand-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue-500/10 ${className}`}
    >
      <div className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
        {prefix}
        {animated && isNumeric ? (
          <CountUp end={numericValue} duration={2000} decimals={decimals} />
        ) : (
          value
        )}
        {suffix}
      </div>
      <div className="text-sm lg:text-base text-slate-600">{label}</div>
    </div>
  );
};

export default StatCard;
