'use client'
import { ThemeProvider } from 'next-themes'
import { HydrationProvider } from "react-hydration-provider";

export default function providers({children}) {
  return (
    <HydrationProvider>
      <ThemeProvider enableSystem attribute='class'>
        <div className='dark:bg-purple-950 dark:text-slate-300 transition-colors duration-700 max-h-screen h-screen'>
          {children}
        </div>
      </ThemeProvider>
    </HydrationProvider>

  )
}
