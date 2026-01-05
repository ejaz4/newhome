import { Modal } from "../_components/modal";
import { Result } from "../_components/search/result";
import { useFavourites } from "../libs/useFavourites";
import styles from "./favourites.module.css";

const Favourites = () => {
  const [favourites] = useFavourites();

  return (
    <Modal className={styles.favourites}>
      <h2>Favourites</h2>
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
