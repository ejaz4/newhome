import styles from "./modal.module.css";
import { joinClasses } from "../../libs/joinClasses";
import { useNavigate } from "react-router";

/**
 * Modal component
 * Used for pop-ups and modals around the website
 */
export const Modal = ({
  children,
  onClick,
  className,
  onDragOver,
  onDrop,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={joinClasses(styles.backdrop, styles.in)}
      onClick={(e) => {
        e.currentTarget.classList.remove(styles.in);
        e.currentTarget.classList.add(styles.out);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (onDragOver) {
          onDragOver(e);
        }
      }}
      onDrop={(e) => {
        e.preventDefault();
        if (onDrop) {
          onDrop(e);
        }
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
