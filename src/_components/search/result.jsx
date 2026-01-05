import { Link } from "react-router";
import { propertyNameCreator } from "../../libs/propertyName";
import styles from "./results.module.css";
import { getRelativeDate } from "../../libs/dateParser";
import { HeartIcon, RectangleEllipsisIcon } from "lucide-react";
import { useProperty } from "../../libs/useProperty";
import { useFavourites } from "../../libs/useFavourites";

/**
 *
 * @param {Object} props                 The component props.
 * @param {string|number} props.id       Unique identifier of the listing.
 * @param {string} props.image           URL of the image to display.
 * @param {string} props.type            Type of the property (e.g. “House”, “Apartment”).
 * @param {string} props.street          Street name.
 * @param {string} props.town            Town / city.
 * @param {Object} props.price           Price Object
 * @param {number} props.price.price
 * @param {string} props.price.currency
 * @param {boolean} props.price.isRent
 * @param {string|null} props.price.period
 * @param {string} listedOn
 * @param {string} description
 * @returns {React.ReactElement} The rendered JSX.
 */
export const Result = ({ id }) => {
  const { images, type, location, price, listedOn, description } =
    useProperty(id);
  const [favourites, toggleFavourite] = useFavourites();

  const town = location.town;
  const street = location.street;
  const image = images.length != 0 ? images[0] : null;

  const name = propertyNameCreator(type, street, town, price.isRent);

  const priceLabel = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: price.currency,
  }).format(price.price);

  const listedOnObj = new Date(listedOn);
  const relativeDate = getRelativeDate(listedOnObj);

  return (
    <Link to={`/listing/${id}`} className={styles.result}>
      <img src={image} />
      <div className={styles.resultInfo}>
        <span className={styles.priceLabel}>
          <p className={styles.price}> {priceLabel}</p>

          {/* Price period for places that can only be paid off in installments, such as rent or shared ownership households */}
          {price.period && <p>{price.period.toLowerCase()}</p>}

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavourite(id);
            }}
          >
            <HeartIcon
              size={20}
              style={{ display: "block" }}
              fill={favourites.includes(id) ? "black" : "transparent"}
            />
          </button>
        </span>
        <p className={styles.name}>{name}</p>
        <p>Listed {relativeDate}</p>

        <p>
          {description
            .replaceAll("<br/>", "\n")
            .replaceAll("<br />", "\n")
            .slice(0, 300)
            .trim() + " "}

          <RectangleEllipsisIcon
            size={16}
            style={{ verticalAlign: "middle" }}
          />
        </p>
      </div>
    </Link>
  );
};
