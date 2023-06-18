import styles from "../styles/Contact.module.scss";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import DiscordIcon from "../assets/images/discord.png";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [copySuccess, setCopySuccess] = useState('');

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
          .then(() => {
            toast.success(`Copied: ${text}`);
          })
          .catch((error) => {
            console.error('Failed to copy text:', error);
          });
      };

  return (
    <div className={styles.contact}>
      <p className={styles.contactMe}>
        If you are intrested in working with me or if you have any questions, do
        not hesitate to contact me !{" "}
      </p>

      <div className={styles.contactInfo}>
        <div className={styles.inline}>
          <LocationCityIcon className={styles.icon} />
          <div>
            <p>Location</p>
            <p>Bab Ezzouar, Algiers, Algeria</p>
          </div>
        </div>

        <div className={styles.inline}>
          <EmailIcon className={styles.icon} onClick={() => handleCopy('imadeddineterraf@gmail.com')}/>
          <div>
            <p>Email</p>
            <p>imadeddineterraf@gmail.com</p>
          </div>
        </div>
        <div className={styles.sm}>
          <a href="https://www.linkedin.com/in/imad-eddine-terraf-745a0b201/">
            <LinkedInIcon className={styles.icon} />
          </a>
          <a href="https://www.facebook.com/imad.terraf/">
            <FacebookIcon className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/i_mad.t/">
            <InstagramIcon className={styles.icon} />
          </a>
          <a href="#">
            <img src={DiscordIcon} alt="discord logo" className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;
