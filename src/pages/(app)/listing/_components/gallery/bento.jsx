import { Link } from "react-router";
import styles from "./gallery.module.css";
import { useParams } from "react-router";
import { useLocation } from "react-router";

/**
 *
 * @param {string[]} param0.images
 * @returns
 */
export const PhotoBento = ({ images }) => {
  const params = useParams();
  const location = useLocation();

  // Image bento
  return (
    <section className={styles.gallery}>
      {images.slice(0, 5).map((t, idx) => (
        <Link to={`gallery`} state={{ background: location }} key={idx}>
          <img src={t} />
        </Link>
      ))}
    </section>
  );
};
