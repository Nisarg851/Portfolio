import GitHubIcon from "/github-icon.svg";
import Tag from "../Common/Tag";

const ProjectCard = (project) => {
    return (
        <div className="card min-w-[31.7%] h-full me-4 rounded-md overflow-clip">
            <div className="p-1.5 w-full h-[80%] overflow-hidden flex flex-col justify-between">
                <div>
                    <a href={project.project.source_code} 
                    className="flex justify-end"
                    target="_blank">
                        <img src={GitHubIcon} alt="link to Project" 
                        className="project-icon"/>
                    </a>
                    <h1 className="mt-2 text-xl leading-none hyphens-auto">{project.project.name}</h1>
                </div>
                <p className="description block-ellipsis leading-none hyphens-auto">{project.project.description}</p>
            </div>
            <div className="p-1 w-full min-h-[20%] flex flex-wrap gap-1 bg-gray-700 overflow-y-scroll">
                {project.project.tags.map((tag, index) => {
                    return <Tag key={index} tag={tag}/>
                })}
            </div>
        </div>
    );
}

export default ProjectCard;