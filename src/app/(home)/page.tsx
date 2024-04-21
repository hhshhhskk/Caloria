import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Image
        src="/image/main_bg.svg"
        alt="bg"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.search}>
        <input className={styles.search_input} />
        <div className={styles.search_btn}>
          <Image src="/image/search_btn.svg" alt="bg" width={30} height={30} />
        </div>
      </div>
    </main>
  );
};

export default Home;
