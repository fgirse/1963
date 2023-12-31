"use client"

import dynamic from 'next/dynamic'
import Image from 'next/image'
// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../components/NavBar/OpenStreetMap'), {
  ssr: false,
})
const index = () => {
  return (
    <>

    <section className= 'grid-container'>

      <div>
      <h1 className='flex-1 py-5 text-center text-slate-600 text-6xl'>GoogleMap</h1>
      <div className=' flex-1 flex flex-col items-center justify-center bg-slate-200 border-8 border-slate-200 shadow-2xl mb-12'>
      <Image src="/images/Map.png" alt="Karte" width="600" height="600" className="mt-10" />
      </div>
      <div className="h-2/3 flex-1 flex flex-col items-center justify-between">
        <p className="py-3 px-2  mb-5  rounded-xl text-slate-50 text-center w-11/12 p-3 bg-slate-800"><span className="text-amber-600"> Anfahrt von Süden:</span> Autobahn A5: Ausfahrt Gewerbepark Breisgau/ Hartheim/ Heitersheim: über Bremgarten zum  südwestlichen Zugang des Gewerbeparkes.</p>
        <p className=" py-3 px-1 text-slate-50 rounded-xl text-center w-[90vw] bg-slate-800"><span className="text-amber-600"> Anfahrt von Norden:</span> Autobahn A5: Ausfahrt Bad Krozingen/ Breisach: über Hartheim und Bremgarten in den Gewerbepark Breisgau-Hochschwarzwald über den nördlichen ZUgang</p>
      </div>
      </div>
      
      </section>
    </>
  )
}
export default index

