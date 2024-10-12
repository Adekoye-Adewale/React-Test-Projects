import React from 'react'
import NavBar from './navBar'
import HeroSection from './heroSection'
import AboutSection from './aboutSection'

export default function LandingPageComponent() {
        return (
                <div>
                        <NavBar/>
                        <main>
                                <HeroSection/>
                                <AboutSection/>
                        </main>
                </div>
        )
}
