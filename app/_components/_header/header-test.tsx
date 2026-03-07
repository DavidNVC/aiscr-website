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
    }, 120);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
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

  return (
    <>
      <header className="w-full sticky top-6 bg-white font-sans text-[16px] mt-4 lg:mt-18.5 z-0">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/globe.svg"
                  alt="AISCR Global"
                  width={203}
                  height={36}
                  priority
                  className="inline-block lg:hidden w-auto h-9 sm:h-10"
                />
                <Image
                  src="/full_logo.svg"
                  alt="AISCR Global"
                  width={203}
                  height={36}
                  priority
                  className="hidden lg:inline-block w-auto h-9 sm:h-10"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center h-full gap-1 xl:gap-2">
              {menus.map((menu: MenuItem) => {
                const isMegaMenu = menu.children?.some(
                  (child) => child.subChildren,
                );

                if (!menu.children) {
                  return (
                    <Link
                      key={menu.key}
                      href={menu.href}
                      className="text-gray-800 hover:text-blue-700 font-semibold whitespace-nowrap px-3 py-2 rounded-md text-[15px] transition-colors"
                    >
                      {t(menu.label)}
                    </Link>
                  );
                }

                return (
                  <div
                    key={menu.key}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => handleMouseEnter(menu.key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-md font-semibold text-[15px] whitespace-nowrap transition-colors outline-none ${
                        activeDropdown === menu.key
                          ? "text-blue-700"
                          : "text-gray-800 hover:text-blue-700"
                      }`}
                    >
                      {t(menu.label)}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === menu.key ? "rotate-180" : ""
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

                    {/* Dropdown anchored to parent */}
                    {activeDropdown === menu.key && menu.children && (
                      <div
                        className={`absolute top-full left-0 bg-white shadow-2xl border border-gray-100 rounded-b-lg z-50 overflow-hidden
                          ${isMegaMenu ? "min-w-200" : "min-w-60"}`}
                        style={{ marginTop: "0px" }}
                      >
                        {isMegaMenu ? (
                          /* Mega Menu Grid */
                          <div className="grid grid-cols-4 divide-x divide-gray-100">
                            {menu.children.map((section) => (
                              <div key={section.key} className="p-5">
                                <Link
                                  href={section.href}
                                  className="block text-blue-600 font-bold text-[14px] uppercase tracking-wide mb-3 hover:text-blue-800 transition-colors border-b border-gray-100 pb-2"
                                >
                                  {t(section.label)}
                                </Link>
                                {section.subChildren && (
                                  <ul className="space-y-0">
                                    {section.subChildren.map((item) => (
                                      <li key={item.key}>
                                        <Link
                                          href={item.href}
                                          className="block py-2 text-[14px] text-gray-700 hover:text-blue-700 border-b border-gray-50 last:border-0 transition-colors"
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
                          /* Simple Dropdown */
                          <ul className="py-2">
                            {menu.children.map((item) => (
                              <li key={item.key}>
                                <Link
                                  href={item.href}
                                  className="block px-5 py-2.5 text-[14px] text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                >
                                  {t(item.label)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="/donate"
                className="ml-2 bg-primary-button inline-block text-white px-5 py-2 rounded-md font-semibold "
              >
                {t("donate")}
              </Link>
            </nav>

            {/* Mobile: Donate + Burger */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                href="/donate"
                className="bg-blue-700 text-white px-4 py-1.5 rounded-md font-semibold text-sm hover:bg-blue-800 transition-colors"
              >
                {t("donate")}
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
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

      {/* ── Mobile Sidebar ── */}
      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar panel */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-[320px] max-w-[85vw] z-[70] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 shrink-0">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/full_logo.svg"
              alt="AISCR Global"
              width={160}
              height={29}
              priority
              className="w-auto h-8"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="h-5 w-5"
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

        {/* Scrollable nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {menus.map((menu: MenuItem) => {
              const isOpen = mobileOpenSections.has(menu.key);

              if (!menu.children) {
                return (
                  <li key={menu.key}>
                    <Link
                      href={menu.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center px-4 py-3 rounded-lg text-gray-800 font-semibold text-[15px] hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {t(menu.label)}
                    </Link>
                  </li>
                );
              }

              const isMegaMenu = menu.children.some(
                (child) => child.subChildren,
              );

              return (
                <li key={menu.key}>
                  <button
                    onClick={() => toggleMobileSection(menu.key)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-[15px] transition-colors ${
                      isOpen
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-800 hover:bg-gray-50 hover:text-blue-700"
                    }`}
                  >
                    <span>{t(menu.label)}</span>
                    <svg
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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

                  {isOpen && (
                    <div className="mt-1 ml-2 border-l-2 border-blue-100 pl-3 space-y-1">
                      {isMegaMenu
                        ? /* Mega: sections with sub-items */
                          menu.children.map((section) => {
                            const isSectionOpen = mobileOpenSections.has(
                              section.key,
                            );
                            return (
                              <div key={section.key}>
                                <button
                                  onClick={() =>
                                    toggleMobileSection(section.key)
                                  }
                                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${
                                    isSectionOpen
                                      ? "text-blue-700 bg-blue-50"
                                      : "text-blue-600 hover:bg-gray-50"
                                  }`}
                                >
                                  <span>{t(section.label)}</span>
                                  <svg
                                    className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${isSectionOpen ? "rotate-180" : ""}`}
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

                                {isSectionOpen && section.subChildren && (
                                  <ul className="mt-1 ml-2 border-l border-gray-100 pl-3 space-y-0.5 pb-1">
                                    {section.subChildren.map((sub) => (
                                      <li key={sub.key}>
                                        <Link
                                          href={sub.href}
                                          onClick={() =>
                                            setIsMobileMenuOpen(false)
                                          }
                                          className="block px-3 py-2 rounded-md text-[13px] text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
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
                        : /* Simple dropdown */
                          menu.children.map((child) => (
                            <Link
                              key={child.key}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center px-3 py-2.5 rounded-lg text-[14px] text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
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

        {/* Sidebar Footer */}
        <div className="px-4 py-5 border-t border-gray-100 shrink-0">
          <Link
            href="/donate"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-[15px] hover:bg-blue-800 transition-colors shadow-sm"
          >
            {t("donate")}
          </Link>
        </div>
      </aside>
    </>
  );
}
