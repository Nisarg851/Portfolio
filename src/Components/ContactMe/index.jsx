import "./style.css";
import { getImageUrl } from "../../utils/image_utils";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ResumeProfileIcon from "/resume-profile-icon.svg";

const getCurrentDateTimeString = () => {
    const now = new Date();
  
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const year = now.getFullYear();
    const month = months[now.getMonth()]; 
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
  
    // Adjust hours for 12-hour format
    const adjustedHours = hours % 12 || 12; 
  
    const formattedDateTime = `${month} ${day}, ${year}, ${adjustedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
  
    return formattedDateTime;
  }

const ContactMe = () => {

    const [dateTime, setDateTime] = useState(getCurrentDateTimeString());
    const [emailError, setEmailError] = useState("");
    const form = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setDateTime(getCurrentDateTimeString());
        }, 1000); // Update every second
    
        return () => clearInterval(intervalId);
    }, []);

    const formHandler = async (event) => {
        event.preventDefault();
        const formData =  Object.fromEntries(new FormData(event.target));
        const email = formData["from_name"];
        const message = formData["message"];

        if(email=="" || message==""){
            setEmailError(`Please Enter a valid ${email=="" ? "Email" : "Message"}`);
            return;
        }

        await emailjs.sendForm(
                    import.meta.env.VITE_EMAIL_SERVICE_ID, 
                    import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
                    event.target, 
                    import.meta.env.VITE_EMAIL_USER_ID)
                // eslint-disable-next-line no-unused-vars
                .then(_ => {
                    setEmailError(false);
                    event.target.reset();
                    console.log("Email sent!")
                }, err => {
                    setEmailError(true);
                    console.log("Error: ",err);
                });
    }

    return (
        <div className="w-full h-[100vh]">
            <div className="flex">
                <a href="/" className="md:hidden py-2"><img src={ResumeProfileIcon} alt="resume" /></a>
                <h2 className="w-full flex justify-center text-2xl title primary-title">
                    <p>CONTACT</p>
                    <img src={getImageUrl("../assets/","mail","gif")} alt="Contact Me" className="m-2 w-[8%] rounded-full"/>
                </h2>
            </div>
            <form ref={form} onSubmit={formHandler} className="w-full h-[80%]">
                <h1 className={`mb-1 py-1 text-center bg-red-500 text-white rounded-sm ${emailError!="" ? "block" : "hidden"}`}>{emailError}</h1>
                <div className="mb-1 py-1 md:border-[1px] border-black rounded-sm w-full h-fit flex flex-col md:flex-row items-center">
                    <img src={getImageUrl("../assets/","user_profile","gif")} alt="user profile" className="m-1 w-[12%] md:w-[8%] rounded-full highlight"/>
                    <div className="px-1 w-full">
                        <div className="flex justify-between flex-col-reverse md:flex-row">
                            <input name="from_name" type="email" placeholder="Your Email" className="mt-4 md:m-0"/>
                            <span className="text-center">{dateTime}</span>
                        </div>
                        <span><b>To:</b> nisargkumar.dev@gmail.com</span>
                    </div>
                </div>
                <div className="w-full h-[60%] flex flex-col justify-center items-start">
                    <textarea name="message" placeholder="Message" className="p-2 highlight rounded-sm w-full h-full"></textarea>
                    <button className="button">
                        <div className="state state--default">
                            <div className="icon">
                                {getSVGIcon("MailSendIcon")}
                            </div>
                            {letterAnimation("Send Mail", 0)}
                        </div>
                        <div className="state state--sent">
                            <div className="icon">
                                {getSVGIcon("MailSentIcon")}
                            </div>
                            {letterAnimation("Sent!", 5)}
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
}

const letterAnimation = (letters, startIndex) => {
    return (<p>
        {letters.split('').map((ch, index) => <span key={startIndex+index} className="letter" style={{ '--i': startIndex+index }}>  {ch}</span>)}
        </p>)
}

const getSVGIcon = (name) => {
    const icons = {
        "MailSendIcon": (<svg xmlns="http://www.w3.org/2000/svg"
                            stroke="black"
                            fill="none"
                            viewBox="0 0 24 24"
                            height="1.2em"
                            width="1.2em">
                            <g>
                                <path
                                    fill="currentColor"
                                    d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                                ></path>
                            </g>
                            <defs>
                            <filter id="shadow">
                                <fedropshadow
                                floodOpacity="0.6"
                                stdDeviation="0.8"
                                dy="1"
                                dx="0"
                                ></fedropshadow>
                            </filter>
                            </defs>
                        </svg>),

            "MailSentIcon": (<svg stroke="black"
                                strokeWidth="0.5px"
                                width="1.2em"
                                height="1.2em"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                                        fill="currentColor"
                                    ></path>
                                </g>
                            </svg>)
    }

    return icons[name];
}

export default ContactMe;