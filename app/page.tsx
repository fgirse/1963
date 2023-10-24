import Image from 'next/image'
import SeoMeta from 'layout/partials/SeoMeta'
export default function Home() {
  return (
<>
<SeoMeta/>
    <section className="bg-gradient-to-b from-slate-600 to-slate-200">
    <main className="bg-[url('/images/1963C.png')] bg-no-repeat bg-contain min-h-screen  items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full mx-auto items-center justify-between font-mono text-sm lg:flex">¨
      <div className="mt-4 flex flex-col items-center justify-center">
      <h1 className='mt-[10vh] leading-4 text-slate-800 text-center text-sm md:mt-[35vh] md:text-2xl lg:w-8/12'>&ldquo; es sind die menschlichen Begegnungen die das Leben lebenswert gestalten &ldquo;</h1>
      <h1 className='py-7 heading text-amber-700 font-black text-6xl md:text-9xl lg:text-[12rem] xl:text-[15rem] text-center'>Einladung</h1>
      <h2 className="mb-5 text-amber-700 headingB text-center w-72 text-[1.45rem] font-black lg:text-8xl" >Samstag <br/> 18. November 2023 <br className='text-center' />17 Uhr</h2>
        <p className='text-white font-black w-72 text-sm text-justify'>Andi-09.November Mick-21.Oktober Frank-10.August. Ab diesem Datum haben wir drei also nun die sechs vor der null stehen!!! Mehr als Grund genug mit all denen die uns wichtig sind und die uns nahe stehen, diesen Zustand gebührend zu feiern.</p>
      </div>  

   

    
      
      </div>
   
      </main>
      
    </section>
</>
  )
}