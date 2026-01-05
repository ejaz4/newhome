import Fuse from "fuse.js";
import { useProperties } from "./useProperties";
import FuzzySearch from "fuzzy-search";

export const usePropertySearch = ({
  query,
  type,
  boundary,
  minimumPrice,
  maximumPrice,
  listedAfter,
  listedBefore,
  postcode,
}) => {
  let results = useProperties();

  if (query) {
    const client = new Fuse(results, {
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

    results = client.search(query).map((i) => i.item);
  }

  if (type.filter((e) => e.trim() != "").length != 0) {
    results = results.filter((e) => type.includes(e.type));
  }

  if (boundary.filter((e) => e.trim() != "").length != 0) {
    results = results.filter((e) => boundary.includes(e.boundary));
  }

  if (minimumPrice) {
    let minPrice = Number.parseFloat(minimumPrice.slice(1).replaceAll(",", ""));
    results = results.filter((e) => e.price.price > minPrice);
  }

  if (maximumPrice) {
    let maxPrice = Number.parseFloat(maximumPrice.slice(1).replaceAll(",", ""));
    results = results.filter((e) => e.price.price < maxPrice);
  }

  if (postcode) {
    results = results.filter((e) => e.location.postcode.includes(postcode));
  }

  return results;
};
