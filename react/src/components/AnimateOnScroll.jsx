import useScrollAnimation from '../hooks/useScrollAnimation'

export default function AnimateOnScroll({
  children,
  className = '',
  as: Tag = 'div',
  animation = 'animate-fade-up',
  threshold,
  rootMargin,
}) {
  const [ref, visible] = useScrollAnimation({ threshold, rootMargin })

  return (
    <Tag
      ref={ref}
      className={`${className} ${visible ? animation : 'opacity-0'}`}
    >
      {children}
    </Tag>
  )
}
