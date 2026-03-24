import { useEffect, useRef, useState } from 'react';
import './StatisticsSection.css';

const STATS = [
  {
    value: 300,
    suffix: '+',
    label: 'Stanova u investicionoj izgradnji',
    icon: BuildingIcon,
  },
  {
    value: 120,
    suffix: '+',
    label: 'Porodičnih kuća izgrađeno',
    icon: HouseIcon,
  },
  {
    value: 20,
    suffix: '+',
    label: 'Godina iskustva u građevinarstvu',
    icon: CalendarIcon,
  },
  {
    value: 15000,
    suffix: '+',
    label: 'm² izgrađenog prostora',
    icon: RulerIcon,
  },
];

const DURATION_MS = 2000;

function easeOutQuart(t) {
  return 1 - (1 - t) ** 4;
}

function useCountUp(end, start = 0, duration = DURATION_MS, isActive) {
  const [count, setCount] = useState(start);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isActive) {
      setCount(start);
      return;
    }
    const startTime = performance.now();
    startTimeRef.current = startTime;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = Math.round(start + (end - start) * eased);
      setCount(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, start, duration, isActive]);

  return count;
}

function formatNumber(n) {
  return n >= 1000 ? n.toLocaleString('sr-RS').replace(/\s/g, '.') : String(n);
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 22V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
      <path d="M6 12h12M6 16h12M6 20h12" />
      <path d="M10 6V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12l9-9 9 9" />
      <path d="M5 10v10h4v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h4V10" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <circle cx="8" cy="15" r="1" fill="currentColor" />
      <circle cx="12" cy="15" r="1" fill="currentColor" />
      <circle cx="16" cy="15" r="1" fill="currentColor" />
    </svg>
  );
}

function RulerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M8 9h2M13 9h2M8 12h5M8 15h2M13 15h2" />
    </svg>
  );
}

function StatItem({ stat, isVisible }) {
  const count = useCountUp(stat.value, 0, DURATION_MS, isVisible);
  const Icon = stat.icon;

  return (
    <div className="stat-item">
      <div className="stat-icon" aria-hidden="true">
        <Icon />
      </div>
      <p className="stat-value" aria-label={`${formatNumber(stat.value)}${stat.suffix} ${stat.label}`}>
        <span className="stat-number">{formatNumber(count)}</span>
        <span className="stat-suffix">{stat.suffix}</span>
      </p>
      <p className="stat-label">{stat.label}</p>
    </div>
  );
}

export default function StatisticsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="statistics-section" ref={sectionRef} aria-labelledby="statistics-heading">
      <div className="statistics-inner">
        <h2 id="statistics-heading" className="statistics-title">
          Brojke koje govore
        </h2>
        <div className="statistics-grid">
          {STATS.map((stat, idx) => (
            <StatItem key={idx} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
