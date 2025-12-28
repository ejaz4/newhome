import { Header } from "../../../../_components/header";
import styles from "./mainHero.module.css";
import NewHomeLogo from "../../../../assets/logo/logo-48.svg?react";
import { SearchBox } from "../../../../_components/search/box";

export const MainHero = () => {
  return (
    <section className={styles.hero}>
      {/* Due to the hierarchal changes in the landing page, the header is embedded in the alt layout on this page.*/}
      <Header style={{ color: "white" }} />
      <section className={styles.content}>
        {/* Word art*/}
        <h1>
          A place to find
          <br />
          your happy place
          <br />— this is your{" "}
          <a>
            <NewHomeLogo />
          </a>{" "}
          newhome
        </h1>

        <SearchBox />
      </section>
    </section>
  );
};
