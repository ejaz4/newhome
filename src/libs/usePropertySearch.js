import { useProperties } from "./useProperties";
import FuzzySearch from "fuzzy-search";

export const usePropertySearch = (query) => {
  const properties = useProperties();

  const client = new FuzzySearch(
    properties,
    [
      "type",
      "boundary",
      "location.town",
      "location.postcode",
      "location.street",
      "tenure",
      "description",
    ],
    {
      caseSensitive: false,
      sort: true,
    },
  );

  return client.search(query);
};
