import InfoPage, { InfoSection } from "@/components/alfie-platform/InfoPage";
import { Link } from "@/lib/router";

/* Trust: security, compliance and responsible AI practice, stated in the
   terms the product itself already uses on the home page. No certifications
   are claimed; the page says plainly that they will be published here as
   they are completed. */

export default function Trust() {
  return (
    <InfoPage
      title="Trust"
      intro="Alfie is built for organizations that are held to strict standards on security, evidence and accountability. This page describes how the platform is designed to meet them."
    >
      <InfoSection id="security" title="Security">
        <p>
          Access to Alfie is controlled at the organization, team and role level, so people see only the financial
          information their work requires. Actions taken through Alfie are authorized actions: the platform acts only
          within the permissions an organization grants, and every action is recorded in an audit trail that
          financial teams can review.
        </p>
        <p>
          Deployment models are designed for regulated environments, including data residency options where an
          organization needs its financial information to stay in a specific region.
        </p>
      </InfoSection>
      <InfoSection id="compliance" title="Compliance">
        <p>
          Financial institutions, insurers and public sector organizations work under audit and record keeping
          requirements. Alfie supports that work by keeping findings traceable to their supporting evidence, so a
          number or conclusion the platform produces can be checked against the documents and data behind it.
        </p>
        <p>
          Alfie is currently in development. Independent certifications and attestations will be published on this
          page as they are completed, and our compliance documentation is available to organizations evaluating Alfie
          under NDA.
        </p>
      </InfoSection>
      <InfoSection id="responsible-ai" title="Responsible AI">
        <p>
          Alfie reasons over financial information, and its output is built to be checked, not just trusted. Findings
          come with the supporting evidence attached, analysis shows its sources, and anything that changes a system
          outside Alfie runs through an authorized workflow with a person accountable for it.
        </p>
        <p>
          The platform is designed to support the judgement of financial professionals, not replace it. Decisions
          stay with the people an organization puts in charge of them.
        </p>
        <p>
          Questions about our practices:{" "}
          <Link to="/contact" className="text-black underline decoration-black/30 underline-offset-4 hover:decoration-black">
            talk to us
          </Link>
          .
        </p>
      </InfoSection>
    </InfoPage>
  );
}
