import Image from 'next/image'
import SeoMeta from 'layout/partials/SeoMeta'
import { Bowlby_One_SC } from"next/font/google";
import config from "../app/config/config.json";
 import Link  from'next/link'
const bowlbySC = Bowlby_One_SC({
  subsets: ['latin'],
  weight: ['400',],
  variable: '--font-bowlbySC',
});

export default function Home() {
  return (
<>

    <section className="h-[180vh] flex flex-col   w-full py-5 bg-gradient-to-b from-slate-700 to-slate-300 min-h-screen justify-between items-center">
        <main className="flex flex-col justify-center items-center bg-[url('/images/1963C.png')] bg-no-repeat bg-contain w-[100vw]  md-bg-contain lg:bg-[length:100%_86vh] ">
      < div className=" flex flex-col flex-1 justify-center items-center">
      <h1 className='mt-[28vh] leading-4  text-center text-sm w-10/12 md:mt-[52vh] md:text-2xl  lg:font-bold  text-orange-500 lg:w-8/12 lg:px-24 lg:mt-[63vh] ' >&ldquo; es sind die menschlichen Begegnungen die das Leben lebenswert gestalten &ldquo;</h1>
      <h1 className='py-7 headingG text-amber-500 uppercase font-bowlbySC font-black text-5xl md:text-9xl lg:text-[12rem] xl:text-[15rem] text-center'>Einladung</h1>
      <h2 className="mb-5 text-amber-500 leading-6 font-black text-center w-[66vw] text-[1.45rem] md:text-4xl md-w-full font-bowlbySC lg:w-full  lg:text-5xl" >Samstag <br/> 18. November 2023 <br className='text-center' />ab 18 Uhr</h2><br/>
      <p className="text-9xl">⚽</p>
      <p className="mt-3 text-center text-4xl text-amber-500  headingA " > &ldquo;Der Ball ist rund&ldquo;</p>
        <p className=' py-5  text-white font-normal w-72 text-sm text-justify md:w-8/12 md:text-[1.333rem]'>Das Jahr 1963 hat Spuren hinterlassen: 10. August Frank - 21. Oktober Mick - 09. November  Andi und nicht zu vergessen die Geburtsstunde der Fussball Bundesliga am 24. August 1963. </p><br/> &ldquo;Ich bin ein Berliner&ldquo; John F. Kennedy in Berlin - Beatle-Mania - Martin Luther King &ldquo;I have a dream &ldquo;... <br/> < br/> <hr/> < br/>
       <p className=''>Für uns Drei steht nun also die Sechs vor der Null! Mehr als Grund genug mit all denen die uns wichtig sind diesen Zustand gebührend zu feiern. Unser Motto: Der Ball ist rund!</p><br/> < br/> <hr/> 
        <h2 className=" text-amber-500 text-center text-3xl font-bold md:w-8/12">Wohin?</h2> 
        <p className='text-center text-white font-normal w-[75vw] text-sm  md:text-[1.333rem] lg:w-full'>Veranstaltungsort ist die FLYING-BAR direkt am Flughafen/ Tower Bremgarten Freiburger-Strasse - siehe auch Karte unter</p><br/> < br/>< br/>
        <Link href="/Wohin" className="mb-5 -mt-7 text-3xl md:text-5xl px-5 py-2 text-white bg-slate-600 hover:bg-a-300 border-2 hover:border-2 rounded-xl">Karte GoogleMaps</Link>
        
        <h2 className=" text-amber-500 text-3xl font-normal">Anmeldung?</h2> 
        <p className='mb-12 text-white font-black w-72 text-xl text-justify md:text-[2.333rem] md:w-8/12 md:text-center lg:w-full'>Wer nid absagt isch dbyyy !!!!</p>
          
        </div>
      
      </main>
   </section>
</>
  )
}