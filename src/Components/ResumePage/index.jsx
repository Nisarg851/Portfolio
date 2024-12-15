import "./style.css"
import Header from "../Header";
import WorkExperience from "../WorkExperience";

const ResumePage = () => {
    return (
        <div className='p-2 w-[45vw] h-[100vh] border-2 border-black overflow-y-scroll'>
            <Header/>
            <WorkExperience/>
        </div>
    );
}

export default ResumePage;