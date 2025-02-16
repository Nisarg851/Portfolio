import "./style.css";
import MailIcon from "/mail-icon.svg";
import LinkedInIcon from "/linkedin-icon.svg";
import GitHubIcon from "/github-icon.svg";
import PlusIcon from "/plus-icon.svg";

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
                  <a key={index} href={item.link} className={`social-icon ${item.css_theme}`}>
                    <img src={item.icon} alt={item.title} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <a href="/profile-card" className="z-0 w-full flex justify-center text-2xl title primary-title">
        <p>NISARGKUMAR</p>
        <p>MAHYAVANSHI</p>
      </a>
    </div>
  );
};

export default Header;
