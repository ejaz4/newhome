import { Link } from "react-router";
import { LogoWithWordMark } from "../logo";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <LogoWithWordMark />
      </Link>
      <nav>
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
