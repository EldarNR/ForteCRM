// libraries
import type{ FC,ReactNode} from "react";
// style
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({ children, className = "", onClick }) => {
  return (
    <div onClick={onClick} className={`${styles.card} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
