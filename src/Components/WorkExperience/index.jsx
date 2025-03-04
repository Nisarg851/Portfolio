/* eslint-disable react/prop-types */
import "./style.css";
import BulletPointIcon from "/bullet-point-icon.svg";
import resume_components from "../../utils/resume_components.json";
import { getImageUrl } from "../../utils/image_utils";
import Title from "../Common/Title";
import { motion } from "framer-motion";

const ExperienceComponent = ({experience, index}) => {
    const baseDelay = 0.4;
    const totalDelay = index * baseDelay;

    return (
        <a href={`/work-experience?value=${experience.organization}`}>
            <motion.li className="pt-2 ps-5 pe-2 border-b-[0.1px] border-white work-exprience-item"
            href={`/work-experience?value=${experience.organization}`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 1)" }}
            transition={{ duration: 0.4, delay: totalDelay }}
            >
                {/* <span className={`absolute w-6 h-6 rounded-full -start-3 border-2 overflow-clip
                    ${experience.duration.end=="Present" ? "border-[#00ff00]" : "border-[#0077b5]"}`}> */}
                <span
                    className={`absolute w-6 h-6 rounded-full -start-3 border-2 overflow-clip transition-transform
                        ${experience.duration.end === "Present" ? "border-[#00ff00]" : "border-[#0077b5]"}
                        org_logo`}>
                    <img src={getImageUrl("../assets/organizational_logos",experience.organization,"png")} alt={experience.organization}
                    className="bg-white rounded-2xl p-0.5 exclude-invert"/>
                </span>

                <div className="flex justify-between">
                    <div className="flex flex-col justify-between">
                        <h3 className="text-lg font-semibold">{experience.role}</h3>
                        <i>{experience.organization}</i>
                    </div>
                    <span className="text-sm leading-none flex flex-col justify-evenly">
                        <time className="text-sm font-medium">
                            <i className="block">{experience.duration.start} - {experience.duration.end}</i>
                        </time>
                        <i>{experience.location}</i>
                    </span>
                </div>
                <ul className="mt-2 text-base font-normal">
                    {
                        experience.responsibilities.map((responsibility, index) => {
                            return (
                                // <li key={index} className="mx-4 flex items-start">
                                <motion.li
                                    key={index}
                                    className="mx-4 flex items-start"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: totalDelay + index * 0.1 }}
                                >
                                    <motion.img
                                        src={BulletPointIcon}
                                        className="m-1"
                                        whileHover={{ scale: 1.3 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                    {/* <img  src={BulletPointIcon} className="m-1" /> */}
                                    <span className="my-1 leading-none text-start">{responsibility}</span>
                                </motion.li>
                                // </li>
                            );
                        })
                    }
                </ul>
            </motion.li>
        </a>
    );
}

const WorkExperience = () => {
    return (
        <div className="h-[80%] overflow-clip border-b-[1px] border-black">

            <Title title="WORK EXPERIENCE" className="flex justify-start text-xl title secondary-title"/>

            <div className="h-[95%] overflow-y-scroll">
                <ol className="mx-5 relative border-l-[1.5px] border-black">
                    {resume_components.work_experience.map((experience, index) => {
                        return <ExperienceComponent key={index} experience={experience} index={index}/>
                    })}
                </ol>
            </div>
        </div>
    );
}

export default WorkExperience;