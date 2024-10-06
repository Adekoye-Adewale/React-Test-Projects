import Link from 'next/link'
import React from 'react'

export default function PriBtn({ label, link, target }) {
        return (
                <Link
                        href={link}
                        title={label}
                        target={target}
                        className='py-2 px-5 text-blue-100 bg-blue-700 hover:bg-blue-900 rounded-xl duration-300 transition-all'
                >
                        {label}
                </Link>
        )
}
