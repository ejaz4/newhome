import { useParams } from "react-router";
import { Modal } from "../_components/modal";
import { useProperty } from "../libs/useProperty";
import { Link } from "react-router";
import styles from "./(app)/listing/_components/gallery/grid.module.css";
import { useLocation } from "react-router";

const GalleryGrid = () => {
  const { id } = useParams();
  const property = useProperty(id);
  const location = useLocation();

  console.log(location.state);

  return (
    <Modal className={styles.modal}>
      <h2>Gallery</h2>
      <ul className={styles.grid}>
        {property.images.map((t, idx) => (
          <li key={idx}>
            <Link
              to={`/listing/${id}/gallery/${idx}`}
              state={{ background: { pathname: `/listing/${id}` } }}
            >
              <img src={t} />
            </Link>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default GalleryGrid;
