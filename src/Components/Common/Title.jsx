/* eslint-disable react/prop-types */
const Title = ({title, className}) => {
    return (
        <h1 className={className}>
            {
                title.split(" ").map((str, index) => <p key={index}>{str}</p>)
            }
        </h1>
    );
}

export default Title;