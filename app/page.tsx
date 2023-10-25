import Image from 'next/image'
import SeoMeta from 'layout/partials/SeoMeta'
import { Bowlby_One_SC } from"next/font/google";
import config from "../app/config/config.json";

const bowlbySC = Bowlby_One_SC({
  subsets: ['latin'],
  weight: ['400',],
  variable: '--font-bowlbySC',
});

export default function Home() {
  return (
<>
<SeoMeta/>
    <section className="bg-gradient-to-b from-slate-600 to-slate-200">
    <main className="bg-[url('/images/1963C.png')] bg-no-repeat bg-contain min-h-screen  items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full mx-auto items-center justify-between font-mono text-sm lg:flex">¨
      <div className="mt-4 flex flex-col items-center justify-center">
      < div className="flex flex-col justify-center items-center">
      <h1 className='mt-[15vh] leading-4 text-slate-800 text-center text-sm md:mt-[36vh] md:text-2xl lg:w-8/12'>&ldquo; es sind die menschlichen Begegnungen die das Leben lebenswert gestalten &ldquo;</h1>
      <h1 className='py-7 headingA text-amber-500 uppercase font-bowlbySC font-black text-6xl md:text-9xl lg:text-[12rem] xl:text-[15rem] text-center'>Einladung</h1>
      <h2 className="mb-5 text-amber-500 leading-6 font-black text-center w-[66vw] text-[1.45rem] md:text-4xl md-w-full font-bowlbySC lg:w-full  lg:text-8xl" >Samstag <br/> 18. November 2023 <br className='text-center' />17 Uhr</h2>
        <p className='py-4  text-white font-black w-72 text-sm text-justify md:text-[1.333rem] md:w-full'>Andi  09.November - Mick 21.Oktober - Frank  10.August. Ab diesem Datum haben wir drei also nun die sechs vor der null stehen!!! Mehr als Grund genug mit all denen die uns wichtig sind und die uns nahe stehen, diesen Zustand gebührend zu feiern.</p>
        <h2 className="text-amber-500 text-3xl font-bold">Wohin?</h2> 
        <p className='py-4  text-white font-black w-72 text-sm text-justify md:text-[1.333rem] md:w-full'>Veranstaltumgsort ist die Lichter Bar direkt am Flughafen/ Tower Bremgarten </p>
        <h2 className="text-amber-500 text-3xl font-bold">Unterkunft?</h2> 
        <p className='py-4  text-white font-black w-72 text-sm text-justify md:text-[1.333rem] md:w-full'>Ubernachtung: Hotelzimmer stehen am Flughafen Bremgarten zur Verfügung oder aber z.B in Heitersheim Hotel "OXX".</p>
        <h2 className="text-amber-500 text-3xl font-bold">Anmeldung?</h2> 
        <p className='py-4  text-white font-black w-72 text-sm text-justify md:text-[1.333rem] md:w-full'>Wir würden uns zwecks der Planung über ein kurzes Feedback ob oder ob nicht sehr freuen!</p>


          
        </div>
      </div>  

   

    
      
      </div>
   
      </main>
      
    </section>
</>
  )
}