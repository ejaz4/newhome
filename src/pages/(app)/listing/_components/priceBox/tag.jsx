import { Link } from "react-router";

export const Tag = ({ label, to }) => {
  return (
    <Link
      to={to}
      style={{
        textTransform: "uppercase",
        padding: "0.25rem",
        backgroundColor: "var(--foreground-transparent)",
        borderRadius: "0.25rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      {label}
    </Link>
  );
};

export const TagBox = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      {children}
    </div>
  );
};
