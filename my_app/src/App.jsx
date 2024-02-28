import './App.css'
import Heading from './component/Heading'
import Contact from './component/Contact'
import Home from './component/Home'
import About from './component/About'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Heading/>
      <div className='Router'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
     
    </>
  )
}

export default App