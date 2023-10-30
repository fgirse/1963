"use client"

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="container mx-auto py-20">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`px-3 py-3 text-xl font-medium text-white rounded-full bg-amber-500/50 hover:border-2 hover:bg-amber-500/90`}
        >
            Googel Map
        </button>
        <div
          className={`fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-slate-400 py-12 px-8 text-center md:py-[60px] md:px-[70px]"
          >
        
      
      <h1 className=' py-5 text-center text-amber-500 text-4xl'>GoogleMap</h1>
      <div className=' flex-1 flex flex-col items-center justify-center bg-slate-200 border-8 border-slate-200 shadow-2xl mb-12'>
      <Image src="/images/Map.png" alt="Karte" width="170" height="170" className="mt-10" />
      </div>
      <div className=" mb-5 flex flex-col items-center justify-center">
        <p className="py-3 px-2  mb-5  rounded-xl text-slate-50 text-center w-72 p-3 text-sm md:text-bbase lg:text-xl bg-slate-600"><span className="text-amber-600"> Anfahrt von Süden:</span> Autobahn A5: Ausfahrt Gewerbepark Breisgau/ Hartheim/ Heitersheim: über Bremgarten zum  südwestlichen Zugang des Gewerbeparkes.</p>
        <p className=" py-3 px-2 text-slate-50 rounded-xl text-center w-72 text-sm md:text-bbase lg:text-xl bg-slate-600"><span className="text-amber-600"> Anfahrt von Norden:</span> Autobahn A5: Ausfahrt Bad Krozingen/ Breisach: über Hartheim und Bremgarten in den Gewerbepark Breisgau-Hochschwarzwald über den nördlichen ZUgang</p>
      </div>
      
      
      
            <div className="flex flex-wrap -mx-3">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-dark transition hover:border-amber-600 hover:bg-slate-600  hover:text-white"
                >
                  zurück
                </button>
              </div>
              <div className="w-1/2 px-3">
               {/* <button
                  className={`block w-full p-3 text-base font-medium text-center text-white transition border rounded-lg border-primary bg-slate-500 hover:bg-opacity-90`}
                >
                  <a href={`/#`}> View Details </a>
        </button>*/}              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
