import styles from "./item.module.scss";

function Item({ className, children }) {
  return (
    <div className={`${styles.item} ${className} `}>{children}</div>
  );
}

export default Item;
