'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/dashboard' },
  { icon: 'payments', label: 'Rewards', href: '/rewards' },
  { icon: 'account_balance_wallet', label: 'Budget', href: '/budget' },
  { icon: 'leaderboard', label: 'Analytics', href: '/analytics' },
  { icon: 'settings', label: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: 240,
        minHeight: '100vh',
        background: 'var(--color-surface)',
        borderRight: '1px solid var(--color-outline-variant)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 100,
        boxShadow: '1px 0 8px rgba(15,23,42,0.04)',
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: 36, padding: '0 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: 'var(--color-primary)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span className="material-icons" style={{ color: '#fff', fontSize: 20 }}>
              credit_card
            </span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-primary)', lineHeight: 1.2 }}>
              CardWise Pro
            </div>
            <div className="text-label-sm" style={{ color: 'var(--color-outline)' }}>
              Wealth Management
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href} className={`sidebar-link${isActive ? ' active' : ''}`}>
              <span className="material-icons" style={{ fontSize: 20 }}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User avatar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 8px',
          borderRadius: 'var(--radius)',
          marginTop: 16,
          cursor: 'pointer',
          transition: 'background 0.15s',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--color-surface-container)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'transparent')}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: 14,
            flexShrink: 0,
          }}
        >
          V
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-on-bg)', whiteSpace: 'nowrap' }}>
            Enter your name
          </div>
          <div className="text-label-sm" style={{ color: 'var(--color-outline)', whiteSpace: 'nowrap' }}>
            Premium Plan
          </div>
        </div>
      </div>
    </aside>
  );
}
