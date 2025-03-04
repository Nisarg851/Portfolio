import "./style.css"
import Header from "../Header";
import WorkExperience from "../WorkExperience";
import Projects from "../Projects";

// import { useRef } from "react";  
import Skills from "../Skills";
// import { useLocation } from "react-router-dom";

const ResumePage = () => {

    // const location = useLocation();
    // const containerRef = useRef(null);

    // const handleScroll = (e) => {
    //     if (containerRef.current) {
    //         const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    //         if (scrollTop + clientHeight < scrollHeight && scrollTop > 0) {
    //             e.preventDefault();
    //         }
    //     }
    // };

    // useEffect(() => {
    //     const container = containerRef.current;
    //     if (container) {
    //         window.addEventListener('wheel', (e) => {
    //             const isWithinContainer = container.contains(e.target);
    //             if (!isWithinContainer) {
    //                 container.scrollBy({ top: e.deltaY });
    //                 e.preventDefault();
    //             }
    //         });

    //         return () => window.removeEventListener('wheel', handleScroll);
    //     }
    // }, []);

    return (
        // ref={location.pathname=="/" ? containerRef : null}
        <div className='lg:my-4 p-4 w-full lg:w-[45vw] h-full lg:h-[95vh] shadow-[0_0px_12px_rgba(0,0,0,0.40)] bg-white rounded-sm overflow-y-scroll flex flex-col gap-2 lg:gap-4'>
            <Header /> 
            <Skills/>
            <WorkExperience/>
            <Projects/>
        </div>
    );
}

export default ResumePage;