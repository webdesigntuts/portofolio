//COMPONENTS
import ListItemLink from "./ListItemLink";

//STYLES
import styles from "../styles/Navbar.module.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderAdd,
  AiOutlineMail,
} from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiBook } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          {/* HOME */}
          <ListItemLink url="">
            <AiOutlineHome />
            <h3>Home</h3>
          </ListItemLink>

          {/* ABOUT ME */}
          <ListItemLink url="about">
            <AiOutlineUser />
            <h3>About Me</h3>
          </ListItemLink>

          {/* RESUME */}
          <ListItemLink url="resume">
            <HiOutlineDocumentText />
            <h3>Resume</h3>
          </ListItemLink>

          {/* PORTOFOLIO */}
          <ListItemLink url="portofolio">
            <AiOutlineFolderAdd />
            <h3>Portofolio</h3>
          </ListItemLink>

          {/*  BLOG */}
          <ListItemLink url="blog">
            <FiBook />
            <h3>Blog</h3>
          </ListItemLink>

          {/* CONTACT */}
          <ListItemLink url="contact">
            <AiOutlineMail />
            <h3>Contact</h3>
          </ListItemLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
