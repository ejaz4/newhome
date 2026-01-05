import { FunnelIcon, SearchIcon } from "lucide-react";
import styles from "./box.module.css";
import { Form } from "react-router";
import { Link } from "react-router";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router";
// Assuming you have your styles and icons imported above...

export const SearchBox = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // Cleaner way to get params than window.location
  const defaultValue = searchParams.get("q") ?? "";
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop full page reload

    // Get the input value
    const formData = new FormData(e.currentTarget);
    const query = formData.get("q");

    // Manually navigate
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query.toString())}`);
    }
  };

  return (
    <form className={styles.searchBox} onSubmit={handleSubmit} role="search">
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
        <Link
          to={"/search/filter"}
          state={{ background: location }}
          className={styles.filter}
        >
          <FunnelIcon size={20} />
          <p>Filter</p>
        </Link>
      </div>
    </form>
  );
};
