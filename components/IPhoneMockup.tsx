'use client'

import { ReactNode } from 'react'

interface IPhoneMockupProps {
  children: ReactNode
  className?: string
}

export default function IPhoneMockup({ children, className = '' }: IPhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* iPhone Frame */}
      <div
        className="relative bg-[#1a1a1a] rounded-[2.8rem] p-2.5"
        style={{
          boxShadow: `
            inset 0 0 0 1px rgba(255,255,255,0.08),
            0 30px 60px -15px rgba(0,0,0,0.5),
            0 50px 100px -30px rgba(0,0,0,0.4)
          `,
        }}
      >
        {/* Side buttons - left */}
        <div className="absolute left-0 top-24 w-0.5 h-6 bg-[#2a2a2a] rounded-l -translate-x-px" />
        <div className="absolute left-0 top-36 w-0.5 h-10 bg-[#2a2a2a] rounded-l -translate-x-px" />
        <div className="absolute left-0 top-52 w-0.5 h-10 bg-[#2a2a2a] rounded-l -translate-x-px" />

        {/* Side button - right */}
        <div className="absolute right-0 top-32 w-0.5 h-14 bg-[#2a2a2a] rounded-r translate-x-px" />

        {/* Screen */}
        <div className="relative bg-black rounded-[2.3rem] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20">
            <div className="w-24 h-7 bg-black rounded-full" />
          </div>

          {/* Screen content */}
          <div className="aspect-[9/19.5] w-full">
            {children}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/25 rounded-full" />
        </div>
      </div>
    </div>
  )
}
