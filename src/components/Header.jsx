import { useState, useEffect } from 'react';
import { Logo, Button, ArrowRight } from './atoms.jsx';

const NAV = [
  { label: 'Как это работает', href: '#steps' },
  { label: 'Форматы', href: '#formats' },
  { label: 'Студия', href: '#studio' },
  { label: 'Цены', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const YCLIENTS = 'https://n2215215.yclients.com/company/1927410/personal/menu?o=';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Закрывать меню при изменении размера окна до десктопа
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Блокировать скролл когда меню открыто
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <a className="header__logo" href="#top" onClick={close}>
          <Logo dark={false} height={44} />
        </a>
        <nav className="header__nav">
          {NAV.map((n) => (
            <a key={n.label} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <div className="header__right">
          <a href={YCLIENTS} target="_blank" rel="noopener noreferrer" className="header__book-btn">
            <Button variant="primary" size="sm">
              Забронировать <ArrowRight size={14} />
            </Button>
          </a>
          <button
            className={`burger${menuOpen ? ' burger--open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Меню"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Мобильное меню */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} onClick={close}>
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={YCLIENTS}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu__cta"
          onClick={close}
        >
          <Button variant="primary">
            Забронировать <ArrowRight size={16} />
          </Button>
        </a>
      </div>

      {/* Затемнение фона */}
      {menuOpen && (
        <div className="mobile-menu__backdrop" onClick={close} />
      )}
    </>
  );
}
