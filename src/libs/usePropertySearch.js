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
  tenure,
  town,
  bedrooms,
  bedroomsMax,
  postcode,
}) => {
  let results = useProperties();

  // If there is a query, search using that query first (fuzzy)
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

  // Check if there is a type
  if (type) {
    // Check if type isn't just an empty array
    if (type.length != 0) {
      // Check that type isn't set to any
      if (!type[0] == "") {
        // Filter out type
        if (
          results.filter((e) => e.type).filter((e) => e.type.trim() != "")
            .length != 0
        ) {
          results = results.filter((e) => type.includes(e.type));
        }
      }
    }
  }

  if (boundary) {
    if (boundary.length != 0) {
      if (!boundary[0] == "") {
        if (
          results
            .filter((e) => e.boundary)
            .filter((e) => e.boundary.trim() != "").length != 0
        ) {
          results = results.filter((e) => boundary.includes(e.boundary));
        }
      }
    }
  }

  if (tenure) {
    if (tenure.length != 0) {
      if (!tenure[0] == "") {
        if (
          results.filter((e) => e.tenure).filter((e) => e.tenure.trim() != "")
            .length != 0
        ) {
          results = results.filter((e) => tenure.includes(e.tenure));
        }
      }
    }
  }

  // Filter by town
  if (town) {
    if (
      results
        .filter((e) => e.location.town)
        .filter((e) => e.location.town.trim() != "").length != 0
    ) {
      results = results.filter((e) => type.includes(e.location.town));
    }
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

  if (bedrooms) {
    results = results.filter((e) => e.bedrooms.length > bedrooms);
  }

  if (bedroomsMax) {
    results = results.filter((e) => e.bedrooms.length < bedroomsMax);
  }

  if (listedAfter) {
    if (listedAfter != "") {
      // Calculate and compare unix millis
      const listedAfterDate = new Date(listedAfter);
      results = results.filter(
        (e) => new Date(e.listedOn).getTime() > listedAfterDate.getTime(),
      );
    }
  }

  if (listedBefore) {
    if (listedBefore != "") {
      // Calculate and compare unix millis
      const listedBeforeDate = new Date(listedBefore);
      results = results.filter(
        (e) => new Date(e.listedOn).getTime() < listedBeforeDate.getTime(),
      );
    }
  }

  return results;
};
