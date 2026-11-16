import { Reveal } from "./Reveal";

/* ---------------- data to decisions ---------------- */

const dataSteps = [
  {
    num: "01",
    title: "Connect",
    text: "Accounts, ledgers, documents and systems of record come in through one interface.",
  },
  {
    num: "02",
    title: "Understand",
    text: "Alfie resolves, classifies and models financial activity into structured meaning.",
  },
  {
    num: "03",
    title: "Reason",
    text: "Context is combined into analysis, forecasting and explanations you can defend.",
  },
  {
    num: "04",
    title: "Act",
    text: "Intelligence connects to authorized workflows with permissions and audit trails.",
  },
];

export default function DataToDecisions() {
  return (
    <section className="scroll-mt-20 border-t border-black/[0.08] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
            From raw financial data to defensible decisions.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dataSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 transition-colors hover:border-black/[0.16] hover:bg-black/[0.04]"
            >
              <p className="text-[13px] font-medium tracking-wide text-[#03484B]">{step.num}</p>
              <p className="mt-4 text-xl font-medium text-black">{step.title}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-black/70">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

