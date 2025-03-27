import LoaderIcon from "/loader-icon.svg";

const Loader = () => <div className="w-full h-full flex justify-center items-center">
        <img src={LoaderIcon} className="size-10 animate-spin" alt="Loading..."/>
    </div>

export default Loader;