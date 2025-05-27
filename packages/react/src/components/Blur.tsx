'use client'

import React, { FC } from 'react'

type BlurProps = {
  position?: 'top' | 'bottom' | 'both'
  size?: number
}

const blurLevels = [1, 2, 3, 6, 12] as const

const positions = {
  top: {
    class: 'top-0',
    gradient: 'gradient-mask-b-0',
  },
  bottom: {
    class: 'bottom-0',
    gradient: 'gradient-mask-t-0',
  },
}

export const Blur: FC<BlurProps> = ({
  position = 'top',
  size = 75,
}) => {
  return (
    <>
      {(['top', 'bottom'] as const).map((pos) => {
        if (position !== pos && position !== 'both') return null

        return (
          <div
            key={pos}
            className={`fixed w-full ${positions[pos].class}`}
            style={{ height: `${size}px` }}
          >
            {blurLevels.map((blur) => (
              <div
                key={blur}
                className={`absolute inset-0 ${positions[pos].gradient} blur-[${blur}px]`}
                style={{
                  WebkitBackdropFilter: `blur(${blur}px)`,
                  backdropFilter: `blur(${blur}px)`,
                }}
              />
            ))}
          </div>
        )
      })}
    </>
  )
}
