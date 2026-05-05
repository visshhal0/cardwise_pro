'use client';
import { useState } from 'react';

const portfolio = [
  { name: 'Sapphire Reserve', network: 'Ultimate Rewards', points: 124500, valuePts: 2350000, accrual: 4200, accent: '#3b82f6', pctOfTotal: 46 },
  { name: 'Platinum Card', network: 'Membership Rewards', points: 93200, valuePts: 1400000, accrual: 1500, accent: '#8b5cf6', pctOfTotal: 34 },
  { name: 'Citi Double Cash', network: 'ThankYou Points', points: 65400, valuePts: 500000, accrual: 987, accent: '#10b981', pctOfTotal: 20 },
];

const opportunities = [
  { title: 'Transfer to Airline X', cppValue: '2.1 cpp', badge: 'Best Value', badgeType: 'emerald', description: 'Maximize your Ultimate Rewards with a 30% transfer bonus to Airline X. Ideal for upcoming international travel plans.', icon: 'flight_takeoff', points: 50000, savings: '₹1,050' },
  { title: 'Luxury Hotel Y Stay', cppValue: '1.8 cpp', badge: 'Popular', badgeType: 'amber', description: 'High-value redemption for weekend stays at Hotel Y properties in major cities.', icon: 'hotel', points: 40000, savings: '₹720' },
  { title: 'Amazon Gift Card', cppValue: '1.0 cpp', badge: 'Low Value', badgeType: 'coral', description: 'Cash-equivalent redemption. Consider higher-value transfer partners instead.', icon: 'card_giftcard', points: 25000, savings: '₹250' },
];

const history = [
  { date: 'Oct 12', type: 'Transfer', program: 'United MileagePlus', points: 30000, value: '₹630' },
  { date: 'Sep 28', type: 'Statement Credit', program: 'Chase Sapphire', points: 15000, value: '₹225' },
  { date: 'Sep 14', type: 'Travel Portal', program: 'Amex Travel', points: 20000, value: '₹300' },
];

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState<'opportunities' | 'history'>('opportunities');
  const totalValue = portfolio.reduce((s, c) => s + c.valuePts, 0);

  return (
    <div style={{ maxWidth: 1100 }}>
      <div style={{ marginBottom: 32 }}>
        <h1 className="text-h1" style={{ color: 'var(--color-primary)', marginBottom: 6 }}>Reward Center</h1>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Optimize your points across all connected portfolios.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">
        {portfolio.map((c) => (
          <div key={c.name} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: c.accent, borderRadius: '12px 12px 0 0' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, marginTop: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: c.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-icons" style={{ color: '#fff', fontSize: 18 }}>credit_card</span>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: 'var(--color-outline)' }}>{c.network}</div>
              </div>
            </div>
            <div className="text-label-sm" style={{ color: 'var(--color-outline)', textTransform: 'uppercase', marginBottom: 4 }}>Normalized Value</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-primary)', marginBottom: 12 }}>₹{c.valuePts.toLocaleString()}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div className="text-label-sm" style={{ color: 'var(--color-outline)' }}>Recent Accrual (30d)</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-emerald)' }}>+{c.accrual.toLocaleString()} pts</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="text-label-sm" style={{ color: 'var(--color-outline)' }}>Portfolio share</div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{c.pctOfTotal}%</div>
              </div>
            </div>
            <div className="progress-bar" style={{ marginTop: 12 }}>
              <div className="progress-fill" style={{ width: `${c.pctOfTotal}%`, background: c.accent }} />
            </div>
          </div>
        ))}
      </div>

      <div className="card flex flex-col md:flex-row md:items-center justify-between gap-6 mb-7" style={{ background: 'var(--color-primary)' }}>
        <div>
          <div className="text-label-sm" style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: 6 }}>Total Portfolio Value</div>
          <div style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em' }}>₹{totalValue.toLocaleString()}</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>Across all accounts</div>
        </div>
        <div className="flex gap-4 md:gap-6 justify-between w-full md:w-auto mt-2 md:mt-0">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>283,100</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Total Points</div>
          </div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#10B981' }}>+6,687</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Accrued (30d)</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 4, marginBottom: 20, background: 'var(--color-surface-container)', borderRadius: 'var(--radius)', padding: 4, width: 'fit-content' }}>
        {(['opportunities', 'history'] as const).map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '8px 20px', borderRadius: 'calc(var(--radius) - 2px)', border: 'none', fontFamily: 'inherit', fontSize: 13, fontWeight: 600, cursor: 'pointer', background: activeTab === tab ? '#fff' : 'transparent', color: activeTab === tab ? 'var(--color-primary)' : 'var(--color-outline)', boxShadow: activeTab === tab ? 'var(--shadow-card)' : 'none', transition: 'all 0.15s ease' }}>
            {tab === 'opportunities' ? 'Redemption Opportunities' : 'History Log'}
          </button>
        ))}
      </div>

      {activeTab === 'opportunities' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {opportunities.map((opp) => (
            <div key={opp.title} className="card flex flex-col md:flex-row md:items-center gap-5">
              <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--color-surface-container)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span className="material-icons" style={{ fontSize: 28, color: 'var(--color-primary)' }}>{opp.icon}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{opp.title}</span>
                  <span className={`chip chip-${opp.badgeType}`}>{opp.badge}</span>
                </div>
                <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', maxWidth: 500 }}>{opp.description}</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right shrink-0">
                <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-emerald)', marginBottom: 2 }}>{opp.savings}</div>
                <div className="text-label-sm" style={{ color: 'var(--color-outline)' }}>{opp.points.toLocaleString()} pts • {opp.cppValue}</div>
                <button className="btn-primary w-full md:w-auto" style={{ marginTop: 10, padding: '8px 16px', fontSize: 12 }}>Redeem Now</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card overflow-x-auto">
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr>{['Date', 'Type', 'Program', 'Points Used', 'Value'].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: '0 0 12px', fontSize: 11, fontWeight: 600, color: 'var(--color-outline)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--color-outline-variant)' }}>{h}</th>
              ))}</tr>
            </thead>
            <tbody>
              {history.map((h, i) => (
                <tr key={i} style={{ borderBottom: i < history.length - 1 ? '1px solid var(--color-surface-container)' : 'none' }}>
                  <td style={{ padding: '14px 0', fontSize: 13, color: 'var(--color-outline)' }}>{h.date}</td>
                  <td style={{ padding: '14px 0' }}><span className="chip chip-neutral">{h.type}</span></td>
                  <td style={{ padding: '14px 0', fontSize: 14, fontWeight: 500 }}>{h.program}</td>
                  <td style={{ padding: '14px 0', fontSize: 14, color: 'var(--color-coral)', fontWeight: 600 }}>-{h.points.toLocaleString()} pts</td>
                  <td style={{ padding: '14px 0', fontSize: 14, color: 'var(--color-emerald)', fontWeight: 700 }}>{h.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
