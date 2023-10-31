import Image from 'next/image'
import SeoMeta from 'layout/partials/SeoMeta'
import config from "../config/config.json";
import React from 'react'
import { Bowlby_One_SC } from 'next/font/google';

const bowlbySC = Bowlby_One_SC({
  subsets: ['latin'],
  weight: ['400',],
  variable: '--font-bowlbySC',
});
const page = () => {
  return (   

 
<>
<SeoMeta/>
    <section className=" py-5  px-4 bg-gradient-to-b from-slate-800 to-slate-400">
    <main className={bowlbySC.className}>
      <div className="z-10 max-w-5xl w-full mx-auto items-center justify-between font-mono text-sm lg:flex">¨
      <div className="mt-4 flex flex-col items-center justify-center">
      < div className="flex flex-col justify-center items-center">
      <h2 className="text-amber-500 headingA text-3xl font-bold md:text-6xl">Information</h2>
      <h2 className="text-slate-200 text-2xl font-bold md:text-4xl">Hotel/ Unterkunft?</h2>
      <div className='md:w-6/12 mt-12 mb-12 border-2 shadow_2xl' ><Image src="/images/hotelGrafikNeon.png" alt="grafik" height="200" width="200" className=',e ' /></div>
       
        <p className='py-4  text-white font-sans w-72 text-sm text-center md:text-[1.333rem] md:w-10/12'>Ubernachtung: Hotelzimmer stehen am Flughafen Bremgarten zur Verfügung:</p>
        <p className='text-xl text-center text-slate-200 font-sans'><span className='text-amber-500'>FR-GEWERBEPARKHOTEL</span><br/> Breisgauring 4 - 79427 Eschbach - Telefon: +49 (0)8261 7695-144 web: info@fr-hotel.de. <br/><span className="bg-red-300">Das Hotel ist ca. 300 Meter von der Bar entfernt!</span></p><br/><br/><hr/>
        <p className='text-xl text-center text-slate-200 font-sans'> <span className='text-amber-500'>Gästehaus RITZENTHALER</span><br/> Staufener Strasse 4 - 78427 Eschbach </p><br/><br/><hr/>
        <p className='text-xl text-center text-slate-200 font-sans'> <span className='text-amber-500'>Hotel OX</span><br/> Staufener Strasse 4 - 78427 Heitersheim </p><br/><br/>
              
        </div>
      </div>  
</div>
   </main>   
    </section>
</>
  )
}

export default page