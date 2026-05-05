import Sidebar from '../components/Sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <Sidebar />
      <main
        className="app-main"
        style={{
          flex: 1,
          marginLeft: 240,
          minHeight: '100vh',
          padding: '40px 40px 60px',
          maxWidth: 'calc(100vw - 240px)',
        }}
      >
        {children}
      </main>
    </div>
  );
}
