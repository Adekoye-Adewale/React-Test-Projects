import Image from 'next/image'
import React, { Fragment } from 'react'

const list = [
        {
                id: 1,
                name: `React Js`,
                experience: `Since 2020`,
                img: {
                        src: `/icons/react-icon.svg`,
                        alt: `React Js`,
                        title: `React Js`,
                        width: 50,
                        height: 50,
                }
        },
        {
                id: 2,
                name: `Next Js`,
                experience: `Since 2021`,
                img: {
                        src: `/icons/nextjs-icon.svg`,
                        alt: `Next Js`,
                        title: `Next Js`,
                        width: 50,
                        height: 50,
                }
        },
        {
                id: 3,
                name: `CSS 3`,
                experience: `Since 2018`,
                img: {
                        src: `/icons/css3-icon.svg`,
                        alt: `CSS 3`,
                        title: `CSS 3`,
                        width: 50,
                        height: 50,
                }
        },
        {
                id: 4,
                name: `JavaScript`,
                experience: `Since 2018`,
                img: {
                        src: `/icons/javascript-icon.svg`,
                        alt: `JavaScript`,
                        title: `JavaScript`,
                        width: 50,
                        height: 50,
                }
        },
]

export default function SkillsSection() {
        return (
                <section className='bg-sky-200 dark:bg-slate-950 py-20 px-5 overflow-hidden z-[1]'>
                        <div className='max-w-7xl mx-auto'>
                                <LabelContent/>
                                <SkillList/>
                        </div>
                </section>
        )
}

const LabelContent = () => {
        return (
                <div className='grid gap-2 mx-auto justify-center text-center max-w-[700px]'>
                        <div>
                                <h2 className='text-3xl md:text-5xl font-bold'>
                                        Skills
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

const SkillList = () => {
        return (
                <div className='mt-5 grid grid-cols-2 md:grid-cols-4 gap-5 justify-center'>
                        {list.map(( item ) => (
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

const Card = ({ img, name, experience }) => {
        return (
                <div className='flex gap-3 items-center p-3 rounded-xl border-solid border-2 border-slate-900 hover:bg-slate-950 hover:text-sky-100 transition-colors delay-100 duration-300 cursor-pointer'>
                        <div>
                                <Image 
                                        {...img}
                                        className='rounded-lg'
                                />
                        </div>
                        <div>
                                <h3 className='text-xl font-bold transition-all duration-300 cursor-pointer'>
                                        {name}
                                </h3>
                                <span className='text-sm transition-colors delay-0 duration-300 cursor-pointer'>
                                        {experience}
                                </span>
                        </div>
                </div>
        )
}