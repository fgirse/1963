import Image from 'next/image'
import SeoMeta from 'layout/partials/SeoMeta'
import { Bowlby_One_SC } from"next/font/google";
import config from "../config/config.json";
import React from 'react'
const page = () => {
  return (    

<>
<SeoMeta/>
    <section className="py-5  px-4 bg-gradient-to-b from-slate-800 to-slate-400">
    <main className="">
      <div className="z-10 max-w-5xl w-full mx-auto items-center justify-between font-mono text-sm lg:flex">¨
      <div className="mt-4 flex flex-col items-center justify-center">
      < div className="flex flex-col justify-center items-center">
      <h2 className="text-amber-500 text-3xl font-bold">Information</h2>
      <h2 className="text-slate-200 text-2xl font-bold">Hotel/ Unterkunft?</h2>
      <div className='mt-12 mb-12' ><Image src="/images/hotelGrafikNeon.png" alt="grafik" height="150" width="150"/></div>
       
        <p className='py-4  text-white font-norma w-72 text-sm text-center md:text-[1.333rem] md:w-10/12'>Ubernachtung: Hotelzimmer stehen am Flughafen Bremgarten zur Verfügung:</p>
        <p className='text-xl text-center text-slate-200 font-bowlbySC'><span className='text-amber-500'>FR-GEWERBEPARKHOTEL</span><br/> Breisgauring 4 - 79427 Eschbach - Telefon: +49 (0)8261 7695-144 web: info@fr-hotel.de. <br/><span className="bg-red-300">Das Hotel ist ca. 300 Meter von der Bar entfernt!</span></p><br/><br/><hr/>
        <p className='text-xl text-center text-slate-200 font-bowlbySC'> <span className='text-amber-500'>Gästehaus RITZENTHALER</span><br/> Staufener Strasse 4 - 78427 Eschbach </p><br/><br/><hr/>
        <p className='text-xl text-center text-slate-200 font-bowlbySC'> <span className='text-amber-500'>Hotel OX</span><br/> Staufener Strasse 4 - 78427 Heitersheim </p><br/><br/>
              
        </div>
      </div>  
</div>
   </main>   
    </section>
</>
  )
}

export default page