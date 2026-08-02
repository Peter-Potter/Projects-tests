import Link from "next/link";

const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Courts', href: '#courts' },
  { label: 'Membership', href: '#membership' },
];

const NavLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link
      href={href}
      className="text-sm md:text-base font-medium text-white/75 hover:text-white transition-colors duration-200"
    >
      {label}
    </Link>
  );
};

const NavLinks = () => {
  return (
    <nav className="flex items-center gap-6 lg:gap-10">
      {NAV_LINKS.map((link) => (
        <NavLink key={link.label} label={link.label} href={link.href} />
      ))}
    </nav>
  );
};

export default NavLinks;