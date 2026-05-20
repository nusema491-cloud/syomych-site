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
    <svg className="studio-diagram" viewBox="0 0 560 380" fill="none" style={{ width: '100%', height: 'auto' }}>
      {/* ── BACKDROP FRAME ── */}
      {/* top bar */}
      <line x1="170" y1="30" x2="390" y2="30" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
      {/* end caps */}
      <line x1="170" y1="24" x2="170" y2="36" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
      <line x1="390" y1="24" x2="390" y2="36" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
      {/* left pole */}
      <line x1="170" y1="30" x2="170" y2="248" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
      {/* right pole */}
      <line x1="390" y1="30" x2="390" y2="248" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
      {/* left base */}
      <line x1="155" y1="248" x2="185" y2="248" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <line x1="148" y1="248" x2="162" y2="248" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
      <line x1="185" y1="248" x2="192" y2="248" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
      {/* right base */}
      <line x1="375" y1="248" x2="405" y2="248" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <line x1="368" y1="248" x2="375" y2="248" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
      <line x1="405" y1="248" x2="412" y2="248" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
      {/* backdrop cloth */}
      <rect x="170" y="30" width="220" height="218" fill="rgba(255,255,255,0.03)" />

      {/* ── PERSON (seated on stool) ── */}
      {/* head */}
      <circle cx="280" cy="88" r="22" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" />
      {/* neck */}
      <line x1="272" y1="109" x2="270" y2="122" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
      <line x1="288" y1="109" x2="290" y2="122" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
      {/* shoulders */}
      <path d="M248 124 Q260 119 280 118 Q300 119 312 124" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
      {/* torso */}
      <path d="M252 124 L256 178 L304 178 L308 124" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.8" />
      {/* left arm — upper */}
      <line x1="252" y1="126" x2="232" y2="158" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
      {/* left arm — forearm resting on thigh */}
      <line x1="232" y1="158" x2="248" y2="178" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
      {/* right arm — upper */}
      <line x1="308" y1="126" x2="328" y2="158" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
      {/* right arm — forearm resting on thigh */}
      <line x1="328" y1="158" x2="312" y2="178" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
      {/* left thigh (seated, going forward) */}
      <path d="M258 178 Q248 192 240 200" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
      <path d="M270 178 Q260 192 252 200" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
      {/* right thigh */}
      <path d="M290 178 Q300 192 308 200" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
      <path d="M302 178 Q312 192 320 200" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
      {/* left shin */}
      <line x1="240" y1="200" x2="240" y2="248" stroke="rgba(255,255,255,0.55)" strokeWidth="1.8" />
      <line x1="252" y1="200" x2="252" y2="248" stroke="rgba(255,255,255,0.55)" strokeWidth="1.8" />
      {/* right shin */}
      <line x1="308" y1="200" x2="308" y2="248" stroke="rgba(255,255,255,0.55)" strokeWidth="1.8" />
      <line x1="320" y1="200" x2="320" y2="248" stroke="rgba(255,255,255,0.55)" strokeWidth="1.8" />
      {/* left foot */}
      <path d="M240 248 Q244 254 252 252" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" />
      {/* right foot */}
      <path d="M308 248 Q316 254 320 250" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" />
      {/* stool seat */}
      <line x1="246" y1="182" x2="314" y2="182" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
      {/* stool left leg */}
      <line x1="252" y1="182" x2="246" y2="248" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      {/* stool right leg */}
      <line x1="308" y1="182" x2="314" y2="248" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      {/* stool crossbar */}
      <line x1="250" y1="220" x2="310" y2="220" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />

      {/* ── LEFT SOFTBOX ── */}
      {/* tripod pole */}
      <line x1="88" y1="260" x2="105" y2="90" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" />
      {/* tripod base legs */}
      <line x1="68" y1="270" x2="88" y2="260" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <line x1="108" y1="270" x2="88" y2="260" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <line x1="88" y1="270" x2="88" y2="260" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      {/* arm extending to softbox */}
      <line x1="105" y1="90" x2="118" y2="58" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      {/* softbox rectangle (trapezoid) */}
      <polygon points="78,38 138,52 132,88 72,74" fill="rgba(184,107,75,0.1)" stroke="rgba(184,107,75,0.65)" strokeWidth="1.5" />
      {/* softbox inner highlight */}
      <polygon points="88,46 128,56 124,80 84,70" fill="rgba(184,107,75,0.08)" stroke="rgba(184,107,75,0.3)" strokeWidth="0.8" />
      {/* light ray dashed */}
      <line x1="138" y1="65" x2="250" y2="125" stroke="rgba(184,107,75,0.6)" strokeWidth="1.2" strokeDasharray="6 4" />

      {/* ── RIGHT FILL PANEL ── */}
      {/* tripod pole */}
      <line x1="472" y1="260" x2="455" y2="90" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" />
      {/* tripod base legs */}
      <line x1="452" y1="270" x2="472" y2="260" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <line x1="492" y1="270" x2="472" y2="260" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <line x1="472" y1="270" x2="472" y2="260" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      {/* arm to panel */}
      <line x1="455" y1="90" x2="442" y2="58" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      {/* panel body */}
      <rect x="424" y="34" width="36" height="58" rx="3" fill="rgba(184,107,75,0.08)" stroke="rgba(184,107,75,0.6)" strokeWidth="1.5" />
      {/* panel vertical stripes */}
      <line x1="436" y1="36" x2="436" y2="90" stroke="rgba(184,107,75,0.25)" strokeWidth="1" />
      <line x1="448" y1="36" x2="448" y2="90" stroke="rgba(184,107,75,0.25)" strokeWidth="1" />
      {/* light ray dashed */}
      <line x1="424" y1="63" x2="312" y2="130" stroke="rgba(184,107,75,0.6)" strokeWidth="1.2" strokeDasharray="6 4" />

      {/* ── CAMERA + TRIPOD ── */}
      {/* tripod legs */}
      <line x1="280" y1="330" x2="256" y2="290" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" />
      <line x1="280" y1="330" x2="304" y2="290" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" />
      <line x1="280" y1="330" x2="280" y2="290" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" />
      {/* camera body */}
      <rect x="260" y="270" width="40" height="24" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
      {/* lens circle */}
      <circle cx="278" cy="282" r="8" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <circle cx="278" cy="282" r="4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      {/* viewfinder bump */}
      <rect x="291" y="271" width="10" height="8" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      {/* camera ray up to person */}
      <line x1="280" y1="270" x2="280" y2="248" stroke="rgba(184,107,75,0.6)" strokeWidth="1.2" strokeDasharray="6 4" />

      {/* ── CIRCLE LABELS ── */}
      {/* LEFT — КЛЮЧЕВОЙ СВЕТ */}
      <circle cx="40" cy="148" r="18" fill="none" stroke="rgba(184,107,75,0.55)" strokeWidth="1.5" />
      {/* sun rays */}
      <circle cx="40" cy="148" r="7" fill="none" stroke="rgba(184,107,75,0.8)" strokeWidth="1.2" />
      <line x1="40" y1="136" x2="40" y2="133" stroke="rgba(184,107,75,0.7)" strokeWidth="1.2" />
      <line x1="40" y1="160" x2="40" y2="163" stroke="rgba(184,107,75,0.7)" strokeWidth="1.2" />
      <line x1="28" y1="148" x2="25" y2="148" stroke="rgba(184,107,75,0.7)" strokeWidth="1.2" />
      <line x1="52" y1="148" x2="55" y2="148" stroke="rgba(184,107,75,0.7)" strokeWidth="1.2" />
      <line x1="32" y1="140" x2="30" y2="138" stroke="rgba(184,107,75,0.7)" strokeWidth="1.2" />
      <line x1="48" y1="156" x2="50" y2="158" stroke="rgba(184,107,75,0.7)" strokeWidth="1.2" />
      <line x1="48" y1="140" x2="50" y2="138" stroke="rgba(184,107,75,0.7)" strokeWidth="1.2" />
      <line x1="32" y1="156" x2="30" y2="158" stroke="rgba(184,107,75,0.7)" strokeWidth="1.2" />
      <text x="40" y="176" fontSize="8" fill="rgba(184,107,75,0.9)" textAnchor="middle" fontWeight="700" letterSpacing="0.05em">КЛЮЧЕВОЙ</text>
      <text x="40" y="186" fontSize="8" fill="rgba(184,107,75,0.9)" textAnchor="middle" fontWeight="700" letterSpacing="0.05em">СВЕТ</text>

      {/* RIGHT — ЗАПОЛНЯЮЩИЙ СВЕТ */}
      <circle cx="520" cy="148" r="18" fill="none" stroke="rgba(184,107,75,0.55)" strokeWidth="1.5" />
      {/* diagonal stripes icon */}
      <line x1="508" y1="140" x2="520" y2="162" stroke="rgba(184,107,75,0.7)" strokeWidth="1.2" />
      <line x1="514" y1="136" x2="528" y2="158" stroke="rgba(184,107,75,0.7)" strokeWidth="1.2" />
      <line x1="506" y1="148" x2="516" y2="165" stroke="rgba(184,107,75,0.5)" strokeWidth="1" />
      <text x="520" y="176" fontSize="8" fill="rgba(184,107,75,0.9)" textAnchor="middle" fontWeight="700" letterSpacing="0.05em">ЗАПОЛН.</text>
      <text x="520" y="186" fontSize="8" fill="rgba(184,107,75,0.9)" textAnchor="middle" fontWeight="700" letterSpacing="0.05em">СВЕТ</text>

      {/* BOTTOM — КАМЕРА */}
      <circle cx="280" cy="355" r="16" fill="none" stroke="rgba(184,107,75,0.55)" strokeWidth="1.5" />
      {/* camera icon */}
      <rect x="270" y="350" width="20" height="13" rx="2" fill="none" stroke="rgba(184,107,75,0.8)" strokeWidth="1.2" />
      <circle cx="280" cy="356" r="4" fill="none" stroke="rgba(184,107,75,0.8)" strokeWidth="1" />
      <path d="M274 350 L276 346 L284 346 L286 350" fill="none" stroke="rgba(184,107,75,0.7)" strokeWidth="1" />
      <text x="280" y="378" fontSize="8" fill="rgba(184,107,75,0.9)" textAnchor="middle" fontWeight="700" letterSpacing="0.06em">КАМЕРА</text>
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
