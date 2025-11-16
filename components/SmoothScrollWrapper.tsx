'use client'

import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';


gsap.registerPlugin(ScrollSmoother)


type Props = {
    children: React.ReactNode;
}

ScrollSmoother.create({
    smooth: 1,
    effects: true,
  });

export default function SmoothScrollWrapper({children}: Props) {
    return (
        <div>
            {children}
        </div>
    )
}