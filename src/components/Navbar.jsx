import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, PenTool, Globe, Lightbulb, TrendingDown } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/colonial-development', label: 'Development', icon: <BookOpen size={20} /> },
    { path: '/colonial-exploitation', label: 'Exploitation', icon: <TrendingDown size={20} /> },
    { path: '/diary-entry', label: 'Diary', icon: <PenTool size={20} /> },
    { path: '/if-i-were-in-charge', label: 'In Charge', icon: <Globe size={20} /> },
    { path: '/reflection', label: 'Reflection', icon: <Lightbulb size={20} /> },
  ];

  return (
    <header className="glass-card app-header">
      <div className="container nav-container">
        <Link to="/" className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.25rem', color: 'var(--primary)' }}>
          <span style={{ fontSize: '1.5rem' }}>🌟</span> Holiday HW
        </Link>
        <nav className="nav-links">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                  color: isActive ? 'white' : 'var(--text-dark)',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem'
                }}
              >
                {link.icon}
                <span className="nav-label">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
