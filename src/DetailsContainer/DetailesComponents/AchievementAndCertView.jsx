import ResumeProfileIcon from "/resume-profile-icon.svg";
import { Link } from "react-router-dom";
import Title from "../../Components/Common/Title";
import { Achievement } from "../../ResumeComponents/Sections/AchievementsSection";
import { useState, useEffect } from "react";
import Loader from "../../Components/Common/Loader";

const AchievementAndCertView = () => {
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
        <div className="w-full h-full">
            <div className="flex">
                <Link to="/resume" className="md:hidden p-1"><img src={ResumeProfileIcon} alt="resume" /></Link>
                <Title title={"ACHIEVEMENTS AND CERTS."} className="w-full flex justify-center text-2xl title primary-title underline"/>
            </div>
                {achievement.length==0
                    ? <Loader/>
                    : (
                        <ul className="py-2">
                            {achievement.map((item, index) => (
                                <li key={index}>
                                    <Achievement key={index} achievement={item}/>
                                </li>))}
                        </ul>
                    )
                }
        </div>
    );
}

export default AchievementAndCertView;