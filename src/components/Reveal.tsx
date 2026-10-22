import { motion } from 'motion/react'
import type { ReactNode } from 'react'

/* MotionConfig reducedMotion="user" em App.tsx já descarta os deslocamentos
   de quem pede menos movimento, sobrando apenas o fade */
export const ease = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease, delay }}
    >
      {children}
    </Tag>
  )
}

export const overlayMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.22, ease },
}

export const panelMotion = {
  initial: { opacity: 0, y: 18, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 12, scale: 0.98 },
  transition: { duration: 0.32, ease },
}
