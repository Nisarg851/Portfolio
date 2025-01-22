import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

import projects from "../../utils/projects.json";
import blogs from "../../utils/blogs.json";

import ProjectDetailView from "../Projects/ProjectDetailView";
import Blog from "../DetailsContainer/Blog";
import { useEffect, useMemo } from "react";

const DetailsOnTag = () => {
    const [activeState, setActiveState] = useState("Projects");
    const location = useLocation();

    const searchParams = useMemo(() => {
        return new URLSearchParams(location.search);
      }, [location.search]); 

    const [projectList, setProjectList] = useState([]);
    const [blogList, setBlogList] = useState([]);

    useEffect(()=>{
        setProjectList(projects.filter(obj => obj.tags.some(tag => tag[searchParams.get("key")])));
        setBlogList(blogs.filter(obj => obj.tags.some(tag => tag[searchParams.get("key")])));
    },[searchParams]);

    return (
        <div className="w-full h-full">
            <h2 className="z-0 w-full flex justify-center text-2xl title primary-title">
                {searchParams.get('value').split(" ").map((item, index)=>{
                    return (<p key={index}>{item.toUpperCase()}</p>);
                })}
            </h2>
            <div className="mt-2 p-1.5 w-full flex rounded-sm bg-[#f5f5f5] text-[#B9B9BD] cursor-pointer">
                {["Projects","Blogs"].map((item, index) => {
                    return (<span key={index} 
                        className={`w-full h-full text-center text-xl ${activeState===item && "active-tag"}`}
                        onClick={()=>{ setActiveState(item); }}>{item}</span>);
                })}
            </div>
            <div className="mt-1 w-full h-full border-t-2 border-t-black overflow-y-scroll">
                {(activeState=="Projects" ? projectList : blogList).map((content, index) => {
                    return (activeState=="Projects" 
                        ? <ProjectDetailView key={index} project={content}/> 
                        : <Blog key={index} blog={content}/>);
                })}
            </div>
        </div>
    );
}

export default DetailsOnTag;