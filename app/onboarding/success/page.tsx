'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const steps = [
  { label: 'Authenticating credentials', done: true },
  { label: 'Establishing read-only connection', done: true },
  { label: 'Normalizing point valuations', done: true },
  { label: 'Setting up custom alert tiers', done: false },
  { label: 'Building spending baseline', done: false },
];

export default function SuccessPage() {
  const [progress, setProgress] = useState(60);
  const [completedSteps, setCompletedSteps] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 120);
    const stepTimer = setTimeout(() => setCompletedSteps(5), 3000);
    return () => { clearInterval(interval); clearTimeout(stepTimer); };
  }, []);

  const done = progress >= 100;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 500 }}>
        {/* Progress bar */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, background: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-icons" style={{ color: '#fff', fontSize: 16 }}>credit_card</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-primary)' }}>Card Notify</span>
            </div>
            <span className="chip chip-emerald">Step 4 of 4</span>
          </div>
          <div style={{ height: 4, background: 'var(--color-surface-highest)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', background: 'var(--color-emerald)', borderRadius: 99 }} />
          </div>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          {/* Icon */}
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: done ? 'var(--color-emerald-soft)' : 'var(--color-surface-container)',
            border: `3px solid ${done ? 'var(--color-emerald)' : 'var(--color-outline-variant)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px', transition: 'all 0.4s ease',
          }}>
            <span className="material-icons" style={{ fontSize: 40, color: done ? 'var(--color-emerald)' : 'var(--color-outline)', transition: 'color 0.4s' }}>
              {done ? 'check_circle' : 'sync'}
            </span>
          </div>

          <h1 className="text-h2" style={{ marginBottom: 8 }}>
            {done ? 'Account Linked Successfully!' : 'Syncing Your Data…'}
          </h1>
          <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', marginBottom: 28 }}>
            {done
              ? 'Your dashboard is ready. Start maximizing your rewards now.'
              : "We're normalizing your point values and setting up your custom alert tiers."}
          </p>

          {/* Progress ring */}
          {!done && (
            <div style={{ marginBottom: 28 }}>
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, marginBottom: 12 }}>
                <svg width="80" height="80" viewBox="0 0 80 80" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="40" cy="40" r="34" fill="none" stroke="var(--color-surface-high)" strokeWidth="6" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="var(--color-emerald)" strokeWidth="6"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    strokeDashoffset={`${2 * Math.PI * 34 * (1 - progress / 100)}`}
                    strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                  />
                </svg>
                <span style={{ position: 'absolute', fontSize: 16, fontWeight: 700, color: 'var(--color-primary)' }}>{progress}%</span>
              </div>
            </div>
          )}

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, textAlign: 'left', marginBottom: 28 }}>
            {steps.map((s, i) => {
              const isCompleted = i < completedSteps;
              return (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: isCompleted ? 'var(--color-emerald-soft)' : 'var(--color-surface-low)', borderRadius: 'var(--radius)', transition: 'background 0.4s' }}>
                  <span className="material-icons" style={{ fontSize: 18, color: isCompleted ? 'var(--color-emerald)' : 'var(--color-outline)', flexShrink: 0, transition: 'color 0.3s' }}>
                    {isCompleted ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: isCompleted ? 600 : 400, color: isCompleted ? '#065f46' : 'var(--color-on-surface-variant)' }}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>

          {done ? (
            <Link href="/dashboard" className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
              Go to Dashboard
              <span className="material-icons" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          ) : (
            <p style={{ fontSize: 12, color: 'var(--color-outline)' }}>This usually takes less than 30 seconds…</p>
          )}
        </div>
      </div>
    </div>
  );
}
