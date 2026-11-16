import InfoPage from "@/components/alfie-platform/InfoPage";
import { Link } from "@/lib/router";

/* Contact: staged ahead of launch. Carries the same panel as the home page
   CTA; direct contact details publish here at launch. */

export default function Contact() {
  return (
    <InfoPage
      title="Talk to us"
      intro="Tell us what you are building, and where financial intelligence would change the work."
    >
      <div className="rounded-2xl border border-black/[0.08] bg-[#F7F7F5] p-8 md:p-10">
        <p className="text-xl font-medium text-black">Tell us what you are building.</p>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-black/70">
          We are working with a small group of organizations ahead of launch: financial institutions, insurers,
          enterprises and public sector teams with complex financial operations.
        </p>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-black/70">
          Direct contact details will be published here at launch. Until then, the fastest route to the team is
          through{" "}
          <Link to="/about" className="text-black underline decoration-black/30 underline-offset-4 hover:decoration-black">
            Renda
          </Link>
          , the company building Alfie.
        </p>
      </div>
    </InfoPage>
  );
}
