import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component
 * Automatically resets the scroll position of the main content container (<main>)
 * as well as the window/document to (0, 0) whenever the route pathname changes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable native browser window scroll restoration to prevent popstate conflicts
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const resetScroll = () => {
      // 1. Reset custom scrollable content container (AppLayout <main>)
      const mainContainer = document.querySelector("main");
      if (mainContainer) {
        mainContainer.scrollTo({ top: 0, left: 0, behavior: "instant" });
        mainContainer.scrollTop = 0;
        mainContainer.scrollLeft = 0;
      }

      // 2. Reset standard browser window / html / body scroll positions
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    // Re-verify on next animation frame after layout rendering completes
    const rafId = requestAnimationFrame(resetScroll);
    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return null;
}
