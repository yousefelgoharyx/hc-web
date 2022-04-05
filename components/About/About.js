import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import styles from "./About.module.scss";
import image from "../../images/about.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.aboutHead}>
          <h1>عن النادي</h1>
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage}>
            <Image src={image} alt="" />
          </div>
          <div className={styles.aboutText}>
            <p>
              نادى اصحاب الجياد تأسس1926 تم الأفتتاح 1934/8/23 مدينة الأسكندرية،
              طريق 14 مايو سموحه وهو نادي رياضي إجتماعي ثقافي 𝐻𝑜𝑟𝑠𝑒
              𝑂𝑤𝑛𝑒𝑟𝑠'𝐶𝑙𝑢𝑏-نادى أصحاب الجياد #تم_تأسيس النادي - جمعية أصحاب
              الجياد في يناير 1926. * بلغ عدد المؤسسين أثنين وثلاثين من كبار
              الأعيان والصفوة من مصريين وأجانب وكان علي رأسهم كل من الأمير /
              سعید طوسون والأمير / حسين طوسون وهما أبناء الأمير/ الشهير عمر
              طوسون حفيد والي مصر / سعيد باشا من إبنه الوحيد طوسون أجتمع
              المؤسسون في فندق شبرد بالقاهرة في يناير 1926وذلك ثابت من محضر *
              الإجتماعات الذي يحتفظ به النادي ضمن مقتنياته التاريخية النادرة
              والمحضر مكتوب باللغة الفرنسية تم تأسيس النادي سنة 1926وأفتتاحه سنة
              1934 في عهد الملك فؤاد الأول - * عند تأسيس النادي سنة 1926 كان عمر
              الملك فاروق الأول لا يتجاوز الخمسة عشر - عاما وفي 29يوليو 1937بلغ
              الملك فاروق الثامنة عشرة بالحساب الهلالي وأقسم اليمين الدستورية -
              تأسس النادي في سنة 1926في عهد الزعيم سعد زغلول الذي توفي سنة 1927-
              وتولى بعده الزعيم مصطفى النحاس.
            </p>

            <Link href="/about">
              <div>
                <Button style={styles.aboutButton}>المزيد</Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
