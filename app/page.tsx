import Image from 'next/image'
import SeoMeta from 'layout/partials/SeoMeta'
import { Bowlby_One_SC } from"next/font/google";
import config from "../app/config/config.json";
import Modal from'..//app/components/Modals/Modal';
import Link from'next/link'
import { Tooltip } from 'react-leaflet';

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
    <div className='flex flex-col'>
    <h1 className='mt-[14vh] leading-4 text-center text-sm w-[66vw] m-auto md:mt-[38vh] md:text-2xl  lg:font-bold  text-orange-500 lg:w-11/12 lg:px-24 lg:mt-[63vh] ' >&ldquo;es sind die menschlichen Begegnungen die das Leben lebenswert gestalten &ldquo;</h1>
      </div>
     
      <h1 className='py-7 headingA text-amber-500 uppercase font-bowlbySC text-5xl md:text-8xl lg:text-[12rem] xl:text-[15rem] text-center'>Einladung</h1>
    
      <div className='flex flec-col'>
      <h2 className="mb-5 m-auto  text-slate-300 leading-6 font-black text-center w-96 text-[1.33rem] md:text-4xl md:w-[90vw] font-bowlbySC lg:w-full  lg:text-5xl" >Samstag <br/> 18. November 2023 <br className='text-center' />ab 19.00 Uhr</h2><br/>
     </div>
      <p className="m-auto text-9xl text-center">⚽</p>
      <p className="mt-3 font-bowlbySC text-center text-3xl text-amber-500  headingA w-96 md:text-6xl md:w-[95vw]" > &ldquo;Der Ball ist rund&ldquo;</p>
      <p className=' mt-3  w-72  text-white text-center text-[1.0rem] md:text-[1.333rem] md:w-[66vw]'>Das Jahr 1963 hat Spuren hinterlassen: 10. August Frank - 21. Oktober Mick - 09. November  Andi und nicht zu vergessen die Geburtsstunde der Fussball Bundesliga am 24. August 1963.</p> <br/> 
      <p className="w-72 text-white text-center text-[1.0rem]  md:text-[1.333rem] md:w-[66vw] ">&ldquo;Ich bin ein Berliner&ldquo; John F. Kennedy in Berlin - Beatle-Mania - Martin Luther King &ldquo;I have a dream &ldquo;...  </p>   
      <p className=' py-4 w-72 text-white font-normal text-center text-[1.0rem] md:text-[1.333rem] md:w-[66vw]'>Für uns Drei steht nun also die Sechs vor der Null! Mehr als Grund genug mit all denen die uns wichtig sind diesen Zustand gebührend zu feiern. Unser Motto: Der Ball ist rund!</p><br/> < br/> <hr/>
      <p className=" m-auto text-5xl headingA text-amber-500 text-center md:text-7xl font-bold md-text-5xl">Wohin?</p>
      <div className='p-5 flex col '>
        <Image src="/images/LogoFlyingBar.png" alt='Grafik' height="90" width='90'/>
        </div> 
     
        <p className='w-72 text-center text-white text-xl  md:text-[1.333rem] md:w-[66vw] lg:w-full'>Veranstaltungsort ist die <span className="text-amber-600"> FLYING-BAR </span>direkt am Flughafen/ Tower Bremgarten Freiburger-Strasse - siehe auch Karte unten - <span className="text-xs bg-red-500/50">click Button GoogleMap</span></p>
        <div className='p-5 flex col '>
        <Image src="/images/grafikBar.png" alt='Grafik' height="120" width='180'/>
        </div> 
        <div className="">
                <Modal/>
        </div>
        <p className="-mt-24 text-5xl headingA text-amber-500 text-center md:text-7xl font-bold md-text-5xl">Unterkunft?</p>
      
        
        <p className="mt-5 p-3 text-3xl rounded-xl shadow-2xl uppercase bg-white/60  text-slate-500 font-bold w-60 ">Info <span className="text-xs">click Hotel-Synbol</span></p>
        <div className="p-10">
  <div className="group relative w-max">
            <Link href="/Info" className="cursor-pointer hover:scale-110 hover:border-8 hover:border-purple-800">
        <div className='p-5 flex col ' shadow-2xl>
        <Image src="/images/hotelGrafikNeon.png" alt='Grafik' height="120" width='180' className="rounded-xl"/>
        </div> 
        </Link>
        <span className="pointer-events-none absolute -top-7 left-0 w-max rounded bg-slate-500 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100"> Weitere Infos zu Hotels. </span>
  </div>
  </div>
        
      <h2 className="py-9  text-amber-500 text-center headingA font-bold  text-5xl">Anmeldung?</h2> 
        <div className='flex flex-col'>
        <p className='m-auto text-white w-72 font-black text-[1.0rem] text-center md:text-[2.333rem] md:w-[66vw] md:text-center lg:w-full'>Wer nid absagt isch dbyyy !!!!</p>
        
</div>
      </main>
      </section>
    </>
  )
}