import { useMemo } from "react";
import ResumeProfileIcon from "/resume-profile-icon.svg";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
        fetch("/work-exp-blogs/HumberCollege.md")
        .then(res => res.text())
        .then(text => setMarkdown(text))
        .catch(error => console.error('Error fetching Markdown:', error));
    },[]);

    return <div className="w-full h-full">
                <div className="flex">
                    <a href="/resume" className="md:hidden p-1"><img src={ResumeProfileIcon} alt="resume" /></a>
                    <Title title={searchParams.get("value").toUpperCase()} className="w-full flex justify-center text-2xl title primary-title underline"/>
                </div>
                <div className="prose markdown pb-2">
                    <hr />
                    <CustomMarkdown>{markdown}</CustomMarkdown>
                </div>
            </div>
}

export default WorkExperienceDetails;