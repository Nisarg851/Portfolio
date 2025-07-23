import { useEffect } from "react";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkMermaid from "remark-mermaid-plugin";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Link } from "react-router-dom";
import "../styles/profile-card-style.css";

const ProfileCard = () => {
    const [greetings, setGreetings] = useState('');
    const [markdown, setMarkdown] = useState('');
    
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Nisarg851/Nisarg851/master/README.md")
        .then(res => res.text())
        .then(text => setMarkdown(text))
        .catch(error => console.error('Error fetching Markdown:', error));

        const now = new Date();
        const hour = now.getHours();

        if (hour >= 5 && hour < 11) {
            setGreetings('Good Morning! ☀️');
        } else if (hour >= 11 && hour < 16) {
            setGreetings('Good Afternoon! 🌤️');
        } else if (hour >= 16 && hour < 19){
            setGreetings('Good Evening! 🌇');
        } else {
            setGreetings('Good Evening! 🌆');
        }
    },[]);

    const mediumScreenSize = 1024;

    return (
        <div>
            <Link to="/resume" onClick={event => window.innerWidth>=mediumScreenSize && event.preventDefault()} className={window.innerWidth >= mediumScreenSize && "cursor-default"}>
                <div className="w-full flex justify-center items-center">
                    <img src="https://avatars.githubusercontent.com/u/52291990" alt="Nisarg851" className="my-4 md:w-[50%] shadow-[0_0px_12px_rgba(0,0,0,0.40)] rounded-full border-4 border-black"/>
                </div>
            </Link>
            <h1 className="text-2xl font-extrabold">{greetings}</h1>
            <div className="prose markdown">
                <Markdown remarkPlugins={[remarkGfm, remarkMermaid]} rehypePlugins={[rehypeRaw]}>{markdown}</Markdown>
            </div>
        </div>
    );
}

export default ProfileCard;