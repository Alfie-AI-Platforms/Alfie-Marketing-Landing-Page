import { useEffect, useRef } from "react";
import heroImage from "@/assets/grad-hero.jpg";
import bannerWash from "@/assets/grad-soft.jpg";
import RollingHeadline from "./RollingHeadline";
import ChatDemo from "./ChatDemo";
import { Reveal } from "./Reveal";

/* ---------------- hero ---------------- */

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const offset = Math.max(-60, Math.min(60, (window.innerHeight - rect.top) * 0.06));
      imgRef.current.style.transform = `translateY(${offset}px) scale(1.12)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden pt-36 md:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[620px]">
        <img
          src={bannerWash}
          alt=""
          className="h-full w-full object-cover opacity-70 [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]"
        />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <RollingHeadline text={["The intelligence layer for financial", "systems."]} />
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/70">
            Alfie gives organizations the ability to understand financial information, reason across complex financial
            context, and turn intelligence into action.
          </p>
        </Reveal>
        <Reveal delay={320} className="mt-10 w-full max-w-2xl">
          <ChatDemo />
        </Reveal>
        <Reveal delay={420}>
          <p className="mt-10 text-[14px] text-black/60">
            For financial institutions, fintechs, enterprises, and government.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-20 mb-16 md:mt-28 md:mb-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="alfie-image-frame relative aspect-[16/9] w-full overflow-hidden rounded-3xl md:aspect-[21/9]">
            <img
              ref={imgRef}
              src={heroImage}
              alt="Financial intelligence infrastructure"
              className="h-full w-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

