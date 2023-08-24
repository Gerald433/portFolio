import styles from "./LinkFooter.module.scss";

function LinkFooter({src}) {
  return (
    <div
      className={`${styles.link} d-flex align-items-center justify-content-center`}
    >
      <img src={src} alt="Logo du lien" />
    </div>
  );
}
export default LinkFooter;
