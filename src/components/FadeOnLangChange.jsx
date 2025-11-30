// src/components/FadeOnLangChange.jsx
import { useTranslation } from "react-i18next";

/**
 * Remounts its children whenever the active language changes,
 * which retriggers a CSS animation.
 */
export default function FadeOnLangChange({ children, className = "", duration = 400 }) {
  const { i18n } = useTranslation();
  return (
    <div
      key={i18n.language}                       // remount on lang change
      className={`lang-fade ${className}`}
      style={{ animationDuration: `${duration}ms`, display: 'contents' }}
    >
      {children}
    </div>
  );
}
