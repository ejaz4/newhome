import { Outlet } from "react-router";
import { Header } from "../../_components/header";

const MainLayout = () => {
  return (
    <div className="bodyPadding">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
