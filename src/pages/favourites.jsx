import { HeartIcon } from "lucide-react";
import { Modal } from "../_components/modal";
import { Result } from "../_components/search/result";
import { useFavourites } from "../libs/useFavourites";
import styles from "./favourites.module.css";

const Favourites = () => {
  const [favourites, toggleFavourites] = useFavourites();

  return (
    <Modal
      onDrop={(e) => {
        e.preventDefault();
        const text = e.dataTransfer.getData("text");
        console.log(e.dataTransfer.getData("text"));
        if (text.includes("/listing/")) {
          const href = new URL(text);
          toggleFavourites(href.pathname.split("/")[2]);
        }
      }}
      className={styles.favourites}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Favourites</h2>
        <button
          onClick={() => {
            localStorage.setItem("favourites", "[]");
            window.location.reload();
          }}
        >
          Clear all
        </button>
      </div>

      {/* Handle no favourites */}
      {favourites.length == 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            gap: "1rem",
          }}
        >
          <h2>Start Favouriting</h2>
          <p>
            Favourite any listing by clicking <HeartIcon size={16} /> next to
            the price of a listing.
          </p>
          <p>
            You can also drag a result down to the bottom of the screen to add
            it to Favourites.
          </p>
        </div>
      )}

      {/* Show list if favourites have been found*/}
      <ul className={styles.list}>
        {favourites.map((e, idx) => (
          <li key={idx}>
            <Result id={e} />
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default Favourites;
