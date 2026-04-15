import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Prose from '@/components/Prose';

export const metadata: Metadata = {
  title: 'Disclaimer — PinGrab',
  description: 'PinGrab disclaimer. We are an independent tool, not affiliated with Pinterest.',
  alternates: { canonical: 'https://pingrab.app/disclaimer' }
};

export default function DisclaimerPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-b from-brand-50 to-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Disclaimer</h1>
        </div>
      </section>

      <Prose>
        <h2>Independence</h2>
        <p>
          PinGrab is an independent software service. We are <strong>not affiliated with, owned by, or
          endorsed by Pinterest, Inc.</strong> The "Pinterest" name and logo are trademarks of their
          respective owners and are used here only for descriptive identification purposes.
        </p>

        <h2>Accuracy of information</h2>
        <p>
          Information on this website is provided in good faith for general informational purposes. We make
          no warranty as to the accuracy, completeness, or reliability of any information provided.
        </p>

        <h2>User responsibility</h2>
        <p>
          It is your responsibility to ensure that any content you download through PinGrab is used in a
          manner consistent with applicable copyright laws and the original creator's rights. PinGrab is a
          neutral technical tool; we do not assess, license, or endorse any particular piece of Pinterest
          content.
        </p>

        <h2>External links</h2>
        <p>
          The Service may contain links to third-party websites. We are not responsible for the content or
          practices of those sites and recommend reviewing their own terms and privacy policies.
        </p>

        <h2>Fair use</h2>
        <p>
          PinGrab is designed to facilitate legitimate personal uses such as offline archiving, educational
          reference, and fair-use commentary. If you are unsure whether your intended use qualifies, please
          consult a qualified attorney before redistributing downloaded content.
        </p>

        <h2>Advertising disclaimer</h2>
        <p>
          PinGrab displays third-party advertisements. Appearance of an advertisement on our site does not
          constitute an endorsement of the advertiser or its products by us. We are not responsible for the
          content of third-party advertisements.
        </p>
      </Prose>
    </PageShell>
  );
}
