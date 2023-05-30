import Link from 'next/link'
import Image from 'next/image'

import PortfolioSquare from './portfolio-square'
import { PortfolioAI } from '@/img/ArtInvestigator'
import { PortfolioHS } from '@/img/hStreamStore'
import { PortfolioEH } from '@/img/EverythingHappens'
import { PortfolioCV } from '@/img/Canvas'

type MinimalPortfolioProps = {
  imageClasses: string
}

const defaultProps: MinimalPortfolioProps = {
  imageClasses: 'w-100 h-auto object-fit-contain'
}


const MinimalPortfolio = (props : MinimalPortfolioProps) => {
  return (
    <section className='bodyWidth'>
      <h2 className='text-center nunito my-5'>here&apos;s what I&apos;ve been working on:</h2>
      <div>
        <div className='d-flex flex-row'>
          <PortfolioSquare linkPath='/hstream-store' img={<PortfolioHS classes={props.imageClasses} />} title={<h3>hStream<br />store</h3>} />
          <PortfolioSquare linkPath='/art-investigator' img={<PortfolioAI classes={props.imageClasses} />} title={<h3>art<br />investigator</h3>} />
        </div>
        <div className='d-flex flex-row'>
          <PortfolioSquare linkPath='/everything-happens' img={<PortfolioEH classes={props.imageClasses} />} title={<h3>everything<br />happens</h3>} />
          <PortfolioSquare linkPath='/canvas' img={<PortfolioCV classes={props.imageClasses} />} title={<h3>canvas</h3>} />
        </div>
      </div>
    </section>
  );
}

MinimalPortfolio.defaultProps = defaultProps;

export default MinimalPortfolio;




