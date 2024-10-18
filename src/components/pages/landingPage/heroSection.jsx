import React from 'react'

export default function HeroSection() {
        return (
                <section 
                        className='bg-sky-700 min-h-[50vh] py-20 px-5'
                >
                        <Content/>
                </section>
        )
}

const Content = () => {
        return (
                <div>
                        <h1 className='text-3xl font-bold text-white'>
                                Welcome to our website
                        </h1>
                        <p>
                                This is a paragraph of text
                        </p>
                </div>
        )
}