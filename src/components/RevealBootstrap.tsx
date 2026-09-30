"use client";

import { useLayoutEffect } from "react";

/**
 * Re-adds the `js-reveal` class after React's development Strict Mode remount
 * resets `<html>` to only the attributes it manages from JSX. A no-op in
 * production, where the inline script in the root layout already set it.
 */
export default function RevealBootstrap() {
  useLayoutEffect(() => {
    document.documentElement.classList.add("js-reveal");
  }, []);

  return null;
}
