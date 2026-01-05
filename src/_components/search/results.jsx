import { FrownIcon } from "lucide-react";
import { usePropertySearch } from "../../libs/usePropertySearch";
import { Result } from "./result";
import styles from "./results.module.css";

export const SearchResultsList = (params) => {
  const results = usePropertySearch(params);

  return (
    <ul className={styles.resultList}>
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
            <FrownIcon /> No results found
          </h2>
          {/* HTML Encoding to prevent accidental JS injection */}
          <p>
            Maybe the place you&apos;re looking for is way too new it
            hasn&apos;t appeared yet.
          </p>
        </div>
      )}
      {results.map((result, _) => (
        <li key={_}>
          <Result
            street={result.location.street}
            id={result.id}
            type={result.type}
            image={result.images[0]}
            price={result.price}
            town={result.location.town}
            listedOn={result.listedOn}
            description={result.description}
            key={_}
          />
        </li>
      ))}
    </ul>
  );
};
