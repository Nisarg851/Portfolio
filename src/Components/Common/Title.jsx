/* eslint-disable react/prop-types */
const Title = ({title, className, onClick}) => {
    return (
        <h1 className={className}>
            {
                title.split(" ").map((str, index) => <p key={index} onClick={onClick} className="cursor-pointer">
                    {str.split('').map((chr, index) => {
                        return <span key={index} className="hover:text-[#4294F7] hover:font-extrabold">{chr}</span>
                    })}
                </p>)
            }
        </h1>
    );
}

export default Title;