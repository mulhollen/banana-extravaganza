import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

export default function Details() {
  return (
    <section>
      <div className='desktop-only myspace__interests mb-4 mx-3'>
        <h3 className='mb-0 pt-1 text-light'>Lindsay&apos;s Details</h3>
        <div className='d-flex flex-column pt-1'>
          <div className='d-flex mx-1 mb-1'>
            <h4 className='m-0 mr-1 p-1'>Status:</h4>
            <p className='m-0 p-1'>
              Open to opportunities
            </p>
          </div>
          <div className='d-flex mx-1 mb-1'>
            <h4 className='m-0 mr-1 p-1'>Here for:</h4>
            <p className='m-0 p-1'>
              Fun
            </p>
          </div>
          <div className='d-flex mx-1 mb-1'>
            <h4 className='m-0 mr-1 p-1'>Hometown:</h4>
            <p className='m-0 p-1'>
              Akron
            </p>
          </div>
          <div className='d-flex mx-1 mb-1'>
            <h4 className='m-0 mr-1 p-1'>Myers Briggs:</h4>
            <p className='m-0 p-1'>
              ENFP
            </p>
          </div>
          <div className='d-flex mx-1 mb-1'>
            <h4 className='m-0 mr-1 p-1'>Enneagram:</h4>
            <p className='m-0 p-1'>
              7
            </p>
          </div>
          <div className='d-flex mx-1 mb-1'>
            <h4 className='m-0 mr-1 p-1'>Education:</h4>
            <p className='m-0 p-1'>
              Undergraduate/Professional Program
            </p>
          </div>
          <div className='d-flex mx-1 mb-1'>
            <h4 className='m-0 mr-1 p-1'>Occupation:</h4>
            <p className='m-0 p-1'>
              UX Front-end React Developer
            </p>
          </div>
        </div>
      </div>
      <div className='mobile-only myspace__interests mb-4 mx-3'>
        <Accordion atomic={true}>
          <AccordionItem title='Lindsay&apos;s Details'>
            <div className='d-flex flex-column pt-1'>
              <div className='d-flex mx-1 mb-1'>
                <h4 className='m-0 mr-1 p-1'>Status:</h4>
                <p className='m-0 p-1'>
                  Employed
                </p>
              </div>
              <div className='d-flex mx-1 mb-1'>
                <h4 className='m-0 mr-1 p-1'>Here for:</h4>
                <p className='m-0 p-1'>
                  Fun
                </p>
              </div>
              <div className='d-flex mx-1 mb-1'>
                <h4 className='m-0 mr-1 p-1'>Hometown:</h4>
                <p className='m-0 p-1'>
                  Akron
                </p>
              </div>
              <div className='d-flex mx-1 mb-1'>
                <h4 className='m-0 mr-1 p-1'>Myers Briggs:</h4>
                <p className='m-0 p-1'>
                  ENFP
                </p>
              </div>
              <div className='d-flex mx-1 mb-1'>
                <h4 className='m-0 mr-1 p-1'>Enneagram:</h4>
                <p className='m-0 p-1'>
                  7
                </p>
              </div>
              <div className='d-flex mx-1 mb-1'>
                <h4 className='m-0 mr-1 p-1'>Education:</h4>
                <p className='m-0 p-1'>
                  Undergraduate/Professional Program
                </p>
              </div>
              <div className='d-flex mx-1 mb-1'>
                <h4 className='m-0 mr-1 p-1'>Occupation:</h4>
                <p className='m-0 p-1'>
                  UX Front-end React Developer
                </p>
              </div>
            </div>
          </AccordionItem>
        </Accordion>  
      </div>
    </section>
  );
}


