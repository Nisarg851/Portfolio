import "./style.css"
import Header from "../Header";
import WorkExperience from "../WorkExperience";
import Projects from "../Projects";

import { useRef, useEffect } from "react";
import Skills from "../Skills";

const ResumePage = () => {

    const containerRef = useRef(null);

    const handleScroll = (e) => {
        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            if (scrollTop + clientHeight < scrollHeight && scrollTop > 0) {
                e.preventDefault();
            }
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            window.addEventListener('wheel', (e) => {
                const isWithinContainer = container.contains(e.target);
                if (!isWithinContainer) {
                    container.scrollBy({ top: e.deltaY });
                    e.preventDefault();
                }
            });

            return () => window.removeEventListener('wheel', handleScroll);
        }
    }, []);

    return (
        <div ref={containerRef} className='lg:my-4 p-2 w-full lg:w-[45vw] h-full lg:h-[95vh] border-[1px] border-black rounded-sm overflow-y-scroll flex flex-col gap-2 lg:gap-4'>
            <Header />
            <Skills/>
            <WorkExperience/>
            <Projects/>
        </div>
    );
}

export default ResumePage;