import { useMemo } from "react";
import ResumeProfileIcon from "/resume-profile-icon.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import "./work-exp-details.css";
import Title from "../Common/Title";
import CustomMarkdown from "../Common/CustomMarkdown";

const WorkExperienceDetails = () => {
    const location = useLocation();
    const searchParams = useMemo(()=>{
        return new URLSearchParams(location.search);
    },[location.search]);

    const [markdown, setMarkdown] = useState('');

    useEffect(()=>{
        fetch(`/work-exp-blogs/${(`${searchParams.get("org")} ${searchParams.get("role")}`).replaceAll(' ','_')}.md`)
        .then(res => res.text())
        .then(text => setMarkdown(text))
        .catch(error => console.error('Error fetching Markdown:', error));
    },[searchParams]);

    return <div className="w-full h-full">
                <div className="flex">
                    <Link to="/resume" className="md:hidden p-1"><img src={ResumeProfileIcon} alt="resume" /></Link>
                    <Title title={searchParams.get("org").toUpperCase()} className="w-full flex justify-center text-2xl title primary-title underline"/>
                </div>
                <div className="prose markdown pb-2">
                    <hr />
                    <CustomMarkdown>{markdown}</CustomMarkdown>
                </div>
            </div>
}

export default WorkExperienceDetails;