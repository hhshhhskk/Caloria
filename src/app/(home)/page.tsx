"use client";

import React, { ChangeEvent, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleButtonClick = () => {
    router.push(`/calorie/${keyword}`);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.logoBox}>
        <Image
          src="/image/main_logo.svg"
          alt="icon_logo"
          priority={true}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.search}>
        <input
          className={styles.search_input}
          type="text"
          value={keyword}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="검색어를 입력하세요"
        />
        <div className={styles.search_btn} onClick={handleButtonClick}>
          <Image src="/image/search_btn.svg" alt="bg" width={20} height={20} />
        </div>
      </div>
    </main>
  );
};

export default Home;
