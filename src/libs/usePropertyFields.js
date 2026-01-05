import { useProperties } from "./useProperties";

export const usePropertyFields = (filters) => {
  const properties = useProperties();

  // Go through the first property to get the keys
  const sample = properties[0];

  // Go through the keys
  const types = Object.keys(sample).filter((e) => filters.includes(e));

  let fieldsObject = {};

  // Now search for all types of values for those keys on all the other objects
  for (const type of types) {
    fieldsObject[type] = Array.from(
      new Set(properties.map((e) => e[type])),
    ).filter((e) => e != null);
  }

  // Form a new object of the keys with all the possible values e.g:
  // {
  //    "type": ["HOUSE", "APARTMENT"]
  // }
  //
  return fieldsObject;
};
