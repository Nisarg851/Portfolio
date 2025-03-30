import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ResumePage from './Components/ResumePage';
import DetailsContainer from './Components/DetailsContainer';
import Squares from './Components/Imported/Squares';

function App() {
  return (
      <div className='w-full relative flex justify-center items-center gap-4'>
        <div className='absolute w-[100vw] h-[100vh] -z-10 bg-white'>
          <Squares
            speed={0.5} 
            squareSize={40}
            direction='diagonal' 
            borderColor='#000'
            hoverFillColor='#fff'
          />
        </div>
        <BrowserRouter>
          <div className='hidden md:block'> <ResumePage/> </div>
          <DetailsContainer/>
        </BrowserRouter>
      </div>
  )
}

export default App
