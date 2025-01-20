import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="grid grid-cols-[1fr_auto] p-5 font-bold">
      <Link className="grid grid-cols-[auto_1fr] gap-1" href="/">
        <Logo />
        <span>My learning journal</span>
      </Link>

      <nav>
        <ul className="grid grid-cols-2 uppercase">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
