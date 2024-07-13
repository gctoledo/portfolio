import SmoothScrollLink from "./SmothScrollLink";

interface NavLinkProps {
  offset: number;
  href: string;
  children: React.ReactNode;
  classname?: string;
}

const NavLink = ({ children, href, offset, classname }: NavLinkProps) => {
  return (
    <SmoothScrollLink offset={offset} href={href} classname={classname}>
      {children}
    </SmoothScrollLink>
  );
};

export default NavLink;
