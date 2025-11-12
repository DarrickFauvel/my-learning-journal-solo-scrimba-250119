import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="grid grid-cols-[1fr_auto] p-5 font-bold">
      <Link className="grid grid-cols-[auto_1fr] gap-1" href="/">
        <Logo />
        <span className="font-[family-name:var(--font-roboto)]">My learning journal</span>
      </Link>

      <nav>
        <ul className="flex gap-8 uppercase text-xs font-[family-name:var(--font-source-sans-3)] mt-1">
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
