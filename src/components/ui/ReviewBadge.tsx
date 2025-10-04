import { Star } from 'lucide-react';

interface ReviewBadgeProps {
  platform: 'Clutch' | 'G2' | 'Google';
  rating: number;
  reviews: number;
  className?: string;
}

const ReviewBadge = ({ platform, rating, reviews, className = '' }: ReviewBadgeProps) => {
  const platformColors = {
    Clutch: 'from-red-500 to-pink-500',
    G2: 'from-orange-500 to-red-500',
    Google: 'from-blue-500 to-green-500',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-200 ${className}`}
    >
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <span className="text-white font-bold">{rating.toFixed(1)}</span>
      </div>
      <div className="h-4 w-px bg-white/20" />
      <div className="flex flex-col">
        <span
          className={`text-xs font-semibold bg-gradient-to-r ${platformColors[platform]} bg-clip-text text-transparent`}
        >
          {platform}
        </span>
        <span className="text-[10px] text-slate-300">{reviews} reviews</span>
      </div>
    </div>
  );
};

export default ReviewBadge;
