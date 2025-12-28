export const propertyNameCreator = (type, street, town, isRent) =>
  `${type.charAt(0) + type.substring(1).toLowerCase()} on ${street} in ${town} for ${!isRent ? "sale" : "rent"}`;
