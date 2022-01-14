import { NavLink } from "react-router-dom";
import styles from "../styles/ListItemLink.module.scss";

const ListItemLink = ({ url, children, clickHandler }) => {
  return (
    <li className={styles.listItem} onClick={clickHandler}>
      <NavLink
        to={`/${url}`}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        {children}
      </NavLink>
    </li>
  );
};

ListItemLink.defaultProps = {
  url: "",
  children: "",
};

export default ListItemLink;
