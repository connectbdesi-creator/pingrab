import { Zap, Shield, Award, Smartphone, Infinity as InfinityIcon, HeartHandshake } from 'lucide-react';

const defaultFeatures = [
  { icon: Zap, title: 'Lightning fast', text: 'Optimized servers deliver downloads in seconds.' },
  { icon: Shield, title: 'Safe & private', text: 'We never store your links or downloaded media.' },
  { icon: Award, title: 'Highest quality', text: 'Original HD resolution — never compressed.' },
  { icon: Smartphone, title: 'Works everywhere', text: 'iPhone, Android, Mac, Windows — any browser.' },
  { icon: InfinityIcon, title: 'Unlimited', text: 'Download as many pins as you want. No caps.' },
  { icon: HeartHandshake, title: 'Always free', text: 'No hidden fees. No subscriptions. No ads.' }
];

export default function Features({ heading = 'Why PinGrab', features = defaultFeatures }: {
  heading?: string;
  features?: typeof defaultFeatures;
}) {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">{heading}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border hover:border-brand-200 hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-500 grid place-items-center mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-slate-600 mt-1 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
