import React from "react";
import { FaCamera } from "react-icons/fa";
import styles from "./PlaceholderImage.module.css";

const PlaceholderImage = ({
  width = "100%",
  height = "200px",
  text = "Image",
  className = "",
}) => {
  const style = {
    width,
    height,
  };

  return (
    <div
      className={`${styles.placeholderContainer} ${className}`}
      style={style}
    >
      <div className={styles.placeholderContent}>
        <div className={styles.placeholderIcon}>
          <FaCamera />
        </div>
        <div className={styles.placeholderText}>{text}</div>
        <div className={styles.placeholderDimensions}>
          {typeof width === "number" ? `${width} × ${height}` : ""}
        </div>
      </div>
    </div>
  );
};

export default PlaceholderImage;
