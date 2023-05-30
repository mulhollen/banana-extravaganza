import Image from 'next/image'

import { OtherProjects } from '@/components/shared-components'

import { persona, artlens, canvasCrop } from '@/img/Canvas'

export default function Canvas() {

  return (
    <div className='app__main--proj'>
      <Image className='w-100 h-auto' src={canvasCrop} alt='' />                
      <div className='d-flex justify-content-center flex-column port-h1 bodyWidth'>
        <h1 className='mt-5 text-center portH1'>Where fine art meets fun.</h1>
        <h3 className='m-wide'>
        Canvas is a multi-player, gamified, interactive art experience in the vain of The Cleveland Museum of Art ARTLENS Gallery exhibits. Canvas pits one to four players against each other to create a sort of exquisite corps of a broken-up piece of fine art.</h3>
      </div>
      <div className='bodyWidth d-flex justify-content-center yellow flip mb-3 mx-auto'>
        <div>
          <h3 className='px-5 pt-5'>meet sidney and charlie.</h3>
          <p className='px-5 py-3'>
            Sidney and Charlie are the couple that spend their weekends looking for the next cool thing to do. Find them wandering in local breweries and shops, seeking out the next &qquot;it&quot; restaurants, lounging and listening to live, local music. They love to love to get out and experience a new twist on an old hang.                            
            <br /><br />
            When it comes to fine art, Sid and Char are the couple that likes it but feels they’re missing something something from the process. They’re more likely to go to a museum or gallery that includes some type of interaction; the interaction makes them feel like they’re “getting it.”
          </p>
        </div>
        <Image className='pl-0 portPic' src={persona} alt='' />
      </div>
      <div className='bodyWidth px-wide py-5 my-5 border border-dark'>
        <div>
          <h3 className='mb-4'>the challenge:</h3>
          <p className='px-5 py-3'>
            How might I create an interactive game that teaches players to notice and understand more about fine art. How can I make fine art fun? How can I pay homage to The Cleveland Museum of Art, which inspired me to become a front end developer?
          </p>
        </div>
      </div>
      <div className='bodyWidth d-flex justify-content-center yellow flip my-3 mx-auto'>
        <Image className='pl-0 portPic' src={persona} alt='' />
        <div>
          <h3 className='px-5 pt-5'>user focused goals:</h3>
          <ul className='px-5 py-3'>
            <li>Gamify fine art by creating a multiplayer game that encourages the player to take a closer look at the intricacies of that art.</li>
            <li>Include a drawing component building on a current exhibit at The Cleveland Museum of Art that users wished required more skill.</li>
            <li>Pay homage to The Cleveland Museum of Art’s interactive gallery, ARTLENS Gallery built by Local Projects which inspired me to become a developer.</li>
            <li>Use technology to help build understanding and knowledge that can be carried to traditional art experiences.</li>
          </ul>
        </div>
      </div>
      <div className='bodyWidth px-wide py-5 my-5 border border-dark'>
        <h3 className='mb-4'>
          <i>&quot;Interacting with art is about the only way I can understand it&quot;</i>
        </h3>
      </div>
      <div className='bodyWidth d-flex justify-content-center yellow flip mb-3 mx-auto'>
        <div>
          <h3 className='px-5 pt-5'>the Cleveland Museum of Art:</h3>
          <p className='px-5 py-3'>
            ARTLENS Gallery at The Cleveland Museum of Art in an interactive gallery experience created by Local Projects. Upon its debut, ARTLENS offered the largest multitouch MicroTile screen in the United States. At 40-feet-wide the wall displays over 4,000 images from the museum’s collection and allows users to browse works, build tours, and interact with art that is both in rotation and in storage. Along with the ever impressive ARTLENS wall, the gallery also displays an array of other experiences for guests to interact with both digital and physical art.
            <br />
            <br />
            This gallery is the impetus behind my path to development. It helped me to realize how interactive media experiences can stimulate learning and growth in an engaging and fun way. For my final capstone at Nashville Software School, I wanted to delve into my own version of an ARTLENS interactive art experience using it to showcase my skills in User Interface Design and rapid React development. 
          </p>
        </div>
        <Image className='pl-0 portPic' src={artlens} alt='' />
      </div>
      <div className='bodyWidth px-wide py-5 my-5 border border-dark'>
        <div>
          <h3 className='mb-4'>the code:</h3>
          <p className='px-5 py-3'>
            In this project there are three pieces of code that stand out: 1. Creating my first project with multiple interacting views. 2. The Canvas view that experiences no direct interaction and changes completely based on changes to the database and state. And 3. Creating a multiplayer game that returns different views to each player’s own device without authentication.
            <br />
            <br />
            I’m particularly proud of the third; using Firebase and local storage, I was able to create a game where the user can use their phone or tablet to scan a QR code and fully play a game without downloading an app or authenticating. This was a big deal to my user who is most interested in experiencing an exhibit without having it follow them around for the rest of their days. To the left is the code that makes this possible, a series of database fetches and listeners, x lines of code that make a difference.
          </p>
        </div>
      </div>
      <div className='bodyWidth d-flex justify-content-center yellow flip my-3 mx-auto'>
        <Image className='pl-0 portPic' src={persona} alt='' />
        <div>
          <h3 className='px-5 pt-5'>Version 2.0.</h3>
          <ul className='px-5 py-3'>
            <li>Include a “paint brush” size picker in the drawing portion of the game</li>
            <li>Grab the canvas drawing as an dataURL in addition to an array of lines with a width and height to allow for quicker and less verbose data processing.</li>
          </ul>
        </div>
      </div>
      <Image className='w-100 mt-5 h-auto' src={persona} alt='' />
      <OtherProjects current='Canvas' />
    </div>
  )
}
