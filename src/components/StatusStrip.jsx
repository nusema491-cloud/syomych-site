import { Logo } from './atoms.jsx';

export default function StatusStrip() {
  return (
    <footer className="statusstrip">
      <div className="statusstrip__logo">
        <Logo dark={false} height={28} />
        <span className="statusstrip__name">Съёмыч</span>
      </div>
      <div className="statusstrip__right">
        <span className="statusstrip__copy">© 2025 Фотостудия автопортрета</span>
        <span className="statusstrip__ip">ИП Преловский Семен Евгеньевич</span>
        <div className="statusstrip__legal">
          <a href="/oferta" className="statusstrip__legal-link">Публичная оферта</a>
          <a href="/privacy" className="statusstrip__legal-link">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
