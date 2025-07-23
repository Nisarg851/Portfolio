/* eslint-disable react/prop-types */
import "../styles/project-style.css";
import Title from "../../Components/Common/Title";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BulletPointIcon from "/bullet-point-icon.svg";
import Loader from "../../Components/Common/Loader";
import NewProjectCard from "../SubComponents/NewProjectCard";

const ProjectsSection = ({resumeProjects}) => {
    const ref = useRef(null);
    const scrollContainerRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const navigate = useNavigate();

    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const projects_res = await fetch(`https://raw.githubusercontent.com/Nisarg851/DataSource/master/Portfolio/data/projects.json`)
            const projectsData = await projects_res.json()
            setProjects(projectsData)
        }

        fetchData();
    },[]);

    useEffect(() => {
        if (projects.length > 0 && scrollContainerRef.current) {
            setTimeout(() => {
                scrollContainerRef.current.scrollLeft = 0;
            }, 0);
        }
    }, [projects]);

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
                    ref={scrollContainerRef}
                    className="-mx-4 ps-4 md:pe-4 relative py-2 w-[100vw] h-[40vh] md:w-[46vw] flex justify-start items-center overflow-x-scroll scroll-smooth snap-x snap-mandatory"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}>
                    {
                        projects.length==0
                            ? <Loader/>
                            : (resumeProjects.map((projectID) => {
                                return <NewProjectCard key={projectID} project={projects[projectID-1]} />;
                            }))
                    }
                    {/* {projects.length &&                     <NewProjectCard project={projects[0]}/>} */}
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

export default ProjectsSection;