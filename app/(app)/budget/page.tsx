'use client';
import { useState } from 'react';

const budgets = [
  { cat: 'Groceries', icon: 'local_grocery_store', spent: 650, total: 800, color: 'var(--color-emerald)' },
  { cat: 'Dining Out', icon: 'restaurant', spent: 442, total: 300, color: 'var(--color-coral)' },
  { cat: 'Entertainment', icon: 'movie', spent: 290, total: 300, color: 'var(--color-amber)' },
  { cat: 'Transport', icon: 'directions_car', spent: 180, total: 400, color: 'var(--color-emerald)' },
  { cat: 'Shopping', icon: 'shopping_bag', spent: 520, total: 600, color: 'var(--color-amber)' },
  { cat: 'Subscriptions', icon: 'subscriptions', spent: 42, total: 80, color: 'var(--color-emerald)' },
];

const impulseSettings = [
  { label: 'Impulse Spending', icon: 'speed', desc: 'Alerts triggered by unusual transaction frequency.', enabled: true },
  { label: 'Late-Night Spending', icon: 'nightlight', desc: 'Flag transactions between 11 PM and 2 AM.', enabled: true },
  { label: 'Duplicate Merchants', icon: 'store', desc: 'Detect repeat visits to same merchant within 24h.', enabled: false },
];

export default function BudgetPage() {
  const [settings, setSettings] = useState(impulseSettings);
  const [softThreshold] = useState(70);
  const [criticalThreshold] = useState(100);

  const toggle = (i: number) => {
    setSettings((prev) => prev.map((s, idx) => idx === i ? { ...s, enabled: !s.enabled } : s));
  };

  return (
    <div style={{ maxWidth: 1100 }}>
      <div style={{ marginBottom: 32 }}>
        <h1 className="text-h1" style={{ color: 'var(--color-primary)', marginBottom: 6 }}>Budget &amp; Alerts</h1>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
          Monitor spending limits and configure notification sensitivities.
        </p>
      </div>

      {/* Overspend Alert */}
      <div className="alert-banner alert-coral" style={{ marginBottom: 28, borderRadius: 'var(--radius-md)' }}>
        <span className="material-icons" style={{ fontSize: 22, flexShrink: 0, marginTop: 1 }}>warning</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Overspend Action Required</div>
          <div style={{ fontSize: 14 }}>You have exceeded your Dining Out budget by ₹142.50 this period.</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
          <div style={{ background: 'rgba(244,63,94,0.12)', borderRadius: 'var(--radius)', padding: '8px 14px' }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>💡 Cancel Unused Subscriptions</div>
            <div style={{ fontSize: 11 }}>Review active recurring charges to free up cash flow.</div>
          </div>
          <div style={{ background: 'rgba(244,63,94,0.12)', borderRadius: 'var(--radius)', padding: '8px 14px' }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>🛒 Shift to Groceries</div>
            <div style={{ fontSize: 11 }}>Consider generic brands to offset dining overages.</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Budget Controls */}
        <div className="flex-1 lg:w-3/5">
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h2 className="text-h3">Granular Budget Controls</h2>
              <button className="btn-ghost" style={{ fontSize: 12, padding: '8px 14px' }}>
                <span className="material-icons" style={{ fontSize: 16 }}>add</span>
                New Category
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {budgets.map((b) => {
                const pct = Math.min((b.spent / b.total) * 100, 100);
                const over = b.spent > b.total;
                return (
                  <div key={b.cat}>
                    <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3 mb-2">
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--color-surface-container)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span className="material-icons" style={{ fontSize: 16, color: 'var(--color-secondary)' }}>{b.icon}</span>
                      </div>
                      <span style={{ fontWeight: 600, fontSize: 14, flex: 1 }}>{b.cat}</span>
                      <span className={`chip ${over ? 'chip-coral' : pct > 85 ? 'chip-amber' : 'chip-emerald'}`}>
                        {over ? 'Over budget' : pct > 85 ? 'Near limit' : 'On track'}
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: over ? 'var(--color-coral)' : 'var(--color-on-bg)' }}>
                        ₹{b.spent} <span style={{ color: 'var(--color-outline)', fontWeight: 400 }}>/ ₹{b.total}</span>
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${pct}%`, background: b.color }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 lg:w-2/5 flex flex-col gap-5">
          {/* Sensitivity Engines */}
          <div className="card">
            <h2 className="text-h3" style={{ marginBottom: 6 }}>Sensitivity Engines</h2>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', marginBottom: 20 }}>Configure AI detection thresholds.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {settings.map((s, i) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--color-surface-container)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-icons" style={{ fontSize: 18, color: 'var(--color-secondary)' }}>{s.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{s.label}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-outline)' }}>{s.desc}</div>
                  </div>
                  {/* Toggle */}
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: 44, height: 24, borderRadius: 99, border: 'none', cursor: 'pointer', flexShrink: 0,
                      background: s.enabled ? 'var(--color-primary)' : 'var(--color-surface-highest)',
                      position: 'relative', transition: 'background 0.2s',
                    }}
                  >
                    <div style={{
                      width: 18, height: 18, borderRadius: '50%', background: '#fff',
                      position: 'absolute', top: 3, transition: 'left 0.2s',
                      left: s.enabled ? 23 : 3,
                      boxShadow: '0 1px 4px rgba(0,0,0,0.18)',
                    }} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Urgency Tiers */}
          <div className="card">
            <h2 className="text-h3" style={{ marginBottom: 6 }}>Urgency Tiers</h2>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', marginBottom: 20 }}>Notification thresholds per category.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="material-icons" style={{ fontSize: 16, color: 'var(--color-amber)' }}>notifications</span>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>Soft Warning</span>
                  </div>
                  <span className="chip chip-amber">{softThreshold}%</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--color-outline)' }}>In-app badge only</div>
              </div>
              <div style={{ height: 1, background: 'var(--color-outline-variant)' }} />
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="material-icons" style={{ fontSize: 16, color: 'var(--color-coral)' }}>campaign</span>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>Critical Alert</span>
                  </div>
                  <span className="chip chip-coral">{criticalThreshold}%</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--color-outline)' }}>Push notification &amp; Email</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
