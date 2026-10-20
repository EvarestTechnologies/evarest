import type { ChatMessage } from "@/content";

/** A WhatsApp dark-mode chat, rebuilt from real ZEYA screenshots. Decorative: the label describes it. */
export function WhatsAppChat({ messages, label, large = false }: { messages: readonly ChatMessage[]; label: string; large?: boolean }) {
  return (
    <div role="img" aria-label={label} className={`flex h-full flex-col bg-wa-bg text-wa-text ${large ? "text-[12.5px]" : "text-[10.5px]"} leading-[1.38]`}>
      <div className="flex items-center gap-2 bg-wa-bar px-3 py-2.5 text-[12px] font-semibold">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-wa-green text-[10px] font-extrabold text-wa-bg">Z</span>
        <span>
          Zeya<small className="block text-[9px] font-normal text-wa-meta">Evarest Technologies Ltd</small>
        </span>
      </div>
      <div aria-hidden="true" className="flex flex-col gap-1.5 px-2 py-2.5">
        {messages.map((m, i) => (
          <div key={i} data-from={m.from} className={`max-w-[88%] rounded-[7px] px-2 py-1.5 whitespace-pre-line ${m.from === "her" ? "self-end bg-wa-out" : "self-start bg-wa-bar"}`}>
            {m.text}
            <span className="mt-0.5 block text-right text-[8px] text-wa-meta">{m.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
