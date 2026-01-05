import { useParams } from "react-router";
import { Modal } from "../_components/modal";
import { useProperty } from "../libs/useProperty";
import { Link } from "react-router";
import styles from "./(app)/listing/_components/gallery/grid.module.css";
import { useLocation } from "react-router";

const GalleryImage = () => {
  const { id, idx } = useParams();
  const property = useProperty(id);

  return (
    <Modal style={{ padding: 0 }}>
      <img
        style={{ maxWidth: "100%", display: "block" }}
        src={property.images[idx]}
      />
    </Modal>
  );
};

export default GalleryImage;
