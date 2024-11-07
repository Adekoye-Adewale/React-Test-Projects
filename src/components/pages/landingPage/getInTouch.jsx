import React from 'react'

export default function GetInTouch() {
        return (
                <section className='bg-black min-h-[50vh] py-20 px-5 overflow-hidden z-[1] text-white'>
                        <div className='max-w-7xl mx-auto'>
                                <LabelContent />
                                <Form/>
                        </div>
                </section>
        )
}

const LabelContent = () => {
        return (
                <div className='grid gap-2 mx-auto justify-center text-center max-w-[700px]'>
                        <div>
                                <h2 className='text-3xl md:text-5xl font-bold'>
                                        Get In Touch
                                </h2>
                        </div>
                        <div>
                                <p className='text-lg md:text-2xl'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </p>
                        </div>
                </div>
        )
}

const Form = () => {
        return (
                <form 
                        className='grid gap-2 mx-auto mt-10 max-w-96 text-sky-50'
                        action='/'
                >
                        <span className='grid'>
                                <label 
                                        htmlFor="email" 
                                        className="block text-2xl font-normal"
                                >
                                        Email
                                </label>
                                <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        autoComplete="email" 
                                        className="block flex-1 border-2 border-sky-200 rounded-md bg-transparent focus-within:text-slate-950 focus-within:bg-sky-50 py-1.5 px-2 w-full h-10 mt-2 placeholder:text-gray-400 focus:outline-0 valid:border-green-700 invalid:border-red-700 sm:text-sm" 
                                        placeholder="janesmith@sample.com"
                                        required
                                />
                        </span>
                        <span className='grid'>
                                <label
                                        htmlFor="phone"
                                        className="block text-2xl font-normal"
                                >
                                        Phone Number
                                </label>
                                <input
                                        type="tel"
                                        min={10}
                                        name="phone"
                                        id="phone"
                                        autoComplete="phone"
                                        className="block flex-1 border-2 border-sky-200 rounded-md bg-transparent focus-within:text-slate-950 focus-within:bg-sky-50 py-1.5 px-2 w-full h-10 mt-2 placeholder:text-gray-400 focus:outline-0 valid:border-green-700 invalid:border-red-700 sm:text-sm"
                                        placeholder="2349012340987"
                                        required
                                />
                        </span>
                        <span className='grid'>
                                <label
                                        htmlFor="message"
                                        className="block text-2xl font-normal"
                                >
                                        Message
                                </label>
                                <textarea 
                                        name="message"
                                        id="message"
                                        className="block flex-1 border-2 border-sky-200 rounded-md bg-transparent focus-within:text-slate-950 focus-within:bg-sky-50 py-1.5 px-2 w-full h-32 mt-2 placeholder:text-gray-400 focus:outline-0 valid:border-green-700 invalid:border-red-700 sm:text-sm"
                                />
                        </span>
                        <input 
                                type="button" 
                                value="Submit" 
                                className='bg-sky-900 py-4 px-10 mt-2 rounded-md hover:bg-sky-700 transition-all duration-300 cursor-pointer'
                        />
                </form>
        )
}