import Image from 'next/image'

import { OtherProjects, Video } from '@/components/shared-components'

import { 
  oldStore,
  covidBannerDesktop,
  courseTabsLaptop,
  faq,
} from '@/img/hStreamStore'

export default function HstreamStore() {

  return (
    <div className='app__main--proj'>
    <Video video='https://firebasestorage.googleapis.com/v0/b/lm-personal-site.appspot.com/o/StoreWalkThrough_sm.mp4?alt=media&token=1df0bdfe-cada-4f82-a491-29955843c86c' />                
    <div className='d-flex justify-content-center flex-column port-h1 bodyWidth'>
      <h1 className='mt-5 text-center portH1'>Improving the quality of healthcare by developing the people who deliver care</h1>
      <h3 className='m-wide'>Modern React update enabling B2B and B2C transactions of courses in continuing healthcare education. Utilizing headless CMS Znode, I worked as one of two React developers architecting and building the site over a four-month zero-to-release period.</h3>
    </div>
    <div className='bodyWidth d-flex justify-content-center yellow mb-3 mx-auto flip'>
      <div className='widthBlock-50'>
        <h3 className='px-5 pt-5'>meet hStream Store 1.0</h3>
        <p className='px-5 py-3'>
          We had the opportunity to give users an up-to-date, intuitive, and responsive way to look for continuing healthcare education. HealthStream is a major provider for training for healthcare organizations throughout the United States. Our challenge was to build a product that would be instinctual for a group of existing users who do not often find themselves at the computer.
          <br /><br />
          Much like trying to find something to watch, switching between streaming service and streaming service, finding healthcare continuing education courses can be cumbersome and overwhelming when trying to make the right choice. We wanted to make sure our update made users feel empowered that they made a good choice.
        </p>
      </div>
      <Image className='p-0 cover widthBlock-50' src={oldStore} alt='' />
    </div>
    <div className='bodyWidth my-5 mx-auto d-flex justify-content-center'>
      <Image className='w-100 h-auto' src={covidBannerDesktop} alt='' />
    </div>
    <div className='bodyWidth d-flex justify-content-center yellow flip my-3 mx-auto'>
      <Image className='pl-0 cover widthBlock-50' src={courseTabsLaptop} alt='' />
      <div className='widthBlock-50'>
          <h3 className='px-5 pt-5'>the code:</h3>
          <p className='px-5 py-3'>
            The Project is a React App utilizing the React Context API and React Hooks. The base of the app is built to be a boilerplate for future React projects; including the Airbnb style guide, Eslint, and Prettier, Enzyme and Jest testing, and OAuth through an in-company service. 
            <br /><br />
            The app itself was built to focus on a desktop view, but allow a tablet or mobile experience; features not available in the previous version of the store. The components were designed to be reused throughout a component library and documented through Storybook.
            <br /><br />
            Collaborating with a senior contractor and back-end staff, we were able to rapidly build out an app that includes a variable shopping experience based on API held offerings, search with robust filtering, space for marketing to highlight content, and an authenticated in-app checkout experience.
            <br /><br />
            The app was launched March of 2020 with a condensed added sprint to allot for free courses so we could offer Covid-19 training content on launch.
        </p>
      </div>
    </div>
    <div className='bodyWidth p-5 my-5 border border-dark'>
      <div>
        <h3 className='mb-4'>lessons learned:</h3>
        <ul className='px-wide py-3'>
          <li>Creating streamlined components for reuse can only save you time to a point. Don’t sink your costs when it would be quicker to rewrite.</li>
          <li>Sometimes no one knows the answer to the ticket you’re assigned and not knowing how to solve something from the start is okay and happens to everyone.</li>
          <li>It’s really fun to make a product that makes things better for the user.</li>
          <li>Every &quot;out of the box&quot; CMS has a downside.</li>
          <li>React Context takes a tiny fraction of the time to learn in comparison to Redux - or maybe it was just much easier once you’ve used Redux. </li>   
        </ul>
      </div>
    </div>
    <div className='bodyWidth d-flex justify-content-center yellow flip my-3 mx-auto'>
      <div className='pl-5 widthBlock-50'>
        <h3 className='px-5 pt-5 mb-4'>the tech stack:</h3>
        <ul className='px-wide'>
          <li>React</li>
          <li>React Context API</li>
          <li>React Hooks</li>
          <li>Sass</li>
          <li>Airbnb Style guide</li>
          <li>Prettier</li>
          <li>ESLint</li>
          <li>Enzyme</li>
          <li>Jest</li>
          <li>Reactstrap</li>
          <li>Bootstrap</li>
          <li>Znode</li>
        </ul>
      </div>
      <Image className='p-0 cover widthBlock-50' src={faq} alt='Laptop open to store with FAQ section visible to user' />
    </div>
    <OtherProjects current='hStreamStore' />
  </div>
  )
}
