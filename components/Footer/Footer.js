import React from "react";
import Image from "next/image";
import logo from "../../images/logo.png";
const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <Image src={logo} width={64} height={64} />
        <ul>
          <li>
            <a href="">الرئيسية</a>
          </li>
          <li>
            <a href="">الاخبار</a>
          </li>
          <li>
            <a href="">عن النادي</a>
          </li>
          <li>
            <a href="">تاريخ النادي</a>
          </li>
        </ul>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>سموحة</span> الاسكندرية, مصر
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>01225371649</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">yousefelgoharyx@gmail.com</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>عن النادي</span>
          نادي اصحاب الجياد بسموحة
        </p>

        <div class="footer-icons">
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
