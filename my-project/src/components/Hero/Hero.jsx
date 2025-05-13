import React from 'react'
import { IoBagHandleOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
            {/*Brand info */}
            <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
                <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                    <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose '>NgeJus
                    <br />
                        Gapake <span className='text-bold'> Ribet!</span>
                    </h1>
                    <p className='text-2xl tracking-wide'>Pesan Sekarang Biar Hidup Kalian Sehat</p>
                    <p className='text-gray-400'>Healthy and yummy food for fresh morning breakfast. Fat daily for good health and mind Order now and get 20% off your first order</p>
                    {/*button section*/}
                    <div className='flex justify-center md:justify-start'>
                        <button className='primary-btn flex items-center gap-2'>
                            <span>
                                <IoBagHandleOutline />
                            </span>
                            Pesan!</button>
                    </div>
                </div>
            </div>
            {/*Hero Images*/}
            <div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero