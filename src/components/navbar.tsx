import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[4rem] px-20 p-3 font-bold bg-slate-950 text-white">
      <Link href="/" passHref legacyBehavior>
        <a>Home</a>
      </Link>
      <ul>
        <li>
          <Link href="/about" passHref legacyBehavior>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
