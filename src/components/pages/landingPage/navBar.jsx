import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const menuLinks = [
        {
                label: `About`,
                slug: `/#about`,
        },
        {
                label: `Skills`,
                slug: `#skills`,
        },
        {
                label: `Portfolio`,
                slug: `/#portfolio`,
        },
        {
                label: `Contact`,
                slug: `/#contact`,
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
                        className='hidden md:flex gap-5 justify-between items-center py-2 px-5 bg-slate-50 shadow'
                >
                        <Logo />
                        <nav>
                                <ul
                                        className='flex justify-between gap-5'
                                >
                                        {menuLinks.map((items, key) => (
                                                <li
                                                        key={key}
                                                        className='text-lg'
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
        )
}

const MobileNavBar = () => {
        return (
                <div
                        className='flex md:hidden gap-5 justify-between items-center py-2 px-5 bg-slate-50 shadow'
                >
                        <Logo />
                        <MenuIcon/>
                </div>
        )
}

const MobileMenu = () => {
        return (
                <div
                        className='flex flex-col md:hidden gap-5 py-2 px-5 bg-slate-50 shadow'
                >
                        <Logo />
                        <nav>
                                <ul
                                        className='flex justify-between gap-5'
                                >
                                        {menuLinks.map((items, key) => (
                                                <li
                                                        key={key}
                                                        className='text-lg'
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
        )
}

const Logo = ({ logo }) => {
        return (
                <Image 
                        {...logo}
                        className='size-full max-w-14'
                />
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

const MenuIcon = () => {
        return (
                <svg 
                        xmlns="https://www.w3.org/2000/svg" 
                        width="1em" 
                        height="1em" 
                        viewBox="0 0 512 512"
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

const CtaBtn = () => {
        return (
                <Link 
                        href='/' 
                        title='Click button to hire me'
                        className='text-lg py-3 px-10 bg-slate-950 text-sky-100 hover:bg-sky-950 transition-all duration-300'
                >
                        Hire me
                </Link>
        )
}