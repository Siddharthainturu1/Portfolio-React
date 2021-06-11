import "./topbar.scss";
import { ContactPhone, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Future Revolutions
          </a>
          <div className="itemContainer">
            <ContactPhone className="icon" />
            <span>+91 92484 86648</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>siddharthainturu@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
