import ScrollLink from "./ScrollLink";

interface NavLinkProps {
  offset: number;
  href: string;
  children: React.ReactNode;
  classname?: string;
}

const NavLink = ({ children, href, offset, classname }: NavLinkProps) => {
  return (
    <ScrollLink offset={offset} href={href} classname={classname}>
      {children}
    </ScrollLink>
  );
};

export default NavLink;
