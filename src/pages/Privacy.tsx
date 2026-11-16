import InfoPage, { InfoSection } from "@/components/alfie-platform/InfoPage";
import { Link } from "@/lib/router";

/* Interim privacy summary for the pre-launch site; the full policy
   publishes before launch and this page says so plainly. */

export default function Privacy() {
  return (
    <InfoPage
      title="Privacy"
      intro="How information is handled on this website while Alfie is in development. Last updated November 2026."
    >
      <InfoSection id="summary" title="Summary">
        <p>
          This website is informational. It does not offer accounts, and it does not collect financial information.
          If you contact us, we use what you share only to respond to you and to discuss Alfie with your
          organization.
        </p>
        <p>
          We do not sell personal information. The full privacy policy for the Alfie platform will be published here
          before launch, and this summary will be replaced by it.
        </p>
      </InfoSection>
      <InfoSection id="questions" title="Questions">
        <p>
          For any question about privacy and Alfie:{" "}
          <Link to="/contact" className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
            talk to us
          </Link>
          .
        </p>
      </InfoSection>
    </InfoPage>
  );
}
