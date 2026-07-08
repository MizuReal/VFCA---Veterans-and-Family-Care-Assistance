export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base = 'inline-block text-center transition-all active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink no-underline'

  const styles = {
    primary:
      'bg-ink text-cream border-[1.5px] border-ink rounded-[20px] px-6 py-1.5 text-base font-[500] tracking-[-0.32px] hover:opacity-90',
    secondary:
      'bg-white text-ink border-[1.5px] border-ink rounded-[20px] px-6 py-1.5 text-base font-[450] leading-[20.8px] hover:bg-cream',
  }

  const cls = `${base} ${styles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  )
}
