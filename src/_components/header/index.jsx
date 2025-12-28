import { Link } from "react-router";
import { LogoWithWordMark } from "../logo";
import styles from "./header.module.css";
import { MenuIcon, XIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <LogoWithWordMark />
      </Link>

      <a href="#menu" className={styles.menuIcon}>
        <MenuIcon size={20} />
      </a>

      <nav id="menu" className={styles.menu}>
        <div className={styles.menuCloseButton}>
          <a href="#">
            <XIcon size={20} />
          </a>
        </div>
        <ul>
          <li>
            <Link to={"/buy"}>Buy</Link>
          </li>
          <li>
            <Link to={"/rent"}>Rent</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
