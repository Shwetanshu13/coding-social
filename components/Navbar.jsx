"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "All Users", href: "/users" },
  { name: "Submit Profile", href: "/submit" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-black text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">🚀 Code Profiles</h1>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-blue-400 underline"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
