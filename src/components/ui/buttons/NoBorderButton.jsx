import React from 'react';
export function NoBorderButton({
  children,
  ariaLabel,
  style,
  className,
  onClick,
}) {
  return (
    <button
      className={`me-btn-reset ${className}`}
      style={style}
      aria-label={ariaLabel}
      type="button"
      onClick={onClick}>
      {children}
    </button>
  );
}
