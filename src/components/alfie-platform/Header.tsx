import alfieLogo from "@/assets/alfie-logo.png";
import { Link } from "@/lib/router";

/* ---------------- header ---------------- */

interface NavItem {
  label: string;
  to: string;
}

const menus: { label: string; items: NavItem[] }[] = [
  {
    label: "Product",
    items: [
      { label: "Overview", to: "/#capabilities" },
      { label: "Intelligence", to: "/#capabilities" },
      { label: "Assistant", to: "/#capabilities" },
      { label: "Actions", to: "/#capabilities" },
      { label: "Platform", to: "/#capabilities" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "Overview", to: "/#organizations" },
      { label: "Financial Institutions", to: "/#organizations" },
      { label: "Insurance", to: "/#organizations" },
      { label: "Enterprise", to: "/#organizations" },
      { label: "Government", to: "/#organizations" },
    ],
  },
  {
    label: "Trust",
    items: [
      { label: "Trust overview", to: "/trust" },
      { label: "Security", to: "/trust#security" },
      { label: "Compliance", to: "/trust#compliance" },
      { label: "Responsible AI", to: "/trust#responsible-ai" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

function Dropdown({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <div className="group relative flex h-14 items-center">
      <button
        type="button"
        className="flex items-center gap-1.5 transition-colors hover:text-black"
        aria-haspopup="true"
      >
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className="opacity-70">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="min-w-56 rounded-xl border border-black/[0.08] bg-white p-2 shadow-[0_16px_50px_-12px_rgba(0,0,0,0.25)]">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block rounded-lg px-3 py-2 text-[14px] text-black/75 transition-colors hover:bg-black/[0.04] hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.08] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-[17px] font-semibold tracking-tight text-black">
          <img src={alfieLogo} alt="Alfie logo" className="h-6 w-auto" />
          Alfie
        </Link>
        <nav className="flex items-center gap-6 text-[15px] text-black/70">
          <div className="hidden items-center gap-6 lg:flex">
            {menus.slice(0, 2).map((menu) => (
              <Dropdown key={menu.label} label={menu.label} items={menu.items} />
            ))}
            <Link to="/developers" className="transition-colors hover:text-black">
              Developers
            </Link>
            {menus.slice(2).map((menu) => (
              <Dropdown key={menu.label} label={menu.label} items={menu.items} />
            ))}
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-black px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-black/80"
          >
            Talk to us
          </Link>
        </nav>
      </div>
    </header>
  );
}
