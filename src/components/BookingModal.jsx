import { useState, useEffect } from 'react';
import { CloseIcon, CheckIcon, Button, ArrowRight } from './atoms.jsx';

const DURATIONS = [
  { id: 30, label: '30 мин', price: '1 500 ₽' },
  { id: 60, label: '60 мин', price: '2 500 ₽' },
  { id: 90, label: '90 мин', price: '3 500 ₽' },
];

const TIMES = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'];
const UNAVAILABLE = new Set(['12:00','15:00','21:00']);

const MONTH_NAMES = [
  'Январь','Февраль','Март','Апрель','Май','Июнь',
  'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',
];
const WEEKDAYS = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

function Calendar({ selectedDate, onSelect }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstDay = new Date(viewYear, viewMonth, 1);
  const lastDay = new Date(viewYear, viewMonth + 1, 0);
  const startDow = (firstDay.getDay() + 6) % 7; // Mon=0
  const daysInMonth = lastDay.getDate();
  const blanks = Array.from({ length: startDow });

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  return (
    <div className="booking-calendar">
      <div className="booking-calendar__header">
        <button className="booking-calendar__nav" onClick={prevMonth}>‹</button>
        <span className="booking-calendar__month">{MONTH_NAMES[viewMonth]} {viewYear}</span>
        <button className="booking-calendar__nav" onClick={nextMonth}>›</button>
      </div>
      <div className="booking-calendar__weekdays">
        {WEEKDAYS.map(d => <span key={d}>{d}</span>)}
      </div>
      <div className="booking-calendar__days">
        {blanks.map((_, i) => <div key={`b${i}`} className="cal-day empty" />)}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => {
          const date = new Date(viewYear, viewMonth, d);
          const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
          const isToday = date.toDateString() === today.toDateString();
          const isSel = selectedDate && date.toDateString() === selectedDate.toDateString();
          return (
            <button
              key={d}
              className={[
                'cal-day',
                isPast ? 'past' : '',
                isToday ? 'today' : '',
                isSel ? 'selected' : '',
              ].filter(Boolean).join(' ')}
              onClick={() => !isPast && onSelect(new Date(viewYear, viewMonth, d))}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function formatDate(date) {
  if (!date) return '—';
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BookingModal({ open, initialTier, onClose }) {
  const [step, setStep] = useState(1);
  const [duration, setDuration] = useState(initialTier || 60);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (open) {
      setStep(1);
      setDuration(initialTier || 60);
      setDate(null);
      setTime(null);
      setName(''); setPhone(''); setEmail('');
    }
  }, [open, initialTier]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const canNext1 = date && time;
  const canNext2 = name.trim() && phone.trim() && email.trim();
  const tier = DURATIONS.find(d => d.id === duration);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Бронирование">
        <div className="modal__header">
          <span className="modal__title">
            {step === 3 ? 'Готово!' : `Бронирование — шаг ${step} из 2`}
          </span>
          <button className="modal__close" onClick={onClose} aria-label="Закрыть">
            <CloseIcon />
          </button>
        </div>

        {step < 3 && (
          <div className="modal__body" style={{ paddingBottom: 0 }}>
            <div className="modal__steps">
              <div className={`modal__step-dot${step >= 1 ? ' done' : ''}`} />
              <div className={`modal__step-dot${step >= 2 ? ' done' : ''}`} />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="modal__body">
            <div className="modal__field">
              <label className="modal__label">Длительность</label>
              <div className="duration-chips" style={{ flexWrap: 'wrap' }}>
                {DURATIONS.map(d => (
                  <button
                    key={d.id}
                    className={`chip${duration === d.id ? ' active' : ''}`}
                    onClick={() => setDuration(d.id)}
                  >
                    {d.label} — {d.price}
                  </button>
                ))}
              </div>
            </div>

            <div className="modal__field">
              <label className="modal__label">Выберите дату</label>
              <Calendar selectedDate={date} onSelect={setDate} />
            </div>

            <div className="modal__field">
              <label className="modal__label">Выберите время</label>
              <div className="time-slots">
                {TIMES.map(t => (
                  <button
                    key={t}
                    className={[
                      'time-slot',
                      time === t ? 'active' : '',
                      UNAVAILABLE.has(t) ? 'unavailable' : '',
                    ].filter(Boolean).join(' ')}
                    onClick={() => !UNAVAILABLE.has(t) && setTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="modal__footer">
              <Button variant="ghost" onClick={onClose}>Отмена</Button>
              <Button variant="primary" onClick={() => setStep(2)} className={!canNext1 ? '' : ''} >
                Далее <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="modal__body">
            <div className="modal__summary">
              <div className="modal__summary-row">
                <span className="modal__summary-label">Дата</span>
                <span className="modal__summary-value">{formatDate(date)}</span>
              </div>
              <div className="modal__summary-row">
                <span className="modal__summary-label">Время</span>
                <span className="modal__summary-value">{time}</span>
              </div>
              <div className="modal__summary-row">
                <span className="modal__summary-label">Длительность</span>
                <span className="modal__summary-value">{tier?.label}</span>
              </div>
              <div className="modal__summary-row">
                <span className="modal__summary-label">Стоимость</span>
                <span className="modal__summary-value">{tier?.price}</span>
              </div>
            </div>

            <div className="modal__field">
              <label className="modal__label" htmlFor="bk-name">Ваше имя</label>
              <input id="bk-name" className="modal__input" placeholder="Иван Иванов"
                value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="modal__field">
              <label className="modal__label" htmlFor="bk-phone">Телефон</label>
              <input id="bk-phone" className="modal__input" placeholder="+7 900 000-00-00" type="tel"
                value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <div className="modal__field">
              <label className="modal__label" htmlFor="bk-email">Email</label>
              <input id="bk-email" className="modal__input" placeholder="you@example.com" type="email"
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="modal__footer">
              <Button variant="ghost" onClick={() => setStep(1)}>Назад</Button>
              <Button variant="primary" onClick={() => canNext2 && setStep(3)}>
                Подтвердить <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="modal__success">
            <div className="modal__success-icon">
              <CheckIcon size={32} />
            </div>
            <div className="modal__success-title">Бронирование подтверждено!</div>
            <p className="modal__success-desc">
              Мы отправили детали на {email}. Ждём вас {formatDate(date)} в {time}.
            </p>
            <Button variant="primary" onClick={onClose}>
              Отлично!
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
