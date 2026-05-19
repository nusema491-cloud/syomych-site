export default function Studio() {
  return (
    <section className="section studio" id="studio">
      <div className="container">
        <div className="studio__inner">
          <div className="studio__photos" style={{ flex: 1, minWidth: '400px' }}>
            <div className="studio__photo studio__photo--wide">
              <img src="/assets/photos-web/studio-1.jpg" alt="Студия"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
              />
            </div>
            <div className="studio__photo">
              <img src="/assets/photos-web/studio-2.jpg" alt="Свет"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
              />
            </div>
            <div className="studio__photo">
              <img src="/assets/photos-web/studio-3.jpg" alt="Детали"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
              />
            </div>
          </div>

          <div className="studio__info" style={{ flex: 1 }}>
            <div className="section__label">Студия</div>
            <h2 className="section__title">Профессиональный свет. Ничего лишнего.</h2>
            <p className="studio__body">
              Компактная, но полноценная студия в центре Москвы. Два источника
              постоянного света с&nbsp;регулировкой, камера на&nbsp;штативе,
              bluetooth-пульт, белая циклорама. Всё настроено до&nbsp;вашего
              прихода — просто заходи и снимай.
            </p>

            <div className="studio__route">
              <div className="studio__route-title">Маршрут от метро</div>
              <div className="studio__route-steps">
                <div className="studio__route-step">
                  <div className="studio__route-icon">М</div>
                  <span>Метро Лубянка</span>
                </div>
                <div className="studio__route-step">
                  <div className="studio__route-icon">→</div>
                  <span>Выход № 10, по Никольской 3 мин пешком</span>
                </div>
                <div className="studio__route-step">
                  <div className="studio__route-icon">📍</div>
                  <span>Никольская ул., д. 17с2, 2 этаж, каб. 2А</span>
                </div>
                <div className="studio__route-step">
                  <div className="studio__route-icon">🚪</div>
                  <span>Арка сразу после камерной сцены Большого театра — заходи во двор</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="studio__map" style={{ marginTop: '48px' }}>
          <img
            src="/assets/photos-web/map-final.png"
            alt="Карта маршрута"
            style={{
              width: '100%',
              display: 'block',
              borderRadius: '12px',
            }}
          />
        </div>
      </div>
    </section>
  );
}
