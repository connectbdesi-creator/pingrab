import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Prose from '@/components/Prose';

export const metadata: Metadata = {
  title: 'About PinGrab — The Story Behind Our Pinterest Downloader',
  description:
    'Learn about PinGrab, the team behind the free Pinterest downloader. Our mission, values, and how we build tools for creators.',
  alternates: { canonical: 'https://pingrab.app/about' }
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-b from-brand-50 to-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">About PinGrab</h1>
          <p className="mt-4 text-slate-600 md:text-lg">
            We build fast, privacy-respecting tools for people who love Pinterest.
          </p>
        </div>
      </section>

      <Prose>
        <h2>Our story</h2>
        <p>
          PinGrab started as a weekend side project in 2024. Our founder — a freelance illustrator — kept
          losing reference images when Pinterest restructured boards or creators deleted pins. Existing
          Pinterest downloaders worked, but they were slow, ad-heavy, and frequently served compressed
          720-pixel copies of images that were originally 4K. We wanted one that respected both the user and
          the source file.
        </p>

        <h2>What we believe</h2>
        <ul>
          <li><strong>Speed is a feature.</strong> A download that takes 15 seconds feels broken in 2026.</li>
          <li><strong>Original quality, always.</strong> If Pinterest has a 4K version we deliver 4K — not a thumbnail.</li>
          <li><strong>Privacy by default.</strong> We do not log your URLs, do not retain downloaded files, and do not sell data.</li>
          <li><strong>Respect creators.</strong> We point every pin back to its original source and encourage users to credit creators.</li>
        </ul>

        <h2>Who we serve</h2>
        <p>
          Thousands of designers, educators, marketers, hobbyists and researchers use PinGrab each month.
          Our biggest audience is creative professionals who archive visual inspiration, followed closely by
          students compiling reference for projects. We also work with small content studios who license
          Pinterest content from creators and need a reliable way to pull down source files.
        </p>

        <h2>Our commitment to Pinterest</h2>
        <p>
          PinGrab is an independent tool, not affiliated with or endorsed by Pinterest, Inc. We only process
          content that is already publicly accessible on Pinterest, and we never circumvent authentication or
          paywalls. If you are a rights holder and wish to have specific content excluded, please{' '}
          <a href="/contact">contact us</a> and we will respond within 48 hours.
        </p>

        <h2>How we make money</h2>
        <p>
          PinGrab is free to use. Our running costs are covered by discreet display advertising on non-download
          pages. We do not sell user data, we do not run affiliate tracking on the pins themselves, and we
          will never introduce a paid tier for basic downloads.
        </p>

        <h2>Contact</h2>
        <p>
          Feedback, bug reports and partnership enquiries are welcome at{' '}
          <a href="mailto:hello@pingrab.app">hello@pingrab.app</a> or through our{' '}
          <a href="/contact">contact page</a>.
        </p>
      </Prose>
    </PageShell>
  );
}
