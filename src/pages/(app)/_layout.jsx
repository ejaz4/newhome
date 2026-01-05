import { Outlet } from "react-router";
import { Header } from "../../_components/header";
import { useState } from "react";
import { FavouritesBar } from "../../_components/favourites/bar";

const MainLayout = () => {
  const [favouritesBarVisible, setFavouritesBarVisible] = useState(false);

  return (
    <div
      onDragEnd={(e) => {
        setFavouritesBarVisible(false);
      }}
      onDragStart={(e) => {
        if (e.target.localName == "a") {
          const a = e.target;

          if (a.href.includes("/listing/")) {
            setFavouritesBarVisible(true);
          }
        }
      }}
      className="bodyPadding"
    >
      <Header />
      <Outlet />
      {favouritesBarVisible && <FavouritesBar />}
    </div>
  );
};

export default MainLayout;
