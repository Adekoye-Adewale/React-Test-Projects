import Link from 'next/link'
import React from 'react'

export default function SecBtn({ label, link, target }) {
        return (
                <Link 
                        href={link}
                        title={label}
                        target={target}
                        className='py-2 px-5 text-blue-100 bg-blue-700 hover:bg-blue-900'
                >
                        {label}
                </Link>
        )
}
