import { } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './comp/Homepage/Homepage'
import Music from './comp/Music/Music'

const App = () => {
  
  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<Homepage />}
            />
            <Route
              path='/music'
              element={<Music />}
            />
          </Routes>
        </Router>
        <Homepage />
      </div>
    </>
  )
}

export default App
