export default function Formats() {
  return (
    <section className="formats" id="formats">
      <div className="formats__grid">
        <div className="format-card">
          <img
            className="format-card__bg"
            src="/assets/photos-web/mom-and-son.jpeg"
            alt="Цветное фото"
            style={{ objectFit: 'cover', objectPosition: 'center 18%', width: '100%', height: '100%' }}
          />
          <div className="format-card__scrim" />
          <div className="format-card__content">
            <div className="format-card__label">Формат 01</div>
            <h3 className="format-card__title">Цвет</h3>
            <p className="format-card__subtitle">Насыщенные оттенки, живые эмоции</p>
          </div>
        </div>

        <div className="format-card">
          <img
            className="format-card__bg"
            src="/assets/photos-web/portrait-blonde-bw.jpg"
            alt="Чёрно-белое фото"
            style={{ objectFit: 'cover', objectPosition: 'center 40%', width: '100%', height: '100%', filter: 'brightness(1.15)' }}
          />
          <div className="format-card__scrim" />
          <div className="format-card__content">
            <div className="format-card__label">Формат 02</div>
            <h3 className="format-card__title">Ч/Б</h3>
            <p className="format-card__subtitle">Классика, которая не стареет</p>
          </div>
        </div>
      </div>
    </section>
  );
}
