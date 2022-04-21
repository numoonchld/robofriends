import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [robots, setRobots] = useState([])

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const fetchRobots = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const extractedRobots = await response.json()
    setRobots(extractedRobots)
  }

  useEffect(() => {
    fetchRobots()
  }, [])

  return (
    <div className='w-100'>

      <div className='my-5 d-flex flex-wrap flex-row justify-content-center align-items-center'>
        <SearchBox searchTerm={searchTerm} onSearchChange={onSearchChange} />
      </div>

      <h1 className='text-light'>RoboFriends</h1>
      <ErrorBoundary >
        <Scroll>
          {robots.filter(robot => robot.name.toLowerCase().includes(searchTerm.toLowerCase())).map(robot => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />)}
        </Scroll>
      </ErrorBoundary>


    </div>
  );
}

export default App;
