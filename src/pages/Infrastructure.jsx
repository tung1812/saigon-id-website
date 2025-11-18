import { Link } from 'react-router-dom'
import './Infrastructure.css'
import BackToTopButton from '../components/BackToTopButton'

import logoNgang from '../assets/img/Logo/logo ngang.png'
import logoDoc from '../assets/img/logo/logoDoc.png'
import infraHero from '../assets/img/Infrastructure/BeautyPlus-Image-Enhancer-1759054072094.jpg'
import infra1 from '../assets/img/Infrastructure/z7058113891635_4c8a1b2206bca3185b6d50fd4944d8b2.jpg'
import infra2 from '../assets/img/Infrastructure/z7058113890868_3d1a710ecc30bd814d7993c3b7f04563.jpg'
import infra3 from '../assets/img/Infrastructure/z7058113902884_968f7d515fc5b43f5abe4b14a71f38f4.jpg'
import infra4 from '../assets/img/Infrastructure/z7058113910360_1eda0fde138ed8f2943e4e0c0e48c82d.jpg'
import infra5 from '../assets/img/Infrastructure/z7058113911974_0d0bb63019f3f72924f52b3923292de1.jpg'
import paint1 from '../assets/img/Infrastructure/son 1.png'
import paint2 from '../assets/img/Infrastructure/son 2.png'
import paint3 from '../assets/img/Infrastructure/son 3.jpg'
import paint4 from '../assets/img/Infrastructure/son 4.jpg'

function Infrastructure() {
  return (
    <div className="infrastructure-page">
      <div className="decorative-backgrounds-infrastructure">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/8e0488de9fe0ccfdcba02d098cd0c1a319c1aa8d?width=6871" 
          alt="" 
          className="bg-element bg-infra-1" 
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/2b130fe1cf67014cb1606a4d4505178cb52eeba7?width=4411" 
          alt="" 
          className="bg-element bg-infra-2" 
        />
      </div>

      <nav className="top-bar-infrastructure">
        <div className="nav-gradient-overlay"></div>
        
        <Link to="/">
          <img 
            src={logoNgang}
            alt="SAIGON ID Logo" 
            className="logo"
          />
        </Link>
        
        <ul className="nav-menu">
          <li><Link to="/about">VỀ CHÚNG TÔI</Link></li>
          <li><Link to="/projects">DỰ ÁN</Link></li>
          <li><Link to="/furniture">NỘI THẤT RỜI</Link></li>
          <li><Link to="/infrastructure" className="active">CƠ SỞ HẠ TẦNG</Link></li>
        </ul>
        
        <div className="nav-actions">
          <svg className="vi-flag" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <g clipPath="url(#clip0_291_1488)">
              <path d="M12.7519 15H2.24812C1.00807 15 0 13.9919 0 12.7519V2.24812C0 1.00807 1.00807 0 2.24812 0H12.7519C13.9919 0 15 1.00807 15 2.24812V12.7519C15 13.9919 13.9919 15 12.7519 15ZM2.24812 1.53514C1.85581 1.53514 1.53514 1.8541 1.53514 2.24812V12.7519C1.53514 13.1442 1.8541 13.4649 2.24812 13.4649H12.7519C13.1442 13.4649 13.4649 13.1459 13.4649 12.7519V2.24812C13.4649 1.85581 13.1459 1.53514 12.7519 1.53514H2.24812Z" fill="white"/>
              <path d="M8.79628 5.19922L6.49186 11.0686H5.12389L2.89111 5.19922H4.63605L5.73453 8.34284C5.77717 8.46224 5.81811 8.57652 5.85563 8.68739C5.89487 8.57482 5.93751 8.45883 5.98186 8.33943L7.06669 5.19922H8.79628Z" fill="white"/>
              <path d="M11.0528 3.78167C11.0597 4.02729 10.9727 4.25756 10.8072 4.42813C10.6332 4.60723 10.3859 4.70616 10.1113 4.70616C9.60128 4.70616 9.20215 4.30191 9.20215 3.78679C9.20215 3.27166 9.61152 2.85547 10.1335 2.85547C10.6554 2.85547 11.0494 3.2529 11.0528 3.78167Z" fill="white"/>
              <path d="M10.9454 5.19922H9.31982V11.0686H10.9454V5.19922Z" fill="white"/>
            </g>
          </svg>
          
          <button className="hamburger-menu" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 7L4 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M20 12L4 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M20 17L4 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      <section className="factory-production-section">
        <div className="factory-hero-image">
          <img 
            src={infraHero}
            alt="Factory Production" 
          />
        </div>

        <div className="factory-text-block">
          <h2 className="factory-section-title">nhà máy sản xuất</h2>
          <p className="factory-section-description">
            Để tạo ra những sản phẩm với chất lượng 
tốt nhất, công ty chúng tôi luôn áp dụng quy trình nghiêm ngặt ở từng giai đoạn. Từ khâu chọn lựa nguyên liệu, xử lý đến khi hoàn thiện thành phẩm, mọi bước đều được thực hiện cẩn thận và 
chỉn chu, đảm bảo sản phẩm đạt chuẩn kỹ thuật và chất lượng cao nhất.
<br /><br />
Với diện tích nhà máy 900m2, chúng tôi đã đầu tư hệ thống máy móc sản xuất, máy chế biến gỗ 
đáp ứng hầu hết những yêu cầu khắc khe và
số lượng đơn hàng của khách hàng.
          </p>
        </div>

        <div className="factory-images-grid">
          <div className="factory-row-3">
            <div className="factory-image-box">
              <img src={infra1} alt="Factory" />
            </div>
            <div className="factory-image-box">
              <img src={infra2} alt="Factory" />
            </div>
            <div className="factory-image-box">
              <img src={infra3} alt="Factory" />
            </div>
          </div>
          <div className="factory-row-2">
            <div className="factory-image-box-wide">
              <img src={infra4} alt="Factory" />
            </div>
            <div className="factory-image-box-wide">
              <img src={infra5} alt="Factory" />
            </div>
          </div>
        </div>
      </section>

      <section className="painting-area-section">
        <div className="painting-text-block">
          <h2 className="painting-section-title">KHU VỰC SƠN</h2>
          <p className="painting-section-description">
            Với khu vực sơn riêng biệt, chúng tôi đảm bảo chất lượng bề mặt hoàn thiện luôn đạt độ mịn, đều màu và bền đẹp theo thời gian. Quy trình được kiểm soát chặt chẽ đáp ứng được yêu cầu khắt khe về độ bền. Từng chi tiết đều được kiểm tra kỹ lưỡng, đảm bảo khi đến tay khách hàng sẽ đạt tiêu chuẩn tốt nhất.
          </p>
        </div>

        <div className="painting-images-grid">
          <div className="painting-row">
            <div className="painting-image-box">
              <img src={paint1} alt="Painting Area" />
            </div>
            <div className="painting-image-box">
              <img src={paint2} alt="Painting Area" />
            </div>
          </div>
          <div className="painting-row">
            <div className="painting-image-box">
              <img src={paint3} alt="Painting Area" />
            </div>
            <div className="painting-image-box">
              <img src={paint4} alt="Painting Area" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-bg-wrapper">
          <svg className="contact-gradient" width="1468" height="349" viewBox="0 0 1468 349" fill="none">
            <mask id="mask0_291_1348" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="1468" height="349">
              <path d="M0 348.063H1468V3.05176e-05L734 141.367L0 3.05176e-05V348.063Z" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_291_1348)">
              <g filter="url(#filter0_f_291_1348)">
                <path d="M-81.5557 434.809H1550.57V243.107L734.51 315.342L-81.5557 243.107V434.809Z" fill="url(#paint0_linear_291_1348)"/>
              </g>
            </g>
            <defs>
              <filter id="filter0_f_291_1348" x="-249.556" y="75.106" width="1968.13" height="527.703" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="84" result="effect1_foregroundBlur_291_1348"/>
              </filter>
              <linearGradient id="paint0_linear_291_1348" x1="735.04" y1="365.352" x2="735.04" y2="215.324" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.16"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
          
          <div className="contact-bg-overlay"></div>
        </div>

        <h2 className="contact-title">liên hệ</h2>
        
        <div className="contact-content">
          <div className="contact-logo">
            <img src={logoDoc} alt="SAIGON ID" />
          </div>

          <div className="newsletter-form">
            <input type="email" placeholder="Your email" className="email-input" />
            <button className="submit-button" aria-label="Subscribe">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.0401 2.32442C21.0561 1.96942 22.0321 2.94542 21.6771 3.96142L15.7521 20.8914C15.3671 21.9894 13.8371 22.0514 13.3651 20.9884L10.5061 14.5564L14.5301 10.5314C14.6626 10.3892 14.7347 10.2012 14.7313 10.0069C14.7278 9.81259 14.6491 9.62721 14.5117 9.4898C14.3743 9.35238 14.1889 9.27367 13.9946 9.27024C13.8003 9.26681 13.6123 9.33894 13.4701 9.47142L9.4451 13.4954L3.0131 10.6364C1.9501 10.1634 2.0131 8.63442 3.1101 8.24942L20.0401 2.32442Z" fill="black"/>
              </svg>
            </button>
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-column">
              <div className="contact-info-item">
                <span className="contact-label">Địa chỉ chính</span>
                <p className="contact-text">1236/8 Phạm Văn Đồng, Khu phố 12,<br />Phường Linh Xuân, TP Hồ Chí Minh, Việt Nam</p>
              </div>
              <div className="contact-info-item">
                <span className="contact-label">Số điện thoại</span>
                <p className="contact-text">+(84) 908 374 266 - Mr. Thuan</p>
              </div>
              <div className="contact-info-item">
                <span className="contact-label">Email</span>
                <p className="contact-text">contact.saigonid@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-column">
              <div className="contact-info-item">
                <span className="contact-label">Chi nhánh Đà Lạt</span>
                <p className="contact-text">256 Xô Viết Nghệ Tĩnh,<br />Phường Lang Biang - Đà Lạt, tỉnh Lâm Đồng</p>
              </div>
              <div className="contact-info-item">
                <span className="contact-label">Số điện thoại</span>
                <p className="contact-text">+(84) 917 770 536 - Mr. Huy</p>
              </div>
              <div className="contact-info-item">
                <span className="contact-label">Email</span>
                <p className="contact-text">contact.saigonid@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <g clipPath="url(#clip0_291_1408)">
                  <path d="M35.6871 14.7921C35.4084 12.0585 33.8781 9.00606 31.1 5.63459C27.1449 1.87954 22.9596 0 18.5401 0H17.4599C16.2041 0 14.7142 0.24428 12.994 0.73284C8.38876 2.25707 4.98278 4.81494 2.77203 8.40848C1.37693 10.5464 0.452246 13.3486 0 16.8149C0.0686445 16.8149 0.102967 16.8553 0.102967 16.9361C0.0343222 17.0532 0 17.1925 0 17.356V17.5639C0 22.4596 1.66766 26.7557 5.00499 30.4542C8.9359 34.1507 13.1979 36 17.791 36H18.209C19.4648 36 21.2031 35.7153 23.4239 35.146C27.8091 33.6339 31.1868 30.9367 33.5591 27.0525C35.1864 23.9011 36 21.1292 36 18.7328V17.251C36 16.9017 35.895 16.0821 35.6871 14.7921ZM23.006 10.5363H20.878C19.598 10.6514 18.96 11.2571 18.96 12.3493V14.9132C18.96 15.0525 19.0287 15.1231 19.168 15.1231H22.796V15.3311C22.576 17.6689 22.3963 18.8378 22.2549 18.8378H19.168C19.0529 18.8378 18.9822 18.9125 18.96 19.0639V28.9704H15.1745L15.122 28.3264V19.1689C15.017 18.9489 14.912 18.8378 14.807 18.8378H12.994V15.1231H14.807C15.017 15.0061 15.122 14.895 15.122 14.7921L15.017 11.4953C15.1563 10.7382 15.2956 10.1689 15.4349 9.78533C16.1799 7.94818 17.7789 7.02961 20.232 7.02961H20.773C22.261 7.02961 23.006 7.13459 23.006 7.34455V10.5363Z" fill="black"/>
                  <path d="M18.9602 12.3509V14.9148C18.9602 15.0541 19.0288 15.1248 19.1681 15.1248H22.7962V15.3327C22.5761 17.6706 22.3964 18.8395 22.2551 18.8395H19.1681C19.053 18.8395 18.9824 18.9142 18.9602 19.0656V28.972H15.1746L15.1221 28.328V19.1705C15.0171 18.9505 14.9121 18.8395 14.8072 18.8395H12.9941V15.1248H14.8072C15.0171 15.0077 15.1221 14.8967 15.1221 14.7937L15.0171 11.4969C15.1564 10.7399 15.2957 10.1706 15.4351 9.78697C16.1801 7.94982 17.7791 7.03125 20.2321 7.03125H20.7732C22.2611 7.03125 23.0061 7.13623 23.0061 7.34619V10.538H20.8782C19.5981 10.6531 18.9602 11.2587 18.9602 12.3509Z" fill="white"/>
                </g>
              </svg>
            </a>
            <a href="#" aria-label="Email">
              <svg width="36" height="35" viewBox="0 0 36 35" fill="none">
                <g clipPath="url(#clip0_291_1411)">
                  <path d="M21.6206 17.4399C23.4122 15.6024 24.9776 14.1174 26.3148 12.9829L26.1936 12.7781C23.7617 14.8087 21.0328 17.0204 18.0091 19.4153C17.2537 18.8816 16.5023 18.2967 15.759 17.6625C12.1757 14.7122 10.0468 13.0164 9.37216 12.5753H9.26713C12.1172 15.1829 13.8219 16.8057 14.3794 17.4399L9.05706 23.5828V23.7876C11.081 21.9718 13.0705 20.0672 15.0258 18.0702L18.0091 20.7763C19.8472 19.0963 20.7662 18.1608 20.7662 17.9678H20.8712L26.8399 23.6852V23.4646L21.6206 17.4399ZM21.6206 17.4399C23.4122 15.6024 24.9776 14.1174 26.3148 12.9829L26.1936 12.7781C23.7617 14.8087 21.0328 17.0204 18.0091 19.4153C17.2537 18.8816 16.5023 18.2967 15.759 17.6625C12.1757 14.7122 10.0468 13.0164 9.37216 12.5753H9.26713C12.1172 15.1829 13.8219 16.8057 14.3794 17.4399L9.05706 23.5828V23.7876C11.081 21.9718 13.0705 20.0672 15.0258 18.0702L18.0091 20.7763C19.8472 19.0963 20.7662 18.1608 20.7662 17.9678H20.8712L26.8399 23.6852V23.4646L21.6206 17.4399ZM29.7182 4.15171C25.937 1.38456 22.4588 0 19.2836 0H16.2983C13.2281 0.295425 10.3134 1.36683 7.5563 3.21619C2.51877 7.05081 0 11.7914 0 17.4399C0 20.5143 0.814005 23.4587 2.44403 26.2712C6.29389 32.091 11.4829 35 18.0091 35C21.6044 35 24.9716 33.9956 28.1124 31.9886C33.3722 28.0989 36 23.248 36 17.4399C36 12.461 33.9054 8.03162 29.7182 4.15171ZM27.9044 23.6852C27.9044 24.2761 27.5489 24.6207 26.8399 24.7231H9.16209C8.54604 24.7231 8.19054 24.3765 8.09763 23.6852V12.4551C8.09763 12.0809 8.30769 11.7697 8.7258 11.5196H27.2762C27.6943 11.8032 27.9044 12.1538 27.9044 12.5753V23.6852ZM26.3148 12.9829L26.1936 12.7781C23.7617 14.8087 21.0328 17.0204 18.0091 19.4153C17.2537 18.8816 16.5023 18.2967 15.759 17.6625C12.1757 14.7122 10.0468 13.0164 9.37216 12.5753H9.26713C12.1172 15.1829 13.8219 16.8057 14.3794 17.4399L9.05706 23.5828V23.7876C11.081 21.9718 13.0705 20.0672 15.0258 18.0702L18.0091 20.7763C19.8472 19.0963 20.7662 18.1608 20.7662 17.9678H20.8712L26.8399 23.6852V23.4646L21.6206 17.4399C23.4122 15.6024 24.9776 14.1174 26.3148 12.9829Z" fill="black"/>
                  <path d="M27.2762 11.5195H8.72583C8.30772 11.7697 8.09766 12.0808 8.09766 12.455V23.6851C8.19057 24.3764 8.54607 24.7231 9.16212 24.7231H26.84C27.5489 24.6206 27.9044 24.276 27.9044 23.6851V12.5752C27.9044 12.1537 27.6944 11.8031 27.2762 11.5195ZM26.84 23.6851L20.8713 17.9677H20.7662C20.7662 18.1607 19.8472 19.0962 18.0091 20.7762L15.0258 18.0701C13.0706 20.0672 11.081 21.9717 9.05709 23.7876V23.5827L14.3794 17.4399C13.8219 16.8057 12.1172 15.1828 9.26716 12.5752H9.37219C10.0468 13.0164 12.1758 14.7121 15.759 17.6624C16.5023 18.2966 17.2537 18.8815 18.0091 19.4153C21.0329 17.0203 23.7617 14.8086 26.1936 12.778L26.3148 12.9829C24.9776 14.1173 23.4122 15.6023 21.6206 17.4399L26.84 23.4646V23.6851Z" fill="white"/>
                </g>
              </svg>
            </a>
            <a href="#" aria-label="Phone">
              <svg width="36" height="34" viewBox="0 0 36 34" fill="none">
                <g clipPath="url(#clip0_291_1414)">
                  <path d="M26.1988 1.80572C23.1462 0.601906 20.6619 0 18.7459 0H17.5707C16.3083 0 14.6419 0.272199 12.5737 0.812764C8.43525 2.08175 5.0985 4.5603 2.56143 8.24841C0.923493 11.3499 0.105542 13.7633 0.105542 15.4847V16.5946C0.105542 16.7498 0.0710379 16.8821 0 16.9914C0.0710379 17.1141 0.105542 17.2521 0.105542 17.4054V18.5153C0.105542 19.0348 0.322715 20.0718 0.755032 21.6283C1.29289 23.7599 2.56751 25.974 4.57687 28.2704C6.30817 30.0263 8.15516 31.3662 10.1178 32.294C13.0284 33.4307 15.4436 34 17.3596 34H18.7459C21.1064 34 23.8769 33.2275 27.0573 31.6806C33.0184 27.9714 36 23.1139 36 17.1083C36 10.6158 32.7323 5.51491 26.1988 1.80572ZM22.3749 25.1401H21.7275C19.5882 25.1401 16.9639 23.5012 13.8524 20.2213C12.0419 17.8693 11.0068 15.7224 10.7491 13.7787C10.7491 13.7135 10.7896 13.6138 10.8729 13.4815L10.7491 13.2822L10.9784 12.571C12.6021 10.8918 13.6657 10.0522 14.169 10.0522H14.5892C14.8469 10.219 15.4842 11.5263 16.5011 13.978C16.5011 14.3211 16.0444 14.856 15.1331 15.5844L15.4497 16.5946C17.3657 19.3434 18.821 20.7178 19.8155 20.7178C20.4122 20.2328 20.9785 19.8629 21.5164 19.6079C21.9243 19.6635 22.4561 19.9683 23.1117 20.5204C24.6786 21.3926 25.462 22.0271 25.462 22.4239C25.1698 23.0756 24.1407 23.9804 22.3749 25.1401Z" fill="black"/>
                  <path d="M25.462 22.4224C25.1697 23.0742 24.1407 23.979 22.3749 25.1387H21.7274C19.5882 25.1387 16.9638 23.4997 13.8524 20.2199C12.0419 17.8679 11.0068 15.721 10.749 13.7772C10.749 13.7121 10.7896 13.6124 10.8728 13.4801L10.749 13.2808L10.9784 12.5696C12.6021 10.8904 13.6656 10.0508 14.169 10.0508H14.5891C14.8469 10.2176 15.4842 11.5249 16.5011 13.9766C16.5011 14.3197 16.0444 14.8545 15.1331 15.5829L15.4497 16.5932C17.3657 19.342 18.821 20.7164 19.8155 20.7164C20.4122 20.2314 20.9785 19.8615 21.5163 19.6065C21.9243 19.6621 22.4561 19.9669 23.1117 20.519C24.6786 21.3911 25.462 22.0256 25.462 22.4224Z" fill="white"/>
                </g>
              </svg>
            </a>
          </div>

          <p className="contact-thanks">
            Công Ty TNHH Xây Dựng Kiến Trúc SAIGON ID xin gửi lời cảm ơn sâu sắc chân thành nhất  đến Quý  khách hàng, đối tác đã tin tưởng, hợp tác và ủng hộ chúng tôi.
          </p>
        </div>

        <footer className="footer">
          <p className="copyright">© SID 2025. All Rights Reserved</p>
        </footer>
      </section>
      <BackToTopButton />
    </div>
  )
}

export default Infrastructure
