import { Reveal } from "./Reveal";
import { Link } from "@/lib/router";

/* ---------------- build with alfie cta ---------------- */

export default function BuildWithAlfieCTA() {
  return (
    <section className="border-t border-black/[0.08] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">Build with Alfie.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/70">
            APIs, SDKs and deployment models designed for regulated environments — with the controls, residency options
            and audit trails financial teams are held to.
          </p>
        </Reveal>
        <Reveal delay={150} className="mt-14">
          <div className="rounded-2xl border border-black/[0.08] bg-[#F7F7F5] p-8 md:p-10">
            <p className="text-xl font-medium text-black">Tell us what you are building.</p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-black/70">
              We are working with a small group of organizations ahead of launch.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-black/80"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

