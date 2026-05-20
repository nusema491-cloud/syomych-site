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
    <svg className="studio-diagram" viewBox="0 0 320 200" fill="none" style={{ width: '100%', height: 'auto' }}>
      {/* Backdrop frame — top bar */}
      <line x1="80" y1="18" x2="240" y2="18" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      {/* Backdrop frame — left pole */}
      <line x1="80" y1="18" x2="80" y2="148" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      {/* Backdrop frame — right pole */}
      <line x1="240" y1="18" x2="240" y2="148" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      {/* Backdrop fill */}
      <rect x="80" y="18" width="160" height="130" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      {/* Left stand base */}
      <line x1="68" y1="148" x2="80" y2="148" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <line x1="92" y1="148" x2="80" y2="148" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      {/* Right stand base */}
      <line x1="228" y1="148" x2="240" y2="148" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <line x1="252" y1="148" x2="240" y2="148" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />

      {/* Person — head */}
      <circle cx="160" cy="68" r="14" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      {/* Person — body */}
      <path d="M145 82 Q145 120 155 125 L165 125 Q175 120 175 82 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      {/* Person — arms */}
      <line x1="145" y1="92" x2="133" y2="110" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <line x1="175" y1="92" x2="187" y2="110" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      {/* Person — legs */}
      <line x1="155" y1="125" x2="150" y2="148" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <line x1="165" y1="125" x2="170" y2="148" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      {/* Stool */}
      <line x1="148" y1="148" x2="172" y2="148" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <line x1="152" y1="148" x2="148" y2="165" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
      <line x1="168" y1="148" x2="172" y2="165" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />

      {/* LEFT SOFTBOX */}
      {/* stand */}
      <line x1="38" y1="165" x2="48" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="28" y1="165" x2="38" y2="165" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
      <line x1="48" y1="165" x2="38" y2="165" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
      {/* softbox shape */}
      <polygon points="30,30 66,38 62,62 26,54" fill="rgba(184,107,75,0.12)" stroke="rgba(184,107,75,0.55)" strokeWidth="1.2" />
      {/* dashed ray to person */}
      <line x1="66" y1="50" x2="147" y2="80" stroke="rgba(184,107,75,0.45)" strokeWidth="1" strokeDasharray="4 3" />

      {/* RIGHT FILL PANEL */}
      {/* stand */}
      <line x1="282" y1="165" x2="272" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="272" y1="165" x2="282" y2="165" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
      <line x1="292" y1="165" x2="282" y2="165" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
      {/* panel shape */}
      <rect x="260" y="32" width="24" height="38" rx="3" fill="rgba(184,107,75,0.08)" stroke="rgba(184,107,75,0.5)" strokeWidth="1.2" />
      <line x1="268" y1="32" x2="268" y2="70" stroke="rgba(184,107,75,0.2)" strokeWidth="0.8" />
      <line x1="276" y1="32" x2="276" y2="70" stroke="rgba(184,107,75,0.2)" strokeWidth="0.8" />
      {/* dashed ray to person */}
      <line x1="260" y1="51" x2="173" y2="80" stroke="rgba(184,107,75,0.45)" strokeWidth="1" strokeDasharray="4 3" />

      {/* CAMERA + tripod */}
      <line x1="160" y1="185" x2="148" y2="168" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="160" y1="185" x2="172" y2="168" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="160" y1="185" x2="160" y2="168" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <rect x="150" y="156" width="20" height="13" rx="2.5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <circle cx="160" cy="162" r="4" fill="none" stroke="rgba(184,107,75,0.8)" strokeWidth="1.2" />
      <rect x="168" y="159" width="5" height="5" rx="1" fill="rgba(255,255,255,0.2)" />
      {/* dashed ray from camera up */}
      <line x1="160" y1="156" x2="160" y2="128" stroke="rgba(184,107,75,0.45)" strokeWidth="1" strokeDasharray="4 3" />

      {/* LEFT label — КЛЮЧЕВОЙ СВЕТ */}
      <circle cx="14" cy="92" r="10" fill="none" stroke="rgba(184,107,75,0.5)" strokeWidth="1" />
      <text x="14" y="96" fontSize="9" fill="rgba(184,107,75,0.9)" textAnchor="middle">☀</text>
      <text x="14" y="108" fontSize="6.5" fill="rgba(184,107,75,0.9)" textAnchor="middle" fontWeight="600" letterSpacing="0.04em">КЛЮЧЕВОЙ</text>
      <text x="14" y="116" fontSize="6.5" fill="rgba(184,107,75,0.9)" textAnchor="middle" fontWeight="600" letterSpacing="0.04em">СВЕТ</text>

      {/* RIGHT label — ЗАПОЛНЯЮЩИЙ СВЕТ */}
      <circle cx="306" cy="92" r="10" fill="none" stroke="rgba(184,107,75,0.5)" strokeWidth="1" />
      <line x1="300" y1="86" x2="312" y2="98" stroke="rgba(184,107,75,0.7)" strokeWidth="1" />
      <line x1="300" y1="92" x2="312" y2="92" stroke="rgba(184,107,75,0.7)" strokeWidth="1" />
      <line x1="300" y1="98" x2="312" y2="86" stroke="rgba(184,107,75,0.7)" strokeWidth="1" />
      <text x="306" y="108" fontSize="6.5" fill="rgba(184,107,75,0.9)" textAnchor="middle" fontWeight="600" letterSpacing="0.04em">ЗАПОЛН.</text>
      <text x="306" y="116" fontSize="6.5" fill="rgba(184,107,75,0.9)" textAnchor="middle" fontWeight="600" letterSpacing="0.04em">СВЕТ</text>

      {/* BOTTOM label — КАМЕРА */}
      <text x="160" y="197" fontSize="6.5" fill="rgba(184,107,75,0.9)" textAnchor="middle" fontWeight="600" letterSpacing="0.06em">КАМЕРА</text>
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
