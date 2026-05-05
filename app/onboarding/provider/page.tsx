'use client';
import { useState } from 'react';
import Link from 'next/link';

const providers = [
  { id: 'hdfc', name: 'HDFC Bank', desc: 'Regalia, Millennia, Infinia', accent: '#004c8f', icon: 'account_balance' },
  { id: 'sbi', name: 'SBI Card', desc: 'SimplyCLICK, Prime, Elite', accent: '#215da3', icon: 'credit_score' },
  { id: 'icici', name: 'ICICI Bank', desc: 'Amazon Pay, Coral, Sapphiro', accent: '#f15a22', icon: 'payments' },
  { id: 'axis', name: 'Axis Bank', desc: 'Flipkart, Ace, Magnus', accent: '#97144d', icon: 'savings' },
  { id: 'kotak', name: 'Kotak Mahindra', desc: 'Zen, Royale, PVR', accent: '#ed1c24', icon: 'stars' },
  { id: 'indusind', name: 'IndusInd Bank', desc: 'Legend, Pinnacle, Aura', accent: '#872a39', icon: 'explore' },
];

export default function SelectProviderPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filtered = providers.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 640 }}>
        {/* Progress */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, background: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-icons" style={{ color: '#fff', fontSize: 16 }}>credit_card</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-primary)' }}>CardWise Pro</span>
            </div>
            <span className="chip chip-neutral">Step 2 of 4</span>
          </div>
          <div style={{ height: 4, background: 'var(--color-surface-highest)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ width: '50%', height: '100%', background: 'var(--color-primary)', borderRadius: 99 }} />
          </div>
        </div>

        <div className="card">
          <div style={{ marginBottom: 28 }}>
            <h1 className="text-h2" style={{ marginBottom: 8 }}>Select Your Provider</h1>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
              Choose your primary financial institution to securely sync your data and begin analysis.
            </p>
          </div>

          {/* Search */}
          <div style={{ position: 'relative', marginBottom: 20 }}>
            <span className="material-icons" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 18, color: 'var(--color-outline)' }}>search</span>
            <input
              className="input-field"
              placeholder="Search institutions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ paddingLeft: 42 }}
            />
          </div>

          {/* Providers grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
            {filtered.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
                  border: `2px solid ${selected === p.id ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
                  borderRadius: 'var(--radius-md)', background: selected === p.id ? 'rgba(15,23,42,0.04)' : '#fff',
                  cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s ease', fontFamily: 'inherit',
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${p.accent}18`, border: `1px solid ${p.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-icons" style={{ fontSize: 20, color: p.accent }}>{p.icon}</span>
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-on-bg)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--color-outline)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.desc}</div>
                </div>
                {selected === p.id && (
                  <span className="material-icons" style={{ fontSize: 18, color: 'var(--color-primary)', marginLeft: 'auto', flexShrink: 0 }}>check_circle</span>
                )}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <Link href="/onboarding" className="btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>
              <span className="material-icons" style={{ fontSize: 16 }}>arrow_back</span>Back
            </Link>
            <Link
              href={selected ? '/onboarding/connect' : '#'}
              className="btn-primary"
              style={{ flex: 2, justifyContent: 'center', opacity: selected ? 1 : 0.45, pointerEvents: selected ? 'auto' : 'none' }}
            >
              Continue
              <span className="material-icons" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
