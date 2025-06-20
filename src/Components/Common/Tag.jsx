/* eslint-disable react/prop-types */
import tags from "../../utils/tags.json";
import { Link } from "react-router-dom";

const Tag = ({tag, tagType}) => {
    const [key, value] = Object.entries(tag)[0];
    const isSkillTag = tagType?.includes("skill")
    return (
        <Link to={`/tag?key=${key}&value=${value}`}
            className={`grow border-[1px] text-sm text-center
                ${tagType == "special_skill" ? "bg-yellow-400" : "bg-white"} 
                text-black
                ${isSkillTag ? `px-3 py-[6px] skill_tag` : "tag max-w-fit px-2"}
                rounded-[4px] flex items-center justify-center flex-grow-0 flex-shrink-0 basis-auto whitespace-nowrap`}>
            {isSkillTag && <img className="me-2 scale-100" src={`https://raw.githubusercontent.com/Nisarg851/DataSource/master/Portfolio/tech-icons/${tags[key]["icon"]}`}/>}
            {value}
        </Link>
    );
}

export default Tag;