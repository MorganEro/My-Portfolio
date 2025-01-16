import React from 'react';
export function BorderedButton({ children, ariaLabel, style }) {
  return (
    <button
      className="me-btn-submit"
      aria-label={ariaLabel}
      style={style}
      type="submit">
      {children}
    </button>
  );
}
