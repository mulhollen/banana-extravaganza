import Image from 'next/image'

import aiHeroGif from './AIHeroGif.gif'
import artInvestigator from './ArtInvestigator.jpg'
import challenge from './challenge.jpg'
import liv_app_2 from './liv_app_2.jpg'
import liv_app from './liv_app.jpg'
import liv_beads from './liv_beads.jpg'
import liv_buttonWall from './liv_buttonWall.jpg'
import liv_crouch from './liv_crouch.jpg'
import liv_thinking from './liv_thinking.jpg'
import mainScreen from './mainScreen.jpg'
import mainSquare from './mainSquare.jpg'
import search from './search.jpg'
import soundSuit from './soundSuit.jpg'
import soundSuitSquare from './soundSuitSquare.jpg'

type ArtInvestigatorProps = {
  classes?: string
}

const defaultProps: ArtInvestigatorProps = {
  classes: ''
}
      
function PortfolioAI(props: ArtInvestigatorProps) {
  return (
    <Image
      src={mainSquare}
      className={props.classes}
      alt='App home screen with alligator looking through magnifying glass. Activity buttons available for before, during, and after the art exhibit.'
    />
  )
  }
PortfolioAI.defaultProps = defaultProps;


export {
  PortfolioAI,
  aiHeroGif, 
  artInvestigator, 
  challenge, 
  liv_app_2, 
  liv_app, 
  liv_beads, 
  liv_buttonWall, 
  liv_crouch, 
  liv_thinking, 
  mainScreen, 
  mainSquare, 
  search, 
  soundSuit, 
  soundSuitSquare, 
}