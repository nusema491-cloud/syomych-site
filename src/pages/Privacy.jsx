import { Link } from 'react-router-dom';
import { Logo } from '../components/atoms.jsx';

export default function Privacy() {
  return (
    <div style={{ background: '#111111', minHeight: '100vh', color: '#F7F4EF', fontFamily: "'Inter', sans-serif" }}>

      {/* Шапка */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(17,17,17,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(207,196,184,0.15)',
        padding: '0 40px', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo dark={false} height={44} />
        </Link>
        <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', color: '#CFC4B8', textTransform: 'uppercase' }}>
          Автопортрет
        </span>
      </header>

      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 40px 120px' }}>

        {/* Заголовок */}
        <div style={{ marginBottom: '64px', paddingBottom: '48px', borderBottom: '1px solid rgba(207,196,184,0.15)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', color: '#B86B4B', textTransform: 'uppercase', marginBottom: '20px' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#B86B4B', display: 'inline-block' }} />
            Юридический документ
          </div>
          <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.15, color: '#F7F4EF', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Политика конфиденциальности
          </h1>
          <div style={{ fontSize: '14px', color: '#CFC4B8', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span>ИП Преловский Семен Евгеньевич</span>
            <span>20 мая 2026 г.</span>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <P>Настоящая Политика описывает, какие данные собирает фотостудия «СЪЁМЫЧ», в каких целях они используются и как защищаются. Используя сайт, вы соглашаетесь с условиями настоящей Политики.</P>
        </div>

        <Section num="01" title="Оператор персональных данных">
          <div style={reqBox}>
            <Req label="Наименование" value="ИП Преловский Семен Евгеньевич" />
            <Req label="ИНН" value="381118759001" />
            <Req label="ОГРНИП" value="325508100620140" />
            <Req label="Адрес" value="г. Москва, ул. Никольская 17с2, БЦ «Славянский»" />
            <Req label="Email" value={<A href="mailto:simonstail45@mail.ru">simonstail45@mail.ru</A>} />
            <Req label="Телефон" value={<A href="tel:+79262650816">+7 926 265-08-16</A>} />
          </div>
        </Section>

        <Section num="02" title="Какие данные мы собираем">
          <ul style={ulStyle}>
            <Li>Имя и номер телефона — при бронировании через YClients.</Li>
            <Li>Данные переписки в мессенджерах — при обращении к Исполнителю.</Li>
            <Li>Технические данные браузера и устройства (IP-адрес, тип браузера) — при подключении аналитических сервисов в будущем.</Li>
          </ul>
          <P>Адреса электронной почты через форму на сайте не собираются.</P>
        </Section>

        <Section num="03" title="Цели обработки данных">
          <ul style={ulStyle}>
            <Li>Обработка записей и бронирований через YClients.</Li>
            <Li>Связь с Заказчиком для подтверждения, изменения или отмены бронирования.</Li>
            <Li>Рассылки, уведомления и специальные предложения через мессенджеры и иные каналы — при наличии согласия.</Li>
            <Li>Информирование об изменениях в работе студии и условиях оферты.</Li>
          </ul>
        </Section>

        <Section num="04" title="Передача данных третьим лицам">
          <P>Оператор использует сервис YClients для обработки бронирований. Передача данных осуществляется согласно пользовательскому соглашению YClients.</P>
          <Note>Политика конфиденциальности YClients: <A href="https://www.yclients.com/privacy">yclients.com/privacy</A></Note>
          <P>Данные не передаются иным третьим лицам без согласия Заказчика, кроме случаев, предусмотренных законодательством РФ.</P>
        </Section>

        <Section num="05" title="Маркетинг и рассылки">
          <P>Акцептуя оферту, Заказчик выражает согласие на получение рассылок рекламного и информационного характера через мессенджеры и иные каналы связи.</P>
          <P>Отказаться от рассылок можно в любой момент, направив уведомление на <A href="mailto:simonstail45@mail.ru">simonstail45@mail.ru</A> или через мессенджер.</P>
        </Section>

        <Section num="06" title="Аналитика и Cookie">
          <P>На момент публикации аналитические сервисы (Яндекс.Метрика, Google Analytics) на сайте не подключены. При их подключении Политика будет обновлена.</P>
          <P>Сайт может использовать файлы cookie для обеспечения корректной работы. Типы cookie, которые могут применяться при подключении аналитики:</P>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', margin: '16px 0' }}>
            {[
              { title: 'Необходимые', desc: 'Обеспечивают корректную работу сайта. Не идентифицируют пользователя как личность.' },
              { title: 'Аналитические', desc: 'Сбор обезличенной статистики о посещениях для улучшения сайта.' },
              { title: 'Функциональные', desc: 'Запоминают пользовательские предпочтения между сессиями.' },
              { title: 'Рекламные', desc: 'Используются для показа релевантной рекламы на основе интересов пользователя.' },
            ].map((c) => (
              <div key={c.title} style={{ background: '#1A1A1A', border: '1px solid rgba(207,196,184,0.15)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', fontWeight: 600, color: '#F7F4EF', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.title}</div>
                <p style={{ fontSize: '13px', color: '#CFC4B8', margin: 0, lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <P>Вы можете отключить cookie в настройках браузера. В этом случае часть функций сайта может быть недоступна.</P>
        </Section>

        <Section num="07" title="Правовое основание">
          <P>Обработка персональных данных осуществляется на основании Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и согласия Заказчика, выражаемого при оформлении бронирования.</P>
        </Section>

        <Section num="08" title="Хранение данных">
          <P>Данные хранятся в течение срока, необходимого для исполнения договора, и сроков, установленных законодательством РФ. После истечения срока — удаляются или обезличиваются.</P>
        </Section>

        <Section num="09" title="Ваши права">
          <ul style={ulStyle}>
            <Li>Получить информацию о своих данных, которые мы обрабатываем.</Li>
            <Li>Потребовать исправления неточных данных.</Li>
            <Li>Потребовать удаления данных при отсутствии законных оснований для их хранения.</Li>
            <Li>Отозвать согласие на обработку данных и получение рассылок.</Li>
          </ul>
          <Note>Отзыв согласия на обработку персональных данных влечёт прекращение оказания услуг Оператором.</Note>
          <P>Для реализации прав: <A href="mailto:simonstail45@mail.ru">simonstail45@mail.ru</A></P>
        </Section>

        <Section num="10" title="Безопасность">
          <P>Оператор принимает разумные технические и организационные меры для защиты данных от несанкционированного доступа, утраты или изменения. Передача данных через интернет не может быть гарантированно защищена на 100%.</P>
        </Section>

        <Section num="11" title="Изменения Политики">
          <P>Оператор вправе вносить изменения в настоящую Политику. Актуальная версия всегда на сайте. При существенных изменениях Оператор уведомляет Заказчиков через доступные каналы связи.</P>
        </Section>

        <Section num="12" title="Контакты">
          <div style={reqBox}>
            <Req label="Email" value={<A href="mailto:simonstail45@mail.ru">simonstail45@mail.ru</A>} />
            <Req label="Телефон" value={<A href="tel:+79262650816">+7 926 265-08-16</A>} />
          </div>
        </Section>

      </main>

      <footer style={{ borderTop: '1px solid rgba(207,196,184,0.15)', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', fontWeight: 600, color: '#CFC4B8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>СЪЁМЫЧ — Автопортрет</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link to="/oferta" style={{ fontSize: '13px', color: '#CFC4B8', textDecoration: 'none' }}>Публичная оферта</Link>
          <Link to="/privacy" style={{ fontSize: '13px', color: '#CFC4B8', textDecoration: 'none' }}>Конфиденциальность</Link>
        </div>
      </footer>
    </div>
  );
}

// ── Вспомогательные компоненты ──

const linkStyle = { color: '#B86B4B', textDecoration: 'none', borderBottom: '1px solid rgba(184,107,75,0.3)' };
const ulStyle = { listStyle: 'none', padding: 0, margin: '8px 0' };
const reqBox = { background: '#1A1A1A', border: '1px solid rgba(207,196,184,0.15)', borderRadius: '16px', padding: '24px', marginBottom: '12px' };

function Section({ num, title, children }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: '18px', fontWeight: 600, color: '#F7F4EF', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(207,196,184,0.15)', display: 'flex', alignItems: 'center', gap: '12px', letterSpacing: '-0.01em' }}>
        <span style={{ fontSize: '11px', fontWeight: 500, color: '#B86B4B', letterSpacing: '0.08em', background: 'rgba(184,107,75,0.1)', border: '1px solid rgba(184,107,75,0.2)', borderRadius: '4px', padding: '2px 7px', flexShrink: 0 }}>{num}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}

function P({ children }) {
  return <p style={{ color: '#E8DED2', marginBottom: '12px', fontSize: '15px', lineHeight: 1.75 }}>{children}</p>;
}

function Li({ children }) {
  return (
    <li style={{ color: '#E8DED2', fontSize: '15px', lineHeight: 1.7, padding: '8px 0 8px 20px', position: 'relative', borderBottom: '1px solid rgba(207,196,184,0.06)' }}>
      <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '5px', height: '1px', background: '#B86B4B', display: 'block' }} />
      {children}
    </li>
  );
}

function Note({ children }) {
  return (
    <div style={{ background: 'rgba(184,107,75,0.06)', border: '1px solid rgba(184,107,75,0.15)', borderLeft: '3px solid #B86B4B', borderRadius: '0 12px 12px 0', padding: '16px 20px', margin: '16px 0' }}>
      <p style={{ fontSize: '14px', color: '#E8DED2', margin: 0 }}>{children}</p>
    </div>
  );
}

function A({ href, children }) {
  return <a href={href} style={linkStyle}>{children}</a>;
}

function Req({ label, value }) {
  return (
    <p style={{ marginBottom: '6px', fontSize: '14px', display: 'flex', gap: '8px', color: '#E8DED2' }}>
      <span style={{ color: '#CFC4B8', flexShrink: 0, minWidth: '120px' }}>{label}</span>
      <span style={{ color: '#F7F4EF' }}>{value}</span>
    </p>
  );
}
