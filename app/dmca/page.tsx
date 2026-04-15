import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Prose from '@/components/Prose';

export const metadata: Metadata = {
  title: 'DMCA Notice & Takedown — PinGrab',
  description: 'How to file a DMCA notice with PinGrab for copyright-infringing content.',
  alternates: { canonical: 'https://pingrab-self.vercel.app/dmca' }
};

export default function DmcaPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-b from-brand-50 to-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">DMCA Notice</h1>
          <p className="mt-3 text-slate-600">Copyright policy and takedown procedure.</p>
        </div>
      </section>

      <Prose>
        <p>
          PinGrab respects the intellectual property rights of creators. We do not host Pinterest content —
          downloads stream directly from Pinterest's CDN — but if you believe a specific Pinterest URL
          should be blocked from our extractor, you may submit a DMCA notice.
        </p>

        <h2>Filing a notice</h2>
        <p>
          Email <a href="mailto:dmca@pingrab-self.vercel.app">dmca@pingrab-self.vercel.app</a> with the following information:
        </p>
        <ol>
          <li>Your full legal name, postal address, telephone number, and email.</li>
          <li>A description of the copyrighted work you claim has been infringed.</li>
          <li>The exact Pinterest pin URL(s) you want blocked from PinGrab.</li>
          <li>A statement that you have a good-faith belief that the use of the material is not authorised by the copyright owner, its agent, or the law.</li>
          <li>A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorised to act on behalf of the owner.</li>
          <li>Your physical or electronic signature.</li>
        </ol>

        <h2>Counter-notices</h2>
        <p>
          If content attributed to you was blocked in error, you may file a counter-notice to{' '}
          <a href="mailto:dmca@pingrab-self.vercel.app">dmca@pingrab-self.vercel.app</a> containing your contact information, the URL
          in question, and a statement under penalty of perjury that the material was removed as a result of
          mistake or misidentification.
        </p>

        <h2>Repeat infringers</h2>
        <p>
          We maintain a policy of blocking access to the Service — to the extent technically feasible — for
          users who are found to be repeat infringers of copyright or related rights.
        </p>

        <h2>Response time</h2>
        <p>We review and act on valid DMCA notices within 48 business hours.</p>
      </Prose>
    </PageShell>
  );
}
