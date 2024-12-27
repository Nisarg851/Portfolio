import "./style.css";
import ProjectCard from "./ProjectCard";
import resume_components from "../../utils/resume_components.json";

const Projects = () => {
    return (
        <div>
            <h2 className="flex justify-start text-xl title secondary-title">
                <p>PROJECTS</p>
            </h2>
            <div className="py-2 w-full h-[40vh] flex justify-start items-center overflow-x-scroll">
                {
                    resume_components.projects.map((project, index) => {
                        return <ProjectCard key={index} project={project} />;
                    })
                }
            </div>
        </div>  
    );
}

export default Projects;