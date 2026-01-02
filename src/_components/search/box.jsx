import { FunnelIcon, SearchIcon } from "lucide-react";
import styles from "./box.module.css";
import { Form } from "react-router";
import { Link } from "react-router";

export const SearchBox = () => {
  const searchParams = new URL(window.location).searchParams;
  const defaultValue = searchParams.get("q") ?? "";

  return (
    <Form className={styles.searchBox} method={"get"} action={"/search"}>
      <div className={styles.buttonStrip} style={{ paddingInlineEnd: 0 }}>
        <SearchIcon style={{ alignSelf: "center" }} size={20} />
      </div>
      <input
        name="q"
        defaultValue={defaultValue}
        placeholder={"What's the move?"}
        type="search"
        required
      />
      <div className={styles.buttonStrip}>
        <Link className={styles.filter}>
          <FunnelIcon size={20} />
          <p>Filter</p>
        </Link>
      </div>
    </Form>
  );
};
