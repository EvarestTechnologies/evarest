import { asset } from "@/lib/asset";

export function BrowserFrame({ url, src, alt, className = "" }: { url: string; src: string; alt: string; className?: string }) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_30px_60px_-36px_rgba(42,10,58,0.35)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-mist px-3 py-2.5">
        <i className="h-[9px] w-[9px] rounded-full bg-line" />
        <i className="h-[9px] w-[9px] rounded-full bg-line" />
        <i className="h-[9px] w-[9px] rounded-full bg-line" />
        <span className="ml-2.5 font-mono text-[11px] text-muted">{url}</span>
      </div>
      <img src={asset(src)} alt={alt} loading="lazy" decoding="async" className="block min-h-0 w-full flex-1 object-cover object-top" />
    </div>
  );
}
