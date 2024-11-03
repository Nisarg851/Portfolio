import "./style.css";
import MailIcon from "../../../public/mail-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import GitHubIcon from "../../../public/github-icon.svg";
import PlusIcon from "../../../public/plus-icon.svg";

const Header = () => {

  const ContactLinks = [
    {"icon": MailIcon,
      "title": "Mail",
      "link": "",
      "css_theme": "mail"
    },
    {"icon": GitHubIcon,
      "title": "Github/Nisarg851",
      "link": "https://github.com/Nisarg851",
      "css_theme": "github"
    },
    {"icon": LinkedInIcon,
      "title": "LinkedIn/nisargmahyavanshi",
      "link": "https://www.linkedin.com/in/nisargmahyavanshi/",
      "css_theme": "linkedin"
    }
  ]

  return (
    <div className="relative w-full header">
      <div className="absolute h-full m-1.5">
        <div className="tooltip-container">
          <div className="button-content">
            <img src={PlusIcon} className="plus-icon" />
            <span className="text">Connect</span>
          </div>
          <div className="tooltip-content">
            <div className="social-icons">
              {ContactLinks.map((item, index) => {
                return (
                  <a key={index} href={item.link} className={`social-icon ${item.css_theme}`}>
                    <img src={item.icon} alt={item.title} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <h2 className="z-0 flex justify-center text-2xl primary-title highlight">
         <p>NISARGKUMAR</p>
         <p>MAHYAVANSHI</p>
       </h2>
    </div>
    
    // <div className="header">
    //   <div className="relative w-full flex items-center highlight">

    //     <button className="absolute button">
    //       <svg className="svgIcon" viewBox="0 0 384 512">
    //         <path
    //           d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
    //         ></path>
    //       </svg>
    //     </button>

    //     <h2 className="highlight primary-title text-2xl flex">
    //       <p>NISARGKUMAR </p>
    //       <p>MAHYAVANSHI</p>
    //     </h2>
    //   </div>
    //   {/* <div className="">
    //     {
    //       ContactLinks.map((item, index) => {
    //         return <a key={index} href={item.link} className="flex items-center ">
    //           <img src={item.icon} alt="icon" className="inline "/>{item.title}
    //         </a>
    //       })
    //     }
    //   </div> */}
    // </div>
  );
};

export default Header;
