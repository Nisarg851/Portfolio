import tags from "../../utils/tags.json";
import { Link } from "react-router-dom";

const Tag = (tag) => {
    const [key, value] = Object.entries(tag.tag)[0];

    return (
        <Link to={`/tag?key=${key}&value=${value}`}
            className={`grow border-[1px] text-sm text-center 
                ${tag.tagType == "skill" ? `bg-white px-3 py-[6px]   text-black skill_tag` : "bg-white tag max-w-fit px-2"}
                rounded-[4px] flex items-center justify-center flex-grow-0 flex-shrink-0 basis-auto whitespace-nowrap`}>
            {tag.tagType == "skill" && <img className="me-2 scale-100" src={`/tech-icons/${tags[key]["icon"]}`}/>}
            {value}
        </Link>
    );
}

export default Tag;