import "./style.css";
import BulletPointIcon from "/bullet-point-icon.svg";
import resume_components from "../../utils/resume_components.json";
import { getImageUrl } from "../../utils/image_utils";
import { useState } from "react";

const ExperienceComponent = (experience) => {
    const [organizationLogoRingSize,setOrganizationLogoRingSize] = useState(2);
    
    return (
        <li className="ms-5"
            onMouseEnter={() => setOrganizationLogoRingSize(6)}
            onMouseLeave={() => setOrganizationLogoRingSize(2)}
        >            
            <span className={`absolute mt-0.5 flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-[${organizationLogoRingSize}px] ${experience.experience.duration.end=="Present" ? "ring-[#00ff00]" : "ring-[#0077b5]"}`}>
                <img src={getImageUrl(experience.experience.organization)} alt={experience.experience.organization} 
                className="bg-white rounded-2xl p-0.5"/>
            </span>
            <h3 className="flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-black">
                <i>{experience.experience.role}</i> 
                <time className="text-sm font-medium me-2 px-2.5 ms-2">
                    <i>{experience.experience.duration.start} - {experience.experience.duration.end}</i>
                </time>
            </h3>
            <span className="flex justify-between items-center text-sm font-normal leading-none ">
                <i>{experience.experience.organization}</i>
                <i className="me-2 px-2.5 py-0.5 ms-3">{experience.experience.location}</i>
            </span>
            <ul className="mb-4 text-base font-normal">
                {
                    experience.experience.responsibilities.map((responsibility, index) => {
                        return (
                            <li key={index} className="mx-4 flex items-start">
                                <img  src={BulletPointIcon} className="m-1" />
                                <span className="my-0.5 leading-none text-justify">{responsibility}</span>
                            </li>
                        );
                    })
                }
            </ul>
        </li>
    );
}

const WorkExperience = () => {
    return (
        <div className="h-[60%] overflow-clip border-b-[1px] border-black">
            <h2 className="flex justify-start text-xl title secondary-title">
                <p>WORK</p>
                <p>EXPERIENCE</p>
            </h2>
            {/* <hr/> */}
            <div className="h-[95%] overflow-y-scroll">
                <ol className="mx-5 py-2 relative border-l-[1.5px] border-black">
                    {resume_components.work_experience.map((experience, index) => {
                        return <ExperienceComponent key={index} experience={experience}/>
                    })}
                </ol>
            </div>
        </div>
    );
}

export default WorkExperience;