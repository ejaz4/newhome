import { Link } from "react-router";
import { LogoWithWordMark } from "../logo";
import styles from "./header.module.css";
import React from "react";

/**
 * @param {HTMLAttributes<HTMLElement>} props
 */
export const Header = (props) => {
  return (
    <header className={styles.header} {...props}>
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
