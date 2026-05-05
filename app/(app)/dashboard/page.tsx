'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const cards = [
  { name: 'Chase Sapphire Reserve', network: 'Ultimate Rewards', points: 124500, value: 1868, color: '#0F172A', accent: '#3b82f6' },
  { name: 'Amex Platinum', network: 'Membership Rewards', points: 93200, value: 1398, color: '#1e293b', accent: '#8b5cf6' },
  { name: 'Citi Double Cash', network: 'ThankYou Points', points: 65400, value: 984, color: '#334155', accent: '#10b981' },
];

const recentTx = [
  { merchant: 'Whole Foods Market', category: 'Groceries', amount: -84.32, points: 253, time: '2h ago' },
  { merchant: 'Delta Airlines', category: 'Travel', amount: -412.00, points: 2472, time: '1d ago' },
  { merchant: 'Starbucks', category: 'Dining', amount: -7.45, points: 22, time: '1d ago' },
  { merchant: 'Netflix', category: 'Entertainment', amount: -15.99, points: 48, time: '2d ago' },
  { merchant: 'Trader Joe\'s', category: 'Groceries', amount: -62.18, points: 187, time: '3d ago' },
];

const expiries = [
  { offer: '5% Cashback on Dining', card: 'Chase Sapphire Reserve', urgency: 'critical', timeLeft: '22h 14m' },
  { offer: '₹50 Statement Credit', card: 'Amex Platinum at Saks', urgency: 'warning', timeLeft: '4d 12h' },
  { offer: '3x Points on Hotels', card: 'Citi Double Cash', urgency: 'normal', timeLeft: '12d 6h' },
];

export default function DashboardPage() {
  const [animateValues, setAnimateValues] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimateValues(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ maxWidth: 1200 }}>
      {/* Header */}
      <div style={{ marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="text-h1" style={{ color: 'var(--color-primary)', marginBottom: 6 }}>Overview</h1>
          <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
            Here&apos;s your aggregated financial snapshot for October.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div className="chip chip-emerald">
            <span className="material-icons" style={{ fontSize: 14 }}>trending_up</span>
            +12.4% this month
          </div>
          <button className="btn-ghost" style={{ fontSize: 13 }}>
            <span className="material-icons" style={{ fontSize: 16 }}>add</span>
            Add Card
          </button>
        </div>
      </div>

      {/* Top KPI Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 28 }}>
        {/* Rewards Value */}
        <div className="card" style={{ gridColumn: '1 / 2' }}>
          <div className="text-label-sm" style={{ color: 'var(--color-outline)', marginBottom: 8, textTransform: 'uppercase' }}>
            Total Rewards Value
          </div>
          <div className="text-data" style={{ color: 'var(--color-primary)', marginBottom: 4 }}>
            ₹4,250.00
          </div>
          <div className="text-label-sm" style={{ color: 'var(--color-outline)', marginBottom: 16 }}>
            Aggregated across 3 linked cards
          </div>
          <div style={{ background: 'var(--color-primary)', borderRadius: 'var(--radius)', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="material-icons" style={{ color: '#10B981', fontSize: 18 }}>local_offer</span>
            <div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 2 }}>Top Opportunity</div>
              <div style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>Redeem 50k pts for ₹750 travel credit</div>
            </div>
            <div className="chip chip-amber" style={{ marginLeft: 'auto', whiteSpace: 'nowrap', flexShrink: 0 }}>
              <span className="material-icons" style={{ fontSize: 12 }}>schedule</span>
              3d left
            </div>
          </div>
        </div>

        {/* Budget Tracking */}
        <div className="card" style={{ gridColumn: '2 / 3' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div className="text-label-sm" style={{ color: 'var(--color-outline)', textTransform: 'uppercase' }}>Budget Tracking</div>
            <Link href="/budget" style={{ fontSize: 12, color: 'var(--color-tertiary)', fontWeight: 600, textDecoration: 'none' }}>View all →</Link>
          </div>
          {[
            { cat: 'Groceries', spent: 650, total: 800, pct: 81 },
            { cat: 'Dining Out', spent: 442, total: 300, pct: 100, over: true },
            { cat: 'Entertainment', spent: 290, total: 300, pct: 97 },
          ].map(b => (
            <div key={b.cat} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span className="text-body-md" style={{ fontWeight: 500 }}>{b.cat}</span>
                <span className="text-label-sm" style={{ color: b.over ? 'var(--color-coral)' : 'var(--color-outline)' }}>
                  ₹{b.spent} / ₹{b.total}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: animateValues ? `${Math.min(b.pct, 100)}%` : '0%',
                    background: b.over ? 'var(--color-coral)' : b.pct > 85 ? 'var(--color-amber)' : 'var(--color-emerald)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Spending Insights */}
        <div className="card" style={{ gridColumn: '3 / 4' }}>
          <div className="text-label-sm" style={{ color: 'var(--color-outline)', textTransform: 'uppercase', marginBottom: 16 }}>
            Spending Insights
          </div>
          <div style={{ marginBottom: 14 }}>
            <div className="alert-banner alert-amber" style={{ marginBottom: 12 }}>
              <span className="material-icons" style={{ fontSize: 18, flexShrink: 0 }}>bolt</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>Impulse Detected</div>
                <div style={{ fontSize: 12 }}>Unusual volume at Starbucks. 4 transactions in 48 hours.</div>
              </div>
            </div>
            <div className="alert-banner alert-emerald">
              <span className="material-icons" style={{ fontSize: 18, flexShrink: 0 }}>savings</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>Subscriptions Down</div>
                <div style={{ fontSize: 12 }}>Costs dropped 4% — avoided 2 auto-renewals.</div>
              </div>
            </div>
          </div>
          <Link href="/analytics" className="btn-ghost" style={{ width: '100%', fontSize: 13, justifyContent: 'center' }}>
            View Full Analytics
          </Link>
        </div>
      </div>

      {/* Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr', gap: 20, marginBottom: 28 }}>
        {/* Cards */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h2 className="text-h3">Linked Cards</h2>
            <span className="chip chip-neutral">3 active</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {cards.map((c) => (
              <div
                key={c.name}
                style={{
                  background: c.color,
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  transition: 'transform 0.15s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)')}
              >
                <div style={{ width: 40, height: 40, borderRadius: 8, background: c.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-icons" style={{ color: '#fff', fontSize: 20 }}>credit_card</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{c.network}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{c.points.toLocaleString()} pts</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>≈ ₹{c.value.toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Expiries */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h2 className="text-h3">Expiring Offers</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {expiries.map((e) => (
              <div
                key={e.offer}
                style={{
                  padding: '12px 14px',
                  background: 'var(--color-surface-low)',
                  borderRadius: 'var(--radius)',
                  borderLeft: `3px solid ${e.urgency === 'critical' ? 'var(--color-coral)' : e.urgency === 'warning' ? 'var(--color-amber)' : 'var(--color-emerald)'}`,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-on-bg)', marginBottom: 2 }}>{e.offer}</div>
                <div style={{ fontSize: 12, color: 'var(--color-outline)', marginBottom: 8 }}>{e.card}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span className="material-icons" style={{ fontSize: 14, color: e.urgency === 'critical' ? 'var(--color-coral)' : 'var(--color-outline)' }}>timer</span>
                  <span className="text-label-sm" style={{ color: e.urgency === 'critical' ? 'var(--color-coral)' : 'var(--color-outline)' }}>{e.timeLeft} left</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 className="text-h3">Recent Transactions</h2>
          <span className="text-label-sm" style={{ color: 'var(--color-outline)' }}>Last 7 days</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Merchant', 'Category', 'Amount', 'Points Earned', 'Time'].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: '0 0 12px', fontSize: 11, fontWeight: 600, color: 'var(--color-outline)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--color-outline-variant)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentTx.map((tx, i) => (
              <tr key={i} style={{ borderBottom: i < recentTx.length - 1 ? '1px solid var(--color-surface-container)' : 'none' }}>
                <td style={{ padding: '14px 0', fontSize: 14, fontWeight: 500 }}>{tx.merchant}</td>
                <td style={{ padding: '14px 0' }}><span className="chip chip-neutral">{tx.category}</span></td>
                <td style={{ padding: '14px 0', fontSize: 14, fontWeight: 600, color: 'var(--color-coral)' }}>₹{tx.amount.toFixed(2)}</td>
                <td style={{ padding: '14px 0' }}><span className="chip chip-emerald">+{tx.points} pts</span></td>
                <td style={{ padding: '14px 0', fontSize: 12, color: 'var(--color-outline)' }}>{tx.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
