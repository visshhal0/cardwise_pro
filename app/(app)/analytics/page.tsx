'use client';

const barData = [
  { month: 'May', amount: 3200 }, { month: 'Jun', amount: 3800 }, { month: 'Jul', amount: 3100 },
  { month: 'Aug', amount: 4200 }, { month: 'Sep', amount: 3700 }, { month: 'Oct', amount: 4250 },
];
const maxBar = Math.max(...barData.map((d) => d.amount));

const categories = [
  { name: 'Groceries', pct: 28, color: '#10b981', amount: 1190 },
  { name: 'Dining', pct: 22, color: '#f43f5e', amount: 935 },
  { name: 'Travel', pct: 20, color: '#3b82f6', amount: 850 },
  { name: 'Shopping', pct: 18, color: '#8b5cf6', amount: 765 },
  { name: 'Other', pct: 12, color: '#f59e0b', amount: 510 },
];

const impulseHours = [
  { hour: '6am', val: 10 }, { hour: '9am', val: 40 }, { hour: '12pm', val: 65 },
  { hour: '3pm', val: 45 }, { hour: '6pm', val: 80 }, { hour: '9pm', val: 55 },
  { hour: '12am', val: 85 }, { hour: '3am', val: 20 },
];
const maxImpulse = Math.max(...impulseHours.map((h) => h.val));

const peers = [
  { label: 'Dining Out', you: 442, peers: 280, color: '#f43f5e' },
  { label: 'Subscriptions', you: 42, peers: 65, color: '#10b981' },
  { label: 'Travel', you: 850, peers: 600, color: '#3b82f6' },
  { label: 'Groceries', you: 650, peers: 720, color: '#10b981' },
];

export default function AnalyticsPage() {
  return (
    <div style={{ maxWidth: 1100 }}>
      <div style={{ marginBottom: 32 }}>
        <h1 className="text-h1" style={{ color: 'var(--color-primary)', marginBottom: 6 }}>Spending Analytics</h1>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
          Deep dive into your financial habits and peer comparisons.
        </p>
      </div>

      {/* Monthly Summary */}
      <div className="flex flex-col lg:flex-row gap-5 mb-5">
        <div className="card lg:w-2/3">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <div>
              <h2 className="text-h3" style={{ marginBottom: 4 }}>Monthly Summary</h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', maxWidth: 420 }}>
                Your late-night spending is up 15% this month, mostly concentrated at fast-food merchants between 11 PM – 2 AM.
                Subscription costs dropped by 4%.
              </p>
            </div>
            <div className="w-full sm:w-auto text-left sm:text-right shrink-0">
              <div className="text-label-sm" style={{ color: 'var(--color-outline)', textTransform: 'uppercase', marginBottom: 4 }}>Total Spent</div>
              <div className="text-data" style={{ color: 'var(--color-primary)' }}>₹4,250.00</div>
              <div className="chip chip-coral" style={{ marginTop: 6 }}>
                <span className="material-icons" style={{ fontSize: 12 }}>trending_up</span>+15% late-night
              </div>
            </div>
          </div>
          {/* Bar chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 120 }}>
            {barData.map((d) => (
              <div key={d.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ fontSize: 11, color: 'var(--color-outline)', fontWeight: 600 }}>₹{(d.amount / 1000).toFixed(1)}k</div>
                <div style={{ width: '100%', height: Math.round((d.amount / maxBar) * 80), background: d.month === 'Oct' ? 'var(--color-primary)' : 'var(--color-surface-highest)', borderRadius: '4px 4px 0 0', transition: 'height 0.4s ease', minHeight: 8 }} />
                <div style={{ fontSize: 11, color: 'var(--color-outline)', fontWeight: 500 }}>{d.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Spending Breakdown donut-style */}
        <div className="card lg:w-1/3">
          <h2 className="text-h3" style={{ marginBottom: 20 }}>Breakdown</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {categories.map((c) => (
              <div key={c.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: c.color, display: 'inline-block' }} />
                    {c.name}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--color-outline)' }}>₹{c.amount}</span>
                </div>
                <div className="progress-bar" style={{ height: 6 }}>
                  <div className="progress-fill" style={{ width: `${c.pct}%`, background: c.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Impulse Patterns */}
        <div className="card">
          <h2 className="text-h3" style={{ marginBottom: 4 }}>Impulse Patterns</h2>
          <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', marginBottom: 20 }}>Transaction frequency by time of day</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 100 }}>
            {impulseHours.map((h) => {
              const height = Math.round((h.val / maxImpulse) * 80);
              const hot = h.val > 70;
              return (
                <div key={h.hour} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: '100%', height, background: hot ? 'var(--color-coral)' : 'var(--color-surface-highest)', borderRadius: '3px 3px 0 0', minHeight: 4 }} />
                  <div style={{ fontSize: 10, color: 'var(--color-outline)', textAlign: 'center' }}>{h.hour}</div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 16, display: 'flex', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: 'var(--color-coral)', display: 'inline-block' }} />
              <span style={{ fontSize: 11, color: 'var(--color-outline)' }}>High impulse risk</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: 'var(--color-surface-highest)', display: 'inline-block' }} />
              <span style={{ fontSize: 11, color: 'var(--color-outline)' }}>Normal spending</span>
            </div>
          </div>
        </div>

        {/* Peer Benchmark */}
        <div className="card">
          <h2 className="text-h3" style={{ marginBottom: 4 }}>Peer Benchmark</h2>
          <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', marginBottom: 20 }}>vs. users with similar income</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {peers.map((p) => {
              const youMore = p.you > p.peers;
              return (
                <div key={p.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{p.label}</span>
                    <span style={{ fontSize: 12, display: 'flex', alignItems: 'center', gap: 4, color: youMore ? 'var(--color-coral)' : 'var(--color-emerald)', fontWeight: 600 }}>
                      <span className="material-icons" style={{ fontSize: 14 }}>{youMore ? 'arrow_upward' : 'arrow_downward'}</span>
                      You: ₹{p.you} vs ₹{p.peers}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 10, color: 'var(--color-outline)', marginBottom: 3 }}>You</div>
                      <div className="progress-bar" style={{ height: 6 }}>
                        <div className="progress-fill" style={{ width: `${Math.min((p.you / 1000) * 100, 100)}%`, background: youMore ? 'var(--color-coral)' : 'var(--color-emerald)' }} />
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 10, color: 'var(--color-outline)', marginBottom: 3 }}>Peers</div>
                      <div className="progress-bar" style={{ height: 6 }}>
                        <div className="progress-fill" style={{ width: `${Math.min((p.peers / 1000) * 100, 100)}%`, background: 'var(--color-outline-variant)' }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pacing & Projections */}
        <div className="card md:col-span-2">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-5">
            <div>
              <h2 className="text-h3" style={{ marginBottom: 4 }}>Pacing &amp; Projections</h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>At your current pace, you&apos;ll spend ~$5,100 by month end.</p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full lg:w-auto">
              {[{ label: 'Projected', value: '₹5,100', type: 'coral' }, { label: 'Budget', value: '₹4,500', type: 'neutral' }, { label: 'Saved so far', value: '₹248', type: 'emerald' }].map((stat) => (
                <div key={stat.label} className="flex-1 sm:flex-none text-center p-3 rounded-lg bg-[var(--color-surface-low)]">
                  <div style={{ fontSize: 18, fontWeight: 700, color: stat.type === 'coral' ? 'var(--color-coral)' : stat.type === 'emerald' ? 'var(--color-emerald)' : 'var(--color-on-bg)' }}>{stat.value}</div>
                  <div className="text-label-sm" style={{ color: 'var(--color-outline)', marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Simple sparkline-style progress row */}
          <div style={{ position: 'relative', height: 8, background: 'var(--color-surface-high)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '83%', background: 'linear-gradient(90deg, var(--color-emerald) 0%, var(--color-amber) 60%, var(--color-coral) 100%)', borderRadius: 99 }} />
            <div style={{ position: 'absolute', left: '83%', top: -4, bottom: -4, width: 2, background: 'var(--color-primary)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <span className="text-label-sm" style={{ color: 'var(--color-outline)' }}>Oct 1</span>
            <span className="text-label-sm" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Today (83%)</span>
            <span className="text-label-sm" style={{ color: 'var(--color-outline)' }}>Oct 31</span>
          </div>
        </div>
      </div>
    </div>
  );
}
