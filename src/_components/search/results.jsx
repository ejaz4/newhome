import { useEffect } from "react";
import { usePropertySearch } from "../../libs/usePropertySearch";
import { Result } from "./result";
import styles from "./results.module.css";

export const SearchResultsList = ({ query }) => {
  const results = usePropertySearch(query);

  useEffect(() => {
    console.log(results);
  }, [query]);

  return (
    <ul className={styles.resultList}>
      {results.map((result, _) => (
        <li>
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
