import React from "react";
import styles from "../../styles/common/header.module.css";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Image
          src="/image/main_logo.svg"
          alt="icon_logo"
          priority={true}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </header>
  );
};

export default Header;
