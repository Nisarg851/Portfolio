import { Routes, Route, useLocation } from "react-router-dom";
import ContactMe from "../ContactMe";
import DetailsOnTag from "../DetialsOnTag";
import ResumePage from "../ResumePage";

const DetailsContainer = () => {
    const mediumSizeScreen = 768;
    const location = useLocation();
    return (
        <div className={`
            ${window.innerWidth>=mediumSizeScreen && location.pathname=="/" ? "hidden" : "block"}
            lg:my-4 p-2 w-full h-[100vh] lg:w-[45vw] lg:h-[95vh] md:border-[1px] border-black rounded-sm overflow-y-scroll flex flex-col items-center gap-2 lg:gap-4`}>
          <Routes>  
            <Route path="/contact-me" element={<ContactMe/>}/>
            <Route path="/tag/*" element={<DetailsOnTag/>}/>
            <Route path="*" element={<ResumePage/>}/>
          </Routes>
        </div>
    );
}

export default DetailsContainer;