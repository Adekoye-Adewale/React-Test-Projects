import NavBar from './navBar'
import HeroSection from './heroSection'
import CaseStudySection from './caseStudySection'
import TestimonialsSection from './testimonialsSection'
import SkillsSection from './skillsSection'
import GetInTouch from './getInTouch'

export default function Components() {
        return (
                <div className={`text-slate-950 dark:text-sky-50 scroll-smooth`}>
                        <NavBar />
                        <main>
                                <HeroSection />
                                <CaseStudySection />
                                <TestimonialsSection />
                                <SkillsSection />
                                <GetInTouch />
                        </main>
                </div>
        )
}