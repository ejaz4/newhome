import styles from "./priceBox.module.css";
import resultStyle from "../../../../../_components/search/results.module.css";
import { Tag, TagBox } from "./tag";

import { getRelativeDate } from "../../../../../libs/dateParser";
import { useFavourites } from "../../../../../libs/useFavourites";

/**
 * JSDoc for a function that receives an object `param0` which contains a `property` object.
 *
 * @param {Object} param0 - Container object.
 * @param {Object} param0.property - Property object.
 * @param {string} param0.property.id - Unique identifier (UUID).
 * @param {string} param0.property.type - Property type (e.g. "HOUSE").
 * @param {string} param0.property.boundary - Boundary/structure type (e.g. "DETACHED", "SEMI-DETACHED").
 * @param {Object} param0.property.location - Address details.
 * @param {number|string} param0.property.location.number - Building number (may be numeric or string like "Flat 2").
 * @param {string} param0.property.location.street - Street name.
 * @param {string} param0.property.location.town - Town or city.
 * @param {string} param0.property.location.postcode - Postal code.
 * @param {Object} param0.property.price - Price information.
 * @param {number} param0.property.price.price - Numeric amount (e.g. 1370000).
 * @param {string} param0.property.price.currency - ISO currency code (e.g. "GBP").
 * @param {boolean} param0.property.price.isRent - True when the listing is a rental.
 * @param {string|null} param0.property.price.period - Rent period (e.g. "MONTHLY") or null for sales.
 * @param {string[]} param0.property.bedrooms - Array of bedroom labels/descriptions (e.g. "Master Ensuite").
 * @param {number} param0.property.bathrooms - Number of bathrooms.
 * @param {string|null} param0.property.tenure - Tenure type (e.g. "FREEHOLD", "LEASEHOLD").
 * @param {string} param0.property.description - Human-readable description of the property.
 * @param {string[]} param0.property.images - Array of image paths or URLs.
 * @param {string} param0.property.listedOn - ISO 8601 date string when the property was listed (e.g. "2025-12-10T10:40:10.030Z").
 */
export const PriceBox = ({ property }) => {
  const [favourites, toggleFavourites] = useFavourites();

  const price = property.price;
  const priceLabel = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: price.currency,
  }).format(price.price);

  const dateLabel = getRelativeDate(new Date(property.listedOn));

  return (
    <section className={styles.priceBox}>
      <span className={resultStyle.priceLabel}>
        <p className={resultStyle.price}>{priceLabel}</p>

        {/* Price period for places that can only be paid off in installments, such as rent or shared ownership households */}
        {price.period && <p>{price.period.toLowerCase()}</p>}
        {!price.period && <p>today</p>}
      </span>

      <TagBox>
        {price.isRent && <Tag label={"Rent"} />}
        {property.tenure && (
          <Tag
            to={`/search?tenure=${property.tenure}`}
            label={property.tenure}
          />
        )}
        {property.bathrooms && (
          <Tag to={"#"} label={`${property.bathrooms} bathrooms`} />
        )}
        {property.bedrooms.length && (
          <Tag
            to={`/search?minimumBedrooms=${property.bedrooms.length}`}
            label={`${property.bedrooms.length} bedrooms`}
          />
        )}

        {property.boundary && (
          <Tag
            to={`/search?boundary=${property.boundary}`}
            label={property.boundary}
          />
        )}
        {dateLabel && <Tag label={dateLabel} />}
      </TagBox>

      <button onClick={() => toggleFavourites(property.id)}>
        {favourites.includes(property.id) ? "Remove from " : "Add to"}{" "}
        Favourites
      </button>
    </section>
  );
};
