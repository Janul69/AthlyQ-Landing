'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'

import { ScrollSmoother } from 'gsap/ScrollSmoother'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

type Props = {
  children: ReactNode
}

export default function SmoothScrollWrapper({ children }: Props) {
  const smootherRef = useRef<ScrollSmoother | null>(null)

  useEffect(() => {
    if (smootherRef.current) {
      return
    }

    smootherRef.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      effects: true,
    })

    return () => {
      smootherRef.current?.kill()
      smootherRef.current = null
    }
  }, [])

  useEffect(() => {
    const anchors = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]:not([href="#"])')
    )

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = event.currentTarget as HTMLAnchorElement
      const hash = anchor.getAttribute('href')
      if (!hash) {
        return
      }

      const target = document.querySelector<HTMLElement>(hash)
      if (!target) {
        return
      }

      event.preventDefault()
      smootherRef.current?.scrollTo(target, true, 'top top')
    }

    anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick))

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick))
    }
  }, [])

  return (
    <div id="smooth-wrapper" className="relative">
      <div id="smooth-content">{children}</div>
    </div>
  )
}