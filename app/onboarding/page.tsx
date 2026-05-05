import Link from 'next/link';

const features = [
  { icon: 'insights', title: 'Smart Insights', desc: 'Real-time analysis of your spending vectors across all accounts.' },
  { icon: 'payments', title: 'Rewards Optimizer', desc: 'Automated strategies to maximize your return on every purchase.' },
  { icon: 'lock', title: 'Bank-Level Security', desc: '256-bit encryption protecting your aggregated financial data.' },
];

export default function OnboardingWelcomePage() {
  return (
    <div className="flex min-h-screen bg-[var(--color-bg)] items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-[960px] grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[20px] overflow-hidden shadow-[var(--shadow-popover)]">
        {/* Left — dark panel */}
        <div className="bg-[var(--color-primary)] p-8 md:p-14 flex flex-col justify-between hidden md:flex">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 48 }}>
            <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.12)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-icons" style={{ color: '#fff', fontSize: 20 }}>credit_card</span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', lineHeight: 1.2 }}>Card Notify</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>WEALTH MANAGEMENT</div>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: 38, fontWeight: 700, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 16 }}>
              Maximize<br />Every Point.
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 40 }}>
              Connect your accounts to unlock personalized redemption strategies and smart budget alerts.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {features.map((f) => (
                <div key={f.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-icons" style={{ fontSize: 18, color: '#10B981' }}>{f.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{f.title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 48, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © 2024 Card Notify. All rights reserved.
          </div>
        </div>

        {/* Right — form panel */}
        <div className="bg-white p-6 md:p-14 flex flex-col justify-center">
          <div style={{ marginBottom: 40 }}>
            <div className="chip chip-emerald" style={{ marginBottom: 16 }}>Step 1 of 4</div>
            <h2 className="text-h2" style={{ marginBottom: 8 }}>Welcome aboard</h2>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Create your account to get started.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-outline)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Full Name</label>
              <input className="input-field" placeholder="Enter your name" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-outline)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Email Address</label>
              <input className="input-field" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-outline)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Password</label>
              <input className="input-field" type="password" placeholder="Create a strong password" />
            </div>
          </div>
          <Link href="/onboarding/provider" className="btn-primary" style={{ justifyContent: 'center', marginBottom: 20 }}>
            Create Account
            <span className="material-icons" style={{ fontSize: 18 }}>arrow_forward</span>
          </Link>
          <p style={{ fontSize: 12, color: 'var(--color-outline)', textAlign: 'center', lineHeight: 1.6 }}>
            By continuing, you agree to our{' '}
            <span style={{ color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer' }}>Terms of Service</span>
            {' '}and{' '}
            <span style={{ color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer' }}>Privacy Policy</span>.
          </p>
          <div style={{ marginTop: 24, padding: 14, background: 'var(--color-surface-low)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="material-icons" style={{ fontSize: 18, color: 'var(--color-emerald)', flexShrink: 0 }}>verified_user</span>
            <span style={{ fontSize: 12, color: 'var(--color-on-surface-variant)' }}>Your data is protected with 256-bit AES encryption.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
