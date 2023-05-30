import Image from 'next/image'

import artlens from './artlens.jpg'
import artlensWall from './artlensWall.jpg'
import canvas from './Canvas.png'
import canvasCrop from './CanvasCrop.png'
import cmaGif from './CMAgif.gif'
import persona from './persona.jpeg'

type CanvasProps = {
  classes?: string
}

const defaultProps: CanvasProps = {
  classes: ''
}
      
function PortfolioCV(props: CanvasProps) {
  return (
    <Image
      src={canvas}
      className={props.classes}
      alt='Canvas app logo: blue painter&apos;s pallette graphic with text, canvas, below.'
    />
  )
}

PortfolioCV.defaultProps = defaultProps;


export { PortfolioCV, artlens, artlensWall, canvas, canvasCrop, cmaGif, persona }