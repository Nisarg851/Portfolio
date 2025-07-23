import GitHubIcon from "/github-icon.svg";
import VideoIcon from "/video-icon.svg";
import UnderDevIcon from "/under-development-icon.svg";
import { Link } from "react-router-dom";
import Tag from "../../Components/Common/Tag";
import { motion } from "framer-motion";

const ProjectMetaIcons = ({link, iconName}) => {
    const icons = {
        "github": {icon: GitHubIcon, styleClass: "github-icon", title: "Github", alt:"github"},
        "video": {icon: VideoIcon, styleClass: "hover:animate-pulse", title: "The Project has a demo video ▶️", alt: "▶️"},
        "dev": {icon: UnderDevIcon, styleClass: "hover:animate-spin", title: "The Project is currently under-construction 🛠️", alt: "🛠️"}
    }

    return (
        <abbr title={icons[iconName].title}>
            <Link to={link} target="_blank">
                <img src={icons[iconName].icon} alt={icons[iconName].alt}
                className={`project-icon ${icons[iconName].styleClass}`}/>
            </Link>
        </abbr>
    );
}

const NewProjectCard = (project) => {
    return (
        <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="min-w-[60%] sm:min-w-[45%] h-full me-4 rounded-md overflow-clip snap-center highlight hover:scale-[1.02] hover:shadow-[0_0px_12px_rgba(0,0,0,0.40)]">

            <div className="w-full h-full flex flex-col justify-between">
                <div className="w-full flex justify-end gap-1 p-1 cursor-default">
                    {project.project.stage=="dev" && <ProjectMetaIcons link={null} iconName={"dev"}/>}
                    {project.project.video!=undefined && <ProjectMetaIcons link={project.project.video} iconName={"video"}/>}
                    {project.project.source_code!=undefined && <ProjectMetaIcons link={project.project.source_code} iconName={"github"}/>}
                </div>
                
                <Link
                to={`/project-detail?projectID=${project.project.id}`}
                className="p-1 flex flex-col justify-between flex-grow cursor-pointer">
                    <h1 className="px-1 text-xl leading-none hyphens-auto">{project.project.name}</h1>
                    <p className="px-1 h-[30%] description block-ellipsis leading-none hyphens-auto text-sm">{project.project.description}</p>
                </Link>

                <div className="p-1 w-full max-h-[20%] flex flex-wrap gap-1 bg-[#374151] overflow-y-scroll">
                    {project.project.tags.map((tag, index) => {
                        return <Tag key={index} tag={tag}/>
                    })}
                </div>
            </div>
        </motion.div>
    );
}

export default NewProjectCard;