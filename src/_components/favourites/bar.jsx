import { useState } from "react";
import { useFavourites } from "../../libs/useFavourites";
import styles from "./bar.module.css";
import { joinClasses } from "../../libs/joinClasses";

export const FavouritesBar = () => {
  const [favourites, toggleFavourites] = useFavourites();
  const [over, setOver] = useState(false);

  return (
    <div className={joinClasses(styles.drop, over ? styles.over : "")}>
      <div
        className={styles.bar}
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setOver(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          const text = e.dataTransfer.getData("text");

          if (text.includes("/listing/")) {
            const href = new URL(text);
            toggleFavourites(href.pathname.split("/")[2]);
          }
        }}
      >
        {!over && <p>Drop property here to add or remove from Favourites</p>}
        {over && <p>Release property to add or remove from Favourites</p>}
      </div>
    </div>
  );
};
