import "./style.css";
import ProjectCard from "./ProjectCard";
import resume_components from "../../utils/resume_components.json";
import Title from "../Common/Title";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
            
            <motion.div 
                className="-ms-4 ps-4 md:pe-4 relative py-2 w-[100vw] h-[40vh] md:w-[46vw] flex justify-start items-center overflow-x-scroll scroll-smooth snap-x snap-mandatory cursor-grab"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}>
                {
                    resume_components.projects.map((project, index) => {
                        return <ProjectCard key={index} project={project} />;
                    })
                }
            </motion.div>
        </motion.div>
    );
}

export default Projects;