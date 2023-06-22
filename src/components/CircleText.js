import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const CircleText = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
    md:right-8 xs:right-2 md:left-auto md:top-0 md:bottom-auto
    '>
      <div className='w-48 h-auto flex ic jc relative sm:w-28'>
        <CircularText className={'fill-dark animate-spin-slow dark:fill-light'} />

        <Link href='mailto:aabith619@gmail.com' className='flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light
        shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold
        hover:bg-light hover:text-dark
        sm:w-12 sm:h-12 sm:text-[10px]
        '
        >
          Hire Me
        </Link>

      </div>
    </div>
  )
}

export default CircleText
