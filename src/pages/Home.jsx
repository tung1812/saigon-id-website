import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import BackToTopButton from '../components/BackToTopButton'

import logoNgang from '../assets/img/Logo/logo ngang.png'
import logoDoc from '../assets/img/logo/logoDoc.png'
import hero1 from '../assets/img/Home/Hero/1.jpeg'
import hero2 from '../assets/img/Home/Hero/2.jpeg'
import hero3 from '../assets/img/Home/Hero/3.jpeg'
import hero4 from '../assets/img/Home/Hero/4.jpg'
import hero5 from '../assets/img/Home/Hero/5.jpg'
import nhamaygo from '../assets/img/Home/nha may go.jpg'
import thietke from '../assets/img/Home/thiet ke.jpg'
import thicong from '../assets/img/Home/thi cong.jpg'
import nhahang from '../assets/img/Home/nha hang.jpg'
import home1 from '../assets/img/Home/1.png'
import home2 from '../assets/img/Home/2.png'
import home3 from '../assets/img/Home/3.png'
import home4 from '../assets/img/Home/4.png'
import home5 from '../assets/img/Home/5.png'
import chebiengo from '../assets/img/Home/che bien go.jpg'

import ancuong from '../assets/img/Logo/an cuong.png'
import dupont from '../assets/img/Logo/du pont.png'
import hafele from '../assets/img/Logo/hafele.png'
import oacacia from '../assets/img/Logo/oacacia.png'
import rubio from '../assets/img/Logo/rubio.png'

function Home() {
  const heroImages = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(autoSlideInterval)
  }, [heroImages.length])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src={heroImages[currentImageIndex]}
            alt="Interior Design Showcase"
            className="hero-image"
          />
          <div className="hero-gradient-overlay"></div>
        </div>
        
        {/* Navigation */}
        <nav className="top-bar">
          <img 
            src={logoNgang}
            alt="SAIGON ID Logo" 
            className="logo"
          />
          
          <ul className={`nav-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
            <li><Link to="/about" onClick={closeMenu}>VỀ CHÚNG TÔI</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>DỰ ÁN</Link></li>
            <li><Link to="/furniture" onClick={closeMenu}>NỘI THẤT RỜI</Link></li>
            <li><Link to="/infrastructure" onClick={closeMenu}>CƠ SỞ HẠ TẦNG</Link></li>
          </ul>

          <div className="nav-actions">
            <svg className="vi-flag" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <g clipPath="url(#clip0_291_262)">
                <path d="M12.7519 15H2.24812C1.00807 15 0 13.9919 0 12.7519V2.24812C0 1.00807 1.00807 0 2.24812 0H12.7519C13.9919 0 15 1.00807 15 2.24812V12.7519C15 13.9919 13.9919 15 12.7519 15ZM2.24812 1.53514C1.85581 1.53514 1.53514 1.8541 1.53514 2.24812V12.7519C1.53514 13.1442 1.8541 13.4649 2.24812 13.4649H12.7519C13.1442 13.4649 13.4649 13.1459 13.4649 12.7519V2.24812C13.4649 1.85581 13.1459 1.53514 12.7519 1.53514H2.24812Z" fill="white"/>
                <path d="M8.79628 5.1973L6.49186 11.0666H5.12389L2.89111 5.1973H4.63605L5.73453 8.34092C5.77717 8.46032 5.81811 8.5746 5.85563 8.68547C5.89487 8.57289 5.93751 8.45691 5.98186 8.33751L7.06669 5.1973H8.79628Z" fill="white"/>
                <path d="M11.0528 3.78155C11.0597 4.02718 10.9727 4.25745 10.8072 4.42802C10.6332 4.60712 10.3859 4.70605 10.1113 4.70605C9.60128 4.70605 9.20215 4.3018 9.20215 3.78667C9.20215 3.27155 9.61152 2.85535 10.1335 2.85535C10.6554 2.85535 11.0494 3.25278 11.0528 3.78155Z" fill="white"/>
                <path d="M10.9454 5.19729H9.31982V11.0666H10.9454V5.19729Z" fill="white"/>
              </g>
            </svg>

            <button className="hamburger-menu" aria-label="Menu" onClick={toggleMenu} aria-expanded={isMenuOpen}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 7L4 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M20 12L4 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M20 17L4 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </nav>
      </section>

      {/* Decorative Background Elements */}
      <div className="decorative-backgrounds">
        <img src="src\assets\img\Bg\elements.png" alt="" className="bg-element bg-4" />
        <img src="src\assets\img\Bg\elements (1).png" alt="" className="bg-element bg-5" />
        <img src="src\assets\img\Bg\Clip path group.png" alt="" className="bg-element bg-6" />
      </div>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-top-gradient"></div>

        <div className="about-intro">
          <div className="section-badge about-badge">GIỚI THIỆU</div>

          <p className="about-description">
            CÔNG TY TNHH XÂY DỰNG VÀ KIẾN TRÚC SAIGON ID ( Viết tắt SID).
            'ID' là viết tắt của Identity - bản sắc, 'ID' - Ý tưởng trong thiết kế, đồng thời cũng là Interior & Design ( thiết kế nội thất). Chúng tôi tin rằng mỗi ngôi nhà, mỗi tác phẩm đều xứng đáng có một 'ID' riêng - phản ánh đúng gu thẩm m���, lối sống và giá trị riêng. Bên cạnh thiết kế chúng tôi còn thi công trang trí nội - ngoại thất, sản xuất đồ gỗ.
          </p>
        </div>

        <Link to="/about" className="section-link about-link">VỀ CHÚNG TÔI</Link>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <svg className="stat-icon" width="74" height="74" viewBox="0 0 74 74" fill="none">
              <path d="M8.70605 8.70593C8.70605 24.3323 21.3738 37 37.0002 37C52.6266 37 65.2943 24.3323 65.2943 8.70593H55.8629C55.8629 19.1235 47.4178 27.5687 37.0002 27.5687C26.5826 27.5687 18.1374 19.1235 18.1374 8.70593H8.70605Z" fill="#949494"/>
              <path d="M37.0002 18.1373C31.7914 18.1373 27.5688 13.9147 27.5688 8.70594L46.4315 8.70593C46.4315 13.9147 42.209 18.1373 37.0002 18.1373Z" fill="#949494"/>
              <path d="M37.0002 37C21.3738 37 8.70605 49.6678 8.70605 65.2942H18.1374C18.1374 54.8766 26.5826 46.4314 37.0002 46.4314C47.4178 46.4314 55.8629 54.8766 55.8629 65.2942L65.2943 65.2942C65.2943 49.6678 52.6266 37 37.0002 37Z" fill="#949494"/>
              <path d="M37.0002 55.8628C31.7914 55.8628 27.5688 60.0854 27.5688 65.2942H46.4315C46.4315 60.0854 42.209 55.8628 37.0002 55.8628Z" fill="#949494"/>
            </svg>
            <div className="stat-info">
              <div className="stat-number">10+</div>
              <div className="stat-label">Năm kinh nghiệm</div>
            </div>
          </div>

          <div className="stat-card">
            <svg className="stat-icon" width="74" height="74" viewBox="0 0 74 74" fill="none">
              <path d="M37.0002 30.7125C33.5276 30.7125 30.7126 33.5275 30.7126 37C30.7126 40.4726 33.5276 43.2876 37.0002 43.2876C40.4727 43.2876 43.2878 40.4726 43.2878 37C43.2878 33.5275 40.4727 30.7125 37.0002 30.7125Z" fill="#949494"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M8.70605 37C8.70605 21.3736 21.3738 8.70593 37.0002 8.70593C52.6266 8.70593 65.2943 21.3736 65.2943 37C65.2943 52.6265 52.6266 65.2942 37.0002 65.2942C21.3738 65.2942 8.70605 52.6265 8.70605 37ZM18.0165 37C18.0165 26.1422 26.1424 18.0164 37.0002 18.0164C47.858 18.0164 55.9838 26.1422 55.9838 37C55.9838 47.8579 47.858 55.9837 37.0002 55.9837C26.1424 55.9837 18.0165 47.8579 18.0165 37Z" fill="#949494"/>
            </svg>
            <div className="stat-info">
              <div className="stat-number">120+</div>
              <div className="stat-label">Dự án thành công</div>
            </div>
          </div>

          <div className="stat-card">
            <svg className="stat-icon" width="74" height="74" viewBox="0 0 74 74" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.479 37C8.479 52.0583 20.4419 63.9792 35.581 63.9792C42.3294 63.9792 47.8147 62.7869 51.9893 60.4861C60.4191 55.8434 65.5207 47.7496 65.5207 37C65.5207 31.6876 64.3737 27.0372 61.9784 23.082C59.6051 19.1284 56.4049 15.851 52.0758 13.5679C47.7511 11.2871 42.3422 10.0209 35.581 10.0209C20.5805 10.0209 8.479 21.7273 8.479 37ZM55.07 37.0694C55.07 49.4328 45.4852 59.2482 33.9972 59.2482C30.2514 59.2482 26.8239 58.2504 23.5709 56.3073C17.1544 52.4351 13.1223 44.9999 13.1223 37.0694C13.1223 25.1647 22.2702 14.8906 33.9972 14.8906C45.5467 14.8906 55.07 24.8399 55.07 37.0694Z" fill="#949494"/>
            </svg>
            <div className="stat-info">
              <div className="stat-number">49+</div>
              <div className="stat-label">Nhân công tại xưởng</div>
            </div>
          </div>

          <div className="stat-card">
            <svg className="stat-icon" width="74" height="74" viewBox="0 0 74 74" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M37.0002 65.2942C21.3738 65.2942 8.70605 52.6265 8.70605 37C8.70605 21.3736 21.3738 8.70593 37.0002 8.70593C52.6266 8.70593 65.2943 21.3736 65.2943 37C65.2943 52.6265 52.6266 65.2942 37.0002 65.2942ZM23.1648 54.1145C18.1804 50.08 14.9936 43.9122 14.9936 37C14.9936 30.0879 18.1804 23.9201 23.1648 19.8856C22.9606 20.8425 22.8531 21.8352 22.8531 22.853V51.1471C22.8531 52.1649 22.9606 53.1576 23.1648 54.1145ZM50.8355 19.8856C55.82 23.9201 59.0067 30.0879 59.0067 37C59.0067 43.9122 55.82 50.08 50.8355 54.1145C51.0397 53.1576 51.1472 52.1649 51.1472 51.1471V22.853C51.1472 21.8352 51.0397 20.8425 50.8355 19.8856ZM37.0002 14.9935C41.3408 14.9935 44.8596 18.5123 44.8596 22.853V51.1471C44.8596 55.4878 41.3408 59.0066 37.0002 59.0066C32.6595 59.0066 29.1407 55.4878 29.1407 51.1471V22.853C29.1407 18.5123 32.6595 14.9935 37.0002 14.9935Z" fill="#949494"/>
            </svg>
            <div className="stat-info">
              <div className="stat-number">60+</div>
              <div className="stat-label">Nhân công tại công trình</div>
            </div>
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="infrastructure-section">
          <Link to="/infrastructure" className="section-link">CỞ SỞ HẠ TẦNG</Link>
          
          <div className="infrastructure-content">
            <div className="infrastructure-text">
              <h2 className="section-title">Nhà máy sản xuất</h2>
              <p className="section-description">
                Với diện tích nhà máy  900m2, chúng tôi đã đầu tư hệ thống  máy móc sản  xuất, máy chế biến gỗ đáp ứng hầu  hết những  yêu cầu khắc khe và số lượng đơn hàng của khách hàng.
              </p>
            </div>
            
            <div className="factory-image-wrapper">
              <img 
                src={nhamaygo}
                alt="Nhà máy sản xuất"
                className="factory-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="section-badge clients-badge">KHÁCH HÀNG/ ĐỐI TÁC</div>

        <div className="clients-carousel-wrapper">
          <div className="clients-carousel">
            <div className="client-card">
              <img src={oacacia} alt="Client" />
            </div>
            <div className="client-card">
              <img src={rubio} alt="Client" />
            </div>
            <div className="client-card">
              <img src={hafele} alt="Client" />
            </div>
            <div className="client-card">
              <img src={dupont} alt="Hafele" />
            </div>
            <div className="client-card">
              <img src={ancuong} alt="DuPont" />
            </div>
            <div className="client-card">
              <img src={oacacia} alt="Client" />
            </div>
            <div className="client-card">
              <img src={rubio} alt="Client" />
            </div>
            <div className="client-card">
              <img src={hafele} alt="Client" />
            </div>
            <div className="client-card">
              <img src={dupont} alt="Hafele" />
            </div>
            <div className="client-card">
              <img src={ancuong} alt="DuPont" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="section-badge">DỊCH VỤ</div>
        
        <div className="services-header">
          <h2 className="services-title">DỊCH VỤ<br />CỦA CHÚNG TÔI</h2>
          <a href="#services" className="section-link">TẤT CẢ DỊCH VỤ</a>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-order">01</div>
            <div className="service-image-wrapper">
              <img src={thietke} alt="Thiết kế nội thất" />
            </div>
            <h3 className="service-title">Thiết kế<br />nội thất</h3>
          </div>

          <div className="service-card">
            <div className="service-order">02</div>
            <div className="service-image-wrapper">
              <img src={thicong} alt="Sản xu���t & thi công" />
            </div>
            <h3 className="service-title">Sản xuất &<br />thi công nội thất</h3>
          </div>

          <div className="service-card">
            <div className="service-order">03</div>
            <div className="service-image-wrapper">
              <img src={chebiengo} alt="Nội thất rời" />
            </div>
            <h3 className="service-title">Cung cấp<br />nội thất rời</h3>
          </div>

          <div className="service-card">
            <div className="service-order">04</div>
            <div className="service-image-wrapper">
              <img src={nhahang} alt="Setup nhà hàng" />
            </div>
            <h3 className="service-title">Set up<br />nhà hàng - khách sạn</h3>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-badge projects-badge">DỰ ÁN</div>

        <div className="projects-header">
          <h2 className="projects-title">dự án<br />TIÊU BIỂU</h2>
          <Link to="/projects" className="section-link projects-link">TẤT CẢ DỰ ÁN</Link>
        </div>

        <div className="projects-grid">
          <div className="project-card project-large-1">
            <div className="project-card-wrapper">
              <img src={home2} alt="Office Eximbank" className="project-image" />
              <h3 className="project-title">OFFICE EXIMBANK - DISTRICT 1</h3>
            </div>
          </div>

          <div className="project-card project-small-1">
            <div className="project-card-wrapper">
              <img src={home1} alt="Office KSF Bank" className="project-image" />
              <h3 className="project-title">OFFICE KSF BANK - DISTRICT 2</h3>
            </div>
          </div>

          <div className="project-card project-large-2">
            <div className="project-card-wrapper">
              <img src={home3} alt="Penthouse" className="project-image" />
              <h3 className="project-title">PENTHOUSE MR QUANG MUSICIAN</h3>
            </div>
          </div>

          <div className="project-card project-small-2">
            <div className="project-card-wrapper">
              <img src={home5} alt="Townhouse" className="project-image" />
              <h3 className="project-title">TOWNHOUSE - LONG AN PROVINCE</h3>
            </div>
          </div>

          <div className="project-card project-large-3">
            <div className="project-card-wrapper">
              <img src={home4} alt="Phuc Long" className="project-image" />
              <h3 className="project-title">PHÚC LONG TEA & COFFEE</h3>
            </div>
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
                <p className="contact-text">256 Xô Viết Ngh��� Tĩnh,<br />Phường Lang Biang - Đà Lạt, tỉnh Lâm Đồng</p>
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
                <path d="M18.9602 12.3494V14.9134C18.9602 15.0527 19.0288 15.1233 19.1681 15.1233H22.7962V15.3313C22.5761 17.6691 22.3964 18.838 22.2551 18.838H19.1681C19.053 18.838 18.9824 18.9127 18.9602 19.0641V28.9706H15.1746L15.1221 28.3266V19.1691C15.0171 18.949 14.9121 18.838 14.8072 18.838H12.9941V15.1233H14.8072C15.0171 15.0062 15.1221 14.8952 15.1221 14.7922L15.0171 11.4955C15.1564 10.7384 15.2957 10.1691 15.4351 9.78551C16.1801 7.94836 17.7791 7.02979 20.2321 7.02979H20.7732C22.2611 7.02979 23.0061 7.13477 23.0061 7.34472V10.5365H20.8782C19.5981 10.6516 18.9602 11.2572 18.9602 12.3494Z" fill="white"/>
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
                <path d="M25.462 22.4239C25.1697 23.0756 24.1407 23.9804 22.3749 25.1401H21.7274C19.5882 25.1401 16.9638 23.5012 13.8524 20.2214C12.0419 17.8694 11.0068 15.7224 10.749 13.7787C10.749 13.7135 10.7896 13.6138 10.8728 13.4816L10.749 13.2822L10.9784 12.571C12.6021 10.8918 13.6656 10.0522 14.169 10.0522H14.5891C14.8469 10.219 15.4842 11.5263 16.5011 13.9781C16.5011 14.3212 16.0444 14.856 15.1331 15.5844L15.4497 16.5946C17.3657 19.3434 18.821 20.7179 19.8155 20.7179C20.4122 20.2329 20.9785 19.8629 21.5163 19.608C21.9243 19.6636 22.4561 19.9684 23.1117 20.5204C24.6786 21.3926 25.462 22.0271 25.462 22.4239Z" fill="white"/>
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

export default Home
