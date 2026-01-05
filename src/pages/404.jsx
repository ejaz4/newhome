import { FrownIcon } from "lucide-react";
import { Header } from "../_components/header";

const NotFound = () => {
  return (
    <div className="bodyPadding">
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          gap: "1rem",
        }}
      >
        <h2>
          <FrownIcon /> Page not found
        </h2>
        <p>This page couldn&apos;t be found.</p>
      </div>
    </div>
  );
};

export default NotFound;
