import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

export const useFavourites = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [favourites, setFavourites] = useState(() => {
    const stored = window.localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });
  const [lastAction, setLastAction] = useState(null);
  const [id, setId] = useState(null);

  // Listen for changes in other tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "favourites") {
        setFavourites(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    if (favourites !== null) {
      window.localStorage.setItem("favourites", JSON.stringify(favourites));
      window.dispatchEvent(new Event("storage"));
    }
  }, [favourites]);

  useEffect(() => {
    if (id == null);
    if (lastAction == null);

    if (lastAction == "added") {
      navigate(`/listing/${id}/others`, { state: { background: location } });
    }
  }, [lastAction, id]);

  const toggleFavourites = (id) => {
    setId(id);
    setFavourites((prev) => {
      if (prev.includes(id)) {
        setLastAction("removed");
        return prev.filter((t) => t !== id);
      } else {
        setLastAction("added");
        return [...prev, id];
      }
    });
  };

  return [favourites, toggleFavourites];
};
