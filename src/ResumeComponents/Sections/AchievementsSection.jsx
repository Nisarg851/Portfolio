/* eslint-disable react/prop-types */
import Title from "../../Components/Common/Title";
import { Link } from "react-router-dom";
import CustomMarkdown from "../../Components/Common/CustomMarkdown";
import { useNavigate } from "react-router-dom";
import Tag from "../../Components/Common/Tag";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../../Components/Common/Loader";

const Achievement = ({achievement, onResumePage}) => {
    return (
        <li>
            <hr className={`${achievement.tags!=undefined && "mb-4"}`}/>
            <div className="flex justify-between">
                <Link target="_" to={achievement.link} className="text-lg font-semibold text-[#4285F4]">{achievement.title}</Link>
                <i>{achievement.date}</i>
            </div>
            <i>{achievement.org}</i>
            {!onResumePage && (<div>
                <div className={`${achievement.description==undefined ? "hidden": "block"} prose markdown pb-2 text-justify`}>
                    <CustomMarkdown className="*:m-0">{achievement.description}</CustomMarkdown>
                </div>
                <div className={`${achievement.tags==undefined ? "hidden": "block"} rounded-md p-1 bg-[#374151] mt-6 mb-1 w-full flex flex-wrap gap-1 overflow-y-scroll`}>
                    {achievement.tags!=undefined && achievement.tags.map((tag, index) => {
                        return <Tag key={index} tag={tag}/>
                    })}
                </div>
            </div>)}
        </li>
    );
}

const AchievementsSection = () => {
    const navigate = useNavigate();
    
    const [achievement, setAchievement] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch(`https://raw.githubusercontent.com/Nisarg851/DataSource/master/Portfolio/data/achievement.json`)
            const data = await res.json()
            setAchievement(data);
        }

        fetchData()
    },[]);

    return (
        <div className="w-full h-[300px]">
            <Title title="ACHIEVEMENTS AND CERTS." className="flex justify-start text-xl title secondary-title"
                onClick={()=>{navigate("/achievements-and-cert")}}/>
            {
                achievement.length==0
                    ? <Loader/>
                    : (<ul>{achievement.map((item, index) => <Achievement key={index} achievement={item} onResumePage={true}/>)}</ul>)
            }
        </div>
    );
}

export default AchievementsSection;
export {Achievement};