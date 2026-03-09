"use client";

import Image from "next/image";
import { Link } from "../../../i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { menus } from "./menus";

interface SubMenuItem {
  key: string;
  label: string;
  href: string;
  subChildren?: SubMenuItem[];
}

interface MenuItem {
  key: string;
  label: string;
  href: string;
  children?: SubMenuItem[];
}

export default function Header() {
  const t = useTranslations("header");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenSections, setMobileOpenSections] = useState<Set<string>>(
    new Set(),
  );
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSection = (key: string) => {
    setMobileOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileOpenSections(new Set());
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isMegaMenu = (menu: MenuItem) =>
    menu.children?.some((child) => child.subChildren);

  return (
    <>
      {/* Header */}
      <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100/50">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <Image
                src="/logo_globe.svg"
                alt="AISCR"
                width={40}
                height={40}
                priority
                className="lg:hidden w-9 h-9"
              />
              <Image
                src="/full_logo.svg"
                alt="AISCR Global"
                width={180}
                height={36}
                priority
                className="hidden lg:block h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {menus.map((menu: MenuItem) => {
                const hasChildren = menu.children && menu.children.length > 0;
                const isActive = activeDropdown === menu.key;

                if (!hasChildren) {
                  return (
                    <Link
                      key={menu.key}
                      href={menu.href}
                      className="px-3 xl:px-4 py-2 text-[14px] xl:text-[15px] font-semibold text-gray-800 hover:text-blue-600 transition-colors whitespace-nowrap"
                    >
                      {t(menu.label)}
                    </Link>
                  );
                }

                return (
                  <div
                    key={menu.key}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(menu.key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-[14px] xl:text-[15px] font-semibold whitespace-nowrap transition-colors ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-600"
                      }`}
                    >
                      {t(menu.label)}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isActive ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {isActive && menu.children && (
                      <div
                        className={`absolute top-full bg-white shadow-xl border border-gray-100 z-50 ${
                          isMegaMenu(menu)
                            ? "left-1/2 -translate-x-1/2 w-225 rounded-lg"
                            : "right-0 min-w-70 rounded-lg"
                        }`}
                      >
                        {isMegaMenu(menu) ? (
                          /* Mega Menu - 4 columns with borders */
                          <div className="grid grid-cols-4 divide-x divide-gray-200">
                            {menu.children.map((section) => (
                              <div key={section.key} className="py-5 px-5">
                                {/* Section Header - Blue */}
                                <Link
                                  href={section.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block text-blue-600 font-bold text-[14px] mb-3 hover:text-blue-700 transition-colors"
                                >
                                  {t(section.label)}
                                </Link>

                                {/* Section Items */}
                                {section.subChildren && (
                                  <ul className="space-y-0">
                                    {section.subChildren.map((item) => (
                                      <li key={item.key}>
                                        <Link
                                          href={item.href}
                                          onClick={() =>
                                            setActiveDropdown(null)
                                          }
                                          className="block py-2.5 text-[13px] text-gray-700 hover:text-blue-600 border-b border-gray-100 last:border-b-0 transition-colors"
                                        >
                                          {t(item.label)}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* Simple Dropdown with left border accent */
                          <div className="py-2">
                            {menu.children.map((item) => (
                              <Link
                                key={item.key}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-5 py-3 text-[14px] text-gray-700 hover:text-blue-600 hover:bg-gray-50 border-l-2 border-transparent hover:border-blue-600 transition-all"
                              >
                                {t(item.label)}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Donate Button */}
              <Link
                href="/donate"
                className="ml-4 px-6 py-2.5 bg-primary-button text-white text-[14px] font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("donate")}
              </Link>
            </nav>

            {/* Mobile: Donate + Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-100 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Drawer */}
      <aside
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-101 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 shrink-0">
          <Link href="/" onClick={closeMobileMenu}>
            <Image
              src="/full_logo.svg"
              alt="AISCR Global"
              width={140}
              height={28}
              priority
              className="h-8 w-auto"
            />
          </Link>
          <button
            onClick={closeMobileMenu}
            className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-4">
          <ul className="space-y-1">
            {menus.map((menu: MenuItem) => {
              const isOpen = mobileOpenSections.has(menu.key);
              const hasChildren = menu.children && menu.children.length > 0;

              if (!hasChildren) {
                return (
                  <li key={menu.key}>
                    <Link
                      href={menu.href}
                      onClick={closeMobileMenu}
                      className="flex items-center px-4 py-3 rounded-lg text-gray-800 font-semibold text-[15px] hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {t(menu.label)}
                    </Link>
                  </li>
                );
              }

              const mega = isMegaMenu(menu);

              return (
                <li key={menu.key}>
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleMobileSection(menu.key)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-[15px] transition-colors ${
                      isOpen
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <span>{t(menu.label)}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="mt-1 ml-3 pl-4 border-l-2 border-blue-100 space-y-1">
                      {mega
                        ? menu.children?.map((section) => {
                            const isSectionOpen = mobileOpenSections.has(
                              section.key,
                            );

                            return (
                              <div key={section.key}>
                                {/* Section Header */}
                                <button
                                  onClick={() =>
                                    toggleMobileSection(section.key)
                                  }
                                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${
                                    isSectionOpen
                                      ? "text-blue-600 bg-blue-50/50"
                                      : "text-blue-600 hover:bg-gray-50"
                                  }`}
                                >
                                  <span>{t(section.label)}</span>
                                  <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                      isSectionOpen ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </button>

                                {/* Sub Items */}
                                {isSectionOpen && section.subChildren && (
                                  <ul className="mt-1 ml-2 pl-3 border-l border-gray-200 space-y-0.5 pb-2">
                                    {section.subChildren.map((sub) => (
                                      <li key={sub.key}>
                                        <Link
                                          href={sub.href}
                                          onClick={closeMobileMenu}
                                          className="block px-3 py-2 rounded-lg text-[13px] text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                                        >
                                          {t(sub.label)}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            );
                          })
                        : menu.children?.map((child) => (
                            <Link
                              key={child.key}
                              href={child.href}
                              onClick={closeMobileMenu}
                              className="flex items-center px-3 py-2.5 rounded-lg text-[14px] text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                            >
                              {t(child.label)}
                            </Link>
                          ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer Footer */}
        <div className="px-5 py-5 border-t border-gray-100 shrink-0">
          <Link
            href="/donate"
            onClick={closeMobileMenu}
            className="flex items-center justify-center w-full py-3.5 bg-primary-button text-white font-bold text-[15px] rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t("donate")}
          </Link>
        </div>
      </aside>
    </>
  );
}
