import InterestContent from './interest-content.json';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

export default function Interests() {
  return (
    <section>
      <div className='desktop-only myspace__interests mb-4 mx-3'>
        <h3 className='mb-0 pt-1 text-light'>Lindsay&apos;s Interests</h3>
        <div className='d-flex flex-column pt-1'>
          <div className='d-flex mx-1 mb-1'>
            <h4 className='m-0 mr-1 p-1'>General</h4>
            <p className='m-0 p-1'>
              {InterestContent.General}
            </p>
          </div>
          <div className='d-flex mx-1 mb-1'>
            <h4 className='m-0 mr-1 p-1'>Tech</h4>
            <p className='m-0 p-1'>
              {InterestContent.Tech}
            </p>
          </div>
          <div className='d-flex mx-1 mb-1'>
            <h4 className='m-0 mr-1 p-1'>Music</h4>
            <p className='m-0 p-1'>
              {InterestContent.Music}
            </p>
          </div>
          <div className='d-flex mx-1 mb-1'>
            <h4 className='m-0 mr-1 p-1'>Podcasts</h4>
            <p className='m-0 p-1'>
              {InterestContent.Podcasts}
            </p>
          </div>
        </div>
      </div>
      <div className='mobile-only myspace__interests mb-4 mx-3'>
        <Accordion atomic={true}>
            <AccordionItem title='Lindsay&apos;s Interests'>
              <div className='d-flex flex-column pt-1'>
                <div className='d-flex mx-1 mb-1'>
                  <h4 className='m-0 mr-1 p-1'>General</h4>
                  <p className='m-0 p-1'>
                    {InterestContent.General}
                  </p>
                </div>
                <div className='d-flex mx-1 mb-1'>
                  <h4 className='m-0 mr-1 p-1'>Tech</h4>
                  <p className='m-0 p-1'>
                    {InterestContent.Tech}
                  </p>
                </div>
                <div className='d-flex mx-1 mb-1'>
                  <h4 className='m-0 mr-1 p-1'>Music</h4>
                  <p className='m-0 p-1'>
                    {InterestContent.Music}
                  </p>
                </div>
                <div className='d-flex mx-1 mb-1'>
                  <h4 className='m-0 mr-1 p-1'>Podcasts</h4>
                  <p className='m-0 p-1'>
                    {InterestContent.Podcasts}
                  </p>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
      </div>
    </section>
  )
}



