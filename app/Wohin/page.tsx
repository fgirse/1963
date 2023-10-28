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

    <section className= ' w-full h-screen bg-slate-300 items-center bg-gradient-to-b from-slate-700 to-slate-300'>
      <div className='flex min-h-full flex-col items-center justify-center'>
        <div className='flex-1'>
      <h1 className=' py-5  text-center text-slate-200 text-6xl'>GoogleMap</h1>

      <div className=' flex flex-col items-center justify-center bg-slate-200 border-8 border-slate-200 shadow-2xl mb-12'>
      <Image src="/images/Map.png" alt="Karte" width="600" height="600" className="mt-10" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="py-3 mb-5  rounded-xl text-slate-50 text-center w-11/12 p-3 bg-slate-800"><span className="text-amber-600"> Anfahrt von Süden:</span> Autobahn A5: Ausfahrt Müllheim/Neuenburg: über Zinken und Griessheim in den Gewerbepark Breisgau-Hochschwarzwald</p>
        <p className="py-3 text-slate-50 rounded-xl text-center w-11/12 bg-slate-800"><span className="text-amber-600"> Anfahrt von Norden:</span> Autobahn A5: Ausfahrt Bad Krozingen/ Breisach: über Hartheim und Bremgarten in den Gewerbepark Breisgau-Hochschwarzwald</p>
      </div>
      </div>
      </div>
      </section>
    </>
  )
}
export default index

