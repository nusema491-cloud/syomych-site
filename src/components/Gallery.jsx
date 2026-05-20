import { useState, useRef, useEffect } from 'react';

const PHOTOS = [
  { src: '/assets/photos-web/portrait-brunette-bw.jpg', alt: 'Портрет' },
  { src: '/assets/photos-web/zoomer.jpg', alt: 'Портрет' },
  { src: '/assets/photos-web/single-lady-bw.jpg', alt: 'Портрет' },
  { src: '/assets/photos-web/asian-guy-2.jpg', alt: 'Портрет' },
  { src: '/assets/photos-web/girl-portrait-color.jpeg', alt: 'Портрет' },
  { src: '/assets/photos-web/portrait-father-daughter.jpg', alt: 'Портрет' },
  { src: '/assets/photos-web/portrait-group-4.jpg', alt: 'Семья' },
];

const GAP = 16;

function getPerPage() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth <= 500) return 1;
  if (window.innerWidth <= 768) return 2;
  return 3;
}

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [perPage, setPerPage] = useState(getPerPage);
  const [slideWidth, setSlideWidth] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const trackWrapRef = useRef(null);
  const dragStart = useRef(null);

  const maxIndex = PHOTOS.length - perPage;

  // Измеряем реальную ширину слайда после рендера и при ресайзе
  useEffect(() => {
    const measure = () => {
      if (!trackWrapRef.current) return;
      const slide = trackWrapRef.current.querySelector('.gallery__slide');
      if (slide) setSlideWidth(slide.offsetWidth + GAP);
      const newPerPage = getPerPage();
      setPerPage(newPerPage);
      setIndex(i => Math.min(i, PHOTOS.length - newPerPage));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(maxIndex, i + 1));

  const openLightbox = (i) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const lightboxPrev = () => setLightbox(i => Math.max(0, i - 1));
  const lightboxNext = () => setLightbox(i => Math.min(PHOTOS.length - 1, i + 1));

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const onMouseDown = (e) => { dragStart.current = e.clientX; };
  const onMouseUp = (e) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    dragStart.current = null;
  };
  const onTouchStart = (e) => { dragStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    dragStart.current = null;
  };

  return (
    <>
      <section className="section gallery" id="gallery">
        <div className="gallery__header container">
          <div className="section__label">Работы</div>
          <h2 className="section__title">Галерея</h2>
          <p className="section__subtitle">
            Живые кадры из нашей студии — от простого портрета до творческих образов.
          </p>
        </div>

        <div
          ref={trackWrapRef}
          className="gallery__track-wrap"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="gallery__track"
            style={{ transform: slideWidth ? `translateX(-${index * slideWidth}px)` : 'none' }}
          >
            {PHOTOS.map((p, i) => (
              <div
                key={i}
                className="gallery__slide"
                onClick={() => openLightbox(i)}
                style={{ cursor: 'zoom-in' }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  draggable={false}
                  style={p.position ? { objectPosition: p.position } : undefined}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="gallery__controls container">
          <div className="gallery__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`gallery__dot${i === index ? ' active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>
          <div className="gallery__arrows">
            <button className="gallery__arrow" onClick={prev} disabled={index === 0} aria-label="Назад">←</button>
            <button className="gallery__arrow" onClick={next} disabled={index === maxIndex} aria-label="Вперёд">→</button>
          </div>
        </div>
      </section>

      {/* Лайтбокс */}
      {lightbox !== null && (
        <div
          onClick={closeLightbox}
          style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(17,17,17,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <button onClick={closeLightbox} style={{ position: 'absolute', top: '20px', right: '24px', background: 'none', border: 'none', color: '#F7F4EF', fontSize: '32px', cursor: 'pointer', opacity: 0.8 }} aria-label="Закрыть">×</button>
          {lightbox > 0 && (
            <button onClick={(e) => { e.stopPropagation(); lightboxPrev(); }} style={{ position: 'absolute', left: '20px', background: 'none', border: 'none', color: '#F7F4EF', fontSize: '36px', cursor: 'pointer', opacity: 0.8, padding: '12px' }} aria-label="Назад">←</button>
          )}
          <img
            src={PHOTOS[lightbox].src}
            alt={PHOTOS[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 24px 80px rgba(0,0,0,0.6)' }}
          />
          {lightbox < PHOTOS.length - 1 && (
            <button onClick={(e) => { e.stopPropagation(); lightboxNext(); }} style={{ position: 'absolute', right: '20px', background: 'none', border: 'none', color: '#F7F4EF', fontSize: '36px', cursor: 'pointer', opacity: 0.8, padding: '12px' }} aria-label="Вперёд">→</button>
          )}
          <div style={{ position: 'absolute', bottom: '20px', color: '#F7F4EF', opacity: 0.5, fontSize: '14px', letterSpacing: '0.05em' }}>
            {lightbox + 1} / {PHOTOS.length}
          </div>
        </div>
      )}
    </>
  );
}
