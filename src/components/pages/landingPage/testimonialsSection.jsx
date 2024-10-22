import Image from 'next/image'
import React from 'react'

export default function TestimonialsSection() {
        return (
                <section className='bg-sky-700 min-h-[50vh] py-20 px-5 overflow-hidden'>
                        <LabelContent/>
                </section>
        )
}

const LabelContent = () => {
        return (
                <div className='grid gap-2 mx-auto justify-center text-center max-w-[700px]'>
                        <div>
                                <h2 className='text-3xl md:text-5xl font-bold'>
                                        Testimonials
                                </h2>
                        </div>
                        <div>
                                <p className='text-lg md:text-2xl'>
                                        Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </p>
                        </div>
                </div>
        )
}

const Cards = () => {
        return (
                <div>

                </div>
        )
}

const Card = () => {
        return (
                <div>
                        <div>
                                icon
                        </div>
                        <p>
                                {testimony}
                        </p>
                        <div>
                                <Image {...img}/>
                                <span>
                                        {name}
                                </span>
                        </div>
                </div>
        )
}
