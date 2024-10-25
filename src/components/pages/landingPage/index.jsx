import React from 'react'
import NavBar from './navBar'
import HeroSection from './heroSection'
import CaseStudySection from './caseStudySection'
import TestimonialsSection from './testimonialsSection'
import SkillsSection from './skillsSection'
import GetInTouch from './getInTouch'

export default function LandingPageComponent() {
        return (
                <>
                        <NavBar/>
                        <main>
                                <HeroSection/>
                                <CaseStudySection/>
                                <TestimonialsSection/>
                                <SkillsSection/>
                                <GetInTouch/>
                        </main>
                </>
        )
}
