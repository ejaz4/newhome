import { useParams } from "react-router";
import { Modal } from "../_components/modal";
import { useProperty } from "../libs/useProperty";
import { useState } from "react";
import { usePropertySearch } from "../libs/usePropertySearch";
import { Result } from "../_components/search/result";
import { useEffect } from "react";
import styles from "./favourites.module.css";
import { SparklesIcon } from "lucide-react";

const OtherProperties = () => {
  const { id } = useParams();
  const property = useProperty(id);
  // Use a hook so that the value does not change on every re-render
  const [random] = useState(() => Math.random());
  // List of keys
  const keys = ["type", "bedrooms", "bathrooms", "town", "boundary", "tenure"];
  // Select a random key
  const [keyToCheck] = useState(() => {
    return keys[Math.floor(random * keys.length)];
  });
  // Now get the value of the key
  let [propertyValue] = useState(() => {
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

  // Find other properties with same/more values to that key
  const results = usePropertySearch({ [keyToCheck]: propertyValue }).filter(
    (e) => e.id != id,
  );

  // Display those

  return (
    <Modal className={styles.favourites}>
      <h2>Added to Favourites!</h2>
      <p>
        Check out some of these newhomes you might also want to add to your
        favourites.
      </p>

      {/* Random section */}
      {/* Show different places */}
      {keyToCheck == "type" && (
        <h3>Other {propertyValue[0].toLowerCase()}s you may like</h3>
      )}
      {keyToCheck == "bedrooms" && (
        <h3>Other places with {propertyValue} or more bedrooms</h3>
      )}
      {keyToCheck == "boundary" && <h3>Other {propertyValue} newhomes</h3>}
      {keyToCheck == "bathrooms" && (
        <h3>Other places with {propertyValue} or more bathrooms</h3>
      )}
      {keyToCheck == "tenure" && (
        <h3>Newhomes that are also {propertyValue[0].toLowerCase()}</h3>
      )}
      {keyToCheck == "town" && <h3>Other newhomes also in {propertyValue}</h3>}
      <ul className={styles.list}>
        {results.length == 0 && (
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
            <h2>
              <SparklesIcon /> Nice one!
            </h2>
            <p>Your newly Favourited is one of the best on newhome.</p>
          </div>
        )}

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
