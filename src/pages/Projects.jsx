import { Link } from 'react-router-dom'
import './Projects.css'
import BackToTopButton from '../components/BackToTopButton'

import logoNgang from '../assets/img/Logo/logo ngang.png'
import logoDoc from '../assets/img/logo/logoDoc.png'
import balisaHotelImg from '../assets/img/Project/Hotel/Hotel.png'
import penthouseMrQuangImg from '../assets/img/Project/Penthouse/penthouseMasteri (1).png'
import estellaThumb from '../assets/img/Project/estella/estella (5).jpg'
import apacThumb from '../assets/img/Project/apac/apac (4).jpg'
import kienLongThumb from '../assets/img/Project/kien long/Bank (5).jpg'
import pizzaThumb from '../assets/img/Project/pizza/4p (2).jpg'
import coffeeThumb from '../assets/img/Project/coffee/coffeeBmt (2).jpg'
import penthouseMasteriThumb from '../assets/img/Project/Penthouse/penthouseMasteri (2).png'
import phucLongThumb from '../assets/img/Project/phuclong/fucklong (1).png'

function Projects() {
  return (
    <div className="projects-page">
      {/* Decorative Background */}
      <div className="decorative-backgrounds">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/fc1dc67ac140b5d79e4eeabb0ff605e4dbfeb93c?width=6871" 
          alt="" 
          className="bg-element bg-projects" 
        />
      </div>

      {/* Navigation */}
      <nav className="top-bar-projects">
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
          <li><Link to="/projects" className="active">DỰ ÁN</Link></li>
          <li><Link to="/furniture">NỘI THẤT RỜI</Link></li>
          <li><Link to="/infrastructure">CƠ SỞ HẠ TẦNG</Link></li>
        </ul>
        
        <div className="nav-actions">
          <svg className="vi-flag" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <g clipPath="url(#clip0_291_710)">
              <path d="M12.7519 15H2.24812C1.00807 15 0 13.9919 0 12.7519V2.24812C0 1.00807 1.00807 0 2.24812 0H12.7519C13.9919 0 15 1.00807 15 2.24812V12.7519C15 13.9919 13.9919 15 12.7519 15ZM2.24812 1.53514C1.85581 1.53514 1.53514 1.8541 1.53514 2.24812V12.7519C1.53514 13.1442 1.8541 13.4649 2.24812 13.4649H12.7519C13.1442 13.4649 13.4649 13.1459 13.4649 12.7519V2.24812C13.4649 1.85581 13.1459 1.53514 12.7519 1.53514H2.24812Z" fill="white"/>
              <path d="M8.79628 5.19727L6.49186 11.0666H5.12389L2.89111 5.19727H4.63605L5.73453 8.34089C5.77717 8.46029 5.81811 8.57457 5.85563 8.68544C5.89487 8.57286 5.93751 8.45687 5.98186 8.33748L7.06669 5.19727H8.79628Z" fill="white"/>
              <path d="M11.0528 3.78167C11.0597 4.02729 10.9727 4.25756 10.8072 4.42813C10.6332 4.60723 10.3859 4.70616 10.1113 4.70616C9.60128 4.70616 9.20215 4.30191 9.20215 3.78679C9.20215 3.27166 9.61152 2.85547 10.1335 2.85547C10.6554 2.85547 11.0494 3.2529 11.0528 3.78167Z" fill="white"/>
              <path d="M10.9454 5.19727H9.31982V11.0666H10.9454V5.19727Z" fill="white"/>
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

      {/* Projects Grid Section */}
      <section className="all-projects-section">
        <div className="projects-container">
          {/* Row 1 */}
          <div className="projects-row">
            <Link to="/projects/balisa-hotel" className="project-card">
              <img
                src={balisaHotelImg}
                alt="Balisa Hotel"
                className="project-image"
              />
              <h3 className="project-title">BALISA HOTEL</h3>
            </Link>

            <Link to="/projects/penthouse-mr-quang" className="project-card">
              <img
                src={penthouseMrQuangImg}
                alt="Penthouse Mr Quang Musician"
                className="project-image"
              />
              <h3 className="project-title">PENTHOUSE MR QUANG MUSICIAN</h3>
            </Link>

            <Link to="/projects/chung-cu-estalla" className="project-card">
              <img
                src={estellaThumb}
                alt="Chung cư Estalla"
                className="project-image"
              />
              <h3 className="project-title">CHUNG CƯ ESTALLA</h3>
            </Link>
          </div>

          {/* Row 2 */}
          <div className="projects-row">
            <Link to="/projects/apec-mandala" className="project-card">
              <img
                src={apacThumb}
                alt="Apec Mandala Charm Bay"
                className="project-image"
              />
              <h3 className="project-title">APEC MANDALA CHARM BAY</h3>
            </Link>

            <Link to="/projects/kien-long-bank" className="project-card">
              <img
                src={kienLongThumb}
                alt="Kiên Long Bank"
                className="project-image"
              />
              <h3 className="project-title">KIÊN LONG BANK</h3>
            </Link>

            <Link to="/projects/pizza-4ps" className="project-card">
              <img
                src={pizzaThumb}
                alt="Pizza 4P's"
                className="project-image"
              />
              <h3 className="project-title">PIZZA 4P'S</h3>
            </Link>
          </div>

          {/* Row 3 */}
          <div className="projects-row">
            <Link to="/projects/coffee-shop" className="project-card">
              <img
                src={coffeeThumb}
                alt="Coffee Shop"
                className="project-image"
              />
              <h3 className="project-title">COFFEE SHOP</h3>
            </Link>

            <Link to="/projects/penthouse-masteri" className="project-card">
              <img
                src={penthouseMasteriThumb}
                alt="Penthouse Masteri"
                className="project-image"
              />
              <h3 className="project-title">PENTHOUSE MASTERI</h3>
            </Link>

            <Link to="/projects/phuc-long-coffee" className="project-card">
              <img
                src={phucLongThumb}
                alt="Phúc Long Coffee"
                className="project-image"
              />
              <h3 className="project-title">PHÚC LONG COFFEE</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2 className="contact-title">LIÊN HỆ</h2>
        
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
                <span className="contact-label">Số điện tho��i</span>
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
                <g clipPath="url(#clip0_291_813)">
                  <path d="M35.6871 14.7921C35.4084 12.0585 33.8781 9.00606 31.1 5.63459C27.1449 1.87954 22.9596 0 18.5401 0H17.4599C16.2041 0 14.7142 0.24428 12.994 0.73284C8.38876 2.25707 4.98278 4.81494 2.77203 8.40848C1.37693 10.5464 0.452246 13.3486 0 16.8149C0.0686445 16.8149 0.102967 16.8553 0.102967 16.9361C0.0343222 17.0532 0 17.1925 0 17.356V17.5639C0 22.4596 1.66766 26.7557 5.00499 30.4542C8.9359 34.1507 13.1979 36 17.791 36H18.209C19.4648 36 21.2031 35.7153 23.4239 35.146C27.8091 33.6339 31.1868 30.9367 33.5591 27.0525C35.1864 23.9011 36 21.1292 36 18.7328V17.251C36 16.9017 35.895 16.0821 35.6871 14.7921ZM23.006 10.5363H20.878C19.598 10.6514 18.96 11.2571 18.96 12.3493V14.9132C18.96 15.0525 19.0287 15.1231 19.168 15.1231H22.796V15.3311C22.576 17.6689 22.3963 18.8378 22.2549 18.8378H19.168C19.0529 18.8378 18.9822 18.9125 18.96 19.0639V28.9704H15.1745L15.122 28.3264V19.1689C15.017 18.9489 14.912 18.8378 14.807 18.8378H12.994V15.1231H14.807C15.017 15.0061 15.122 14.895 15.122 14.7921L15.017 11.4953C15.1563 10.7382 15.2956 10.1689 15.4349 9.78533C16.1799 7.94818 17.7789 7.02961 20.232 7.02961H20.773C22.261 7.02961 23.006 7.13459 23.006 7.34455V10.5363Z" fill="black"/>
                  <path d="M18.9602 12.3489V14.9129C18.9602 15.0522 19.0288 15.1228 19.1681 15.1228H22.7962V15.3308C22.5761 17.6686 22.3964 18.8375 22.2551 18.8375H19.1681C19.053 18.8375 18.9824 18.9122 18.9602 19.0636V28.9701H15.1746L15.1221 28.3261V19.1686C15.0171 18.9485 14.9121 18.8375 14.8072 18.8375H12.9941V15.1228H14.8072C15.0171 15.0057 15.1221 14.8947 15.1221 14.7917L15.0171 11.495C15.1564 10.7379 15.2957 10.1686 15.4351 9.78502C16.1801 7.94787 17.7791 7.0293 20.2321 7.0293H20.7732C22.2611 7.0293 23.0061 7.13428 23.0061 7.34424V10.536H20.8782C19.5981 10.6511 18.9602 11.2568 18.9602 12.3489Z" fill="white"/>
                </g>
              </svg>
            </a>
            <a href="#" aria-label="Email">
              <svg width="36" height="35" viewBox="0 0 36 35" fill="none">
                <g clipPath="url(#clip0_291_816)">
                  <path d="M21.6206 17.4399C23.4122 15.6024 24.9776 14.1174 26.3148 12.9829L26.1936 12.7781C23.7617 14.8087 21.0328 17.0204 18.0091 19.4153C17.2537 18.8816 16.5023 18.2967 15.759 17.6625C12.1757 14.7122 10.0468 13.0164 9.37216 12.5753H9.26713C12.1172 15.1829 13.8219 16.8057 14.3794 17.4399L9.05706 23.5828V23.7876C11.081 21.9718 13.0705 20.0672 15.0258 18.0702L18.0091 20.7763C19.8472 19.0963 20.7662 18.1608 20.7662 17.9678H20.8712L26.8399 23.6852V23.4646L21.6206 17.4399ZM21.6206 17.4399C23.4122 15.6024 24.9776 14.1174 26.3148 12.9829L26.1936 12.7781C23.7617 14.8087 21.0328 17.0204 18.0091 19.4153C17.2537 18.8816 16.5023 18.2967 15.759 17.6625C12.1757 14.7122 10.0468 13.0164 9.37216 12.5753H9.26713C12.1172 15.1829 13.8219 16.8057 14.3794 17.4399L9.05706 23.5828V23.7876C11.081 21.9718 13.0705 20.0672 15.0258 18.0702L18.0091 20.7763C19.8472 19.0963 20.7662 18.1608 20.7662 17.9678H20.8712L26.8399 23.6852V23.4646L21.6206 17.4399ZM29.7182 4.15171C25.937 1.38456 22.4588 0 19.2836 0H16.2983C13.2281 0.295425 10.3134 1.36683 7.5563 3.21619C2.51877 7.05081 0 11.7914 0 17.4399C0 20.5143 0.814005 23.4587 2.44403 26.2712C6.29389 32.091 11.4829 35 18.0091 35C21.6044 35 24.9716 33.9956 28.1124 31.9886C33.3722 28.0989 36 23.248 36 17.4399C36 12.461 33.9054 8.03162 29.7182 4.15171ZM27.9044 23.6852C27.9044 24.2761 27.5489 24.6207 26.8399 24.7231H9.16209C8.54604 24.7231 8.19054 24.3765 8.09763 23.6852V12.4551C8.09763 12.0809 8.30769 11.7697 8.7258 11.5196H27.2762C27.6943 11.8032 27.9044 12.1538 27.9044 12.5753V23.6852ZM26.3148 12.9829L26.1936 12.7781C23.7617 14.8087 21.0328 17.0204 18.0091 19.4153C17.2537 18.8816 16.5023 18.2967 15.759 17.6625C12.1757 14.7122 10.0468 13.0164 9.37216 12.5753H9.26713C12.1172 15.1829 13.8219 16.8057 14.3794 17.4399L9.05706 23.5828V23.7876C11.081 21.9718 13.0705 20.0672 15.0258 18.0702L18.0091 20.7763C19.8472 19.0963 20.7662 18.1608 20.7662 17.9678H20.8712L26.8399 23.6852V23.4646L21.6206 17.4399C23.4122 15.6024 24.9776 14.1174 26.3148 12.9829Z" fill="black"/>
                  <path d="M27.2762 11.5195H8.72583C8.30772 11.7697 8.09766 12.0808 8.09766 12.455V23.6851C8.19057 24.3764 8.54607 24.7231 9.16212 24.7231H26.84C27.5489 24.6206 27.9044 24.276 27.9044 23.6851V12.5752C27.9044 12.1537 27.6944 11.8031 27.2762 11.5195ZM26.84 23.6851L20.8713 17.9677H20.7662C20.7662 18.1607 19.8472 19.0962 18.0091 20.7762L15.0258 18.0701C13.0706 20.0672 11.081 21.9717 9.05709 23.7876V23.5827L14.3794 17.4399C13.8219 16.8057 12.1172 15.1828 9.26716 12.5752H9.37219C10.0468 13.0164 12.1758 14.7121 15.759 17.6624C16.5023 18.2966 17.2537 18.8815 18.0091 19.4153C21.0329 17.0203 23.7617 14.8086 26.1936 12.778L26.3148 12.9829C24.9776 14.1173 23.4122 15.6023 21.6206 17.4399L26.84 23.4646V23.6851Z" fill="white"/>
                </g>
              </svg>
            </a>
            <a href="#" aria-label="Phone">
              <svg width="36" height="34" viewBox="0 0 36 34" fill="none">
                <g clipPath="url(#clip0_291_819)">
                  <path d="M26.1988 1.80572C23.1462 0.601906 20.6619 0 18.7459 0H17.5707C16.3083 0 14.6419 0.272199 12.5737 0.812764C8.43525 2.08175 5.0985 4.5603 2.56143 8.24841C0.923493 11.3499 0.105542 13.7633 0.105542 15.4847V16.5946C0.105542 16.7498 0.0710379 16.8821 0 16.9914C0.0710379 17.1141 0.105542 17.2521 0.105542 17.4054V18.5153C0.105542 19.0348 0.322715 20.0718 0.755032 21.6283C1.29289 23.7599 2.56751 25.974 4.57687 28.2704C6.30817 30.0263 8.15516 31.3662 10.1178 32.294C13.0284 33.4307 15.4436 34 17.3596 34H18.7459C21.1064 34 23.8769 33.2275 27.0573 31.6806C33.0184 27.9714 36 23.1139 36 17.1083C36 10.6158 32.7323 5.51491 26.1988 1.80572ZM22.3749 25.1401H21.7275C19.5882 25.1401 16.9639 23.5012 13.8524 20.2213C12.0419 17.8693 11.0068 15.7224 10.7491 13.7787C10.7491 13.7135 10.7896 13.6138 10.8729 13.4815L10.7491 13.2822L10.9784 12.571C12.6021 10.8918 13.6657 10.0522 14.169 10.0522H14.5892C14.8469 10.219 15.4842 11.5263 16.5011 13.978C16.5011 14.3211 16.0444 14.856 15.1331 15.5844L15.4497 16.5946C17.3657 19.3434 18.821 20.7178 19.8155 20.7178C20.4122 20.2328 20.9785 19.8629 21.5164 19.6079C21.9243 19.6635 22.4561 19.9683 23.1117 20.5204C24.6786 21.3926 25.462 22.0271 25.462 22.4239C25.1698 23.0756 24.1407 23.9804 22.3749 25.1401Z" fill="black"/>
                  <path d="M25.462 22.4244C25.1697 23.0761 24.1407 23.9809 22.3749 25.1406H21.7274C19.5882 25.1406 16.9638 23.5017 13.8524 20.2219C12.0419 17.8698 11.0068 15.7229 10.749 13.7792C10.749 13.714 10.7896 13.6143 10.8728 13.4821L10.749 13.2827L10.9784 12.5715C12.6021 10.8923 13.6656 10.0527 14.169 10.0527H14.5891C14.8469 10.2195 15.4842 11.5268 16.5011 13.9785C16.5011 14.3217 16.0444 14.8565 15.1331 15.5849L15.4497 16.5951C17.3657 19.3439 18.821 20.7183 19.8155 20.7183C20.4122 20.2334 20.9785 19.8634 21.5163 19.6085C21.9243 19.6641 22.4561 19.9688 23.1117 20.5209C24.6786 21.3931 25.462 22.0276 25.462 22.4244Z" fill="white"/>
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

export default Projects
