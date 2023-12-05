import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import '../index.css'

function Button() {
  return (
    <div className="buttons">
      <button className="email"><MdEmail /> Email</button>
      <button className="linkedin"><FaLinkedin /> Linkedin</button>
    </div>
  )
}

export default Button
