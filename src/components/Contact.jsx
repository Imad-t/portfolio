import styles from "../styles/Contact.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import DiscordIcon from "../assets/images/discord.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types";

const Contact = ({darkMode}) => {


    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
          .then(() => {
            if(text === 'imadt') toast.success(`Copied Discord username to clipboard`,{autoClose: 2000, closeButton: false,  onClick: () => toast.dismiss()});
            else
            toast.success(`Copied email to clipboard`,{autoClose: 2000, closeButton: false,  onClick: () => toast.dismiss()});
          })
          .catch((error) => {
            console.error('Failed to copy text:', error);
          });
      };

  return (
    <div className={`${styles.contact} ${darkMode ? styles["dark-mode"] : ""}`}>
      <p className={styles.contactMe}>
        If you are intrested in working with me or if you have any questions, do
        not hesitate to contact me !{" "}
      </p>

      <div className={styles.contactInfo}>
    
          <EmailIcon className={styles.icon} onClick={() => handleCopy('imadeddineterraf@gmail.com')}/>
          <img src={DiscordIcon} alt="discord logo" className={styles.icon} onClick={()=> handleCopy('imadt')}/>
          <a href="https://www.linkedin.com/in/imad-eddine-terraf-745a0b201/" target="_blank" rel="noreferrer">
            <LinkedInIcon className={styles.icon} />
          </a>
          <a href="https://www.facebook.com/imad.terraf/" target="_blank" rel="noreferrer">
            <FacebookIcon className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/i_mad.t/" target="_blank" rel="noreferrer">
            <InstagramIcon className={styles.icon} />
          </a>
          
      </div>
      <p className={styles.rights}>Developped by ImadDev © | All rights reserved</p>
    </div>
    
  );
};
Contact.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
export default Contact;
