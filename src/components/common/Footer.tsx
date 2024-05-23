"use client";

import React from "react";
import styles from "../../styles/common/footer.module.css";
import Image from "next/image";

const Footer: React.FC = () => {
  const category = ["home", "레시피", "게시판", "마이페이지"];

  return (
    <footer className={styles.footer}>
      {category.map((item, idx) => {
        return (
          <div
            key={idx}
            className={styles.item}
            onClick={() => {
              console.log(item);
            }}
          >
            {item}
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
