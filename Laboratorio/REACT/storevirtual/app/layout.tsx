'use client';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import {ThemeContextProvider,useThemeContext}  from './context/theme';
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  const {color} = useThemeContext();
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="bg-gray-900 w-full overflow-hidden">
          <div className={`sm:px-16 px-6 flex justify-center items-center`}>
            <div className={`xl:max-w-[1280px] w-full`}>
            <NavBar/>
            </div>
          </div>
        </header>
        <ThemeContextProvider>
          {/* uso el color que declare arriba que viene del usethmecontext */}
          <section className={color}>
          {children}
          </section>
            
        </ThemeContextProvider>

        <Footer/>
        </body>
    </html>
  )
}
