import { useSearchParams } from "react-router";
import { SearchBox } from "../../../_components/search/box";
import { SearchResultsList } from "../../../_components/search/results";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <SearchBox />
      <SearchResultsList
        query={searchParams.get("q")}
        type={searchParams.getAll("type")}
        boundary={searchParams.getAll("boundary")}
        minimumPrice={searchParams.get("minimumPrice")}
        maximumPrice={searchParams.get("maximumPrice")}
        listedAfter={searchParams.get("listedAfter")}
        listedBefore={searchParams.get("listedBefore")}
        postcode={searchParams.get("postcode")}
      />
    </div>
  );
};

export default SearchResultsPage;
