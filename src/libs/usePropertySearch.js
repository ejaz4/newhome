import Fuse from "fuse.js";
import { useProperties } from "./useProperties";
import FuzzySearch from "fuzzy-search";

export const usePropertySearch = (query) => {
  const properties = useProperties();

  const client = new Fuse(properties, {
    keys: [
      "type",
      "boundary",
      "location.town",
      "location.postcode",
      "location.street",
      "tenure",
      "description",
    ],
    shouldSort: true,
    findAllMatches: true,
    useExtendedSearch: true,
    ignoreLocation: true,
    threshold: 0.2,
  });

  return client.search(query).map((i) => i.item);
};
