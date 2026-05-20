import { useState } from 'react';

/* ── Mini calendar for step 1 ── */
const MAY_DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const SLOTS = [8, 11, 13, 15, 17, 19];
const AVAILABLE = new Set([5, 7, 12, 14, 18, 21, 23, 26, 28]);

function StepBooking() {
  const [duration, setDuration] = useState(60);
  const [selectedDay, setSelectedDay] = useState(14);

  const firstDow = 3; // May 2025 starts Wednesday (0=Mon)
  const blanks = Array.from({ length: firstDow });
  const weekdays = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

  return (
    <div className="step-card__visual" style={{ flexDirection: 'column', gap: 12 }}>
      <div className="duration-chips">
        {[30, 60, 90].map((d) => (
          <button key={d} className={`chip${duration === d ? ' active' : ''}`} onClick={() => setDuration(d)}>
            {d} мин
          </button>
        ))}
      </div>
      <div className="mini-calendar">
        <div className="mini-calendar__header">
          <span>Май 2025</span>
        </div>
        <div className="mini-calendar__grid" style={{ marginBottom: 4 }}>
          {weekdays.map((d) => (
            <div key={d} style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', textAlign: 'center', paddingBottom: 2 }}>{d}</div>
          ))}
        </div>
        <div className="mini-calendar__grid">
          {blanks.map((_, i) => <div key={`b${i}`} />)}
          {MAY_DAYS.map((d) => (
            <button
              key={d}
              className={`mini-cal-day${d === selectedDay ? ' active' : ''}${AVAILABLE.has(d) ? ' has-slot' : ''}`}
              onClick={() => AVAILABLE.has(d) && setSelectedDay(d)}
              style={{ background: 'none', border: 'none', cursor: AVAILABLE.has(d) ? 'pointer' : 'default' }}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
      <div className="time-slider">
        <div className="time-slider__label">
          <span>09:00</span><span>22:00</span>
        </div>
        <div className="time-slider__track">
          <div className="time-slider__fill" />
          <div className="time-slider__thumb" />
        </div>
      </div>
    </div>
  );
}

/* ── Studio equipment list ── */
function StepStudio() {
  const items = [
    { icon: '◉', label: 'Ключевой свет', desc: 'Освещает лицо и создаёт объём' },
    { icon: '◎', label: 'Заполняющий свет', desc: 'Смягчает тени и выравнивает свет' },
    { icon: '⊙', label: 'Камера', desc: 'На штативе, пульт у тебя' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
      {items.map((item) => (
        <div key={item.label} style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          padding: '12px 16px',
          borderRadius: '10px',
          border: '1px solid rgba(207,196,184,0.12)',
          background: 'rgba(255,255,255,0.02)',
          borderLeft: '2px solid #B86B4B',
        }}>
          <span style={{ fontSize: '20px', color: '#B86B4B', lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#F7F4EF', letterSpacing: '0.07em', textTransform: 'uppercase' }}>{item.label}</div>
            <div style={{ fontSize: '12px', color: 'rgba(247,244,239,0.45)', marginTop: '3px', lineHeight: 1.4 }}>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}


/* ── Remote visual ── */
function StepRemote() {
  return (
    <div className="remote-visual">
      <div className="wifi-waves">
        <div className="wifi-wave" />
        <div className="wifi-wave" />
        <div className="wifi-wave" />
      </div>
      <div className="remote-body">
        <div className="remote-btn" />
        <div style={{ display: 'flex', gap: 6 }}>
          <div className="remote-btn-small" />
          <div className="remote-btn-small" />
        </div>
      </div>
    </div>
  );
}

/* ── Result silhouettes ── */
function StepResult() {
  return (
    <div style={{ width: '100%' }}>
      <div className="silhouettes" style={{ justifyContent: 'center' }}>
        <div className="silhouette" />
        <div className="silhouette" />
        <div className="silhouette" />
      </div>
      <div className="result-progress">
        <div className="result-progress__fill" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>
        <span>Обработка</span>
        <span>72%</span>
      </div>
    </div>
  );
}

const STEPS = [
  {
    num: '01',
    title: 'Бронируй время',
    desc: 'Выбери удобный день и слот. Оплата онлайн, подтверждение мгновенно.',
    Visual: StepBooking,
  },
  {
    num: '02',
    title: 'Студия уже настроена',
    desc: 'Свет, камера и фон готовы заранее — тебе остаётся встать в кадр и взять пульт.',
    Visual: StepStudio,
  },
  {
    num: '03',
    title: 'Снимай сам',
    desc: 'Bluetooth-пульт в руке — сам выбираешь момент, сам давишь на кнопку.',
    Visual: StepRemote,
  },
  {
    num: '04',
    title: 'Получи результат',
    desc: 'Лучшие кадры отбираем вместе. Базовая ретушь включена.',
    Visual: StepResult,
  },
];

export default function Steps() {
  return (
    <section className="section steps" id="steps">
      <div className="container">
        <div className="steps__header">
          <div className="section__label">Процесс</div>
          <h2 className="section__title">Как это работает</h2>
          <p className="section__subtitle">
            Четыре шага от бронирования до готовых фотографий.
          </p>
        </div>
        <div className="steps__grid">
          {STEPS.map(({ num, title, desc, Visual }) => (
            <div key={num} className="step-card">
              <div className="step-card__num">Шаг {num}</div>
              <div className="step-card__title">{title}</div>
              <p className="step-card__desc">{desc}</p>
              <div className="step-card__visual">
                <Visual />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
