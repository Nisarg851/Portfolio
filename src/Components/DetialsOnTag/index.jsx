import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

import ResumeProfileIcon from "/resume-profile-icon.svg";

import projects from "../../utils/projects.json";
import blogs from "../../utils/blogs.json";

import ProjectDetailView from "../Projects/ProjectDetailView";
import Blog from "../DetailsContainer/Blog";
import { useEffect, useMemo } from "react";
import Title from "../Common/Title";

const DetailsOnTag = () => {
    const [activeState, setActiveState] = useState("Projects");
    const location = useLocation();

    const searchParams = useMemo(() => {
        return new URLSearchParams(location.search);
      }, [location.search]); 

    const [projectList, setProjectList] = useState([]);
    const [blogList, setBlogList] = useState([]);

    const activeStateList = {
        "Projects" : projectList,
        "Blogs" : blogList
    }

    useEffect(()=>{
        const key = searchParams.get("key");
        const tempProjList = key=="all" ? projects : projects.filter(obj => obj.tags.some(tag => tag[key])); 
        setActiveState(tempProjList.length > 0 ? "Projects" : "Blogs");
        setProjectList(tempProjList);
        setBlogList(key=="all" ? blogs : blogs.filter(obj => obj.tags.some(tag => tag[key])));
    },[searchParams]);

    return (
        <div className="w-full h-full">
            <div className="flex">
                <a href="/resume" className="md:hidden p-1"><img src={ResumeProfileIcon} alt="resume" /></a>
                <Title title={searchParams.get("value").toUpperCase()} className="w-full flex justify-center text-2xl title primary-title"/>
            </div>
            <div className={`mt-2 p-1.5 w-full flex rounded-sm bg-[#f5f5f5] text-[#B9B9BD]`}>
                {["Projects","Blogs"].map((item, index) => {
                    return (<span key={index} 
                                className={`w-full h-full text-center text-xl ${activeState===item && "active-tag"} ${(activeStateList[item].length > 0) && "cursor-pointer"}`}
                                onClick={()=>{ if(activeStateList[item].length > 0){setActiveState(item);} }}>
                                    {item} ({item=="Projects" ? projectList.length : blogList.length})
                            </span>);
                })}
            </div>
            <div className="mt-1 w-full h-full border-t-2 border-t-black overflow-y-scroll">
                {(activeStateList[activeState]).map((content, index) => {
                    return (activeState=="Projects" 
                        ? <ProjectDetailView key={index} project={content}/> 
                        : <Blog key={index} blog={content}/>);
                })}
            </div>
        </div>
    );
}

export default DetailsOnTag;