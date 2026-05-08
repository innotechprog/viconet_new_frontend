import { useId } from 'react'

export default function LogoMark({
  className,
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'light'
}) {
  const id = useId().replace(/:/g, '')
  const isLight = variant === 'light'

  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        width="36"
        height="36"
        rx="10"
        fill={isLight ? 'rgba(255,255,255,0.12)' : `url(#lm-${id})`}
        stroke={isLight ? 'rgba(255,255,255,0.2)' : 'none'}
      />
      {!isLight ? (
        <>
          <circle cx="12" cy="14" r="3" fill="#fff" />
          <circle cx="24" cy="12" r="2.5" fill="#E91E63" />
          <circle cx="20" cy="22" r="2.5" fill="#fff" opacity="0.9" />
          <path
            d="M14.5 15.5c2 2 4 1.5 6.5-.5M22.5 21c-2.5 2-5 2.5-7 1"
            stroke="#E91E63"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <circle cx="12" cy="14" r="3" fill="#fff" />
          <circle cx="24" cy="12" r="2.5" fill="#E91E63" />
          <circle cx="20" cy="22" r="2.5" fill="rgba(255,255,255,0.85)" />
          <path
            d="M14.5 15.5c2 2 4 1.5 6.5-.5M22.5 21c-2.5 2-5 2.5-7 1"
            stroke="#E91E63"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </>
      )}
      {!isLight ? (
        <defs>
          <linearGradient id={`lm-${id}`} x1="6" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0A1128" />
            <stop offset="1" stopColor="#060628" />
          </linearGradient>
        </defs>
      ) : null}
    </svg>
  )
}
