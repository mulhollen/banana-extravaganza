import { Video, OtherProjects } from "@/components/shared-components"
import Image from 'next/image'

import { 
  cubePeople,
  cubeAndBoard,
  cubeInPlay,
  cameron
} from '@/img/DreamCube'

export default function FieldOfDreams() {

  return (
    <div className='app__main--proj'>
    <Video video='https://firebasestorage.googleapis.com/v0/b/lm-personal-site.appspot.com/o/introducing_dreamcube%20(720p).mp4?alt=media&token=89c00cd5-8608-4b40-a90b-95e22286b6cf' />                
    <div className='d-flex justify-content-center flex-column port-h1 bodyWidth'>
      <h1 className='mt-5 text-center portH1'>Extended reality platform for immersive storytelling</h1>
      <h3 className='m-wide'>An immersive Spectacle that’s like walking into a video game</h3>
    </div>
    <div className='bodyWidth d-flex justify-content-center yellow mb-3 mx-auto flip'>
      <div className='widthBlock-50'>
        <h3 className='px-5 pt-5'>what if you could train with manchester united?</h3>
        <p className='px-5 py-3'>
          Collaborating with Harves Entertainment and Manchester United Football Club, the Dream Cube offers an extended reality, physical-digital platform for unprecedented immersive experiences. With seamless interactivity and shared engagement, the DreamCube delivers a new communal virtual reality.
        </p>
      </div>
      <Image className='p-0 cover widthBlock-50' src={cubePeople} alt='Group of people standing, cheering, and clapping in front of Dream Cube projecting video of Manchester United players celebrating.' />
    </div>
    <div className='bodyWidth my-5 mx-auto d-flex justify-content-center'>
      <Image className='w-100 h-auto' src={cubeAndBoard} alt='Player inside Dream Cube dribbling soccer ball while friends watch and engage with game board. Dream Cube is showing projected stats and game play projected on Cube walls.' />
    </div>
    <div className='bodyWidth d-flex justify-content-center yellow flip my-3 mx-auto'>
      <Image className='pl-0 cover widthBlock-50' src={cubeInPlay} alt='Man in athletic clothing dribbling soccer ball while friends sit behind him at game board cheering and hold Manchester United memorabilia.' />
      <div className='widthBlock-50'>
          <h3 className='px-5 pt-5'>what I contributed:</h3>
          <p className='px-5 py-3'>
            The Dream Cube experience lives at the intersection of extraordinary visual immersion and shared group fun. In current implementation, Manchester United FC&apos;s “Theatre of Dreams” experience center in Beijing offers 16 DreamCubes where guests dribble and shoot like pros. The center opened to around-the-block lines and rave reviews.
            <br /><br />
            In collaboration with Unity game engineers, I developed a React.js app to begin, progress, and engage with game play in the cube. This touch screen board connected with the Game Center to assign players to one of several Dream Cubes. Once players engage with the board to begin their game, they are able to choose from multiple drills and activities at various difficulties to play in the cube. During play, other players are able to watch the live stats of active game play. When the game timer comes to a close, players are able to see a session scoreboard and experience closing media. 
        </p>
      </div>
    </div>
    <div className='bodyWidth d-flex justify-content-center yellow flip my-3 mx-auto'>
      <div className='pl-5 widthBlock-50'>
        <h3 className='px-5 pt-5 mb-4'>the tech stack:</h3>
        <ul className='px-wide'>
          <li>React.js</li>
          <li>React Context API</li>
          <li>React Hooks</li>
          <li>React Testing Library</li>
          <li>Sass</li>
          <li>Prettier</li>
          <li>ESLint</li>
          <li>Reactstrap</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <Image className='p-0 cover widthBlock-50' src={cameron} alt='Man in motion dribbling soccer ball in front of video projection of artistically placed soccer stadium elements.' />
    </div>
    <OtherProjects current='dreamCube' />
  </div>
  )
}
