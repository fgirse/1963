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
    <section className="py-5  px-4 bg-gradient-to-b from-slate-600 to-slate-200">
    <main className=" bg-[url('/images/1963C.png')] bg-no-repeat bg-contain min-h-screen  items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full mx-auto items-center justify-between font-mono text-sm lg:flex">¨
      <div className="mt-4 flex flex-col items-center justify-center">
      < div className="flex flex-col justify-center items-center">
      <h1 className='mt-[7vh] leading-4 text-slate-800 text-center text-sm w-10/12 md:mt-[36vh] md:text-2xl lg:w-8/12 lg:px-24 lg:mt-[63vh] ' >&ldquo; es sind die menschlichen Begegnungen die das Leben lebenswert gestalten &ldquo;</h1>
      <h1 className='py-7 headingA text-amber-500 uppercase font-bowlbySC font-black text-6xl md:text-9xl lg:text-[12rem] xl:text-[15rem] text-center'>Einladung</h1>
      <h2 className="mb-5 text-amber-500 leading-6 font-black text-center w-[66vw] text-[1.45rem] md:text-4xl md-w-full font-bowlbySC lg:w-full  lg:text-5xl" >Samstag <br/> 18. November 2023 <br className='text-center' />ab 18 Uhr</h2>
        <p className='py-4  text-white font-normal w-72 text-sm text-justify md:text-[1.333rem] md:w-full'>Das Jahr 1963 hat Spuren hinterlassen. 10. August Frank, 21. Oktober Mick  Andi 09.November und nicht vergessen am 24 . August Start der Fussball Bindesliga. &ldquo;Ich bin ein Berliner&ldquo; John F. Kennedy in Berlin - Beatle-Mania - Martin Luther King &ldquo;I have a dream &ldquo;... <br/> < br/> <hr/> < br/>Für uns Drei steht nun also die 6 vor der Null! Mehr als Grund genug mit all denen die uns wichtig sind diesen Zustand gebührend zu feiern.</p>
        <h2 className="text-amber-500 text-3xl font-bold">Wohin?</h2> 
        <p className='py-4  text-white font-normal w-72 text-sm text-justify md:text-[1.333rem] md:w-full'>Veranstaltungsort ist die FLYING-BAR direkt am Flughafen/ Tower Bremgarten Freiburger-Strasse</p>
        <h2 className="text-amber-500 text-3xl font-bold">Unterkunft?</h2> 
        <p className='py-4  text-white font-norma w-72 text-sm text-justify md:text-[1.333rem] md:w-full'>Ubernachtung: Hotelzimmer stehen am Flughafen Bremgarten zur Verfügung: 1. FR-GEWERBEPARKHOTEL-Breisgauring 4 - 79427 Eschbach - Telefon: +49 (0)8261 7695-144 web: info@fr-hotel.de. Das Hotel ist ca. 300 Meter von der Bar entfernt.
                 oder Gästehaus RITZENTHALER - Staufener Strasse 4 - 78427 Eschbach oder in Heitersheim Hotel &ldquo;OXX&ldquo;.</p>
        <h2 className="text-amber-500 text-3xl font-normal">Anmeldung?</h2> 

        <p className='py-4  text-white font-black w-72 text-sm text-justify md:text-[1.333rem] md:w-full'>Wer nit absagt isch dbyyy !!!!</p>

          
        </div>
      </div>  

   

    
      
      </div>
   
      </main>
      
    </section>
</>
  )
}