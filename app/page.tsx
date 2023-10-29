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

    <section className= 'grid-container w-full bg-slate-300 items-center bg-gradient-to-b from-slate-700 to-slate-300'>
    <main className="bg-[url('/images/1963C.png')] bg-contain bg-no-repeat flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className='m-auto mt-[15vh] leading-4 text-center text-sm w-full md:mt-[38vh] md:text-2xl  lg:font-bold  text-orange-500 lg:w-8/12 lg:px-24 lg:mt-[63vh] ' >&ldquo;es sind die menschlichen Begegnungen die das Leben lebenswert gestalten &ldquo;</h1>
      <h1 className='py-7 headingG text-amber-500 uppercase font-bowlbySC font-black text-5xl md:text-9xl lg:text-[12rem] xl:text-[15rem] text-center'>Einladung</h1>
      <h2 className="mb-5 m-auto  text-amber-500 leading-6 font-black text-center text-[1.45rem] md:text-4xl md-w-full font-bowlbySC lg:w-full  lg:text-5xl" >Samstag <br/> 18. November 2023 <br className='text-center' />ab 19.00 Uhr</h2><br/>
      <p className="m-auto text-9xl text-center">⚽</p>
      <p className="mt-3 text-center text-5xl text-amber-500  headingA " > &ldquo;Der Ball ist rund&ldquo;</p>
      <p className=' py-5  text-white font-normal text-center text-sm  md:text-[1.333rem]'>Das Jahr 1963 hat Spuren hinterlassen: 10. August Frank - 21. Oktober Mick - 09. November  Andi und nicht zu vergessen die Geburtsstunde der Fussball Bundesliga am 24. August 1963.</p> <br/> 
      <p className=" py-5  text-white font-normal text-center text-xl leading-5  md:text-[1.333rem]' ">&ldquo;Ich bin ein Berliner&ldquo; John F. Kennedy in Berlin - Beatle-Mania - Martin Luther King &ldquo;I have a dream &ldquo;...  </p>   
      <p className=' py-5  text-white font-normal text-center text-sm  md:text-[1.333rem]'>Für uns Drei steht nun also die Sechs vor der Null! Mehr als Grund genug mit all denen die uns wichtig sind diesen Zustand gebührend zu feiern. Unser Motto: Der Ball ist rund!</p><br/> < br/> <hr/>
      <p className="py-3 m-auto text-amber-500 text-center md:text-7xl font-bold md-text-5xl">Wohin?</p> 
        <p className='text-center text-white font-normal w-[75vw] text-sm  md:text-[1.333rem] lg:w-full'>Veranstaltungsort ist die FLYING-BAR direkt am Flughafen/ Tower Bremgarten Freiburger-Strasse - siehe auch Karte unter</p><br/><br/>
        <div className="flex flex-col justify-center items-center">
        <Link href="/Wohin" className=" w-60 text-center  text-3xl md:text-4xl px-5 py-2 text-white bg-slate-600 hover:bg-amber-600/50 border-2 hover:border-2 rounded-xl ">Karte GoogleMaps</Link> 

        </div>
      <h2 className="py-9  text-amber-500 text-center text-5xl font-normal">Anmeldung?</h2> 
        <p className='m-auto text-white font-black text-xl text-center md:text-[2.333rem] md:w-8/12 md:text-center lg:w-full'>Wer nid absagt isch dbyyy !!!!</p>
      </main>
      </section>
    </>
  )
}