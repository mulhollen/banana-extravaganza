import Image from 'next/image'

import artlens from './artlens.jpg'
import artlensWall from './artlensWall.jpg'
import canvas from './Canvas.png'
import cmaGif from './CMAgif.gif'
import persona from './persona.jpeg'
import couplePlaying from './couplePlaying.png'
import projectionOriginal from './projectionOriginal.png'
import playerDrawing from './playerDrawingVertical.png'
import projectionCorpse from './projectionCorpse.png'
import projectionOriginalCrop from './projectionOriginalCrop.png'

type CanvasProps = {
  classes?: string
}

const defaultProps: CanvasProps = {
  classes: ''
}
      
function PortfolioCV(props: CanvasProps) {
  return (
    <Image
      src={projectionOriginalCrop}
      className={props.classes}
      alt=' '
    />
  )
}

PortfolioCV.defaultProps = defaultProps;


export { 
  PortfolioCV,
  artlens,
  artlensWall,
  canvas,
  cmaGif,
  persona,
  couplePlaying,
  projectionOriginal,
  playerDrawing,
  projectionCorpse,
  projectionOriginalCrop
 }