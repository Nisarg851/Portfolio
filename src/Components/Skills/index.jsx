import Tag from "../Common/Tag";
import resume_components from "../../utils/resume_components.json";
import Title from "../Common/Title";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Skills = () => {
    const navigate = useNavigate();
    const [searchedValue, setSearchedValue] = useState("");

    const [isCollapsed, setIsCollapsed] = useState(true);
    const inputRef = useRef(null);

    const skills = Object.entries(resume_components.skills_and_tools).flatMap(([domain, tags]) =>
        tags.map((tag, index) => ({ id: `${domain}_${index}`, tag }))
    );

    const searchTag = (event) => {
        event.preventDefault();
        const foundSkill = skills.find(({ tag }) => {
            const value = Object.values(tag)[0];
            return value === searchedValue;
        });

        if(foundSkill==undefined){
            alert("No relevant tag found!");
            setSearchedValue("");
            return;
        }
        
        const [key, value] = Object.entries(foundSkill.tag)[0];
        navigate(`/tag?key=${key}&value=${value}`);
        console.log(key, value);
    }

    const toggleSearch = () => {
        setIsCollapsed(!isCollapsed);
        if (!isCollapsed) {
          inputRef.current.focus();
        }
    };

    return (
        <div className="h-[50%] relative overflow-clip inset-shadow-xs ">
            
            <div className="flex">
                <Title title="SKILL SET" className="flex justify-start text-xl title secondary-title" onClick={toggleSearch}/>
                <button className="border-b-black border-b-[1px]" onClick={toggleSearch}>🔍</button>
            </div>

            <AnimatePresence>
            {!isCollapsed && (
                <motion.form 
                    ref={inputRef}
                    onSubmit={searchTag}
                    initial={{ scaleY: 0,  opacity: 0, transformOrigin: 'top' }}
                    animate={{ scaleY: 1,  opacity: 1, transformOrigin: 'top' }}
                    exit={{ scaleY: 0, opacity: 0, transformOrigin: 'top' }}
                    transition={{ duration: 0.2, ease: 'linear' }}>
                        <motion.input
                            type="text"
                            list="tags"
                            className="w-full text-center"
                            value={searchedValue}
                            onChange={(event)=>{setSearchedValue(event.target.value)}}
                            placeholder="Search a skill..."
                        />
                        <datalist id="tags" className="right">
                            {skills.map(({tag}) => {
                                const [key, value] = Object.entries(tag)[0];
                                return (<option key={key} value={value}/>);
                            })}
                        </datalist>
                </motion.form>
            )}
            </AnimatePresence>
            
            <div className="absolute z-10 bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            
            <div className="h-full overflow-hidden relative">
                <div className="absolute z-10 top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

                <motion.div
                    className="top-0 flex flex-wrap gap-2 w-full"
                    animate={{ y: ["0%", "-70%"] }} 
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: skills.length * 1,  
                        ease: "linear"
                    }}>
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