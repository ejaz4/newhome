import { useEffect, useState } from "react";

export const useFavourites = () => {
  const [favourites, setFavourites] = useState(null);

  useEffect(() => {
    if (favourites == null) return;

    window.localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  if (window.localStorage.getItem("favourites")) {
    setFavourites(JSON.parse(window.localStorage.getItem("favourites")));
  } else {
    setFavourites([]);
  }

  const toggleFavourites = (id) => {
    setFavourites((e) =>
      e.includes(id) ? e.filter((t) => t != id) : e.push(id),
    );
  };

  return [favourites, toggleFavourites];
};
