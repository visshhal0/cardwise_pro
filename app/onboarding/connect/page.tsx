'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ConnectPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  
  const [accountNumber, setAccountNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConnect = () => {
    setError('');
    if (!accountNumber || !cardNumber) {
      setError('Please enter both Account Number and Card Number.');
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      router.push('/onboarding/success');
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-[var(--color-bg)] items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-[540px]">
        {/* Progress */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, background: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-icons" style={{ color: '#fff', fontSize: 16 }}>credit_card</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-primary)' }}>Card Notify</span>
            </div>
            <span className="chip chip-neutral">Step 3 of 4</span>
          </div>
          <div style={{ height: 4, background: 'var(--color-surface-highest)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ width: '75%', height: '100%', background: 'var(--color-primary)', borderRadius: 99 }} />
          </div>
        </div>

        <div className="card">
          {/* Bank header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: 'var(--color-surface-low)', borderRadius: 'var(--radius-md)', marginBottom: 28 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: '#004c8f18', border: '1px solid #004c8f30', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-icons" style={{ fontSize: 22, color: '#004c8f' }}>account_balance</span>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>Connect HDFC Bank</div>
              <div style={{ fontSize: 12, color: 'var(--color-outline)' }}>Secure, read-only connection</div>
            </div>
            <span className="chip chip-emerald" style={{ marginLeft: 'auto' }}>
              <span className="material-icons" style={{ fontSize: 12 }}>lock</span>Encrypted
            </span>
          </div>

          <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', marginBottom: 24 }}>
            Enter your details below to establish a secure, read-only connection. Your credentials are never stored on our servers.
            <br/><br/>
            <span style={{ fontSize: 12, opacity: 0.8 }}>* For demo: you can enter any dummy numbers.</span>
          </p>

          {error && (
            <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '12px 16px', borderRadius: 'var(--radius-md)', marginBottom: 24, fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="material-icons" style={{ fontSize: 18 }}>error_outline</span>
              {error}
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-outline)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Account Number</label>
              <input 
                className="input-field" 
                placeholder="Enter your account number" 
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-outline)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Credit or Debit Card Number</label>
              <input 
                className="input-field" 
                type="text"
                placeholder="Enter 16-digit card number" 
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && agreed) handleConnect();
                }}
              />
            </div>
          </div>

          {/* Security note */}
          <div style={{ background: 'var(--color-emerald-soft)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 'var(--radius-md)', padding: '14px 16px', marginBottom: 20, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span className="material-icons" style={{ fontSize: 20, color: 'var(--color-emerald)', flexShrink: 0, marginTop: 1 }}>verified_user</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#065f46', marginBottom: 2 }}>256-bit Bank-Grade Encryption</div>
              <div style={{ fontSize: 12, color: '#065f46', opacity: 0.8, lineHeight: 1.5 }}>
                Your connection is fully read-only. We can never initiate transactions or modify your account. Data privacy is guaranteed.
              </div>
            </div>
          </div>

          {/* Consent checkbox */}
          <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer', marginBottom: 24 }}>
            <div
              onClick={() => setAgreed((v) => !v)}
              style={{
                width: 20, height: 20, borderRadius: 4, border: `2px solid ${agreed ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
                background: agreed ? 'var(--color-primary)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, marginTop: 1, cursor: 'pointer', transition: 'all 0.15s',
              }}
            >
              {agreed && <span className="material-icons" style={{ fontSize: 14, color: '#fff' }}>check</span>}
            </div>
            <span style={{ fontSize: 13, color: 'var(--color-on-surface-variant)', lineHeight: 1.5 }}>
              I authorise Card Notify to retrieve my account data in read-only mode under the{' '}
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer' }}>Data Access Agreement</span>.
            </span>
          </label>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/onboarding/provider" className="btn-ghost w-full sm:w-auto flex-1 flex justify-center">
              <span className="material-icons" style={{ fontSize: 16 }}>arrow_back</span>Back
            </Link>
            <button
              onClick={handleConnect}
              disabled={!agreed || loading}
              className="btn-primary w-full sm:w-auto flex-2 flex justify-center"
              style={{ opacity: agreed && !loading ? 1 : 0.45, cursor: agreed && !loading ? 'pointer' : 'not-allowed', border: 'none', outline: 'none' }}
            >
              <span className="material-icons" style={{ fontSize: 18 }}>{loading ? 'hourglass_empty' : 'lock'}</span>
              {loading ? 'Connecting...' : 'Connect Securely'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
