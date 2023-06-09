import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Providers from './providers'
import Modal from '@/components/Shared/Modal'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Header />
        {/* NAVBAR */}
        <NavBar className="my-4" />

        {/* SEARCHBOX */}
        <div className=' max-w-6xl mx-auto my-2'>
          {children}

        </div>

        {/* FOOTER */}

      </Providers>
      </body>
    </html>
  )
}
