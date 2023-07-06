import Link from 'next/link';
import Image from 'next/image'

import { PortfolioWide } from '@/components/shared-components';

import { PortfolioDC } from '@/img/DreamCube';
import { PortfolioHS } from '@/img/hStreamStore'
import { PortfolioAI } from '@/img/ArtInvestigator'
import { PortfolioEH } from '@/img/EverythingHappens'
import { PortfolioCV } from '@/img/Canvas'
import { SquiggleLine } from '@/img/General'

type PortfolioProps = {
  imageClasses: string
}

const defaultProps: PortfolioProps = {
  imageClasses: 'pl-0 h-auto flip-50 portfolioImg'
}


export default function Portfolio(props : PortfolioProps) {

  return (
    <div className='bodyWidth'>
      <h1 className='text-center nunito my-5'>here&apos;s what I&apos;ve been working on:</h1>
      <div className='portfolioContent'>
        <PortfolioWide
          linkPath={'/dream-cube'}
          title={<h2 className='mb-5'>dream cube</h2>}
          description={'Collaborating with Harves Entertainment and Manchester United Football Club, the Dream Cube offers an extended reality, physical-digital platform for unprecedented immersive experiences. With seamless interactivity and shared engagement, the DreamCube delivers a new communal virtual reality.'}
          tools={'React - React Context API - React Hooks - React Testing Library - Sass - Prettier - ESLint - Reactstrap - Bootstrap'}
          img={<PortfolioDC classes={props.imageClasses} />}
        />
        <SquiggleLine classes='portfolioContent__lineBreak' />
        <PortfolioWide
          linkPath={'/hstream-store'}
          flip
          title={<h2 className='mb-5'>hStream<br />Store</h2>}
          description={'Modern React update enabling B2B and B2C transactions of courses in continuing healthcare education. Utilizing headless CMS Znode, I worked as one of two React developers architecting and building the site over a four-month zero-to-release period.'}
          tools={'React - React Context API - React Hooks - Sass - Reactstrap - znode - Airbnb Prettier + ESLint - Enzyme - Jest'}
          img={<PortfolioHS classes={props.imageClasses} />}
        />
        <SquiggleLine classes='portfolioContent__lineBreak' />
        <PortfolioWide
          linkPath={'/art-investigator'}
          title={<h2 className='mb-5'>art<br />investigator</h2>}
          description={'Art, especially gallery art and museum art, can be hard to digest and alienating for children. The goal of Art Investigator is to make museum art understandable, relatable, and fun for children at an early reading age (7-11 years old). Working with Nick Cave&apos;s Feat. exhibit at The Frist Museum in Nashville, Tennessee, Art Investigator is an interactive tour through the exhibit that focuses on learning, emotional intelligence, and creating interaction points for parents and their children.'}
          tools={'User Research - User Testing - UX/UI Design - CRUD Application - Firebase - Firebase Storage Bucket - Jquery - Sass - Bootstrap'}
          img={<PortfolioAI classes={props.imageClasses} />}
        /> 
        <SquiggleLine classes='portfolioContent__lineBreak' />
        <PortfolioWide
          linkPath={'/everything-happens'}
          flip
          title={<h2 className='mb-5'>everything<br />happens</h2>}
          description={'A collaborative dance + interactive media piece that looks into hopes, dreams, and post-collegiate dissonance. Using research to inspire choreography, video production,  and set design,  <i>Everything Happens</i> was a live concert work of integrated media design and modern dance.'}
          tools={'Media Design - Stage Managing - Set Design - Video Production in Avid Media Composer & Adobe After Effects - Lighting Design'}
          img={<PortfolioEH classes={props.imageClasses} />}
        />
        <SquiggleLine classes='portfolioContent__lineBreak' />
        <PortfolioWide
          linkPath={'/canvas'}
          title={<h2 className='mb-5'>canvas</h2>}
          description={'Canvas is a multi-player, gamified, interactive art experience in the vain of The Cleveland Museum of Art ARTLENS Gallery exhibits. Canvas pits one to four players against each other to create a sort of exquisite corps of a broken-up piece of fine art.'}
          tools={'React - Firebase - React Canvas Draw - React Color - React Router Dom - Bootstrap'}
          img={<PortfolioCV classes={props.imageClasses} />}
        />
      </div>
    </div>
  )
}

Portfolio.defaultProps = defaultProps;