import GitHubIcon from "/github-icon.svg";
import VideoIcon from "/video-icon.svg";
import Tag from "../Common/Tag";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = (project) => {
    return (
        <Link 
        to={`/project-detail?projectID=${project.project.id}`}
        className="min-w-[80%] sm:min-w-[31.7%] h-full me-4 rounded-md overflow-clip snap-center highlight hover:scale-[1.02] hover:shadow-[0_0px_12px_rgba(0,0,0,0.40)] cursor-pointer">
            <motion.div
                className="w-full h-full rounded-md snap-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
            
                <div className="p-1.5 w-full h-[80%] overflow-hidden flex flex-col justify-between">
                    <div>
                        <div className="flex justify-end gap-1">
                            <abbr title="The Project is currently under-construction 🛠️" className={`${project.project.stage!="dev" && "hidden"}`}>
                                <picture>
                                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.webp" type="image/webp"/>
                                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.gif" alt="⚙" width="20" height="20" />
                                </picture>
                            </abbr>
                            <abbr title="The Project has a demo video ▶️" className={`${project.project.video==undefined && "hidden"}`}>
                                <Link to={project.project.video} target="_blank">
                                    <img src={VideoIcon} alt="link to video"
                                    className="project-icon"/>
                                </Link>
                            </abbr>
                            <abbr title="Github">
                                <Link to={project.project.source_code} target="_blank">
                                    <img src={GitHubIcon} alt="link to Project"
                                    className="project-icon"/>
                                </Link>
                            </abbr>
                        </div>
                        <h1 className="mt-2 text-lg leading-none hyphens-auto">{project.project.name}</h1>
                    </div>
                    <p className="description block-ellipsis leading-none hyphens-auto text-sm">{project.project.description}</p>
                </div>
                <div className="p-1 w-full min-h-[20%] flex flex-wrap gap-1 bg-[#374151] overflow-y-scroll">
                    {project.project.tags.map((tag, index) => {
                        return <Tag key={index} tag={tag}/>
                    })}
                </div>
            </motion.div>
        </Link>
    );
}

export default ProjectCard;