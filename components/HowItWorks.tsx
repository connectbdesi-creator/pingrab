import { ClipboardPaste, Download, Link2 } from 'lucide-react';

export default function HowItWorks({ subject }: { subject: string }) {
  const steps = [
    { icon: Link2, title: 'Copy the link', text: `Open Pinterest, tap share on any ${subject} pin and copy the link.` },
    { icon: ClipboardPaste, title: 'Paste it above', text: 'Paste the URL into the input box at the top of this page.' },
    { icon: Download, title: 'Download in HD', text: `Click Download and save the ${subject} to your device instantly.` }
  ];
  return (
    <section id="how" className="max-w-6xl mx-auto px-4 py-14 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">How to download Pinterest {subject}s</h2>
        <p className="mt-3 text-slate-600">Three steps. No account. No watermark.</p>
      </div>
      <ol className="grid md:grid-cols-3 gap-5">
        {steps.map((s, i) => (
          <li key={i} className="relative p-6 rounded-2xl border bg-white hover:shadow-lg transition">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center text-sm font-bold shadow-md">
              {i + 1}
            </div>
            <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-500 grid place-items-center mb-4">
              <s.icon size={22} />
            </div>
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-slate-600 mt-1 text-sm">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
