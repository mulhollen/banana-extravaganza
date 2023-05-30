import { Accordion, AccordionItem } from 'react-light-accordion'
import 'react-light-accordion/demo/css/index.css';

export default function Schools() {
  return (
    <section>
      <div className='desktop-only myspace__interests myspace__schools mb-4 mx-3'>
        <h3 className='mb-0 pt-1 text-light'>Lindsay&apos;s Schools</h3>
        <div className='d-flex flex-column pt-1'>
          <div className='d-flex mx-1 mb-1'>
            <p className='m-0 mr-1 p-1 pb-4'>
              <a href='https://nashvillesoftwareschool.com/'>Nashville Software School</a>
              <br />
              Nashville, Tennessee
              <br />
              Graduated: <b>2018</b>
              <br />
              Student Status: Alumni
              <br />
              Major: Front-end Development - UX/UI
            </p>
            <p className='m-0 p-1 text-center'>
              Jan 2017 to Jun 2017
            </p>
          </div>
          <div className='d-flex mx-1 mb-1'>
            <p className='m-0 mr-1 p-1 pb-4'>
              <a href='https://www.uakron.edu/'>The University of Akron</a>
              <br />
              Akron, Ohio
              <br />
              Graduated: <b>2012</b>
              <br />
              Student Status: Alumni
              <br />
              Major: Mass Media Production - Dance Performance
            </p>
            <p className='m-0 p-1 text-center'>
              2008 to 2012
            </p>
          </div>
        </div>
      </div>
      <div className='mobile-only myspace__interests myspace__schools mb-4 mx-3'>
        <Accordion atomic={true}>
          <AccordionItem title='Lindsay&apos;s Schools'>
            <div className='d-flex flex-column pt-1'>
              <div className='d-flex mx-1 mb-1'>
                <p className='m-0 mr-1 p-1 pb-4'>
                  <a href='https://nashvillesoftwareschool.com/'>Nashville Software School</a>
                  <br />
                  Nashville, Tennessee
                  <br />
                  Graduated: <b>2018</b>
                  <br />
                  Student Status: Alumni
                  <br />
                  Major: Front-end Development - UX/UI
                </p>
                <p className='m-0 p-1 text-center'>
                  Jan 2018 to Jun 2018
                </p>
              </div>
              <div className='d-flex mx-1 mb-1'>
                <p className='m-0 mr-1 p-1 pb-4'>
                  <a href='https://www.uakron.edu/'>The University of Akron</a>
                  <br />
                  Akron, Ohio
                  <br />
                  Graduated: <b>2012</b>
                  <br />
                  Student Status: Alumni
                  <br />
                  Major: Mass Media Production - Dance Performance
                </p>
                <p className='m-0 p-1 text-center'>
                  2008 to 2012
                </p>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}



