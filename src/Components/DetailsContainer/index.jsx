import { HashRouter as Routes, Route, useLocation } from "react-router-dom";
import ContactMe from "../ContactMe";
import DetailsOnTag from "../DetialsOnTag";
import ResumePage from "../ResumePage";
import WorkExperienceDetails from "./WorkExperienceDetails";
import ProfileCard from "../ProfileCard/index";
import { motion, AnimatePresence } from "framer-motion";
import WorkExperienceView from "./WorkExperiencesView";
import AchievementAndCertView from "./AchievementAndCertView";

const DetailsContainer = () => {
    const location = useLocation();

    return (
      <motion.div
        key={location.pathname} 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`
          bg-white shadow-[0_0px_12px_rgba(0,0,0,0.40)]
          lg:my-4 w-full h-[100vh] lg:w-[45vw] lg:h-[95vh] overflow-y-scroll flex flex-col items-center gap-2 lg:gap-4
          ${location.pathname !== "/resume" ? "p-4 rounded-sm" : "w-full"}
        `}>

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact-me" element={<ContactMe />} />
            <Route path="/tag/*" element={<DetailsOnTag />} />
            <Route path="/work-experiences" element={<WorkExperienceView/>}/>
            <Route path="/work-experience/*" element={<WorkExperienceDetails />} />
            <Route path="/achievements-and-cert" element={<AchievementAndCertView />}/>
            <Route path="*" element={<ProfileCard />} />
          </Routes>
        </AnimatePresence>

      </motion.div>
    );
}

export default DetailsContainer;