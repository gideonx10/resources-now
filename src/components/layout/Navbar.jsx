"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["Services", "/services"],
  ["Systems", "/case-studies"],
  ["AI Solutions", "/ai-solutions"],
  ["Process", "/process"],
  ["Stack", "/stack"],
  ["About", "/about"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open);
    return () => document.body.classList.remove("mobile-nav-open");
  }, [open]);

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="nav-logo-mark image-mark">
            <Image src="/logo.png" alt="Resources Now" width={36} height={36} priority />
          </span>
          <span>Resources Now</span>
        </Link>
        <div className="nav-links">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""}>
              {label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="nav-cta">Start a Project &rarr;</Link>
        <button className="mobile-toggle" aria-label="Open navigation" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </div>
      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-top">
          <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
            <span className="nav-logo-mark image-mark">
              <Image src="/logo.png" alt="Resources Now" width={36} height={36} />
            </span>
            <span>Resources Now</span>
          </Link>
          <button className="mobile-close" aria-label="Close navigation" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="mobile-menu-links">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href ? "active" : ""}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>Start a Project &rarr;</Link>
        </div>
      </div>
    </nav>
  );
}
