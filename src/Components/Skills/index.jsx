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
                {Object.entries(resume_components.skills_and_tools).flatMap(([domain, skills]) => (
                    skills.map((skill, index) => (
                    <Tag key={`${domain}_${index}`} tag={{ skill }}/>
                    ))
                ))}
            </div>
        </div>
    );
}

export default Skills;