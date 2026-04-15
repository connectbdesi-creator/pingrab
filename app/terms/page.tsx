import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Prose from '@/components/Prose';

export const metadata: Metadata = {
  title: 'Terms of Service — PinGrab',
  description: 'The terms and conditions that govern your use of PinGrab.',
  alternates: { canonical: 'https://pingrab.app/terms' }
};

export default function TermsPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-b from-brand-50 to-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Terms of Service</h1>
          <p className="mt-3 text-slate-600">Last updated: April 15, 2026</p>
        </div>
      </section>

      <Prose>
        <p>
          These Terms of Service ("Terms") govern your use of PinGrab ("the Service"). By using the Service
          you agree to these Terms. If you do not agree, do not use the Service.
        </p>

        <h2>1. The Service</h2>
        <p>
          PinGrab provides a web-based tool and browser extension that lets users download publicly
          available media from Pinterest. PinGrab is not affiliated with, endorsed by, or connected to
          Pinterest, Inc. in any way.
        </p>

        <h2>2. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any illegal purpose or in violation of any local, national or international law.</li>
          <li>Attempt to access or download content that is private, password-protected, or otherwise not publicly available on Pinterest.</li>
          <li>Use the Service to infringe third-party intellectual property rights.</li>
          <li>Abuse, overload, or interfere with the Service, including automated scraping at volumes beyond typical personal use.</li>
          <li>Circumvent or disable security or access controls.</li>
        </ul>

        <h2>3. Intellectual property</h2>
        <p>
          All content downloaded through the Service remains the property of the original Pinterest creators
          and/or their licensors. PinGrab claims no ownership over downloaded media. You are solely
          responsible for ensuring your use of downloaded content complies with applicable copyright law and
          any terms imposed by the original creator.
        </p>

        <h2>4. Personal use</h2>
        <p>
          The Service is intended for personal, non-commercial use. Commercial re-distribution, resale or
          republication of downloaded content without the original creator's permission is prohibited and may
          violate Pinterest's terms and applicable copyright law.
        </p>

        <h2>5. No warranty</h2>
        <p>
          The Service is provided "as is" and "as available" without warranties of any kind, express or
          implied. We do not warrant that the Service will be uninterrupted, error-free, or free of malware,
          nor that any particular Pinterest URL will always be downloadable.
        </p>

        <h2>6. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, PinGrab and its operators shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or any loss of profits or
          revenues, whether incurred directly or indirectly, arising from your use of the Service.
        </p>

        <h2>7. DMCA and takedown</h2>
        <p>
          If you are a rights holder and believe content is being downloaded through the Service in a way
          that infringes your rights, send a DMCA notice to <a href="mailto:dmca@pingrab.app">dmca@pingrab.app</a>
          with the infringing Pinterest URL and proof of ownership. We will investigate within 48 hours.
        </p>

        <h2>8. Termination</h2>
        <p>
          We may suspend or terminate access to the Service — in whole or in part, to any user — at any time,
          with or without cause or notice.
        </p>

        <h2>9. Changes to the Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the Service after changes take effect
          constitutes acceptance of the new Terms.
        </p>

        <h2>10. Governing law</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction in which PinGrab is operated, without
          regard to conflict-of-law principles. Disputes shall be resolved in the courts of that
          jurisdiction.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions about these Terms: <a href="mailto:legal@pingrab.app">legal@pingrab.app</a>
        </p>
      </Prose>
    </PageShell>
  );
}
