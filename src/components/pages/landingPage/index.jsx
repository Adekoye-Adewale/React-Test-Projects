'use client'
import React from 'react'
import { ThemeProvider } from './ThemeContext'
import Components from './components'

export default function LandingPageComponent() {
        return (
                <ThemeProvider>
                        <Components/>
                </ThemeProvider>
        )
}
