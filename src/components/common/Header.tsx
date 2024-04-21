import React from "react";
import styles from "../../styles/common/header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const categoryItem: string[] = ["모든 칼로리", "레시피", "세번째", "네번째"];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/image/main_logo.svg" alt="Logo" width={50} height={60} />
        </Link>
      </div>
      <div className={styles.category}>
        {categoryItem.map((name, key) => (
          <div className={styles.category_item} key={key}>
            <span>{name}</span>
          </div>
        ))}
      </div>
      <div>Login</div>
    </header>
  );
};

export default Header;
