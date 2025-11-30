// src/components/ContactFooter.jsx
import { useTranslation } from "react-i18next";
import { useLayoutEffect, useRef } from "react";
import logoDoc from "../assets/img/logo/logoDoc.png";
import facebook from '../assets/img/Home/icons/facebook.png';
import phone from '../assets/img/Home/icons/phone.png';
import mail from '../assets/img/Home/icons/mail.png';

export default function ContactFooter() {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const gridRef  = useRef(null);

  useLayoutEffect(() => {
    const title = titleRef.current;
    const grid  = gridRef.current;
    if (!title || !grid) return;

    const setSplit = () => {
      const gridBox  = grid.getBoundingClientRect();
      const titleBox = title.getBoundingClientRect();

      // distance from GRID LEFT to TITLE LEFT (this is where col 2 should start)
      let col1 = Math.round(titleBox.left - gridBox.left);

      // keep a sensible minimum so col1 never collapses
      col1 = Math.max(260, col1);

      // also cap so we don't push col2 off-screen (leave space for col3 = 48px)
      const maxCol1 = Math.max(260, gridBox.width - 48 - 320); // 320px ~ safe min for col2
      col1 = Math.min(col1, maxCol1);

      grid.style.setProperty("--col1", `${col1}px`);
    };

    setSplit();
    const ro = new ResizeObserver(setSplit);
    ro.observe(grid);
    ro.observe(title);
    window.addEventListener("resize", setSplit);
    return () => { ro.disconnect(); window.removeEventListener("resize", setSplit); };
  }, []);

  return (
    <section className="contact-section" id="contact">
      <h2 ref={titleRef} className="contact-title">{t("contact.title")}</h2>

      <div className="contact-content">
        <div className="contact-logo">
          <img src={logoDoc} alt={t("common.company_name")} />
        </div>

        {/* ===== 3-column grid: col1 | col2 | icon ===== */}
        <div ref={gridRef} className="contact-grid">

          {/* Row 1: Address */}
          <div className="contact-row">
            <div className="contact-item col1">
              <span className="contact-label">{t("contact.info.main_address_label")}</span>
              <p className="contact-text contact-text--narrow">{t("contact.info.main_address_value")}</p>
            </div>
            <div className="contact-item middle-collumn col2">
              <span className="contact-label">{t("contact.info.branch_label")}</span>
              <p className="contact-text contact-text--narrow">{t("contact.info.branch_address_value")}</p>
            </div>
            <div className="contact-icon col3"><img src={facebook} alt="" /></div>
          </div>

          {/* Row 2: Phone */}
          <div className="contact-row">
            <div className="contact-item col1">
              <span className="contact-label">{t("contact.info.phone_label")}</span>
              <p className="contact-text">{t("contact.info.phone_value_main")}</p>
            </div>
            <div className="contact-item middle-collumn col2">
              <span className="contact-label">{t("contact.info.phone_label")}</span>
              <p className="contact-text">{t("contact.info.phone_value_branch")}</p>
            </div>
            <div className="contact-icon col3"><img src={phone} alt="" /></div>
          </div>

          {/* Row 3: Email */}
          <div className="contact-row">
            <div className="contact-item col1">
              <span className="contact-label">Email</span>
              <p className="contact-text">contact.saigonid@gmail.com</p>
            </div>
            <div className="contact-item middle-collumn col2">
              <span className="contact-label">Email</span>
              <p className="contact-text">contact.saigonid@gmail.com</p>
            </div>
            <div className="contact-icon col3"><img src={mail} alt="" /></div>
          </div>

          {/* Thanks — stays in COLUMN 2 */}
          <p className="contact-thanks">{t("contact.thanks")}</p>
        </div>
      </div>

      <footer className="footer">
        <p className="copyright">{t("footer.copyright")}</p>
      </footer>
    </section>
  );
}
