
import Navigation from'../app/components/navigation';
import { Providers } from'../app/providers';
import type { Metadata } from 'next'
import  '../styles/globals.css'
import { Architects_Daughter, Londrina_Shadow, Bowlby_One_SC } from 'next/font/google';
import config from "../app/config/config.json";
import TwSizeIndicator from "../layout/helpers/TwSizeIndicator";
import Footer from "../layout/partials/Footer";
import React from 'react';


const archiDaughter = Architects_Daughter({
  subsets: ['latin'],
  weight: ['400', ],
    variable: '--font-archiDaught',
});

const londrinaS = Londrina_Shadow({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-londrinaS',
});
const bowlbySC = Bowlby_One_SC({
  subsets: ['latin'],
  weight: ['400',],
  variable: '--font-bowlbySC',
});

export const metadata: Metadata = {
  title: 'Andi Frank Mick',
  description: 'LandingPage 1963',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${archiDaughter.variable} ${bowlbySC.variable} font-sans`} lang="en">
       <body suppressHydrationWarning={true}>
        <TwSizeIndicator />
        <Providers>
      
          <Navigation />
          <main >{children}</main>
          <Footer />
        
        </Providers>
      </body>
      </html>
  )}

  