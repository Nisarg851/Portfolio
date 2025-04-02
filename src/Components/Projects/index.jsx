import "./style.css";
import ProjectCard from "./ProjectCard";
import resume_components from "../../utils/resume_components.json";
import projects from "../../utils/projects.json";
import Title from "../Common/Title";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BulletPointIcon from "/bullet-point-icon.svg";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const navigate = useNavigate();

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}>
            <Title title="PROJECT" className="relative flex justify-start text-xl title secondary-title" onClick={()=>{navigate("/tag?key=all&value=Project")}}/>
            
            <div className="relative flex">

                <div className="absolute z-20 top-0 -left-4 w-4 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                
                <motion.div
                    className="-mx-4 ps-4 md:pe-4 relative py-2 w-[100vw] h-[40vh] md:w-[46vw] flex justify-start items-center overflow-x-scroll scroll-smooth snap-x snap-mandatory"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}>
                    {
                        resume_components.projects.map((projectID, index) => {
                            return <ProjectCard key={index} project={projects[projectID-1]} />;
                        })
                    }
                    •••
                    <div className="mx-4 px-4 py-2 flex text-nowrap rounded-md snap-center text-white bg-[#374151] cursor-pointer font-semibold" onClick={()=>{navigate("/tag?key=all&value=Project")}}>
                        Show all 
                        <img src={BulletPointIcon} alt="more" className="invert mx-2"/>
                    </div>
                </motion.div>

                <div className="absolute z-20 bottom-0 -right-4 w-4 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                
            </div>
        </motion.div>
    );
}

export default Projects;