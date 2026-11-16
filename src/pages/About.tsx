import InfoPage, { InfoSection } from "@/components/alfie-platform/InfoPage";

export default function About() {
  return (
    <InfoPage
      title="About Alfie"
      intro="Alfie gives organizations the ability to understand financial information, reason across complex financial context, and turn intelligence into action."
    >
      <InfoSection id="what" title="What Alfie is">
        <p>
          Alfie is financial intelligence infrastructure: one layer that processes financial information, understands
          it in context, and makes that understanding available to products, teams and workflows. It is built for the
          organizations that handle money: financial institutions, insurers, enterprises and government.
        </p>
      </InfoSection>
      <InfoSection id="layers" title="One layer, four ways to build with it">
        <p>
          <span className="text-white">Intelligence</span>: financial context, analysis, reasoning, forecasting and
          insights. <span className="text-white">Assistant</span>: conversational financial intelligence for customers
          and employees. <span className="text-white">Actions</span>: intelligence connected to authorized workflows
          and systems. <span className="text-white">Platform</span>: APIs, SDKs, integrations and infrastructure for
          building with Alfie. Every capability shares the same financial understanding underneath.
        </p>
      </InfoSection>
      <InfoSection id="renda" title="Built by Renda">
        <p>
          Alfie is built by Renda, the team behind Renda Banking, where the same financial intelligence works inside a
          modern banking experience. Alfie takes that intelligence layer and makes it available to the wider industry.
        </p>
      </InfoSection>
      <InfoSection id="status" title="Where we are">
        <p>
          Alfie is currently in development, and we are working with a small group of organizations ahead of launch.
        </p>
      </InfoSection>
    </InfoPage>
  );
}
