import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function WantToSee() {

  const [topic, setTopic] = useState('All')

  const handleSelect = (eventKey: string | null, e: React.SyntheticEvent<unknown>) => {
    const topicId = eventKey === null ? 'All' : eventKey 
    setTopic(topicId)
    console.log('setTopic', topicId);
  };

  return (
    <section className='bodyWidth wantToSee d-flex justify-content-center align-items-center'>
      <h3 className='text-center my-5'>I wanna see:</h3>
      <Dropdown className='wantToSee' onSelect={handleSelect}>
        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
          <p className='p-display m-0'>{topic || 'All'}</p>
        </Dropdown.Toggle>
        <Dropdown.Menu className='wantToSee'>
          {topic !== 'All' && <Dropdown.Item eventKey="All">All</Dropdown.Item>}
          <Dropdown.Item eventKey="Management">Management</Dropdown.Item>
          <Dropdown.Item eventKey="Software">Software</Dropdown.Item>
          <Dropdown.Item eventKey="Art">Art</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  )
}
