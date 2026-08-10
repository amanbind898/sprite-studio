import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Animations", href: "/animations" },
  { label: "Settings", href: "/settings" },
];

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold">
          Sprite Studio
        </Link>

        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}