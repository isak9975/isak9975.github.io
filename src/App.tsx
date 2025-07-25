import './App.css'
import { Header } from './pages/Header'
import { Body } from './pages/Body'
import { SideBar } from './pages/SideBar'

function App() {


  return (
    <>
      {<SideBar/>}
      <div className='Acontainer'>
        <Header/>
        <Body/>
      </div> 
    </>
  )
}

export default App
