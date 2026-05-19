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

/* ── Studio diagram SVG ── */
function StepStudio() {
  return (
    <svg className="studio-diagram" viewBox="0 0 280 160" fill="none">
      {/* Floor */}
      <rect x="10" y="130" width="260" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
      {/* Backdrop */}
      <rect x="30" y="20" width="8" height="114" rx="2" fill="rgba(255,255,255,0.15)" />
      <path d="M38 20 Q100 18 160 22 L160 130 Q100 130 38 130Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      {/* Camera + tripod */}
      <line x1="210" y1="130" x2="200" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="210" y1="130" x2="220" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="210" y1="130" x2="210" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <rect x="200" y="80" width="20" height="14" rx="3" fill="#B86B4B" opacity="0.9" />
      <rect x="218" y="85" width="5" height="4" rx="1" fill="#B86B4B" />
      <circle cx="210" cy="87" r="3" fill="#111111" />
      {/* Softbox left */}
      <line x1="60" y1="10" x2="70" y2="60" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <polygon points="50,8 80,8 75,55 55,55" fill="rgba(184,107,75,0.14)" stroke="rgba(184,107,75,0.45)" strokeWidth="1" />
      {/* Beauty dish right */}
      <line x1="170" y1="15" x2="165" y2="55" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <circle cx="165" cy="42" r="14" fill="rgba(184,107,75,0.1)" stroke="rgba(184,107,75,0.4)" strokeWidth="1" />
      <circle cx="165" cy="42" r="5" fill="rgba(184,107,75,0.35)" />
      {/* Light rays */}
      <line x1="65" y1="55" x2="100" y2="75" stroke="rgba(184,107,75,0.2)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="165" y1="56" x2="130" y2="75" stroke="rgba(184,107,75,0.2)" strokeWidth="1" strokeDasharray="3 3" />
      {/* Subject silhouette */}
      <circle cx="110" cy="68" r="10" fill="rgba(255,255,255,0.18)" />
      <rect x="102" y="78" width="16" height="38" rx="4" fill="rgba(255,255,255,0.12)" />
      {/* Labels */}
      <text x="210" y="76" fontSize="8" fill="rgba(184,107,75,0.8)" textAnchor="middle">КАМЕРА</text>
      <text x="62" y="5" fontSize="8" fill="rgba(184,107,75,0.65)" textAnchor="middle">SOFТ</text>
      <text x="165" y="12" fontSize="8" fill="rgba(184,107,75,0.65)" textAnchor="middle">BEAUTY</text>
    </svg>
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
    title: 'Настрой студию',
    desc: 'Два источника света, камера на штативе, нейтральный задник — всё уже готово.',
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
