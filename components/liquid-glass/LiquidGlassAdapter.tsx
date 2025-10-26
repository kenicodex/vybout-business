import React, { ReactNode } from 'react'
import './liquid-glass.css'
const LiquidGlassAdapter = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="liquid-glass">
                {children}
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <defs>
                    <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
                        <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
                        <feDisplacementMap in="SourceGraphic" in2="blurred" scale="77" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default LiquidGlassAdapter
