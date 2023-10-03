import styles from "./LinkFooter.module.scss";

function LinkFooter({ src, href }) {
  return (
    <div
      className={`${styles.link} d-flex align-items-center justify-content-center`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt="Logo du lien" />
      </a>
    </div>
  );
}
export default LinkFooter;
