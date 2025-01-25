import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ResumePage from './Components/ResumePage';
// import ContactMe from './Components/ContactMe';
import DetailsContainer from './Components/DetailsContainer';

function App() {
  return (
    <BrowserRouter>
      <div className='w-full flex justify-center items-center gap-4'>
        <div className='hidden md:block'> <ResumePage/> </div>
        <DetailsContainer/>
      </div>
    </BrowserRouter>
  )
}

export default App
