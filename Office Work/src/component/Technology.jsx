import React from 'react'
import HeroSection from '../pages/Technology/HeroSection'
import TopInstitutions from '../pages/Technology/TopInstitutions'
import UniversityPartners from '../pages/Technology/UniversityPartners'
import Curriculum from '../pages/Technology/Curriculum'
import CourseProjects from '../pages/Technology/CourseProjects'
import ToolsTechnologies from '../pages/Technology/ToolsTechnologies'
import CourseInstructors from '../pages/Technology/CourseInstructors'
import CurriculumComparison from '../pages/Technology/CurriculumComparison'

const Technology = () => {
  return (
    <div>
     <HeroSection/>
     <TopInstitutions/>
     <UniversityPartners/>
     <Curriculum/>
     <CourseProjects/>
     <ToolsTechnologies/>
     <CourseInstructors/>
     <CurriculumComparison/>
    </div>
  )
}

export default Technology
