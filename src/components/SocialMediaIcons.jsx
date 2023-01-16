import wsap from "../assets/wsap.png";
import gthub from "../assets/gthub.png";
import cvicon from "../assets/cvicon.png";
import netlify from "../assets/netlify.png";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/gonzalo-fara-377404212/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/gonzalofara"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={gthub} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://app.netlify.com/teams/fonsofara/sites"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="netlify-link" src={netlify} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://wa.me/5491136607117"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="whatsapp-link" src={wsap} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="../../CV Gonzalo Fara.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="cv-link" src={cvicon} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
