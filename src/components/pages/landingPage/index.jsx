import React from 'react'
import NavBar from './navBar'
import HeroSection from './heroSection'
import CaseStudySection from './caseStudySection'
import TestimonialsSection from './testimonialsSection'

export default function LandingPageComponent() {
        return (
                <div>
                        <NavBar/>
                        <main>
                                <HeroSection/>
                                <CaseStudySection/>
                                <TestimonialsSection/>
                        </main>
                </div>
        )
}
