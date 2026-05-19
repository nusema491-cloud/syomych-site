import { Link } from 'react-router-dom';
import { Logo } from '../components/atoms.jsx';

export default function Oferta() {
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
            Договор публичной оферты
          </h1>
          <div style={{ fontSize: '14px', color: '#CFC4B8', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span>ИП Преловский Семен Евгеньевич</span>
            <span>20 мая 2026 г.</span>
          </div>
          <div style={{ background: 'rgba(184,107,75,0.07)', border: '1px solid rgba(184,107,75,0.2)', borderRadius: '12px', padding: '20px 24px', marginTop: '28px' }}>
            <p style={{ fontSize: '14px', color: '#E8DED2', margin: 0, lineHeight: 1.65 }}>
              <strong style={{ color: '#F7F4EF' }}>Важно:</strong> настоящий документ является публичной офертой в соответствии со ст. 437 ГК РФ. <strong style={{ color: '#F7F4EF' }}>Факт оплаты бронирования является акцептом</strong> — с этого момента договор считается заключённым.
            </p>
          </div>
        </div>

        <Section num="01" title="Термины и определения">
          <ul style={ulStyle}>
            <Li><strong style={strong}>Исполнитель</strong> — ИП Преловский Семен Евгеньевич, фотостудия «СЪЁМЫЧ».</Li>
            <Li><strong style={strong}>Заказчик</strong> — физическое лицо, оплатившее бронирование.</Li>
            <Li><strong style={strong}>Услуга</strong> — предоставление доступа к оборудованной студии для самостоятельной съёмки в течение оплаченного времени.</Li>
            <Li><strong style={strong}>Сессия</strong> — забронированный и оплаченный временной слот.</Li>
            <Li><strong style={strong}>Площадка</strong> — специально оборудованная фотостудия автопортрета.</Li>
            <Li><strong style={strong}>Предоплата</strong> — сумма, вносимая для брони студии, даты и времени съёмки.</Li>
            <Li><strong style={strong}>Портфолио</strong> — примеры работ Исполнителя на сайте, в соцсетях и иных ресурсах.</Li>
          </ul>
        </Section>

        <Section num="02" title="Предмет договора">
          <P>Исполнитель предоставляет Заказчику доступ к оборудованной фотостудии для самостоятельной съёмки (автопортрет) в течение оплаченного времени.</P>
          <SubTitle>В стоимость включено</SubTitle>
          <ul style={ulStyle}>
            <Li>Студийное пространство с подготовленным освещением.</Li>
            <Li>Камера на штативе и пульт дистанционного управления.</Li>
            <Li>Использование циклорамы.</Li>
            <Li>Реквизит студии, доступный на момент сессии.</Li>
            <Li>Гримёрная зона для подготовки.</Li>
          </ul>
          <SubTitle>В стоимость не включено</SubTitle>
          <ul style={ulStyle}>
            <Li>Услуги профессионального фотографа.</Li>
            <Li>Услуги визажиста, стилиста или ассистента.</Li>
            <Li>Распечатка фотографий.</Li>
          </ul>
        </Section>

        <Section num="03" title="Стоимость и оплата">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', margin: '16px 0' }}>
            {[
              { dur: '30', price: '1 500', popular: false },
              { dur: '60', price: '2 500', popular: true },
              { dur: '90', price: '3 500', popular: false },
            ].map((t) => (
              <div key={t.dur} style={{
                background: t.popular ? 'rgba(184,107,75,0.05)' : '#1A1A1A',
                border: `1px solid ${t.popular ? 'rgba(184,107,75,0.35)' : 'rgba(207,196,184,0.15)'}`,
                borderRadius: '16px', padding: '20px', textAlign: 'center',
              }}>
                {t.popular && <div style={{ display: 'inline-block', fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B86B4B', background: 'rgba(184,107,75,0.12)', borderRadius: '4px', padding: '2px 6px', marginBottom: '8px' }}>Популярный</div>}
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '22px', fontWeight: 700, color: '#F7F4EF', marginBottom: '4px' }}>{t.dur}</div>
                <div style={{ fontSize: '12px', color: '#CFC4B8', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>минут</div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '20px', fontWeight: 600, color: '#B86B4B' }}>{t.price}</div>
                <div style={{ fontSize: '13px', color: '#CFC4B8', marginTop: '2px' }}>рублей</div>
              </div>
            ))}
          </div>
          <Note>Базовый тариф — до 5 человек на одном фоне. Каждый участник свыше 5 — <strong style={strong}>доплата 200 рублей</strong> в момент начала сессии.</Note>
          <P>Оплата 100% в момент бронирования. Исполнитель вправе изменять цены — изменения не распространяются на уже оплаченные бронирования.</P>
        </Section>

        <Section num="04" title="Порядок бронирования">
          <P>Бронирование через YClients или иным способом, предложенным Исполнителем. Подтверждается после поступления 100% оплаты.</P>
          <P>При опоздании время сессии не продлевается. Исполнитель вправе не допустить к услуге лицо, чьи данные не совпадают с данными при бронировании.</P>
        </Section>

        <Section num="05" title="Отмена и перенос">
          <ul style={ulStyle}>
            <Li>Отмена <strong style={strong}>за 72 часа и более</strong> — предоплата возвращается полностью.</Li>
            <Li>Отмена <strong style={strong}>менее чем за 72 часа</strong> — предоплата не возвращается.</Li>
            <Li>Перенос допускается <strong style={strong}>один раз бесплатно</strong> при уведомлении за 24 часа и более. Повторный перенос не допускается.</Li>
            <Li>Форс-мажор (болезнь с подтверждающим документом и иные обстоятельства) — вопрос решается индивидуально.</Li>
            <Li>Отмена по техническим причинам Исполнителя — перенос или полный возврат средств.</Li>
          </ul>
        </Section>

        <Section num="06" title="Передача фотографий">
          <P>Фотографии передаются в исходном виде через облачное хранилище в течение <strong style={strong}>24 часов</strong> после окончания сессии.</P>
          <Note>Ссылка доступна <strong style={strong}>14 календарных дней</strong>. После — файлы могут быть удалены. Исполнитель не несёт ответственности за несвоевременное сохранение файлов.</Note>
          <P>Постобработка, ретушь и цветокоррекция — отдельная услуга, в стоимость не включена.</P>
        </Section>

        <Section num="07" title="Портфолио и публикация фотографий">
          <P>Исполнитель вправе размещать фотографии Заказчика в портфолио при получении устного или письменного (в т.ч. в мессенджерах) разрешения Заказчика.</P>
          <P>Заказчик вправе отозвать разрешение в любой момент, уведомив Исполнителя. После этого фотографии удаляются из открытого доступа в разумные сроки.</P>
        </Section>

        <Section num="08" title="Подарочные сертификаты">
          <P>Сертификат необходимо использовать в течение срока его действия. Неиспользованный по вине Заказчика сертификат возврату не подлежит.</P>
          <SubTitle>Исполнитель вправе отказать в возврате</SubTitle>
          <ul style={ulStyle}>
            <Li>Если сертификат получен по акции, розыгрышу или конкурсу.</Li>
            <Li>Если срок действия истёк или сертификат был использован полностью или частично.</Li>
          </ul>
        </Section>

        <Section num="09" title="Права и обязанности сторон">
          <SubTitle>Исполнитель обязан</SubTitle>
          <ul style={ulStyle}>
            <Li>Предоставить студию в рабочем состоянии в оговорённое время.</Li>
            <Li>Обеспечить наличие освещения, камеры, пульта и реквизита.</Li>
            <Li>Передать фотографии в течение 24 часов после сессии.</Li>
            <Li>Хранить забытые вещи 7 дней (по запросу — до 14 дней). По истечении срока вещи могут быть утилизированы.</Li>
          </ul>
          <SubTitle>Заказчик обязан</SubTitle>
          <ul style={ulStyle}>
            <Li>Прибыть в студию в оплаченное время.</Li>
            <Li>Бережно обращаться с оборудованием и реквизитом.</Li>
            <Li>Возместить ущерб в случае порчи имущества по своей вине.</Li>
            <Li>Обеспечить надлежащее поведение сопровождающих лиц на площадке.</Li>
            <Li>Не приводить животных без согласования с Исполнителем.</Li>
          </ul>
          <SubTitle>Заказчик вправе</SubTitle>
          <ul style={ulStyle}>
            <Li>Использовать фотографии в личных целях без ограничений.</Li>
            <Li>При коммерческом использовании — согласовать условия с Исполнителем.</Li>
          </ul>
        </Section>

        <Section num="10" title="Ответственность">
          <P>Исполнитель не несёт ответственности за результат съёмки — Заказчик управляет процессом самостоятельно. Ответственность Исполнителя ограничена суммой, уплаченной за сессию.</P>
        </Section>

        <Section num="11" title="Претензионный порядок">
          <P>Претензии — на email <A href="mailto:simonstail45@mail.ru">simonstail45@mail.ru</A>. Срок рассмотрения — <strong style={strong}>10 календарных дней</strong>. При признании факта ненадлежащего качества — устранение в течение 3 рабочих дней. При недостижении соглашения — суд по месту нахождения Исполнителя.</P>
        </Section>

        <Section num="12" title="Персональные данные и маркетинг">
          <P>Оформляя бронирование, Заказчик даёт согласие на обработку персональных данных (ФЗ № 152-ФЗ) и на получение рассылок через мессенджеры и иные каналы. Отказаться от рассылок можно в любой момент, уведомив Исполнителя. Подробнее — в <Link to="/privacy" style={linkStyle}>Политике конфиденциальности</Link>.</P>
        </Section>

        <Section num="13" title="Электронная переписка">
          <P>Email и мессенджеры признаются надлежащей формой обмена документами. Адреса электронной почты и аккаунты в мессенджерах приравниваются к аналогу собственноручной подписи Сторон.</P>
        </Section>

        <Section num="14" title="Заключительные положения">
          <P>Договор регулируется законодательством РФ. Исполнитель вправе вносить изменения — актуальная редакция на сайте. Изменения не распространяются на уже оплаченные бронирования.</P>
        </Section>

        <Section num="15" title="Реквизиты Исполнителя">
          <div style={reqBox}>
            <Req label="Наименование" value="ИП Преловский Семен Евгеньевич" />
            <Req label="ИНН" value="381118759001" />
            <Req label="ОГРНИП" value="325508100620140" />
            <Req label="Адрес" value="г. Москва, ул. Никольская 17с2, БЦ «Славянский»" />
            <Req label="Email" value={<A href="mailto:simonstail45@mail.ru">simonstail45@mail.ru</A>} />
            <Req label="Телефон" value={<A href="tel:+79262650816">+7 926 265-08-16</A>} />
            <hr style={{ border: 'none', borderTop: '1px solid rgba(207,196,184,0.15)', margin: '14px 0' }} />
            <Req label="Банк" value="ООО «Банк Точка»" />
            <Req label="БИК" value="044525104" />
            <Req label="Расч. счёт" value="40802810420000803265" />
            <Req label="Корр. счёт" value="30101810745374525104" />
            <Req label="ИНН банка" value="9721194461" />
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

const strong = { color: '#F7F4EF' };
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

function SubTitle({ children }) {
  return <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', fontWeight: 600, color: '#F7F4EF', margin: '20px 0 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{children}</div>;
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
