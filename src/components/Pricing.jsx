import { Button, ArrowRight } from './atoms.jsx';

const YCLIENTS = 'https://n2215215.yclients.com/company/1927410/personal/menu?o=';

const TIERS = [
  { id: 30,  label: '30 минут', price: '1 500', active: false },
  { id: 60,  label: '60 минут', price: '2 500', active: true  },
  { id: 90,  label: '90 минут', price: '3 500', active: false },
];

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="pricing__header">
          <div className="section__label">Цены</div>
          <h2 className="section__title">Выбери свой формат</h2>
        </div>
        <div className="pricing__grid">
          {TIERS.map((t) => (
            <div key={t.id} className={`price-card price-card--minimal${t.active ? ' active' : ''}`}>
              {t.active && <div className="price-card__badge-top">Оптимально</div>}
              <div className="price-card__duration">{t.label}</div>
              <div className="price-card__price-wrap">
                <span className="price-card__price">{t.price}</span>
                <span className="price-card__unit">₽</span>
              </div>
              <a href={YCLIENTS} target="_blank" rel="noopener noreferrer">
                <Button
                  variant={t.active ? 'primary' : 'dark'}
                  className="price-card__cta"
                >
                  Выбрать время <ArrowRight size={14} />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
