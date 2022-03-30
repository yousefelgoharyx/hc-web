import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.scss";
import logo from "../../images/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.navTop}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src={logo} layout="fixed" width={48} height={48} />
            <p>نادي اصحاب الجياد</p>
          </div>
        </Link>
      </div>
      <div className={styles.links}>
        <ul>
          <li
            className={
              router.pathname.startsWith("/news") ? styles.linkActive : null
            }
          >
            <Link href="/news">اخر الاخبار</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/sports") ? styles.linkActive : null
            }
          >
            <Link href="/sports">الالعاب الرياضية</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/resturants")
                ? styles.linkActive
                : null
            }
          >
            <Link href="/resturants">المطاعم والاماكن العامة</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/about") ? styles.linkActive : null
            }
          >
            <Link href="/about">عن النادي</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/history") ? styles.linkActive : null
            }
          >
            <Link href="/history">تاريخ النادي</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/services") ? styles.linkActive : null
            }
          >
            <Link href="/services">مركز الخدمات</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/management")
                ? styles.linkActive
                : null
            }
          >
            <Link href="/management">المجلس الاداري</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/organization")
                ? styles.linkActive
                : null
            }
          >
            <Link href="/organization">الهيكل التنظيمي</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/people") ? styles.linkActive : null
            }
          >
            <Link href="/people">شخصيات مؤثرة</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/matches") ? styles.linkActive : null
            }
          >
            <Link href="/matches">المباريات القادمة</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
