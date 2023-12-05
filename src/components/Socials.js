import { FaFacebookF } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import '../index.css';

function Socials() {
  return (
    <div className="Socials">
      <FaFacebookF  className="icon"/>
      <MdOutlineWhatsapp className="icon" />
      <FaLinkedinIn className="icon" />
      <FaGithub className="icon" />
    </div>
  )
}

export default Socials
