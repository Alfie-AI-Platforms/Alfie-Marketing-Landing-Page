import type { ReactNode } from "react";
import Header from "./Header";
import AlfieFooter from "./AlfieFooter";

const SF_PRO = '"Inter Variable", Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, "Helvetica Neue", Arial, sans-serif';

/* Shared layout for the site's information pages (Trust, Developers,
   About, Contact, Privacy, Terms): same chrome and type as the home page. */

export default function InfoPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="alfie-platform min-h-screen" style={{ fontFamily: SF_PRO, backgroundColor: "#FFFFFF" }}>
      <Header />
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:pt-40">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/70">{intro}</p>
        <div className="mt-6">{children}</div>
      </section>
      <AlfieFooter />
    </main>
  );
}

export function InfoSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-black/[0.08] py-10">
      <h2 className="text-2xl font-semibold tracking-tight text-black">{title}</h2>
      <div className="mt-4 max-w-3xl space-y-4 text-[15px] leading-relaxed text-black/75">{children}</div>
    </section>
  );
}
