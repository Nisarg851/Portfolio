import resume_components from "../../utils/resume_components.json";
import ResumeProfileIcon from "/resume-profile-icon.svg";
import { Link } from "react-router-dom";
import Title from "../Common/Title";
import { ExperienceComponent } from "../WorkExperience";

const WorkExperienceView = () => {
    return (
        <div className="w-full h-full">
            <div className="flex">
                <Link to="/resume" className="md:hidden p-1"><img src={ResumeProfileIcon} alt="resume" /></Link>
                <Title title={"WORK EXPERIENCE"} className="w-full flex justify-center text-2xl title primary-title pointer-events-none"/>
            </div>
            <hr className="border-1 border-black"/>
            <div className="h-[95%] overflow-y-scroll">
                <ol className="mx-5 relative border-l-[1.5px] border-black">
                    {resume_components.work_experience.map((experience, index) => {
                        return <ExperienceComponent key={index} experience={experience} index={index}/>
                    })}
                </ol>
            </div>

        </div>
    );
}

export default WorkExperienceView;