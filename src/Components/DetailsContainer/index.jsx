import { Routes, Route, useLocation } from "react-router-dom";
import ContactMe from "../ContactMe";
import DetailsOnTag from "../DetialsOnTag";

const DetailsContainer = () => {

    const location = useLocation();

    return (
        <div className={`
            ${location.pathname==="/" ? "hidden" : "block"}
            lg:my-4 p-2 w-full h-full lg:w-[45vw] lg:h-[95vh] border-2 border-black overflow-y-scroll flex flex-col items-center gap-2 lg:gap-4`}>
          <Routes>
            <Route path="/contact-me" element={<ContactMe/>}/>
            <Route path="/tag/*" element={<DetailsOnTag/>}/>
          </Routes>
        </div>
    );
}

export default DetailsContainer;