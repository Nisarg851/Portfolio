import "./style.css";
import ProjectCard from "./ProjectCard";
import resume_components from "../../utils/resume_components.json";
import Title from "../Common/Title";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}>
            <Title title="PROJECT" className="flex justify-start text-xl title secondary-title"/>
            
            <motion.div 
                className="py-2 w-full h-[40vh] flex justify-start items-center overflow-x-scroll scroll-smooth snap-x snap-mandatory"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
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