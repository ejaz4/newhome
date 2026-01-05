import { useProperties } from "./useProperties";

export const usePropertyFields = (filters) => {
  const properties = useProperties();

  // Go through the first property to get the keys
  const sample = properties[0];

  const types = Object.keys(sample).filter((e) => filters.includes(e));

  let fieldsObject = {};

  for (const type of types) {
    fieldsObject[type] = Array.from(
      new Set(properties.map((e) => e[type])),
    ).filter((e) => e != null);
  }

  return fieldsObject;
};
