import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomMarkdown from "../Common/CustomMarkdown";
import ResumeProfileIcon from "/resume-profile-icon.svg";
import Title from "../Common/Title";
import projects from "../../utils/projects.json";

const ProjectDetails = () => {
    const location = useLocation();
    const searchParams = useMemo(()=>{
        return new URLSearchParams(location.search);
    },[location.search]);

    const [markdown, setMarkdown] = useState('');

    const project_source_code_url_components = projects[searchParams.get("projectID")-1]["source_code"].split("/");
    const repo_name = project_source_code_url_components[project_source_code_url_components.length-1];

    useEffect(()=>{
            fetch(`https://raw.githubusercontent.com/Nisarg851/${repo_name}/master/README.md`)
            .then(res => res.text())
            .then(text => setMarkdown(text))
            .catch(error => console.error('Error fetching Markdown:', error))
        });

    return (
        <div className="w-full h-full">
            <div className="flex">
                <Link to="/resume" className="md:hidden p-1"><img src={ResumeProfileIcon} alt="resume" /></Link>
                <Title title={"PROJECT DETAIL"} className="w-full flex justify-center text-2xl title primary-title underline"/>
            </div>
            <div className="prose markdown pb-2">
                <hr />
                <CustomMarkdown>{markdown}</CustomMarkdown>
            </div>
        </div>);
}

export default ProjectDetails;