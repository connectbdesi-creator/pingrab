export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <div className="prose-custom">{children}</div>
      <style>{`
        .prose-custom h2 { font-size: 1.75rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; letter-spacing: -0.01em; }
        .prose-custom h3 { font-size: 1.25rem; font-weight: 600; margin-top: 1.75rem; margin-bottom: 0.75rem; }
        .prose-custom p { color: #475569; line-height: 1.75; margin-bottom: 1rem; }
        .prose-custom ul { list-style: disc; padding-left: 1.25rem; color: #475569; margin-bottom: 1rem; }
        .prose-custom ol { list-style: decimal; padding-left: 1.25rem; color: #475569; margin-bottom: 1rem; }
        .prose-custom li { margin-bottom: 0.4rem; line-height: 1.7; }
        .prose-custom strong { color: #0f172a; font-weight: 600; }
        .prose-custom a { color: #e60023; text-decoration: underline; }
        .prose-custom a:hover { color: #cc001f; }
        .prose-custom h2:first-child { margin-top: 0; }
      `}</style>
    </section>
  );
}
