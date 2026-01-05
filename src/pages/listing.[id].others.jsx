import { useParams } from "react-router";
import { Modal } from "../_components/modal";
import { useProperty } from "../libs/useProperty";
import { useState } from "react";
import { usePropertySearch } from "../libs/usePropertySearch";
import { Result } from "../_components/search/result";
import { useEffect } from "react";
import styles from "./favourites.module.css";

const OtherProperties = () => {
  const { id } = useParams();
  const property = useProperty(id);
  const [random, setRandom] = useState(() => Math.random());
  const keys = ["type", "bedrooms", "bathrooms", "town", "boundary", "tenure"];
  const [keyToCheck, setKeyToCheck] = useState(() => {
    return keys[Math.floor(random * keys.length)];
  });
  let [propertyValue, setPropertyValue] = useState(() => {
    if (keyToCheck == "town") {
      return property["location"]["town"];
    }

    if (["type", "boundary", "tenure"].includes(keyToCheck)) {
      return [property[keyToCheck]];
    }

    if (keyToCheck == "bedrooms") {
      return property[keyToCheck].length;
    }
    return property[keyToCheck];
  });

  const results = usePropertySearch({ [keyToCheck]: propertyValue });

  return (
    <Modal className={styles.favourites}>
      <h2>Added to Favourites!</h2>
      <p>
        Check out some of these newhomes you might also want to add to your
        favourites.
      </p>
      {keyToCheck == "type" && (
        <h3>Other {propertyValue[0].toLowerCase()}s you may like</h3>
      )}
      {keyToCheck == "bedrooms" && (
        <h3>Other places with {propertyValue} or more bedrooms</h3>
      )}
      {keyToCheck == "boundary" && (
        <h3>Other {propertyValue[0].toLowerCase()} newhomes</h3>
      )}
      {keyToCheck == "bathrooms" && (
        <h3>Other places with {propertyValue} or more bathrooms</h3>
      )}
      {keyToCheck == "tenure" && (
        <h3>Newhomes that are also {propertyValue[0].toLowerCase()}</h3>
      )}
      {keyToCheck == "town" && <h3>Other newhomes also in {propertyValue}</h3>}
      <ul className={styles.list}>
        {results.map((e) => (
          <li>
            <Result id={e.id} />
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default OtherProperties;
