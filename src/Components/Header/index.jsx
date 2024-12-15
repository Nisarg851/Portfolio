import "./style.css";
import MailIcon from "/mail-icon.svg";
import LinkedInIcon from "/linkedin-icon.svg";
import GitHubIcon from "/github-icon.svg";
import PlusIcon from "/plus-icon.svg";

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
      <div className="absolute h-full mt-1.5">
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

      <h2 className="z-0 flex justify-center text-2xl title primary-title">
         <p>NISARGKUMAR</p>
         <p>MAHYAVANSHI</p>
       </h2>
    </div>
  );
};

export default Header;
