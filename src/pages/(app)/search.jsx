import { useSearchParams } from "react-router";
import { SearchBox } from "../../_components/search/box";
import { SearchResultsList } from "../../_components/search/results";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <SearchBox />
      <SearchResultsList query={searchParams.get("q")} />
    </div>
  );
};

export default SearchResultsPage;
