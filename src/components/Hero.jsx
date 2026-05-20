import { RecDot, ArrowRight } from './atoms.jsx';

const HUD = [
  { label: 'ISO', value: '400' },
  { label: 'F', value: '2.8' },
  { label: 'SHUTTER', value: '1/125' },
  { label: 'SHOT', value: '01' },
  { label: 'FOCUS', value: '∞' },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero__bg"
        src="/assets/photos-web/hero-portrait.jpg"
        alt="Фотостудия Съёмыч"
      />
      <div className="hero__scrim" />

      <div className="hero__content container">
        <div className="hero__eyebrow">
          <RecDot /> РЕЖИМ АВТОПОРТРЕТА
        </div>
        <h1 className="hero__title">
          Фотостудия автопортрета в&nbsp;самом сердце столицы
        </h1>
        <p className="hero__subtitle">
          Свет настроен. Камера готова. Пульт у&nbsp;тебя.
        </p>
        <div className="hero__actions">
          <a href="#steps" className="btn btn-ghost">
            Как это работает <ArrowRight size={14} />
          </a>
          <a href="#gallery" className="btn btn-ghost-outline">
            Галерея
          </a>
        </div>
      </div>

      <div className="hero__hud container">
        <div className="hero__hud-params">
          {HUD.map((p) => (
            <div key={p.label} className="hero__hud-param">
              <span className="hero__hud-label">{p.label}</span>
              <span className="hero__hud-value">{p.value}</span>
            </div>
          ))}
        </div>
        <RecDot />
      </div>
    </section>
  );
}
