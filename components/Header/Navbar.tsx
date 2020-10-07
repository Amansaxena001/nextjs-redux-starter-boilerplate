import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>Title</h1>
        <nav>
          <label
            htmlFor="toggle"
            className={styles.toggle}
            data-open="Menu"
            data-close="Close"
          ></label>
          <ul className={styles.menu}>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
