/* eslint-disable react/prop-types */
import Tag from "../Common/Tag";
import Title from "../Common/Title";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Skills = ({skillsAndTools}) => {
    const navigate = useNavigate();
    const [searchedValue, setSearchedValue] = useState("");

    const [isCollapsed, setIsCollapsed] = useState(true);
    const inputRef = useRef(null);

    const skills = Object.entries(skillsAndTools).flatMap(([domain, tags]) =>
        tags.map((tag, index) => ({ id: `${domain}_${index}`, tag }))
    );

    const searchTag = (event) => {
        event.preventDefault();
        const foundSkill = skills.find(({ tag }) => {
            const value = Object.values(tag)[0];
            return value.toLowerCase().includes(searchedValue.toLowerCase());
        });

        if(foundSkill==undefined){
            alert("No relevant tag found!");
            setSearchedValue("");
            return;
        }
        
        const [key, value] = Object.entries(foundSkill.tag)[0];
        navigate(`/tag?key=${key}&value=${value}`);
    }

    const toggleSearch = () => {
        setIsCollapsed(!isCollapsed);
        if (!isCollapsed) {
          inputRef.current.focus();
        }
    };

    const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
        let scrollTimer;

        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => setIsScrolling(false), 200); 
        };

        window.addEventListener("hover", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            
            <div className="h-full overflow-scroll relative">
                <div className="absolute z-10 top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
                <motion.div
                    className="top-0 flex flex-wrap gap-2 w-full"
                    // animate={{ y: ["0%", "-70%"] }} 
                    animate={isScrolling ? {} : {y: ["0%", "-70%"]}}
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
                            <Tag key={id} tag={tag} tagType={Object.values(tag)[0].toLowerCase().includes(searchedValue!="" ? searchedValue.toLowerCase() : "&&&") ? "special_skill" : "skill"} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;