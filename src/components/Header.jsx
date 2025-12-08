// src/components/Header.jsx
import { useState, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeOnLangChange from "./FadeOnLangChange";

import logoNgang from "../assets/img/Logo/logo ngang.png";
import viImg from "../assets/img/Home/icons/Vi.png";
import enImg from "../assets/img/Home/icons/en.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen((s) => !s);
  const closeMenu = () => setIsMenuOpen(false);

  const currLang = i18n.language === "vi" ? "vi" : "en";
  const nextLang = currLang === "vi" ? "en" : "vi";
  const imgFor = (lang) => (lang === "vi" ? viImg : enImg);

  const toggleLang = () => {
    i18n.changeLanguage(nextLang);
  };

  const ref = useRef(null);

  useLayoutEffect(() => {
    const setH = () => {
      const h = ref.current?.offsetHeight ?? 72;
      document.documentElement.style.setProperty('--header-h', `${h}px`);
    };
    setH();
    window.addEventListener('resize', setH);
    return () => window.removeEventListener('resize', setH);
  }, []);
  
  return (
    <nav ref={ref} className="top-bar">
      <Link to="/" aria-label={t("nav.home_aria")} className="logo-link">
        <img src={logoNgang} alt={t("common.logo_alt")} className="logo" />
      </Link>

      <div className="nav-actions">
        {/* Fade the nav labels on language change */}
        <FadeOnLangChange>
          <ul className={`nav-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}>
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                aria-current={pathname === "/about" ? "page" : undefined}
              >
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={closeMenu}
                aria-current={pathname === "/projects" ? "page" : undefined}
              >
                {t("nav.projects")}
              </Link>
            </li>
            <li>
              <Link
                to="/furniture"
                onClick={closeMenu}
                aria-current={pathname === "/furniture" ? "page" : undefined}
              >
                {t("nav.furniture")}
              </Link>
            </li>
            <li>
              <Link
                to="/infrastructure"
                onClick={closeMenu}
                aria-current={pathname === "/infrastructure" ? "page" : undefined}
              >
                {t("nav.infrastructure")}
              </Link>
            </li>
          </ul>
        </FadeOnLangChange>

        {/* Language image that fades on change */}
        <button
          type="button"
          onClick={toggleLang}
          className="lang-btn"
          aria-label={t("nav.toggle_lang_aria")}
          title={t("nav.toggle_lang_title", { lang: nextLang === "en" ? "English" : "Tiếng Việt" })}
        >
          <FadeOnLangChange>
            {/* key ensures FadeOnLangChange re-animates when language flips */}
            <img
              key={nextLang}
              className="lang-button"
              src={imgFor(nextLang)}
              alt=""
            />
          </FadeOnLangChange>
        </button>

        {/* Mobile hamburger */}
        <button
          className="hamburger-menu"
          aria-label={t("nav.menu_aria")}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 7L4 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 12L4 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 17L4 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
