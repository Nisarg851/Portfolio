import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ResumePage from './Components/ResumePage';
import DetailsContainer from './Components/DetailsContainer';

function App() {
  return (
    <BrowserRouter>
      <div className='w-full relative flex justify-center items-center gap-4'>
        {/* <div className='absolute w-[100vw] h-[100vh] -z-10 pointer-events-auto'>
          <Squares 
            speed={0.5} 
            squareSize={32}
            direction='diagonal' 
            borderColor='#000'
            hoverFillColor='#fff'
          />
        </div> */}
        <div className='hidden md:block'> <ResumePage/> </div>
        <DetailsContainer/>
      </div>
    </BrowserRouter>
  )
}

export default App
