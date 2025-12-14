interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  return (
    <a href={href} className={`text-sm hover:underline ${className}`}>
      {children}
    </a>
  );
}
