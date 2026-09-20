import type { ErrorComponentProps } from "@tanstack/react-router";

export function DefaultError({ reset }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-project-heading">This page didn’t load</h1>
        <button type="button" onClick={reset} className="mt-6 text-label text-brand-blue">Try again</button>
      </div>
    </main>
  );
}