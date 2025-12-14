"use client";

interface NavItem {
  id: string;
  label: string;
}

interface SideNavigationProps {
  items: NavItem[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function SideNavigation({ items, selected, onSelect }: SideNavigationProps) {
  return (
    <nav className="w-full lg:w-64 p-4 rounded-md border border-neutral-100 dark:border-neutral-800 bg-white/50 dark:bg-black/10">
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSelect(item.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors text-foreground hover:text-white side-nav-item
    ${
      selected === item.id
        ? "bg-neutral-100 dark:bg-neutral-900 font-medium"
        : "hover:bg-neutral-900/10 dark:hover:bg-neutral-800"
    }`}
              aria-pressed={selected === item.id}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
