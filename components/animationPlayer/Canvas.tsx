"use client";

import { useEffect, useRef } from "react";
import { Application } from "pixi.js";

export default function Canvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application>(null);

  useEffect(() => {
    let destroyed = false;

    const initPixi = async () => {
      const app = new Application();

      await app.init({
        width: 400,
        height: 400,
        backgroundColor: 0x1099bb,
        antialias: true,
      });

      // ✅ Race condition guard: If component unmounted while app.init() was running
      if (destroyed) {
        app.destroy(true, { children: true, texture: true });
        return;
      }

      // Ensure the container still exists in the DOM
      if (!containerRef.current) {
        app.destroy(true, { children: true, texture: true });
        return;
      }

      // ✅ Store the initialized app safely in our persistent ref
      appRef.current = app;
      containerRef.current.appendChild(app.canvas);
    };

    initPixi();

    return () => {
      // ✅ Instantly halt any ongoing async setup
      destroyed = true;

      // ✅ Safely destroy the app if it finished initializing
      if (appRef.current) {
        appRef.current.destroy(true, {
          children: true,
          texture: true
        });
        appRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex h-100 w-100 items-center justify-center overflow-hidden rounded-lg"
    />
  );
}
