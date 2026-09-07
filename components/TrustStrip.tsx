import Image from "next/image";

type TrustItem = {
  name: string;
  logoSrc?: string;
};

export default function TrustStrip({ items }: { items: TrustItem[] }) {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {items.map((item) => (
        <div
          key={item.name}
          className="group flex h-12 min-w-[8.5rem] items-center justify-center rounded-sm border border-line bg-porcelain/70 px-4 shadow-[0_5px_16px_rgba(22,35,61,0.04)] transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-marigold hover:shadow-[0_10px_22px_rgba(232,163,61,0.12)]"
        >
          {item.logoSrc ? (
            <Image
              src={item.logoSrc}
              alt={item.name}
              width={140}
              height={40}
              className="h-8 w-auto grayscale transition-[filter] group-hover:grayscale-0"
            />
          ) : (
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forest text-[11px] text-porcelain">
                {item.name.charAt(0)}
              </span>
              <span>{item.name}</span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}