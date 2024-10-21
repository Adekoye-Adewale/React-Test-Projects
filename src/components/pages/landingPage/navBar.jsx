'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const logo = {
        src: '/images/logo.svg',
        alt: 'Logo',
        title: 'Logo',
        width: 169,
        height: 40,
}

const homeLink = {
        href: `/landing-page`,
        title: `Home page`,
}

const menuLinks = [
        {
                label: `About`,
                slug: `/landing-page/#about`,
        },
        {
                label: `Skills`,
                slug: `/landing-page/#skills`,
        },
        {
                label: `Portfolio`,
                slug: `/landing-page/#portfolio`,
        },
        {
                label: `Contact`,
                slug: `/landing-page/#contact`,
        },
]

export default function NavBar() {
        return (
                <>
                        <DesktopNavBar/>
                        <MobileNavBar/>
                </>
        )
}

const DesktopNavBar = () => {
        return (
                <div
                        className='sticky top-0 left-0 hidden md:flex gap-5 justify-between items-center py-2 px-5 backdrop-blur bg-slate-50/80 shadow'
                >
                        <div className='flex gap-5 w-full justify-between items-center'>
                                <Logo/>
                                <nav>
                                        <ul
                                                className='flex justify-between gap-5'
                                        >
                                                {menuLinks.map((items, key) => (
                                                        <li
                                                                key={key}
                                                                className='text-lg font-medium'
                                                        >
                                                                <MenuLink
                                                                        label={items.label}
                                                                        slug={items.slug}
                                                                />
                                                        </li>
                                                ))}
                                        </ul>
                                </nav>
                                <CtaBtn />
                        </div>
                </div>
        )
}

const MobileNavBar = () => {

        const [ active, setActive ] = useState(false)

        return (
                <div
                        className='sticky top-0 left-0 flex md:hidden gap-5 justify-between items-center py-2 px-5 bg-slate-50/80 shadow overflow-hidden'
                >
                        <Logo />
                        <MenuIcon
                                active={active}
                                setActive={setActive}
                        />
                        <MobileMenu
                                active={active}
                        />
                </div>
        )
}

const MobileMenu = ({ active }) => {
        return (
                <div
                        className={`fixed top-0 right-0 h-dvh flex flex-col items-start md:hidden gap-5 p-5 bg-slate-50/80 backdrop-blur shadow ${active ? 'w-[90vw] translate-x-0' : 'w-0 translate-x-20'} transition-all duration-[400ms] z-[9]`}
                >
                        <Logo />
                        <nav>
                                <ul
                                        className='grid gap-5 min-h-[50vh] content-around'
                                >
                                        {menuLinks.map((items, key) => (
                                                <li
                                                        key={key}
                                                        className={`text-3xl font-bold ${active ? 'opacity-100 translate-x-5' : 'opacity-0 translate-x-20'} duration-[250ms] transition-all`}
                                                >
                                                        <MenuLink
                                                                label={items.label}
                                                                slug={items.slug}
                                                        />
                                                </li>
                                        ))}
                                </ul>
                        </nav>
                        <CtaBtn 
                                classname={`mt-auto ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} duration-[250ms] transition-all`}
                        />
                </div>
        )
}

const Logo = () => {
        return (
                <Link 
                        {...homeLink}
                >
                        <Image 
                                {...logo}
                                className='size-full max-w-14 max-h-[40px]'
                        />
                </Link>
        )
}

const MenuLink = ({ label, slug }) => {
        return (
                <Link 
                        href={slug} 
                        title={`Click button to go to ${label}`}
                >
                        {label}
                </Link>
        )
}

const MenuIcon = ({ active, setActive }) => {

        const handleMenu = () => {
                setActive(!active);
        }

        return (
                <div onClick={handleMenu} className='z-10'>
                        {active ? 
                                (
                                        <svg 
                                                xmlns="https://www.w3.org/2000/svg" 
                                                width="1em" 
                                                height="1em" 
                                                viewBox="0 0 24 24"
                                                className='w-7 h-7'
                                        >
                                                <path 
                                                        fill="#020617" 
                                                        d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"/>
                                        </svg>
                                ) : (
                                        <svg
                                                xmlns="https://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 512 512"
                                                className='w-7 h-7'
                                        >
                                                <path
                                                        fill="none"
                                                        stroke="#020617 "
                                                        strokeLinecap="round"
                                                        strokeMiterlimit={10}
                                                        strokeWidth={32}
                                                        d="M80 160h352M80 256h352M80 352h352"
                                                />
                                        </svg>
                                )
                        }
                </div>
        )
}

const CtaBtn = ({ classname }) => {
        return (
                <Link 
                        href='/' 
                        title='Click button to hire me'
                        className={`text-lg py-3 px-10 bg-slate-950 text-sky-100 hover:bg-sky-950 transition-all duration-300 ${classname}`}
                >
                        Hire me
                </Link>
        )
}