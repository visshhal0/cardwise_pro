export default function SettingsPage() {
  return (
    <div style={{ maxWidth: 800 }}>
      <div style={{ marginBottom: 32 }}>
        <h1 className="text-h1" style={{ color: 'var(--color-primary)', marginBottom: 6 }}>Settings</h1>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Manage your account, preferences, and connected cards.</p>
      </div>

      {/* Profile */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2 className="text-h3" style={{ marginBottom: 20 }}>Profile</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 24, flexShrink: 0 }}>V</div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Enter your name</div>
            <div style={{ fontSize: 13, color: 'var(--color-outline)' }}>your.email@example.com</div>
            <span className="chip chip-emerald" style={{ marginTop: 6 }}>Premium Plan</span>
          </div>
          <button className="btn-ghost" style={{ marginLeft: 'auto', fontSize: 13 }}>Edit Profile</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[{ label: 'Full Name', value: 'Enter your name' }, { label: 'Email', value: 'your.email@example.com' }, { label: 'Phone', value: '+91 98765 43210' }, { label: 'Time Zone', value: 'Asia/Kolkata (IST)' }].map((f) => (
            <div key={f.label}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-outline)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{f.label}</label>
              <input className="input-field" defaultValue={f.value} readOnly style={{ cursor: 'default', background: 'var(--color-surface-low)' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Connected Cards */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 className="text-h3">Connected Cards</h2>
          <button className="btn-primary" style={{ fontSize: 13 }}>
            <span className="material-icons" style={{ fontSize: 16 }}>add</span>
            Link New Card
          </button>
        </div>
        {[
          { name: 'Chase Sapphire Reserve', last4: '4821', network: 'Ultimate Rewards', accent: '#3b82f6', synced: '2 min ago' },
          { name: 'Amex Platinum', last4: '3094', network: 'Membership Rewards', accent: '#8b5cf6', synced: '5 min ago' },
          { name: 'Citi Double Cash', last4: '7612', network: 'ThankYou Points', accent: '#10b981', synced: '12 min ago' },
        ].map((c) => (
          <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--color-surface-container)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: c.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="material-icons" style={{ color: '#fff', fontSize: 20 }}>credit_card</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{c.name} •••• {c.last4}</div>
              <div style={{ fontSize: 12, color: 'var(--color-outline)' }}>{c.network} · Synced {c.synced}</div>
            </div>
            <span className="chip chip-emerald">Active</span>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-outline)', display: 'flex', padding: 6 }}>
              <span className="material-icons" style={{ fontSize: 20 }}>more_vert</span>
            </button>
          </div>
        ))}
      </div>

      {/* Notifications */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2 className="text-h3" style={{ marginBottom: 20 }}>Notification Preferences</h2>
        {[
          { label: 'Budget Alerts', desc: 'Get notified when approaching spending limits', enabled: true },
          { label: 'Reward Expiry', desc: 'Reminders before points or offers expire', enabled: true },
          { label: 'Weekly Summary', desc: 'Every Monday morning digest email', enabled: false },
          { label: 'Impulse Alerts', desc: 'Real-time unusual transaction warnings', enabled: true },
        ].map((n, i, arr) => (
          <div key={n.label} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--color-surface-container)' : 'none' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{n.label}</div>
              <div style={{ fontSize: 12, color: 'var(--color-outline)' }}>{n.desc}</div>
            </div>
            <div style={{ width: 44, height: 24, borderRadius: 99, background: n.enabled ? 'var(--color-primary)' : 'var(--color-surface-highest)', position: 'relative', cursor: 'pointer', flexShrink: 0 }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#fff', position: 'absolute', top: 3, left: n.enabled ? 23 : 3, transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.18)' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Danger Zone */}
      <div className="card" style={{ borderLeft: '4px solid var(--color-coral)' }}>
        <h2 className="text-h3" style={{ marginBottom: 8, color: 'var(--color-coral)' }}>Danger Zone</h2>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', marginBottom: 16 }}>These actions are irreversible. Proceed with caution.</p>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn-ghost" style={{ fontSize: 13, borderColor: 'var(--color-coral)', color: 'var(--color-coral)' }}>Disconnect All Cards</button>
          <button style={{ padding: '11px 20px', background: 'var(--color-coral)', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Delete Account</button>
        </div>
      </div>
    </div>
  );
}
