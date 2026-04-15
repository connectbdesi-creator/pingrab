export type FAQItem = { q: string; a: string };

export default function FAQ({ items }: { items: FAQItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a }
    }))
  };
  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 py-14 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Frequently asked questions</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <details key={i} className="border rounded-xl p-4 bg-white group hover:border-brand-200 transition">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center gap-4">
              <span>{item.q}</span>
              <span className="text-brand-500 group-open:rotate-45 transition text-xl shrink-0">+</span>
            </summary>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
