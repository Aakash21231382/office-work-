import React from 'react'

import Banner from '../pages/Banner'
import ChooseCareer from '../pages/ChooseCareer'
import University from '../pages/University'
import OnlineCourse from '../pages/OnlineCourse'
import SubscriptionBanner from '../pages/SubscriptionBanner'
import InstructionSection from '../pages/InstructionSection'
import SuccessSection from '../pages/SuccessSection'
import AwardsSection from '../pages/AwardsSection'

const Dashbord = () => {
  return (
    <div>
      <Banner/>
      <ChooseCareer/>
      <University/>
      <OnlineCourse/>
      <SubscriptionBanner/>
      <InstructionSection/>
      <SuccessSection/>
      <AwardsSection/>
    </div>
  )
}

export default Dashbord
