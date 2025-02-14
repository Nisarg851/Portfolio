import { Routes, Route, useLocation } from "react-router-dom";
import ContactMe from "../ContactMe";
import DetailsOnTag from "../DetialsOnTag";
import ResumePage from "../ResumePage";
import WorkExperienceDetails from "./WorkExperienceDetails";

const DetailsContainer = () => {
    const mediumSizeScreen = 768;
    const location = useLocation();
    return (
        <div className={`
            bg-white
            shadow-[0_0px_12px_rgba(0,0,0,0.40)]
            ${window.innerWidth>=mediumSizeScreen && location.pathname=="/" ? "hidden" : "block"}
            lg:my-4 p-2 w-full h-[100vh] lg:w-[45vw] lg:h-[95vh] rounded-sm overflow-y-scroll flex flex-col items-center gap-2 lg:gap-4`}>
          <Routes>  
            <Route path="/contact-me" element={<ContactMe/>}/>
            <Route path="/tag/*" element={<DetailsOnTag/>}/>
            <Route path="/work-experience/*" element={<WorkExperienceDetails/>}/>
            <Route path="*" element={<ResumePage/>}/>
          </Routes>
        </div>
    );
}

export default DetailsContainer;