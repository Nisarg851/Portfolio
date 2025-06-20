import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomMarkdown from "../../Components/Common/CustomMarkdown";
import ResumeProfileIcon from "/resume-profile-icon.svg";
import Title from "../../Components/Common/Title";
import Loader from "../../Components/Common/Loader";

const ProjectDetails = () => {
    const location = useLocation();
    const searchParams = useMemo(()=>{
        return new URLSearchParams(location.search);
    },[location.search]);
    const [loader, setLoader] = useState(true);

    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const projects_res = await fetch(`https://raw.githubusercontent.com/Nisarg851/DataSource/master/Portfolio/data/projects.json`)
            const projectsData = await projects_res.json()
            setProjects(projectsData)
        }

        fetchData()
    },[]);

    const project_source_code_url_components = projects.length==0 ? [] : projects[searchParams.get("projectID")-1]["source_code"].split("/");
    const repo_name = project_source_code_url_components[project_source_code_url_components.length-1];

    const [markdown, setMarkdown] = useState('');
    useEffect(()=>{
        const fetchData = async () => {
            setLoader(true);
            if(repo_name!=undefined){
                const res = await fetch(`https://raw.githubusercontent.com/Nisarg851/${repo_name}/master/README.md`)
                const data = await res.text()
                setMarkdown(data)
            }
            setLoader(false);
        }

        fetchData()
    }, [projects, markdown, location.search]);

    return (
        <div className="w-full h-full">
            <div className="flex">
                <Link to="/resume" className="md:hidden p-1"><img src={ResumeProfileIcon} alt="resume" /></Link>
                <Title title={"PROJECT DETAIL"} className="w-full flex justify-center text-2xl title primary-title underline"/>
            </div>
            {loader
                ? <Loader/>
                : (
                    <div className="prose markdown pb-2">
                        <hr />
                        <CustomMarkdown>{markdown}</CustomMarkdown>
                    </div>
                )
            }
        </div>);
}

export default ProjectDetails;