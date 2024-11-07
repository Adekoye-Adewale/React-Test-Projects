import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const img = {
        src: '/images/hero-img.webp',
        alt: `Hero Image`,
        title: `Hero Image`,
        width: 1245,
        height: 795,
}

const wwIcons = [
        {
                src: '/icons/adobe-logo_black.svg',
                alt: `Adobe logo`,
                title: `Adobe logo`,
                width: 350,
                height: 94,
        },
        {
                src: '/icons/amazon-logo_black.svg',
                alt: `Amazon logo`,
                title: `Amazon logo`,
                width: 350,
                height: 94,
        },
        {
                src: '/icons/google-logo_black.svg',
                alt: `Google logo`,
                title: `Google logo`,
                width: 350,
                height: 94,
        },
        {
                src: '/icons/linkedIn-logo_black.svg',
                alt: `LinkedIn logo`,
                title: `LinkedIn logo`,
                width: 350,
                height: 94,
        },
        {
                src: '/icons/meta-logo_black.svg',
                alt: `Meta logo`,
                title: `Meta logo`,
                width: 350,
                height: 94,
        },
        {
                src: '/icons/microsoft-logo_black.svg',
                alt: `MicroSoft logo`,
                title: `MicroSoft logo`,
                width: 350,
                height: 94,
        },
        {
                src: '/icons/nvidia-logo_black.svg',
                alt: `Nvidia logo`,
                title: `Nvidia logo`,
                width: 350,
                height: 94,
        },
        {
                src: '/icons/swiggy-logo_black.svg',
                alt: `Swiggy logo`,
                title: `Swiggy logo`,
                width: 350,
                height: 94,
        },
        {
                src: '/icons/canva-logo_black.svg',
                alt: `Canva logo`,
                title: `Canva logo`,
                width: 350,
                height: 94,
        },
        {
                src: '/icons/razorpay-logo_black.svg',
                alt: `Razorpay logo`,
                title: `Razorpay logo`,
                width: 350,
                height: 94,
        },
]

export default function HeroSection() {
        return (
                <section 
                        className='bg-sky-50 dark:bg-slate-950 text-slate-950 dark:text-sky-50 min-h-[50vh] py-20 px-5 overflow-hidden'
                >
                        <div className='max-w-7xl mx-auto'>
                                <div
                                        className='grid md:grid-cols-2 gap-5 justify-between items-center'
                                >
                                        <Content/>
                                        <HeroImg/>
                                </div>
                                <WorkedWith/>
                        </div>
                </section>
        )
}

const Content = () => {
        return (
                <div className='grid gap-2 md:gap-5 text-center md:text-left'>
                        <h1 className='text-4xl md:text-7xl font-bold'>
                                Hello! I am Akanda
                        </h1>
                        <p className='text-lg md:text-2xl text-pretty'>
                                Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                </div>
        )
}

const HeroImg = () => {
        return (
                <Image 
                        {...img}
                        className='rounded-2xl'
                />
        )
}

const WorkedWith = () => {
        return (
                <div className='mt-5'>
                        <h3 className='text-2xl font-semibold'>
                                Worked with
                        </h3>
                        <div className='mt-2 w-full'>
                                <Swiper
                                        slidesPerView={8}
                                        spaceBetween={20}
                                        loop={true}
                                        autoplay={{
                                                delay: 2500,
                                                // disableOnInteraction: false,
                                        }}
                                        modules={[Autoplay, Navigation, Pagination ]}
                                >
                                        {wwIcons.map((icon, index) => (
                                                <SwiperSlide
                                                        key={index}
                                                >
                                                        <div>
                                                                <Image 
                                                                        {...icon}
                                                                        className='max-w-32 size-full aspect-[350/94] py-2 px-5 border-solid border border-slate-900 bg-sky-200 rounded-md cursor-pointer'
                                                                />
                                                        </div>
                                                </SwiperSlide>
                                        ))}
                                </Swiper>
                        </div>
                </div>
        )
}