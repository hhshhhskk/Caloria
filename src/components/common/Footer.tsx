"use client";

import React, { useState } from "react";
import styles from "../../styles/common/footer.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer: React.FC = () => {
  const router = useRouter();
  const category = ["home", "food", "user", "user"];
  const [clickedIndex, setClickedIndex] = useState<number | null>(0);

  const categoryClicked = (categoryName: string, idx: number) => {
    categoryName === "home"
      ? router.push(`/`)
      : categoryName === "food"
      ? router.push(`/foodList`)
      : categoryName === "user"
      ? router.push(`/user`)
      : null;

    setClickedIndex(idx);
  };

  return (
    <footer className={styles.footer}>
      {category.map((item, idx) => {
        return (
          <div
            key={idx}
            className={styles.item}
            onClick={() => {
              categoryClicked(item, idx);
            }}
          >
            <Image
              src={`/image/${item}${clickedIndex === idx ? "2" : "1"}.svg`}
              alt="icon"
              width={30}
              height={30}
            />
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
