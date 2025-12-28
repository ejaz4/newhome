import { SearchIcon } from "lucide-react";
import styles from "./box.module.css";
import { Form } from "react-router";

export const SearchBox = () => {
  const searchParams = new URL(window.location).searchParams;
  const defaultValue = searchParams.get("q") ?? "";

  return (
    <Form className={styles.searchBox} method={"get"} action={"/search"}>
      <SearchIcon size={20} />
      <input
        name="q"
        defaultValue={defaultValue}
        placeholder={"What's the move?"}
        type="search"
        required
      />
    </Form>
  );
};
