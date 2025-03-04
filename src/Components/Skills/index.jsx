import Tag from "../Common/Tag";
import resume_components from "../../utils/resume_components.json";
import Title from "../Common/Title";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = Object.entries(resume_components.skills_and_tools).flatMap(([domain, tags]) =>
        tags.map((tag, index) => ({ id: `${domain}_${index}`, tag }))
    );

    return (
        <div className="h-[50%] mb-2 relative overflow-clip">
            <Title title="SKILL SET" className="flex justify-start text-xl title secondary-title"/>

            <div className="h-full overflow-hidden">
                <motion.div
                    className="top-0 flex flex-wrap gap-2 w-full"
                    animate={{ y: ["0%", "-80%"] }} // Moves from bottom to top
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: skills.length * 1,  // Adjust speed based on the number of skills
                        ease: "linear"
                    }}>
                    {[...skills].map(({ id, tag }, index) => (
                        <motion.div
                            key={id + index}
                            className="flex grow w-fit"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: Math.random() * 1.5 }}
                        >
                            <Tag key={id} tag={tag} tagType={"skill"} />
                        </motion.div>
                    ))}
                    {[...skills, ...skills].map(({ id, tag }, index) => (
                        <motion.div
                            key={id + index}
                            className="flex grow w-fit"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: Math.random() * 1.5 }}
                        >
                            <Tag key={id} tag={tag} tagType={"skill"} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

// const Skills = () => {
//     return (
//         <div className="h-[50%] mb-4">
//             <Title title="SKILL SET" className="flex justify-start text-xl title secondary-title"/>

//             <div className="mt-2 p-1 w-full h-[90%] overflow-y-scroll flex flex-wrap gap-1 justify-stretch  items-stretch">
//                 {Object.entries(resume_components.skills_and_tools).flatMap(([domain, tags]) => (
//                     tags.map((tag, index) => (
//                         <motion.div
//                             key={index}
//                             className="flex grow"
//                             initial={{ scale: 0, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             transition={{ duration: 0.5, delay: Math.random() * 1.5 }}>
//                             <Tag key={`${domain}_${index}`} tag={tag} tagType={"skill"}/>
//                         </motion.div>
//                     ))
//                 ))}
//             </div>
//         </div>
//     );
// }

export default Skills;