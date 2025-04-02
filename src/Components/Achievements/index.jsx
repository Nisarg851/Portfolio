import Title from "../Common/Title";
import { Link } from "react-router-dom";
import CustomMarkdown from "../Common/CustomMarkdown";
import { useNavigate } from "react-router-dom";
import Tag from "../Common/Tag";

const Achievement = ({achievement}) => {
    return (
        <li>
            <hr className={`${achievement.tags!=undefined && "mb-4"}`}/>
            <div className="flex justify-between">
                <Link target="_" to={achievement.link} className="text-lg font-semibold text-[#4285F4]">{achievement.title}</Link>
                <i>{achievement.date}</i>
            </div>
            <i>{achievement.org}</i>
            <div className={`${achievement.description==undefined ? "hidden": "block"} prose markdown pb-2 text-justify`}>
                <CustomMarkdown className="*:m-0">{achievement.description}</CustomMarkdown>
            </div>
            <div className={`${achievement.tags==undefined ? "hidden": "block"} rounded-md p-1 bg-[#374151] mt-6 mb-1 w-full flex flex-wrap gap-1 overflow-y-scroll`}>
                {achievement.tags!=undefined && achievement.tags.map((tag, index) => {
                    return <Tag key={index} tag={tag}/>
                })}
            </div>
        </li>
    );
}

const Achievements = () => {
    const navigate = useNavigate();

    const achievement = [
        {"id":1, "title": "AWS Certified Developer - Associate", "org": "Amazon Web Services Training and Certification", "date": "Oct 2024", "link": "https://www.credly.com/badges/49a2c662-e145-4b94-8d41-edd84c972ccb/linked_in_profile"},
        {"id":2, "title": "Humber Expo Winner", "org": "Humber", "date": "Aug 2023", "link": "https://www.linkedin.com/posts/hemali1310_educationinnovation-projectexpo-bestproject-activity-7095930632148553729-fN3U"},
        {"id":3, "title": "1st Runner-up at Cloud Native Hackathon", "org": "DevPost", "date": "Dec 2021", "link": "https://cloudnativehack21.devpost.com/project-gallery"}
    ]

    return (
        <div className="w-full h-[300px]">
            <Title title="ACHIEVEMENTS AND CERTS." className="flex justify-start text-xl title secondary-title"
                onClick={()=>{navigate("/achievements-and-cert")}}/>
            <ul>
                {achievement.map((item, index) => <Achievement key={index} achievement={item}/>)}
            </ul>
        </div>
    );
}

export default Achievements;
export {Achievement};