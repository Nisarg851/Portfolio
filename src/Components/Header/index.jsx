import "./style.css";
import MailIcon from "/mail-icon.svg";
import LinkedInIcon from "/linkedin-icon.svg";
import GitHubIcon from "/github-icon.svg";
import PlusIcon from "/plus-icon.svg";
import ResumeIcon from "/resume-profile-icon.svg";
import Title from "../Common/Title";
import { Link } from "react-router-dom";

const Header = () => {

  const ContactLinks = [
    {"icon": MailIcon,
      "title": "Mail",
      "link": "/contact-me",
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
    },
    {"icon": ResumeIcon,
      "title": "Resume",
      // "link": "../../assets/resume/",
      "link": "https://drive.google.com/drive/folders/1_nD4Wuh8hdBuPlVGATgS-CSQPv2v4tfF?usp=sharing",
      "file": "Nisargkumar Resume.pdf",
      "css_theme": "resume"
    }
  ]

  return (
    <div className="flex flex-col-reverse items-center md:flex-row w-full">
      <div className="h-full">
        <div className="tooltip-container">
          <div className="button-content">
            <img src={PlusIcon} className="plus-icon" />
            <span className="text">Connect</span>
          </div>
          <div className="tooltip-content">
            <div className="social-icons">
              {ContactLinks.map((item, index) => {
                return (
                  <abbr key={index} title={item.title}>
                    <Link to={item.link} className={`social-icon ${item.css_theme}`}>
                          <img src={item.icon} alt={item.title} />
                      </Link>
                  </abbr>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Link to="/profile-card" className="w-full">
        <Title title="NISARGKUMAR MAHYAVANSHI" className="max-sm:mb-4 w-full flex-nowrap justify-center text-xl title primary-title title-with-redirect"/>
      </Link>

    </div>
  );
};

export default Header;
