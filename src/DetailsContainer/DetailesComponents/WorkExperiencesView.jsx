import ResumeProfileIcon from "/resume-profile-icon.svg";
import { Link } from "react-router-dom";
import Title from "../../Components/Common/Title";
import { ExperienceComponent } from "../../ResumeComponents/Sections/WorkExperienceSection";
import { useState, useEffect } from "react";
import Loader from "../../Components/Common/Loader";

const WorkExperienceView = () => {
    const [workExperience, setWorkExperience] = useState([]);
    
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch(`https://raw.githubusercontent.com/Nisarg851/DataSource/master/Portfolio/resume_components.json`)
            const data = await res.json()
            setWorkExperience(data.work_experience);
        }

        fetchData()
    },[]);

    return (
        <div className="w-full h-full">
            <div className="flex">
                <Link to="/resume" className="md:hidden p-1"><img src={ResumeProfileIcon} alt="resume" /></Link>
                <Title title={"WORK EXPERIENCE"} className="w-full flex justify-center text-2xl title primary-title pointer-events-none"/>
            </div>
            <hr className="border-1 border-black"/>
            <div className="h-[95%] overflow-y-scroll">
                    {workExperience.length==0
                        ? <Loader/>
                        : (
                            <ol className="mx-5 relative border-l-[1.5px] border-black">
                                {workExperience.map((experience, index) => {
                                    return <ExperienceComponent key={index} experience={experience} index={index}/>
                                })}
                            </ol>
                        )
                    }
            </div>

        </div>
    );
}

export default WorkExperienceView;