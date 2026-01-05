import styles from "./modal.module.css";
import { joinClasses } from "../../libs/joinClasses";
import { useNavigate } from "react-router";

export const Modal = ({ children, onClick, className, ...props }) => {
  const navigate = useNavigate();

  return (
    <div
      className={joinClasses(styles.backdrop, styles.in)}
      onClick={(e) => {
        e.currentTarget.classList.remove(styles.in);
        e.currentTarget.classList.add(styles.out);
      }}
      onAnimationEnd={(e) => {
        console.log(e.animationName);
        if (e.animationName.includes("Hide")) {
          console.log(e);
          navigate(-1);
        }
      }}
    >
      <div
        className={joinClasses(styles.modal, className ?? "")}
        onClick={(e) => {
          e.stopPropagation();
          if (onClick) onClick();
        }}
        onAnimationEnd={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};
