import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the URL contains a hash, let the browser scroll to that anchor.
    if (hash) return;

    // Jump to the very top on every route change.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // use "smooth" if you prefer
  }, [pathname, hash]);

  return null;
}