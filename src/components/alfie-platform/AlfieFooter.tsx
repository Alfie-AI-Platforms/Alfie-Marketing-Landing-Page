import alfieLogo from "@/assets/alfie-logo.png";
import { Link } from "@/lib/router";

/* ---------------- footer ---------------- */

const footerCols: { title: string; links: { label: string; to?: string; href?: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Intelligence", to: "/#capabilities" },
      { label: "Assistant", to: "/#capabilities" },
      { label: "Actions", to: "/#capabilities" },
      { label: "Platform", to: "/#capabilities" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Financial Institutions", to: "/#organizations" },
      { label: "Insurance", to: "/#organizations" },
      { label: "Enterprise", to: "/#organizations" },
      { label: "Government", to: "/#organizations" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", to: "/developers#documentation" },
      { label: "API Reference", to: "/developers#api-reference" },
      { label: "Integrations", to: "/developers#integrations" },
      { label: "Changelog", to: "/developers#changelog" },
    ],
  },
  {
    title: "Trust and Legal",
    links: [
      { label: "Security", to: "/trust#security" },
      { label: "Compliance", to: "/trust#compliance" },
      { label: "Responsible AI", to: "/trust#responsible-ai" },
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "LinkedIn", href: "https://www.linkedin.com" },
    ],
  },
];

export default function AlfieFooter() {
  return (
    <footer className="border-t border-black/[0.08] py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 xl:grid-cols-[1.4fr_1fr_1fr_1fr_1fr_1fr]">
        <div>
          <img src={alfieLogo} alt="Alfie logo" className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-black/70">
            Alfie: financial intelligence infrastructure for the organizations that handle money. Built by Renda.
          </p>
        </div>
        {footerCols.map((col) => (
          <div key={col.title}>
            <p className="text-[14px] font-medium text-black">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[14px] text-black/65 transition-colors hover:text-black"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to ?? "/"} className="text-[14px] text-black/65 transition-colors hover:text-black">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.08] pt-6">
          <p className="text-[13px] text-black/60">© 2026 Alfie. All rights reserved.</p>
          <p className="flex items-center gap-2 text-[13px] text-black/60">
            <span className="alfie-gradient h-1.5 w-1.5 rounded-full" />
            Currently in development. Coming soon.
          </p>
        </div>
      </div>
    </footer>
  );
}
