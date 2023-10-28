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

    <section className="w-full py-5 bg-gradient-to-b from-slate-700 to-slate-300 min-h-screen flex flex-col justify-between items-center">
        <main className=" h-screen bg-[url('/images/1963C.png')] bg-no-repeat bg-contain w-[100vw] items-center justify-between md-bg-contain lg:bg-[length:100%_86%] lg:h-[100vh]">
      
      
      < div className="flex  flex-col justify-between items-center h-[155vh] md:h-[135vh] lg:h-[133vh] ">
      <h1 className='mt-[24vh] leading-4 text-slate-800 text-center text-sm w-10/12 md:mt-[45vh] md:text-2xl  lg:font-bold  lg:text-slate-50 lg:w-8/12 lg:px-24 lg:mt-[63vh] ' >&ldquo; es sind die menschlichen Begegnungen die das Leben lebenswert gestalten &ldquo;</h1>
      <h1 className='py-7 headingG text-amber-500 uppercase font-bowlbySC font-black text-5xl md:text-9xl lg:text-[12rem] xl:text-[15rem] text-center'>Einladung</h1>
      <h2 className="mb-5 text-amber-500 leading-6 font-black text-center w-[66vw] text-[1.45rem] md:text-4xl md-w-full font-bowlbySC lg:w-full  lg:text-5xl" >Samstag <br/> 18. November 2023 <br className='text-center' />ab 18 Uhr</h2><br/>
        <p className='  text-white font-normal w-72 text-sm text-justify md:-mt-10 md:text-[1.333rem] md:w-full'>Das Jahr 1963 hat Spuren hinterlassen: 10. August Frank - 21. Oktober Mick - 09. November  Andi und nicht zu vergessen die Geburtsstunde der Fussball Bundesliga am 24 . August 1963. <br/> &ldquo;Ich bin ein Berliner&ldquo; John F. Kennedy in Berlin - Beatle-Mania - Martin Luther King &ldquo;I have a dream &ldquo;... <br/> < br/> <hr/> < br/>
        Für uns Drei steht nun also die 6 vor der Null! Mehr als Grund genug mit all denen die uns wichtig sind diesen Zustand gebührend zu feiern. Unser Motto: Der Ball ist rund!</p><br/> < br/> <hr/> < br/>
        <h2 className="text-amber-500 text-3xl font-bold">Wohin?</h2> 
        <p className='py-4  text-white font-normal w-72 text-sm text-justify md:text-[1.333rem] md:w-full'>Veranstaltungsort ist die FLYING-BAR direkt am Flughafen/ Tower Bremgarten Freiburger-Strasse</p><br/> < br/>< br/>
        <h2 className="text-amber-500 text-3xl font-normal">Anmeldung?</h2> 
        <p className='py-4  text-white font-black w-72 text-sm text-justify md:text-[1.333rem] md:w-full'>Wer nit absagt isch dbyyy !!!!</p>

          
        </div>
      
      </main>
   </section>
</>
  )
}