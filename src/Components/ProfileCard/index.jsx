import { useEffect } from "react";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Link } from "react-router-dom";
import "./profile-card.css";

const ProfileCard = () => {
    const [greetings, setGreetings] = useState('');
    const [markdown, setMarkdown] = useState('');
    
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Nisarg851/Nisarg851/main/README.md")
        .then(res => res.text())
        .then(text => setMarkdown(text))
        .catch(error => console.error('Error fetching Markdown:', error));

        const now = new Date();
        const hour = now.getHours();
        if (hour >= 5 && hour < 11) {
            setGreetings('Good Morning! ☀️');
        } else if (hour >= 11 && hour < 3) {
            setGreetings('Good Afternoon! 🌤️');
        } else if (hour >= 3 && hour < 7){
            setGreetings('Good Evening! 🌇');
        } else {
            setGreetings('Good Evening! 🌆');
        }
    },[]);

    const mediumScreenSize = 768;

    return (
        <div>
            <Link to="/resume" onClick={event => window.innerWidth>=mediumScreenSize && event.preventDefault()} className="cursor-default">
                <div className="w-full flex justify-center items-center">
                    <img src="https://avatars.githubusercontent.com/u/52291990" alt="Nisarg851" className="my-4 md:w-[50%] border-2 border-black rounded-full"/>
                </div>
                {/* <div className="w-fit profile-img relative flex justify-center items-center bg-black rounded-full overflow-hidden max-md:animate-pulse">
                    <div className="absolute w-fit h-fit">
                        <Particles
                            particleColors={['#ffffff', '#ffffff']}
                            particleCount={500}
                            particleSpread={10}
                            speed={0.1}
                            particleBaseSize={100}
                            moveParticlesOnHover={true}
                            alphaParticles={false}
                            disableRotation={false}
                        />
                    </div>
                    <img src="https://avatars.githubusercontent.com/u/52291990" alt="Nisarg851" className="my-4 md:w-[50%] rounded-full"/>
                </div> */}
            </Link>
            <h1 className="text-2xl font-extrabold">{greetings}</h1>
            <div className="prose markdown">
                <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{markdown}</Markdown>
            </div>
        </div>
    );
}

export default ProfileCard;