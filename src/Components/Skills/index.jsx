import Tag from "../Common/Tag";
import resume_components from "../../utils/resume_components.json";

const Skills = () => {
    return (
        <div>
            <h2 className="flex justify-start text-xl title secondary-title">
                <p>SKILL</p>
                <p>SET</p>
            </h2>
            <div className="mt-2 p-1 w-full min-h-[30%] flex flex-wrap gap-1 justify-center items-stretch overflow-y-scroll">
                {Object.entries(resume_components.skills_and_tools).flatMap(([domain, tags]) => (
                    tags.map((tag, index) => (
                    <Tag key={`${domain}_${index}`} tag={tag} tagType={"skill"}/>
                    ))
                ))}
            </div>
        </div>
    );
}

export default Skills;