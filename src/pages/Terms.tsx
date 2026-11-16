import InfoPage, { InfoSection } from "@/components/alfie-platform/InfoPage";
import { Link } from "@/lib/router";

/* Interim terms for the pre-launch site; full terms publish before launch. */

export default function Terms() {
  return (
    <InfoPage
      title="Terms"
      intro="The terms that apply to this website while Alfie is in development. Last updated November 2026."
    >
      <InfoSection id="summary" title="Summary">
        <p>
          This website describes Alfie, a product currently in development. Content here is for information only:
          features, availability and timelines may change before launch, and nothing on this site is an offer of
          service.
        </p>
        <p>
          The content of this site belongs to Alfie and Renda and may not be reused without permission. Full terms
          for the Alfie platform will be published here before launch, and this summary will be replaced by them.
        </p>
      </InfoSection>
      <InfoSection id="questions" title="Questions">
        <p>
          For any question about these terms:{" "}
          <Link to="/contact" className="text-black underline decoration-black/30 underline-offset-4 hover:decoration-black">
            talk to us
          </Link>
          .
        </p>
      </InfoSection>
    </InfoPage>
  );
}
