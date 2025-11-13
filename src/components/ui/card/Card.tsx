// libraries
import type { FC, ReactNode } from "react";
// style
import styles from "./Card.module.css";
import { Maximize2 } from "lucide-react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({ children, className = "", onClick }) => {
  return (
      <div onClick={onClick} className={`${styles.card} ${className}`}>
        <div className={styles.content}>{children}</div>
        <Maximize2 className={styles.icon} size={16} />
      </div>
  );
};

export default Card;
