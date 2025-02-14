import { useMemo } from "react";
import ResumeProfileIcon from "/resume-profile-icon.svg";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect } from "react";
import { useState } from "react";

import "./work-exp-details.css";

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
                    <a href="/" className="md:hidden p-1"><img src={ResumeProfileIcon} alt="resume" /></a>
                    <h1 className="w-full flex justify-center text-2xl title primary-title underline">
                        {searchParams.get('value').split(" ").map((item, index)=>{
                            return (<p key={index}>{item.toUpperCase()}</p>);
                        })}
                    </h1>
                </div>
                <div className="prose markdown">
                    <hr />
                    <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
                </div>
            </div>
}

export default WorkExperienceDetails;