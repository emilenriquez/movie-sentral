'use client'

import React from 'react'
import {GiLightBulb, GiMoon} from 'react-icons/gi'
import {BsSunFill} from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useHydrated } from 'react-hydration-provider'


export default function DarkmodeSwitch({...rest}) {
  const { systemTheme, theme, setTheme } = useTheme();
  const isHydrated = useHydrated();

  const mode = theme === 'system' ? systemTheme : theme;

  const toggle = () => {
    mode === 'dark' ? setTheme('light') : setTheme('dark');
  }

  const renderToggleButton = () => {
    return mode === 'dark' ?
      (
        <button onClick={toggle}>
          <GiMoon className="text-xl cursor-pointer" />
          {/* {theme} */}
        </button>
      ) :
      (
        <button onClick={toggle}>
          <BsSunFill className="text-xl cursor-pointer text-amber-500" />
          {/* {theme} */}
        </button>
      )
  }



  return isHydrated && renderToggleButton()
}
