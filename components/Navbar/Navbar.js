import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.scss";
import logo from "../../images/logo.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navTop}>
        <div className={styles.logo}>
          <Image src={logo} layout="fixed" width={48} height={48} />
          <p>نادي اصحاب الجياد</p>
        </div>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href="/">اخر الاخبار</Link>
          </li>
          <li>
            <Link href="/">الالعاب الرياضية</Link>
          </li>
          <li>
            <Link href="/">المطاعم والاماكن العامة</Link>
          </li>
          <li>
            <Link href="/about">عن النادي</Link>
          </li>
          <li>
            <Link href="/">تاريخ النادي</Link>
          </li>
          <li>
            <Link href="/">مركز الخدمات</Link>
          </li>
          <li>
            <Link href="/">المجلس الاداري</Link>
          </li>
          <li>
            <Link href="/">الهيكل التنظيمي</Link>
          </li>
          <li>
            <Link href="/">شخصيات مؤثرة</Link>
          </li>
          <li>
            <Link href="/">المباريات القادمة</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
