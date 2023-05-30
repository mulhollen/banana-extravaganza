import Image from 'next/image'

import ehSquare from './EHsquare.jpg'
import ellyn from './Ellyn.jpg'
import interview from './interview.png'
import kristen from './kristen.jpg'
import single from './Single.jpg'
import trio from './Trio.jpg'

type EverythingHappensProps = {
  classes?: string
}

const defaultProps: EverythingHappensProps = {
  classes: ''
}
      
function PortfolioEH(props: EverythingHappensProps) {
  return (
    <Image
      src={ehSquare}
      className={props.classes}
      alt='Dancer in orange sweater and jeans standing with arms raised into a y-shape. Projection screens and other sitting dancers visible in the background.'
    />
  )
}

PortfolioEH.defaultProps = defaultProps;


export { PortfolioEH, ehSquare, ellyn, interview, kristen, single, trio } 