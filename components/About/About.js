import React from "react";
import Button from "../Button/Button";
import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.aboutHead}>
          <h1>عن النادي</h1>
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage}>
            <img
              src="https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"
              alt=""
            />
          </div>
          <div className={styles.aboutText}>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
              حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع.
            </p>

            <p>
              ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل
              الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن
              نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا
              يليق.
            </p>
            <Button style={styles.aboutButton}>المزيد</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
