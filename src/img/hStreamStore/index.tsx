import Image from 'next/image'

import courseTabs10 from './course_tabs_coursesIncluded-closed-10.png'
import courseTabsAll from './course_tabs_coursesIncluded-closed-all.png'
import courseTabsOpen from './course_tabs_coursesIncluded-open.png'
import courseTabs from './course_tabs_overview.png'
import courseTabsLaptop from './CourseTabsLaptop.png'
import covidBannerDesktop from './CovidBannerDesktop.png'
import covidBannerLaptop from './CovidBannerLaptop.png'
import faq from './faq_laptop.png'
import homeBannerCovid from './home_banner_covid.png'
import homeBanner from './home_banner.png'
import homeFaq from './home_faq.png'
import homePartners from './home_partners.png'
import hstreamOriginal from './hstream_original.png'
import oldStore from './OldStore.png'
import storeComputerView from './storeComputerView.png'

type HstreamProps = {
  classes?: string
}

const defaultProps: HstreamProps = {
  classes: ''
}
      
function PortfolioHS(props: HstreamProps) {
  return (
    <Image
      src={covidBannerLaptop}
      className={props.classes}
      alt='Home Page from HealthStream store on laptop with hands typing. Web page is showing Covid-19 hero banner and product category carousel.'
    />
  )
  }
PortfolioHS.defaultProps = defaultProps;

export {
  PortfolioHS,
  courseTabs10,
  courseTabsAll,
  courseTabsOpen,
  courseTabs,
  courseTabsLaptop,
  covidBannerDesktop,
  covidBannerLaptop,
  faq,
  homeBannerCovid,
  homeBanner,
  homeFaq,
  homePartners,
  hstreamOriginal,
  oldStore,
  storeComputerView
}