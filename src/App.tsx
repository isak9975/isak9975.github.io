import { useState } from 'react'
import './App.css'
import { Footter } from './pages/Footter'
import { Header } from './pages/Header'
import { Body } from './pages/Body'
import { SideBar } from './pages/SideBar'

function App() {
  const [count, setCount] = useState(0)

  //about //timeline //tech //projects //career
  //https://ballbot-portfolio2.web.app/#career

  //소개 //경력 //프로젝트 //
  return (
    <>
      {<SideBar/>}
      <div className='Acontainer'>
        <Header/>
        <Body/>
        <Footter/>
      </div> 
    </>
  )
}

export default App
