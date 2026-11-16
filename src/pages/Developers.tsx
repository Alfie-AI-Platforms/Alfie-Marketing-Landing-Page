import InfoPage, { InfoSection } from "@/components/alfie-platform/InfoPage";
import { Link } from "@/lib/router";

/* Developers: staged ahead of launch. Documentation opens to early
   organizations first; this page holds the structure and says so. */

export default function Developers() {
  return (
    <InfoPage
      title="Developers"
      intro="Build on Alfie's financial understanding with APIs and SDKs. Documentation opens to early organizations ahead of public launch."
    >
      <InfoSection id="documentation" title="Documentation">
        <p>
          Guides and references for integrating Alfie are in preparation and will be available here at launch.
          Organizations in the early group receive documentation directly from our team while the public version is
          completed.
        </p>
      </InfoSection>
      <InfoSection id="api-reference" title="API Reference">
        <p>
          Alfie exposes financial data processing, transaction categorization, reasoning, forecasting and
          conversational intelligence through APIs and SDKs, so product and technology teams can build on the
          intelligence layer without assembling data and modelling infrastructure from scratch.
        </p>
        <p>The full endpoint reference publishes with the documentation at launch.</p>
      </InfoSection>
      <InfoSection id="integrations" title="Integrations">
        <p>
          Alfie connects financial information across the environments finance teams already use: ledgers, banks,
          entities and documents. Deployment models are designed for regulated environments, with the controls,
          residency options and audit trails financial teams are held to.
        </p>
      </InfoSection>
      <InfoSection id="changelog" title="Changelog">
        <p>Alfie is currently in development. Release notes and platform changes will be published here from launch.</p>
        <p>
          Building something with Alfie in mind:{" "}
          <Link to="/contact" className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
            talk to us
          </Link>
          .
        </p>
      </InfoSection>
    </InfoPage>
  );
}
