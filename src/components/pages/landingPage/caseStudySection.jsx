import React, { Fragment } from 'react';
import Image from 'next/image';

const caseCopy = [
        {
                id: 1,
                label: `Fintech`,
                title: `Work name here`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.`,
                image: {
                        src: `/images/case-one.png`,
                        title: `Work name here`,
                        alt: `Work name here`,
                        width: 445,
                        height: 300,
                },
        },
        {
                id: 2,
                label: `Fintech`,
                title: `Work name here`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.`,
                image: {
                        src: `/images/case-one.png`,
                        title: `Work name here`,
                        alt: `Work name here`,
                        width: 445,
                        height: 300,
                },
        },
        {
                id: 3,
                label: `Fintech`,
                title: `Work name here`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.`,
                image: {
                        src: `/images/case-one.png`,
                        title: `Work name here`,
                        alt: `Work name here`,
                        width: 445,
                        height: 300,
                },
        },
]

export default function CaseStudySection() {
        return (
                <section className='bg-sky-200 dark:bg-slate-800 min-h-[50vh] py-20 px-5 overflow-hidden z-[1]'>
                        <div className='max-w-7xl mx-auto'>
                                <LabelContent/>
                                <Case/>
                        </div>
                </section>
        )
}

const LabelContent = () => {
        return (
                <div className='grid gap-2 mx-auto justify-center text-center max-w-[700px]'>
                        <div>
                                <h2 className='text-3xl md:text-5xl font-bold'>
                                        Case Studies
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

const Case = () => {
        return (
                <div className='grid gap-5 mt-5'>
                        {caseCopy.map((copy) => (
                                <Fragment key={copy.id}>
                                        <CaseCard
                                                label={copy.label}
                                                title={copy.title}
                                                description={copy.description}
                                                img={copy.image}
                                        />
                                </Fragment>
                        ))}
                </div>
        );
};

const CaseCard = ({ label, title, description, img }) => {
        return (
                <div className='grid grid-cols-1 items-center p-5 border-solid border-2 border-slate-700 md:grid-cols-2 gap-5'>
                        <div className='grid gap-3'>
                                <span className='text-xs font-medium px-3 py-1 mr-auto rounded-lg bg-sky-200 dark:bg-slate-900'>
                                        {label}
                                </span>
                                <h3 className='text-3xl font-bold'>
                                        {title}
                                </h3>
                                <p className='text-lg md:text-2xl'>
                                        {description}
                                </p>
                                <button className='flex gap-1 items-center py-3 px-8 mr-auto text-sky-100 bg-slate-950 text-lg hover:bg-sky-950 transition-all duration-300'>
                                        View case study
                                        <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="0.5em" 
                                                height="1em" 
                                                viewBox="0 0 12 24"
                                        >
                                                <defs>
                                                        <path 
                                                                id="weuiArrowOutlined0" 
                                                                fill="#fff" 
                                                                d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                                                        />
                                                </defs>
                                                <use 
                                                        fillRule="evenodd" 
                                                        href="#weuiArrowOutlined0" 
                                                        transform="rotate(-180 5.02 9.505)"
                                                >                                                                
                                                </use>
                                        </svg>
                                </button>
                        </div>
                        <div>
                                <Image 
                                        className='size-full'
                                        {...img}
                                />
                        </div>
                </div>
        )
}



