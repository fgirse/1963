"use client"

import dynamic from 'next/dynamic'
// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../components/NavBar/OpenStreetMap'), {
  ssr: false,
})
const index = () => {
  return (
    <>

    <section className='flex flex-col min-h-screen'>
      <h1 className='text-center'>OpenStreetMap</h1>

      <div className='w-60 h-60 '>
      <OpenStreetMap  />
      </div>
      </section>
    </>
  )
}
export default index

