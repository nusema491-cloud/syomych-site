export function Logo({ dark = false, height = 32 }) {
  return (
    <img
      src={dark ? '/assets/logo-dark.png' : '/assets/logo-light.png'}
      alt="Съёмыч"
      style={{ height }}
    />
  );
}

export function Brackets() {
  return (
    <div className="brackets" aria-hidden>
      <span /><span /><span /><span />
    </div>
  );
}

export function RecDot() {
  return <span className="rec-dot">REC</span>;
}

export function Button({ children, variant = 'primary', size, onClick, type = 'button', className = '' }) {
  const cls = [
    'btn',
    `btn-${variant}`,
    size === 'sm' ? 'btn-sm' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

export function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M3 9l4.5 4.5 7.5-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
