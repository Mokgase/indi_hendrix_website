"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function NavLinks() {
  const Catalogue = [
    { name: 'Paintings', route: '/Catalogue/Paintings' },
    { name: 'Prints', route: '/Catalogue/Prints' },
    { name: 'Merch', route: '/Catalogue/Merch' },
  ];

  const links = [
    { name: 'About Me', route: '#about' },
    {name: 'Paintings', route: '#paintings'},
    { name: 'Contact Me', route: '#contact' },
    { name: 'Enquiries', route: '/Enquiries' },
    { name: 'CATALOGUE', route: '#', submenu: true, sublinks: Catalogue },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);
  const menuRefs = useRef([]);

  useEffect(() => {
    function handleDocClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    }

    function handleKey(e) {
      if (e.key === "Escape") setOpenIndex(null);
    }

    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("touchstart", handleDocClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("touchstart", handleDocClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    if (openIndex !== null) {
      const firstLink = menuRefs.current[openIndex]?.querySelector("a");
      if (firstLink) firstLink.focus();
    }
  }, [openIndex]);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="flex items-center gap-8 relative" ref={containerRef}>
      {links.map((link, index) => (
        <div key={index} className="relative">
          {!link.submenu && (
            <Link href={link.route} className="navbar-text cursor-pointer">
              {link.name}
            </Link>
          )}

          {link.submenu && (
            <>
              <button
                type="button"
                aria-haspopup="menu"
                aria-controls={`submenu-${index}`}
                aria-expanded={openIndex === index}
                onClick={() => toggle(index)}
                className="navbar-text flex items-center gap-2 cursor-pointer"
              >
                <span>{link.name}</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                id={`submenu-${index}`}
                ref={(el) => (menuRefs.current[index] = el)}
                role="menu"
                className={`absolute top-full mt-2 bg-white shadow-lg rounded-lg z-10 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <div className="grid gap-1 p-2 min-w-[160px]">
                  {link.sublinks.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sublink.route}
                      className="navbar-text-options hover:underline block p-1 rounded"
                      onClick={() => setOpenIndex(null)}
                      role="menuitem"
                      tabIndex={0}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
