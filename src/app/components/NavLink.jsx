import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 px-3 text-[#ADB7BE] text-base md:text-lg rounded hover:text-white transition-colors"
    >
      {title}
    </Link>
  );
};

export default NavLink;
