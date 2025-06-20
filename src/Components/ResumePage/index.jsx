import { lazy, Suspense } from "react";
import { useEffect, useState } from "react";
import "./style.css"

const Header = lazy(() => import("../Header"));
const WorkExperience = lazy(() => import("../WorkExperience"));
const Projects = lazy(() => import("../Projects"));
const Skills = lazy(() => import("../Skills"));
const Achievements = lazy(() => import("../Achievements"));
import Loader from "../Common/Loader";

import { Link } from "react-router-dom";

const ResumePageEnd = () => {
    return (
        <h1 className="text-center relative overflow-x-clip">
            <hr/>
            <div className="py-1">
                <picture className="inline">
                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1fabf/512.webp" type="image/webp" />
                    <div className="absolute walk min-w-[50%] h-fit">
                        <img className="inline" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1fabf/512.gif" alt="🪿" width="24" height="24" />
                        <i className="px-1 font-semibold inline-block">
                            Thank you for your time...
                            <Link to={"/contact-me"} className="text-[#4294f7]">Feedback?</Link>
                        </i>
                    </div>
                </picture>
            </div>
        </h1>
    );
}

const ResumePage = () => {
    const [resumeComponent, setResumeComponent] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch(`https://raw.githubusercontent.com/Nisarg851/DataSource/master/Portfolio/resume_components.json`)
            const data = await res.json()
            setResumeComponent(data);
        }

        fetchData()
    },[]);

    return (
        <div className='lg:my-4 px-4 py-6 w-full lg:w-[45vw] h-full lg:h-[95vh] shadow-[0_0px_12px_rgba(0,0,0,0.40)] bg-white rounded-md overflow-x-clip overflow-y-scroll flex flex-col gap-2 lg:gap-4'>
            <Suspense fallback={<Loader/>}>
                <Header /> 
                <Skills skillsAndTools={resumeComponent==null?[]:resumeComponent.skills_and_tools}/>
                <WorkExperience workExperience={resumeComponent==null?[]:resumeComponent.work_experience}/>
                <Projects resumeProjects={resumeComponent==null?[]:resumeComponent.projects}/>
                <Achievements/>
                <ResumePageEnd/>
            </Suspense>
        </div>
    );
}

export default ResumePage;