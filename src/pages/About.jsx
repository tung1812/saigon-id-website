import { Link } from 'react-router-dom'
import './About.css'
import BackToTopButton from '../components/BackToTopButton'

function About() {
  return (
    <div className="about-page">
      {/* Decorative Background */}
      <div className="decorative-backgrounds">
        <img src="src\assets\img\Bg\elements(2).png" alt="" className="bg-element bg-about" />
      </div>

      {/* Navigation */}
      <nav className="top-bar-about">
        <div className="nav-gradient-overlay"></div>
        
        <Link to="/">
          <img 
            src="src\assets\img\Logo\logo ngang.png" 
            alt="SAIGON ID Logo" 
            className="logo"
          />
        </Link>
        
        <ul className="nav-menu">
          <li><Link to="/about" className="active">VỀ CHÚNG TÔI</Link></li>
          <li><Link to="/projects">DỰ ÁN</Link></li>
          <li><Link to="/furniture">NỘI THẤT RỜI</Link></li>
          <li><Link to="/infrastructure">CƠ SỞ HẠ TẦNG</Link></li>
        </ul>
        
        <div className="nav-actions">
          <svg className="vi-flag" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <g clipPath="url(#clip0_291_1724)">
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

      {/* Hero Section - VỀ CHÚNG TÔI */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1 className="about-hero-title">VỀ CHÚNG TÔI</h1>
            <p className="about-hero-description">
              CÔNG TY TNHH XÂY DỰNG VÀ KIẾN TRÚC SAIGON ID ( Viết tắt SID). 
              'ID' là viết tắt của Identity - bản sắc, 'ID' - Ý tưởng trong thiết kế, đồng thời cũng là Interior & Design ( thiết kế nội thất). Chúng tôi tin rằng mỗi ngôi nhà, mỗi tác phẩm đều xứng đáng có một 'ID' riêng - phản ánh đúng gu thẩm mỹ, lối sống và giá trị riêng. Bên cạnh thiết kế chúng tôi còn thi công trang trí nội - ngoại thất, sản xuất đồ gỗ.
            </p>
          </div>
          
          <div className="about-hero-image-wrapper">
            <img 
              src="src\assets\img\About\about us.jpg" 
              alt="SAIGON ID Office"
              className="about-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Mission, Values, Vision Section */}
      <section className="mission-values-section">
        <h2 className="section-main-title">
          SỨ MỆNH - GIÁ TRỊ CỐT LÕI - <br />
          ĐỊNH HƯỚNG TƯƠNG LAI
        </h2>

        <div className="mission-values-grid">
          {/* Mission */}
          <div className="mission-value-item">
            <div className="mission-value-card">
              <svg className="mission-icon" width="74" height="74" viewBox="0 0 74 74" fill="none">
                <path d="M63.0156 40.5C64.9486 40.5 66.5156 38.933 66.5156 37C66.5156 35.067 64.9486 33.5 63.0156 33.5V37V40.5ZM64.75 37H61.25C61.25 50.3929 50.3929 61.25 37 61.25V64.75V68.25C54.2589 68.25 68.25 54.2589 68.25 37H64.75ZM37 64.75V61.25C23.6071 61.25 12.75 50.3929 12.75 37H9.25H5.75C5.75 54.2589 19.7411 68.25 37 68.25V64.75ZM9.25 37H12.75C12.75 23.6071 23.6071 12.75 37 12.75V9.25V5.75C19.7411 5.75 5.75 19.7411 5.75 37H9.25ZM37 9.25V12.75C50.3929 12.75 61.25 23.6071 61.25 37H64.75H68.25C68.25 19.7411 54.2589 5.75 37 5.75V9.25ZM37 64.75V61.25C36.4818 61.25 35.7121 61.0247 34.707 60.0529C33.6851 59.0649 32.6049 57.4663 31.6218 55.2193C29.6603 50.7358 28.3594 44.297 28.3594 37H24.8594H21.3594C21.3594 45.0289 22.7763 52.4651 25.2087 58.0251C26.4227 60.7999 27.9586 63.2651 29.8416 65.0856C31.7415 66.9223 34.1657 68.25 37 68.25V64.75ZM24.8594 37H28.3594C28.3594 29.703 29.6603 23.2642 31.6218 18.7807C32.6049 16.5337 33.6851 14.935 34.707 13.9471C35.7121 12.9753 36.4818 12.75 37 12.75V9.25V5.75C34.1657 5.75 31.7415 7.07767 29.8416 8.91441C27.9586 10.7349 26.4227 13.2001 25.2087 15.9749C22.7763 21.5349 21.3594 28.9711 21.3594 37H24.8594ZM37 64.75V68.25C39.8343 68.25 42.2585 66.9223 44.1584 65.0856C46.0414 63.2651 47.5773 60.7999 48.7913 58.0251C51.2237 52.4651 52.6406 45.0289 52.6406 37H49.1406H45.6406C45.6406 44.297 44.3397 50.7358 42.3782 55.2193C41.3951 57.4663 40.3149 59.065 39.293 60.0529C38.2879 61.0247 37.5182 61.25 37 61.25V64.75ZM49.1406 37H52.6406C52.6406 28.9711 51.2237 21.5349 48.7913 15.9749C47.5773 13.2001 46.0414 10.7349 44.1584 8.91441C42.2585 7.07767 39.8343 5.75 37 5.75V9.25V12.75C37.5182 12.75 38.2879 12.9753 39.293 13.9471C40.3149 14.935 41.3951 16.5337 42.3782 18.7807C44.3397 23.2642 45.6406 29.703 45.6406 37H49.1406ZM9.25 37L9.25 40.5L63.0156 40.5V37V33.5L9.25 33.5L9.25 37Z" fill="#949494"/>
              </svg>
              <h3 className="mission-value-title">Sứ mệnh</h3>
            </div>
            
            <p className="mission-value-description">
              Mục đích hàng đầu của chúng tôi là phát huy tối đa  nguồn nhân lực,  kinh nghiệm & sự sáng tạo nhằm  mang đến cho khách hàng những  sản phẩm nội thất  tốt nhất.
            </p>
          </div>

          {/* Core Values */}
          <div className="mission-value-item">
            <div className="mission-value-card">
              <svg className="mission-icon" width="74" height="74" viewBox="0 0 74 74" fill="none">
                <path d="M65.48 38.6324C65.48 36.6994 63.9129 35.1324 61.98 35.1324C60.047 35.1324 58.48 36.6994 58.48 38.6324H61.98H65.48ZM35.615 16.0147C37.548 16.0147 39.115 14.4477 39.115 12.5147C39.115 10.5817 37.548 9.01471 35.615 9.01471V12.5147V16.0147ZM52.2975 38.6324C52.2975 36.6994 50.7305 35.1324 48.7975 35.1324C46.8645 35.1324 45.2975 36.6994 45.2975 38.6324H48.7975H52.2975ZM35.615 29.0735C37.548 29.0735 39.115 27.5065 39.115 25.5735C39.115 23.6405 37.548 22.0735 35.615 22.0735V25.5735V29.0735ZM49.7299 29.05C51.1032 27.6896 51.1136 25.4735 49.7533 24.1003C48.3929 22.727 46.1768 22.7166 44.8036 24.077L47.2668 26.5635L49.7299 29.05ZM33.1518 35.6194C31.7785 36.9798 31.7681 39.1959 33.1285 40.5691C34.4888 41.9424 36.7049 41.9528 38.0782 40.5924L35.615 38.1059L33.1518 35.6194ZM64.75 18.484L67.2132 20.9705C68.1577 20.0348 68.4905 18.6448 68.0723 17.3828C67.654 16.1208 66.5568 15.2048 65.2404 15.0185L64.75 18.484ZM54.2634 28.8722L53.166 32.1957C54.4158 32.6084 55.7915 32.285 56.7266 31.3587L54.2634 28.8722ZM44.942 19.6382L42.4788 17.1517C41.5302 18.0914 41.1989 19.4889 41.6247 20.7544L44.942 19.6382ZM55.4286 9.25L58.8927 8.75043C58.7041 7.44207 57.7943 6.35163 56.541 5.93149C55.2876 5.51134 53.9045 5.83318 52.9654 6.76349L55.4286 9.25ZM47.2723 26.5637L43.9551 27.6799C44.3064 28.724 45.1288 29.5418 46.1749 29.8872L47.2723 26.5637ZM56.5938 17.3297L53.1296 17.8293C53.3516 19.3689 54.5631 20.5772 56.1033 20.7952L56.5938 17.3297ZM61.98 38.6324H58.48C58.48 51.0927 48.2741 61.25 35.615 61.25V64.75V68.25C52.0778 68.25 65.48 55.0208 65.48 38.6324H61.98ZM35.615 64.75V61.25C22.9558 61.25 12.75 51.0927 12.75 38.6324H9.25H5.75C5.75 55.0208 19.1522 68.25 35.615 68.25V64.75ZM9.25 38.6324H12.75C12.75 26.172 22.9558 16.0147 35.615 16.0147V12.5147V9.01471C19.1522 9.01471 5.75 22.2439 5.75 38.6324H9.25ZM48.7975 38.6324H45.2975C45.2975 43.8805 40.9936 48.1912 35.615 48.1912V51.6912V55.1912C44.7973 55.1912 52.2975 47.8086 52.2975 38.6324H48.7975ZM35.615 51.6912V48.1912C30.2363 48.1912 25.9325 43.8805 25.9325 38.6324H22.4325H18.9325C18.9325 47.8086 26.4327 55.1912 35.615 55.1912V51.6912ZM22.4325 38.6324H25.9325C25.9325 33.3842 30.2363 29.0735 35.615 29.0735V25.5735V22.0735C26.4327 22.0735 18.9325 29.4561 18.9325 38.6324H22.4325ZM47.2668 26.5635L44.8036 24.077L33.1518 35.6194L35.615 38.1059L38.0782 40.5924L49.7299 29.05L47.2668 26.5635ZM64.75 18.484L62.2868 15.9975L51.8002 26.3857L54.2634 28.8722L56.7266 31.3587L67.2132 20.9705L64.75 18.484ZM44.942 19.6382L47.4052 22.1247L57.8918 11.7365L55.4286 9.25L52.9654 6.76349L42.4788 17.1517L44.942 19.6382ZM54.2634 28.8722L55.3608 25.5487L48.3698 23.2402L47.2723 26.5637L46.1749 29.8872L53.166 32.1957L54.2634 28.8722ZM47.2723 26.5637L50.5896 25.4475L48.2592 18.522L44.942 19.6382L41.6247 20.7544L43.9551 27.6799L47.2723 26.5637ZM55.4286 9.25L51.9644 9.74957L53.1296 17.8293L56.5938 17.3297L60.0579 16.8302L58.8927 8.75043L55.4286 9.25ZM56.5938 17.3297L56.1033 20.7952L64.2596 21.9495L64.75 18.484L65.2404 15.0185L57.0842 13.8643L56.5938 17.3297Z" fill="#949494"/>
              </svg>
              <h3 className="mission-value-title">Giá trị<br />cốt lõi</h3>
            </div>
            
            <p className="mission-value-description">
              Khẳng định niềm tin, phục vụ sự hài lòng của khách hàng là  nhiệm vụ hàng đầu. Công trình: bền đẹp, tiến độ nhanh chóng.   Dịch vụ tư vấn, thiết kế chuyên nghiệp. Môi trường làm việc sáng tạo - hiệu quả.  Đội ngũ nhân viên đoàn kết và thân thiện
            </p>
          </div>

          {/* Future Vision */}
          <div className="mission-value-item">
            <div className="mission-value-card">
              <div className="mission-icon-wrapper">
                <svg className="mission-icon" width="74" height="74" viewBox="0 0 74 74" fill="none">
                  <path d="M36.9992 37.2783V37.0001M64.6344 64.6349C58.7893 70.48 41.6785 62.846 26.4163 47.5838C11.1542 32.3216 3.5201 15.2108 9.36519 9.36568C15.2103 3.52059 32.3211 11.1547 47.5833 26.4168C62.8455 41.679 70.4795 58.7898 64.6344 64.6349ZM9.36579 64.6351C3.5207 58.79 11.1548 41.6792 26.4169 26.417C41.6791 11.1548 58.7899 3.52077 64.635 9.36586C70.4801 15.2109 62.8461 32.3218 47.5839 47.5839C32.3217 62.8461 15.2109 70.4802 9.36579 64.6351Z" stroke="#949494" strokeWidth="7" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="mission-value-title">Định hướng<br />tương lai</h3>
            </div>
            
            <p className="mission-value-description">
              Phát triển hình ảnh SAIGON ID với khả năng sáng  tạo không ngừng  trong thiết kế, chất lượng ngày  một nâng cao trong từng sản phẩm với  đội ngũ  nhân công lành nghề, quyết tâm trở thành đơn vị  thiết kế và  thi công nội thất hàng đầu Việt Nam
            </p>
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section className="factory-section">
        <h2 className="section-main-title">NHÀ MÁY SẢN XUẤT</h2>
        
        <div className="factory-content">
          <div className="factory-image-container">
            <img 
              src="src\assets\img\About\nha may go.jpg" 
              alt="Factory Production"
              className="factory-main-image"
            />
          </div>
          
          <div className="factory-text-content">
            <p className="factory-description">
              Với diện tích nhà máy  900m2, chúng tôi đã 
              đầu tư hệ thống  máy móc sản  xuất, máy 
              chế biến gỗ đáp ���ng hầu  hết những  yêu cầu khắc khe và số lư��ng đơn hàng của khách hàng.
            </p>
            <a href="#factory" className="factory-link">CỞ SỞ SẢN XUẤT</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2 className="contact-title">LIÊN HỆ</h2>
        
        <div className="contact-content">
          <div className="contact-logo">
            <img src="src\assets\img\Logo\logo dọc.png" alt="SAIGON ID" />
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
                <path d="M35.6871 14.7921C35.4084 12.0585 33.8781 9.00606 31.1 5.63459C27.1449 1.87954 22.9596 0 18.5401 0H17.4599C16.2041 0 14.7142 0.24428 12.994 0.73284C8.38876 2.25707 4.98278 4.81494 2.77203 8.40848C1.37693 10.5464 0.452246 13.3486 0 16.8149C0.0686445 16.8149 0.102967 16.8553 0.102967 16.9361C0.0343222 17.0532 0 17.1925 0 17.356V17.5639C0 22.4596 1.66766 26.7557 5.00499 30.4542C8.9359 34.1507 13.1979 36 17.791 36H18.209C19.4648 36 21.2031 35.7153 23.4239 35.146C27.8091 33.6339 31.1868 30.9367 33.5591 27.0525C35.1864 23.9011 36 21.1292 36 18.7328V17.251C36 16.9017 35.895 16.0821 35.6871 14.7921ZM23.006 10.5363H20.878C19.598 10.6514 18.96 11.2571 18.96 12.3493V14.9132C18.96 15.0525 19.0287 15.1231 19.168 15.1231H22.796V15.3311C22.576 17.6689 22.3963 18.8378 22.2549 18.8378H19.168C19.0529 18.8378 18.9822 18.9125 18.96 19.0639V28.9704H15.1745L15.122 28.3264V19.1689C15.017 18.9489 14.912 18.8378 14.807 18.8378H12.994V15.1231H14.807C15.017 15.0061 15.122 14.895 15.122 14.7921L15.017 11.4953C15.1563 10.7382 15.2956 10.1689 15.4349 9.78533C16.1799 7.94818 17.7789 7.02961 20.232 7.02961H20.773C22.261 7.02961 23.006 7.13459 23.006 7.34455V10.5363Z" fill="black"/>
                <path d="M18.9602 12.3489V14.9129C18.9602 15.0522 19.0288 15.1228 19.1681 15.1228H22.7962V15.3308C22.5761 17.6686 22.3964 18.8375 22.2551 18.8375H19.1681C19.053 18.8375 18.9824 18.9122 18.9602 19.0636V28.9701H15.1746L15.1221 28.3261V19.1686C15.0171 18.9485 14.9121 18.8375 14.8072 18.8375H12.9941V15.1228H14.8072C15.0171 15.0057 15.1221 14.8947 15.1221 14.7917L15.0171 11.495C15.1564 10.7379 15.2957 10.1686 15.4351 9.78502C16.1801 7.94787 17.7791 7.0293 20.2321 7.0293H20.7732C22.2611 7.0293 23.0061 7.13428 23.0061 7.34424V10.536H20.8782C19.5981 10.6511 18.9602 11.2568 18.9602 12.3489Z" fill="white"/>
              </svg>
            </a>
            <a href="#" aria-label="Email">
              <svg width="36" height="35" viewBox="0 0 36 35" fill="none">
                <path d="M29.7182 4.15171C25.937 1.38456 22.4588 0 19.2836 0H16.2983C13.2281 0.295425 10.3134 1.36683 7.5563 3.21619C2.51877 7.05081 0 11.7914 0 17.4399C0 20.5143 0.814005 23.4587 2.44403 26.2712C6.29389 32.091 11.4829 35 18.0091 35C21.6044 35 24.9716 33.9956 28.1124 31.9886C33.3722 28.0989 36 23.248 36 17.4399C36 12.461 33.9054 8.03162 29.7182 4.15171ZM27.9044 23.6852C27.9044 24.2761 27.5489 24.6207 26.8399 24.7231H9.16209C8.54604 24.7231 8.19054 24.3765 8.09763 23.6852V12.4551C8.09763 12.0809 8.30769 11.7697 8.7258 11.5196H27.2762C27.6943 11.8032 27.9044 12.1538 27.9044 12.5753V23.6852Z" fill="black"/>
                <path d="M27.2762 11.5195H8.72583C8.30772 11.7697 8.09766 12.0808 8.09766 12.455V23.6851C8.19057 24.3764 8.54607 24.7231 9.16212 24.7231H26.84C27.5489 24.6206 27.9044 24.276 27.9044 23.6851V12.5752C27.9044 12.1537 27.6944 11.8031 27.2762 11.5195Z" fill="white"/>
              </svg>
            </a>
            <a href="#" aria-label="Phone">
              <svg width="36" height="34" viewBox="0 0 36 34" fill="none">
                <path d="M26.1988 1.80572C23.1462 0.601906 20.6619 0 18.7459 0H17.5707C16.3083 0 14.6419 0.272199 12.5737 0.812764C8.43525 2.08175 5.0985 4.5603 2.56143 8.24841C0.923493 11.3499 0.105542 13.7633 0.105542 15.4847V16.5946C0.105542 16.7498 0.0710379 16.8821 0 16.9914C0.0710379 17.1141 0.105542 17.2521 0.105542 17.4054V18.5153C0.105542 19.0348 0.322715 20.0718 0.755032 21.6283C1.29289 23.7599 2.56751 25.974 4.57687 28.2704C6.30817 30.0263 8.15516 31.3662 10.1178 32.294C13.0284 33.4307 15.4436 34 17.3596 34H18.7459C21.1064 34 23.8769 33.2275 27.0573 31.6806C33.0184 27.9714 36 23.1139 36 17.1083C36 10.6158 32.7323 5.51491 26.1988 1.80572ZM22.3749 25.1401H21.7275C19.5882 25.1401 16.9639 23.5012 13.8524 20.2213C12.0419 17.8693 11.0068 15.7224 10.7491 13.7787C10.7491 13.7135 10.7896 13.6138 10.8729 13.4815L10.7491 13.2822L10.9784 12.571C12.6021 10.8918 13.6657 10.0522 14.169 10.0522H14.5892C14.8469 10.219 15.4842 11.5263 16.5011 13.978C16.5011 14.3211 16.0444 14.856 15.1331 15.5844L15.4497 16.5946C17.3657 19.3434 18.821 20.7178 19.8155 20.7178C20.4122 20.2328 20.9785 19.8629 21.5164 19.6079C21.9243 19.6635 22.4561 19.9683 23.1117 20.5204C24.6786 21.3926 25.462 22.0271 25.462 22.4239C25.1698 23.0756 24.1407 23.9804 22.3749 25.1401Z" fill="black"/>
                <path d="M25.462 22.4234C25.1697 23.0752 24.1407 23.9799 22.3749 25.1397H21.7274C19.5882 25.1397 16.9638 23.5007 13.8524 20.2209C12.0419 17.8689 11.0068 15.7219 10.749 13.7782C10.749 13.713 10.7896 13.6134 10.8728 13.4811L10.749 13.2817L10.9784 12.5706C12.6021 10.8914 13.6656 10.0518 14.169 10.0518H14.5891C14.8469 10.2185 15.4842 11.5259 16.5011 13.9776C16.5011 14.3207 16.0444 14.8555 15.1331 15.5839L15.4497 16.5941C17.3657 19.343 18.821 20.7174 19.8155 20.7174C20.4122 20.2324 20.9785 19.8624 21.5163 19.6075C21.9243 19.6631 22.4561 19.9679 23.1117 20.5199C24.6786 21.3921 25.462 22.0266 25.462 22.4234Z" fill="white"/>
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

export default About
