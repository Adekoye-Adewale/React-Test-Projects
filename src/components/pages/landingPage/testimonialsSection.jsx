import Image from 'next/image'
import React, { Fragment } from 'react'

const testimony = [
        {
                id: 1,
                name: `Jack Miller`,
                testimony: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                img: {
                        src: `/images/client-photo-1.png`,
                        alt: `Client Photo 1`,
                        title: `Client Photo 1`,
                        width: 50,
                        height: 50,
                },
        },
        {
                id: 2,
                name: `Mark Sucre`,
                testimony: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
                img: {
                        src: `/images/client-photo-1.png`,
                        alt: `Client Photo 2`,
                        title: `Client Photo 2`,
                        width: 50,
                        height: 50,
                },
        },
        {
                id: 3,
                name: `Jack Miller`,
                testimony: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                img: {
                        src: `/images/client-photo-1.png`,
                        alt: `Client Photo 3`,
                        title: `Client Photo 3`,
                        width: 50,
                        height: 50,
                },
        },
        {
                id: 4,
                name: `Sam Orija`,
                testimony: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                img: {
                        src: `/images/client-photo-1.png`,
                        alt: `Client Photo 4`,
                        title: `Client Photo 4`,
                        width: 50,
                        height: 50,
                },
        },
]

export default function TestimonialsSection() {
        return (
                <section className='bg-sky-100 min-h-[50vh] py-20 px-5 overflow-hidden z-[1]'>
                        <div className='max-w-7xl mx-auto'>
                                <LabelContent/>
                                <Cards/>
                        </div>
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
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 mt-5'>
                        {testimony.map(( item ) => (
                                <Fragment 
                                        key={item.id}
                                >
                                        <Card 
                                                {...item}
                                        />
                                </Fragment>
                        ))}
                </div>
        )
}

const Card = ({ testimony, img, name }) => {
        return (
                <div 
                        className='relative grid content-between rounded-md p-[30px] border border-solid border-slate-900'
                >
                        <div className='absolute top-0 left-7 translate-y-[-50%]'>
                                <QouteIcon/>
                        </div>
                        <p className='text-lg md:text-2xl mb-3'>
                                {testimony}
                        </p>
                        <div 
                                className='flex gap-2 items-center'
                        >
                                <Image {...img}/>
                                <span 
                                        className='text-2xl font-bold'
                                >
                                        {name}
                                </span>
                        </div>
                </div>
        )
}

const QouteIcon = () => {
        return (
                <svg 
                        width="21" 
                        height="21" 
                        viewBox="0 0 21 21" 
                        fill="none" 
                        xmlns="https://www.w3.org/2000/svg"
                >
                        <g 
                                clip-path="url(#clip0_719_2)"
                        >
                                <path 
                                        d="M7.4 -1.90735e-06L5.7 10.6H8.1V20.9H1.4V10.6L3.9 -1.90735e-06H7.4ZM19.5 -1.90735e-06L17.8 10.6H20.2V20.9H13.5V10.6L16 -1.90735e-06H19.5Z" 
                                        fill="#000000"
                                />
                        </g>
                        <defs>
                                <clipPath 
                                        id="clip0_719_2"
                                >
                                        <rect 
                                                width="21"
                                                 height="21" 
                                                fill="#000000" 
                                        />
                                </clipPath>
                        </defs>
                </svg>
        )
}