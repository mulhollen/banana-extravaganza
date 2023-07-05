import Image from 'next/image'

import cameron from './DreamCubeCameron.png'
import cubeCloseScreenWall from './DreamCubeCloserScreen.jpeg'
import cubeAndBoard from './DreamCubeFull.jpeg'
import cubeGif from './DreamCubeGif.gif'
import cubeInPlay from './DreamCubePlaying.jpeg'
import cubeSquare from './DreamCubeSquare.png'
import cubePeople from './DreamCubePeople.jpeg'
import cubeHitMe from './hitme_dreamcube.gif'

type DreamCubeProps = {
  classes?: string
}

const defaultProps: DreamCubeProps = {
  classes: ''
}
      
function PortfolioDC(props: DreamCubeProps) {
  return (
    <Image
      src={cubeSquare}
      className={props.classes}
      alt='Man in motion dribbling soccer ball in front of video projection of artistically placed soccer stadium elements.'
    />
  )
}

function PortfolioDCWide(props: DreamCubeProps) {
  return (
    <Image
      src={cameron}
      className={props.classes}
      alt='Man in motion dribbling soccer ball in front of video projection of artistically placed soccer stadium elements.'
    />
  )
}

PortfolioDC.defaultProps = defaultProps;


export { cameron, cubeCloseScreenWall, cubeAndBoard, cubeGif, cubeInPlay, cubePeople, cubeHitMe, PortfolioDC, PortfolioDCWide }