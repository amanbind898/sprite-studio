"use client";

import { UploadPanel, Control, Canvas } from "@/components/animationPlayer";

export default function AnimationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl p-4 md:p-6">
        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] items-start">
          {/* Left Panel */}
          <section className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-lg">
              <h2 className="mb-3 text-lg font-semibold">Upload Assets</h2>
              <UploadPanel />
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-lg">
              <h2 className="mb-3 text-lg font-semibold">Controls</h2>
              <Control />
            </div>
          </section>

          <section className="w-fit rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-lg">
            <div className="h-100 w-100 overflow-hidden rounded-xl bg-slate-950">
              <Canvas />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
