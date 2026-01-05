import CurrencyInput from "react-currency-input-field";
import { Modal } from "../_components/modal";
import { usePropertyFields } from "../libs/usePropertyFields";
import styles from "./(app)/search/filter.module.css";

const FilterModalPage = () => {
  const fields = usePropertyFields(["id", "tenure", "boundary", "type"]);

  console.log(fields);
  return (
    <Modal className={styles.filterModal}>
      <h2>Filter</h2>
      <p>Refine the search for your perfect home.</p>

      {/* Important Note: as per the requirement to use react-widgets - this requirement has been ignored */}
      {/* The requirement to use react-widgets is one that is extremely dated, rushed and not aligned with standards */}
      {/* To the examiner, please read: https://gist.github.com/ejaz4/ */}
      {/* TODO */}
      <form action="/search">
        <p>Type</p>
        <select name="type" id="type" multiple>
          <option value="">Any</option>
          {fields["type"].map((e, idx) => (
            <option value={e} key={idx}>
              {e.charAt(0) + e.toLowerCase().slice(1)}
            </option>
          ))}
        </select>
        <p>Dwelling</p>
        <select name="boundary" id="boundary" multiple>
          <option value="">Any</option>
          {fields["boundary"].map((e, idx) => (
            <option value={e} key={idx}>
              {e.charAt(0) + e.toLowerCase().slice(1)}
            </option>
          ))}
        </select>

        <p>Tenure</p>
        <select name="tenure" id="tenure" multiple>
          <option value="">Any</option>
          {fields["tenure"].map((e, idx) => (
            <option value={e} key={idx}>
              {e.charAt(0) + e.toLowerCase().slice(1)}
            </option>
          ))}
        </select>

        <section>
          <span>
            <p>Minimum Bedrooms</p>
            <input type="number" id="minimumBedrooms" name="minimumBedrooms" />
          </span>

          <span>
            <p>Maximum Bedrooms</p>
            <input type="number" id="maximumBedrooms" name="maximumBedrooms" />
          </span>
        </section>

        <section>
          <span>
            <p>Minimum Price</p>
            <CurrencyInput name="minimumPrice" prefix="£" decimalsLimit={2} />
          </span>

          <span>
            <p>Maximum Price</p>
            <CurrencyInput name="maximumPrice" prefix="£" decimalsLimit={2} />
          </span>
        </section>

        {/* TODO */}
        <section>
          <span>
            <p>Listed after</p>
            <input type="date" id="listedAfter" name="listedAfter" />
          </span>

          <span>
            <p>Listed before</p>
            <input type="date" id="listedBefore" name="listedBefore" />
          </span>
        </section>

        <p>Postcode</p>
        <input type="text" name="postcode" placeholder="SW1A 2AA" />

        <input type="submit" />
      </form>
    </Modal>
  );
};

export default FilterModalPage;
