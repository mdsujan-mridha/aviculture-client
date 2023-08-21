import React, { Fragment } from 'react'
import birds from "../images/birds.png";
function Hero() {
    return (
        <Fragment>
            <section className='bg-gradient-to-b from-[#f1f1f1bf]'>
                <div className='container mx-auto pt-16'>
                    <div className='flex justify-between items-center flex-col-reverse md:flex-row'>
                        <div className='text-center md:text-left'>
                            <h1 className='text-5xl font-bold pb-4 text-primary '>Looking for birds?</h1>
                            <h2 className='text-xl font-bold pb-5 text-white'>Our classifieds section connects breeders to buyers, all over Australia.</h2>
                            <button type="button" className='py-3 px-5 bg-accent text-white border-0 rounded font-bold'>Browse Classifieds</button>
                        </div>
                        <div>
                            <figure>
                                <img className='h-auto w-full' src={birds} alt="Birds" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Hero