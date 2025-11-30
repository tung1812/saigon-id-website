// src/components/ContactFooter.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoDoc from "../assets/img/logo/logoDoc.png";

export default function ContactFooter() {
  const { t } = useTranslation();

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">{t("contact.title")}</h2>

      <div className="contact-content">
        <div className="contact-logo">
          <img src={logoDoc} alt={t("common.company_name")} />
        </div>

        {/* <form className="newsletter-form" onSubmit={(e)=>e.preventDefault()}>
          <input
            type="email"
            placeholder={t("contact.newsletter.placeholder")}
            className="email-input"
            aria-label={t("contact.newsletter.placeholder")}
          />
          <button className="submit-button" aria-label={t("contact.newsletter.subscribe_aria")}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20.0401 2.32442C21.0561 1.96942 22.0321 2.94542 21.6771 3.96142L15.7521 20.8914C15.3671 21.9894 13.8371 22.0514 13.3651 20.9884L10.5061 14.5564L14.5301 10.5314C14.6626 10.3892 14.7347 10.2012 14.7313 10.0069C14.7278 9.81259 14.6491 9.62721 14.5117 9.4898C14.3743 9.35238 14.1889 9.27367 13.9946 9.27024C13.8003 9.26681 13.6123 9.33894 13.4701 9.47142L9.4451 13.4954L3.0131 10.6364C1.9501 10.1634 2.0131 8.63442 3.1101 8.24942L20.0401 2.32442Z" fill="black"/>
            </svg>
          </button>
        </form> */}

        <div className="contact-info-grid">
          <div className="contact-info-column">
            <div className="contact-info-item">
              <span className="contact-label">{t("contact.info.main_address_label")}</span>
              <p className="contact-text">{t("contact.info.main_address_value")}</p>
            </div>
            <div className="contact-info-item">
              <span className="contact-label">{t("contact.info.phone_label")}</span>
              <p className="contact-text">{t("contact.info.phone_value_main")}</p>
            </div>
            <div className="contact-info-item">
              <span className="contact-label">Email</span>
              <p className="contact-text">contact.saigonid@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-column">
            <div className="contact-info-item">
              <span className="contact-label">{t("contact.info.branch_label")}</span>
              <p className="contact-text">{t("contact.info.branch_address_value")}</p>
            </div>
            <div className="contact-info-item">
              <span className="contact-label">{t("contact.info.phone_label")}</span>
              <p className="contact-text">{t("contact.info.phone_value_branch")}</p>
            </div>
            <div className="contact-info-item">
              <span className="contact-label">Email</span>
              <p className="contact-text">contact.saigonid@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="social-icons">
          <a href="#" aria-label={t("contact.social.facebook")}>
            {/* Facebook icon */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <path d="M35.6871 14.7921C35.4084 12.0585 33.8781 9.00606 31.1 5.63459C27.1449 1.87954 22.9596 0 18.5401 0H17.4599C16.2041 0 14.7142 0.24428 12.994 0.73284C8.38876 2.25707 4.98278 4.81494 2.77203 8.40848C1.37693 10.5464 0.452246 13.3486 0 16.8149C0.0686445 16.8149 0.102967 16.8553 0.102967 16.9361C0.0343222 17.0532 0 17.1925 0 17.356V17.5639C0 22.4596 1.66766 26.7557 5.00499 30.4542C8.9359 34.1507 13.1979 36 17.791 36H18.209C19.4648 36 21.2031 35.7153 23.4239 35.146C27.8091 33.6339 31.1868 30.9367 33.5591 27.0525C35.1864 23.9011 36 21.1292 36 18.7328V17.251C36 16.9017 35.895 16.0821 35.6871 14.7921ZM23.006 10.5363H20.878C19.598 10.6514 18.96 11.2571 18.96 12.3493V14.9132C18.96 15.0525 19.0287 15.1231 19.168 15.1231H22.796V15.3311C22.576 17.6689 22.3963 18.8378 22.2549 18.8378H19.168C19.0529 18.8378 18.9822 18.9125 18.96 19.0639V28.9704H15.1745L15.122 28.3264V19.1689C15.017 18.9489 14.912 18.8378 14.807 18.8378H12.994V15.1231H14.807C15.017 15.0061 15.122 14.895 15.122 14.7921L15.017 11.4953C15.1563 10.7382 15.2956 10.1689 15.4349 9.78533C16.1799 7.94818 17.7789 7.02961 20.232 7.02961H20.773C22.261 7.02961 23.006 7.13459 23.006 7.34455V10.5363Z" fill="black"/>
              <path d="M18.9602 12.3494V14.9134C18.9602 15.0527 19.0288 15.1233 19.1681 15.1233H22.7962V15.3313C22.5761 17.6691 22.3964 18.838 22.2551 18.838H19.1681C19.053 18.838 18.9824 18.9127 18.9602 19.0641V28.9706H15.1746L15.1221 28.3266V19.1691C15.0171 18.949 14.9121 18.838 14.8072 18.838H12.9941V15.1233H14.8072C15.0171 15.0062 15.1221 14.8952 15.1221 14.7922L15.0171 11.4955C15.1564 10.7384 15.2957 10.1691 15.4351 9.78551C16.1801 7.94836 17.7791 7.02979 20.2321 7.02979H20.7732C22.2611 7.02979 23.0061 7.13477 23.0061 7.34472V10.5365H20.8782C19.5981 10.6516 18.9602 11.2572 18.9602 12.3494Z" fill="white"/>
            </svg>
          </a>
          <a href="#" aria-label={t("contact.social.email")}>
            {/* Mail icon */}
            <svg width="36" height="35" viewBox="0 0 36 35" fill="none" aria-hidden="true">
              <path d="M29.7182 4.15171C25.937 1.38456 22.4588 0 19.2836 0H16.2983C13.2281 0.295425 10.3134 1.36683 7.5563 3.21619C2.51877 7.05081 0 11.7914 0 17.4399C0 20.5143 0.814005 23.4587 2.44403 26.2712C6.29389 32.091 11.4829 35 18.0091 35C21.6044 35 24.9716 33.9956 28.1124 31.9886C33.3722 28.0989 36 23.248 36 17.4399C36 12.461 33.9054 8.03162 29.7182 4.15171ZM27.9044 23.6852C27.9044 24.2761 27.5489 24.6207 26.8399 24.7231H9.16209C8.54604 24.7231 8.19054 24.3765 8.09763 23.6852V12.4551C8.09763 12.0809 8.30769 11.7697 8.7258 11.5196H27.2762C27.6943 11.8032 27.9044 12.1538 27.9044 12.5753V23.6852Z" fill="black"/>
              <path d="M27.2762 11.5195H8.72583C8.30772 11.7697 8.09766 12.0808 8.09766 12.455V23.6851C8.19057 24.3764 8.54607 24.7231 9.16212 24.7231H26.84C27.5489 24.6206 27.9044 24.276 27.9044 23.6851V12.5752C27.9044 12.1537 27.6944 11.8031 27.2762 11.5195Z" fill="white"/>
            </svg>
          </a>
          <a href="#" aria-label={t("contact.social.phone")}>
            {/* Phone icon */}
            <svg width="36" height="34" viewBox="0 0 36 34" fill="none" aria-hidden="true">
              <path d="M26.1988 1.80572C23.1462 0.601906 20.6619 0 18.7459 0H17.5707C16.3083 0 14.6419 0.272199 12.5737 0.812764C8.43525 2.08175 5.0985 4.5603 2.56143 8.24841C0.923493 11.3499 0.105542 13.7633 0.105542 15.4847V16.5946C0.105542 16.7498 0.0710379 16.8821 0 16.9914C0.0710379 17.1141 0.105542 17.2521 0.105542 17.4054V18.5153C0.105542 19.0348 0.322715 20.0718 0.755032 21.6283C1.29289 23.7599 2.56751 25.974 4.57687 28.2704C6.30817 30.0263 8.15516 31.3662 10.1178 32.294C13.0284 33.4307 15.4436 34 17.3596 34H18.7459C21.1064 34 23.8769 33.2275 27.0573 31.6806C33.0184 27.9714 36 23.1139 36 17.1083C36 10.6158 32.7323 5.51491 26.1988 1.80572ZM22.3749 25.1401H21.7275C19.5882 25.1401 16.9639 23.5012 13.8524 20.2213C12.0419 17.8693 11.0068 15.7224 10.7491 13.7787C10.7491 13.7135 10.7896 13.6138 10.8729 13.4815L10.7491 13.2822L10.9784 12.571C12.6021 10.8918 13.6657 10.0522 14.169 10.0522H14.5892C14.8469 10.219 15.4842 11.5263 16.5011 13.978C16.5011 14.3211 16.0444 14.856 15.1331 15.5844L15.4497 16.5946C17.3657 19.3434 18.821 20.7178 19.8155 20.7178C20.4122 20.2328 20.9785 19.8629 21.5164 19.6079C21.9243 19.6635 22.4561 19.9683 23.1117 20.5204C24.6786 21.3926 25.462 22.0271 25.462 22.4239C25.1698 23.0756 24.1407 23.9804 22.3749 25.1401Z" fill="black"/>
              <path d="M25.462 22.4239C25.1697 23.0756 24.1407 23.9804 22.3749 25.1401H21.7274C19.5882 25.1401 16.9638 23.5012 13.8524 20.2214C12.0419 17.8694 11.0068 15.7224 10.749 13.7787C10.749 13.7135 10.7896 13.6138 10.8728 13.4816L10.749 13.2822L10.9784 12.571C12.6021 10.8918 13.6656 10.0522 14.169 10.0522H14.5891C14.8469 10.219 15.4842 11.5263 16.5011 13.9781C16.5011 14.3212 16.0444 14.856 15.1331 15.5844L15.4497 16.5946C17.3657 19.3434 18.821 20.7179 19.8155 20.7179C20.4122 20.2329 20.9785 19.8629 21.5163 19.608C21.9243 19.6636 22.4561 19.9684 23.1117 20.5204C24.6786 21.3926 25.462 22.0271 25.462 22.4239Z" fill="white"/>
            </svg>
          </a>
        </div>

        <p className="contact-thanks">
          {t("contact.thanks")}
        </p>
      </div>

      <footer className="footer">
        <p className="copyright">{t("footer.copyright")}</p>
        {/* <a href="#top" className="back-to-top">{t("footer.back_to_top")}</a> */}
      </footer>
    </section>
  );
}
