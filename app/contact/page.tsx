import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Prose from '@/components/Prose';
import { Mail, Shield, FileText, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact PinGrab',
  description: 'Get in touch with the PinGrab team for support, feedback, or partnership enquiries.',
  alternates: { canonical: 'https://pingrab.app/contact' }
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-b from-brand-50 to-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Contact us</h1>
          <p className="mt-3 text-slate-600">We reply within one business day.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: MessageSquare, title: 'General support', email: 'hello@pingrab.app', text: 'Bug reports, feedback, feature requests.' },
            { icon: Shield, title: 'Privacy enquiries', email: 'privacy@pingrab.app', text: 'Data access, deletion, GDPR/CCPA requests.' },
            { icon: FileText, title: 'Legal & DMCA', email: 'legal@pingrab.app', text: 'Takedown notices, legal correspondence.' },
            { icon: Mail, title: 'Partnerships', email: 'partners@pingrab.app', text: 'Advertising, integrations, press.' }
          ].map((c, i) => (
            <a
              key={i}
              href={`mailto:${c.email}`}
              className="p-6 rounded-2xl bg-white border hover:border-brand-300 hover:shadow-md transition block"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-500 grid place-items-center mb-4">
                <c.icon size={22} />
              </div>
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{c.text}</p>
              <p className="text-brand-500 text-sm mt-3 font-medium">{c.email}</p>
            </a>
          ))}
        </div>
      </section>

      <Prose>
        <h2>Business information</h2>
        <p>
          PinGrab is operated as an independent digital product. Mailing correspondence can be sent to{' '}
          <strong>PinGrab, c/o Registered Agent, Wilmington, DE, USA</strong>.
        </p>
        <h2>Response times</h2>
        <ul>
          <li>Support: within 1 business day.</li>
          <li>Privacy requests: within 30 calendar days (often much sooner).</li>
          <li>DMCA: within 48 business hours.</li>
          <li>Partnerships: within 5 business days.</li>
        </ul>
      </Prose>
    </PageShell>
  );
}
