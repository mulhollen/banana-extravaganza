import PortfolioSquare from './portfolio-square'
import { PortfolioAI } from '@/img/ArtInvestigator'
import { PortfolioHS } from '@/img/hStreamStore'
import { PortfolioEH } from '@/img/EverythingHappens'
import { PortfolioCV } from '@/img/Canvas'

type OtherProjectsProps = {
  current: string,
  imageClasses: string
}

const defaultProps: OtherProjectsProps = {
  current: 'Canvas',
  imageClasses: 'w-100 h-auto object-fit-contain'
}
export default function OtherProjects(props: OtherProjectsProps) {
  return (
    <section className='bodyWidth otherProjects'>
      <h3 className='text-center nunito my-5'>other projects:</h3>
      <div>
        <div className='d-flex flip'>
          {props.current !== 'hStreamStore' && (
            <PortfolioSquare linkPath='/hstream-store' img={<PortfolioHS classes={props.imageClasses} />} title={<h3>hStream<br />store</h3>} />

          )}
          {props.current !== 'ArtInvestigator' && (
            <PortfolioSquare linkPath='/art-investigator' img={<PortfolioAI classes={props.imageClasses} />} title={<h3>art<br />investigator</h3>} />
          )}
          {props.current !== 'Canvas' && (
            <PortfolioSquare linkPath='/canvas' img={<PortfolioCV classes={props.imageClasses} />} title={<h3>canvas</h3>} />

          )}
          {props.current !== 'EverythingHappens' && (
            <PortfolioSquare linkPath='/everything-happens' img={<PortfolioEH classes={props.imageClasses} />} title={<h3>everything<br />happens</h3>} />

          )}
        </div>
      </div>
    </section>
  )
}

OtherProjects.defaultProps = defaultProps;


