"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

type LenisProviderProps = {
  children: ReactNode;
};

export const LenisProvider = ({ children }: LenisProviderProps) => {
  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true, anchors: true }}>
      {children}
    </ReactLenis>
  );
};
