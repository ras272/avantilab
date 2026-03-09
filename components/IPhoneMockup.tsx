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
      <div className="relative bg-[#1c1c1e] rounded-[3rem] p-3 shadow-2xl">
        {/* Outer border highlight */}
        <div className="absolute inset-0 rounded-[3rem] border border-white/10" />

        {/* Side buttons - left */}
        <div className="absolute left-0 top-28 w-1 h-8 bg-[#2c2c2e] rounded-l-sm -translate-x-0.5" />
        <div className="absolute left-0 top-44 w-1 h-12 bg-[#2c2c2e] rounded-l-sm -translate-x-0.5" />
        <div className="absolute left-0 top-60 w-1 h-12 bg-[#2c2c2e] rounded-l-sm -translate-x-0.5" />

        {/* Side button - right */}
        <div className="absolute right-0 top-36 w-1 h-16 bg-[#2c2c2e] rounded-r-sm translate-x-0.5" />

        {/* Screen */}
        <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
            <div className="w-28 h-8 bg-black rounded-full flex items-center justify-center gap-2">
              {/* Camera */}
              <div className="w-3 h-3 rounded-full bg-[#1c1c1e] ring-1 ring-[#2c2c2e]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0a3d62] m-[3px]" />
              </div>
            </div>
          </div>

          {/* Screen content area */}
          <div className="aspect-[9/19.5] w-full">
            {children}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  )
}
