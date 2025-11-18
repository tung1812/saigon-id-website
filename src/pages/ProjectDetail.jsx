import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProjectDetail.css'
import BackToTopButton from '../components/BackToTopButton'

// Hotel Images
import hotelMain from '../assets/img/Project/Hotel/Hotel.png'
import hotel1 from '../assets/img/Project/Hotel/Hotel (1).png'
import hotel2 from '../assets/img/Project/Hotel/Hotel (2).png'
import hotel3 from '../assets/img/Project/Hotel/Hotel (3).png'
import hotel4 from '../assets/img/Project/Hotel/Hotel (4).png'
import hotel5 from '../assets/img/Project/Hotel/Hotel (5).png'
import hotel6 from '../assets/img/Project/Hotel/Hotel (6).png'
import hotel7 from '../assets/img/Project/Hotel/Hotel (7).png'
import hotel8 from '../assets/img/Project/Hotel/Hotel (8).png'

// Penthouse MR Quang (using Penthouse folder)
import penthouseMrQuangMain from '../assets/img/Project/Penthouse/penthouseMasteri (1).jpg'
import penthouseMrQuang1 from '../assets/img/Project/Penthouse/penthouseMasteri (2).jpg'
import penthouseMrQuang2 from '../assets/img/Project/Penthouse/penthouseMasteri (3).jpg'
import penthouseMrQuang3 from '../assets/img/Project/Penthouse/penthouseMasteri (4).jpg'
import penthouseMrQuang4 from '../assets/img/Project/Penthouse/penthouseMasteri (5).jpg'
import penthouseMrQuang5 from '../assets/img/Project/Penthouse/penthouseMasteri (6).jpg'
import penthouseMrQuang6 from '../assets/img/Project/Penthouse/penthouseMasteri (7).jpg'
import penthouseMrQuang7 from '../assets/img/Project/Penthouse/penthouseMasteri (8).jpg'
import penthouseMrQuang8 from '../assets/img/Project/Penthouse/penthouseMasteri (9).jpg'

// Estella Images
import estellaMain from '../assets/img/Project/estella/estella (1).jpg'
import estella1 from '../assets/img/Project/estella/estella (2).jpg'
import estella2 from '../assets/img/Project/estella/estella (3).jpg'
import estella3 from '../assets/img/Project/estella/estella (4).jpg'
import estella4 from '../assets/img/Project/estella/estella (5).jpg'
import estella5 from '../assets/img/Project/estella/estella (6).jpg'
import estella6 from '../assets/img/Project/estella/estella (7).jpg'
import estella7 from '../assets/img/Project/estella/estella (8).jpg'
import estella8 from '../assets/img/Project/estella/estella (9).jpg'
import estella9 from '../assets/img/Project/estella/estella (10).jpg'
import estella10 from '../assets/img/Project/estella/estella (11).jpg'
import estella11 from '../assets/img/Project/estella/estella (12).jpg'
import estella12 from '../assets/img/Project/estella/estella (13).jpg'

// APAC Mandala Images
import apacMain from '../assets/img/Project/apac/apac (1).jpg'
import apac1 from '../assets/img/Project/apac/apac (2).jpg'
import apac2 from '../assets/img/Project/apac/apac (3).jpg'
import apac3 from '../assets/img/Project/apac/apac (4).jpg'
import apac4 from '../assets/img/Project/apac/apac (5).jpg'
import apac5 from '../assets/img/Project/apac/apac (6).jpg'
import apac6 from '../assets/img/Project/apac/apac (7).jpg'

// Kien Long Bank Images
import bankMain from '../assets/img/Project/kien long/Bank (1).jpg'
import bank1 from '../assets/img/Project/kien long/Bank (2).jpg'
import bank2 from '../assets/img/Project/kien long/Bank (3).jpg'
import bank3 from '../assets/img/Project/kien long/Bank (4).jpg'
import bank4 from '../assets/img/Project/kien long/Bank (5).jpg'
import bank5 from '../assets/img/Project/kien long/Bank (6).jpg'
import bank6 from '../assets/img/Project/kien long/Bank (7).jpg'
import bank7 from '../assets/img/Project/kien long/Bank (8).jpg'

// Pizza 4P's Images
import pizzaMain from '../assets/img/Project/pizza/4p (1).jpg'
import pizza1 from '../assets/img/Project/pizza/4p (2).jpg'
import pizza2 from '../assets/img/Project/pizza/4p (3).jpg'
import pizza3 from '../assets/img/Project/pizza/4p (4).jpg'
import pizza4 from '../assets/img/Project/pizza/4p (5).jpg'
import pizza5 from '../assets/img/Project/pizza/4p (6).jpg'
import pizza6 from '../assets/img/Project/pizza/4p (7).jpg'

// Coffee Shop Images
import coffeeMain from '../assets/img/Project/coffee/coffeeBmt (1).jpg'
import coffee1 from '../assets/img/Project/coffee/coffeeBmt (2).jpg'
import coffee2 from '../assets/img/Project/coffee/coffeeBmt (3).jpg'
import coffee3 from '../assets/img/Project/coffee/coffeeBmt (4).jpg'
import coffee4 from '../assets/img/Project/coffee/coffeeBmt (5).jpg'

// Penthouse Masteri Images
import penthouseMasteriMain from '../assets/img/Project/Penthouse/penthouseMasteri (1).png'
import penthouseMasteri1 from '../assets/img/Project/Penthouse/penthouseMasteri (2).png'
import penthouseMasteri2 from '../assets/img/Project/Penthouse/penthouseMasteri (3).jpg'
import penthouseMasteri3 from '../assets/img/Project/Penthouse/penthouseMasteri (4).jpg'
import penthouseMasteri4 from '../assets/img/Project/Penthouse/penthouseMasteri (5).jpg'
import penthouseMasteri5 from '../assets/img/Project/Penthouse/penthouseMasteri (6).jpg'
import penthouseMasteri6 from '../assets/img/Project/Penthouse/penthouseMasteri (7).jpg'
import penthouseMasteri7 from '../assets/img/Project/Penthouse/penthouseMasteri (8).jpg'
import penthouseMasteri8 from '../assets/img/Project/Penthouse/penthouseMasteri (9).jpg'

// Phuc Long Coffee Images
import phuclongMain from '../assets/img/Project/phuclong/fucklong (1).jpg'
import phuclong1 from '../assets/img/Project/phuclong/fucklong (2).jpg'
import phuclong2 from '../assets/img/Project/phuclong/fucklong (3).jpg'
import phuclong3 from '../assets/img/Project/phuclong/fucklong (4).jpg'
import phuclong4 from '../assets/img/Project/phuclong/fucklong (5).jpg'
import phuclong5 from '../assets/img/Project/phuclong/fucklong (6).jpg'

const projectsData = {
  'balisa-hotel': {
    title: 'BALISA HOTEL',
    location: 'Quận 1 - Thành phố Hồ Chí Minh',
    description: 'Balisa Hotel, Quận 1 – TP.HCM là dự án thi công hoàn thiện khách sạn cao cấp do đội ngũ chúng tôi thực hiện. Không gian sảnh ấn tượng với vật liệu sang trọng như đá, kim loại, kính, mang lại cảm giác hiện đại và tinh tế. Dự án thể hiện khả năng biến ý tưởng thành không gian thực tế, nâng tầm trải nghiệm lưu trú ngay trung tâm thành phố.',
    mainImage: hotelMain,
    gallery: [
      hotelMain,
      hotel1,
      hotel2,
      hotel3,
      hotel4,
      hotel5,
      hotel6,
      hotel7,
      hotel8,
    ],
  },
  'penthouse-mr-quang': {
    title: 'PENTHOUSE MR QUANG',
    location: 'Quận 1 - Thành phố Hồ Chí Minh',
    description: 'Không gian mang phong cách sang trọng và ấm cúng, với ghế sofa bọc nhung, da, và bàn kim loại ánh vàng tạo điểm nhấn tinh tế. Bố cục được sắp xếp hợp lý, tối ưu công năng và thẩm mỹ cho cuộc sống tiện nghi.',
    mainImage: penthouseMrQuangMain,
    gallery: [
      penthouseMrQuangMain,
      penthouseMrQuang1,
      penthouseMrQuang2,
      penthouseMrQuang3,
      penthouseMrQuang4,
      penthouseMrQuang5,
      penthouseMrQuang6,
      penthouseMrQuang7,
      penthouseMrQuang8,
    ],
  },
  'chung-cu-estalla': {
    title: 'CHUNG CƯ ESTALLA',
    location: 'Chung cư Estalla - Thành phố Hồ Chí Minh',
    description: 'Dự án thiết kế và thi công nội thất cho căn hộ Estella tại Quận 2 mang phong cách WASABI tối giản hiện đại, với tông màu gỗ sáng chủ đạo kết hợp ánh sáng vàng ấm. Không gian được bố trí thông minh với hệ tủ âm tường, kệ cong mềm mại và các chi tiết gỗ tự nhiên, tạo cảm giác ấm cúng nhưng vẫn tinh tế.',
    mainImage: estellaMain,
    gallery: [
      estellaMain,
      estella1,
      estella2,
      estella3,
      estella4,
      estella5,
      estella6,
      estella7,
      estella8,
      estella9,
      estella10,
      estella11,
      estella12,
    ],
  },
  'apec-mandala': {
    title: 'APAC MANDALA CHARM BAY',
    location: 'Mũi Né, Phan Thiết',
    description: 'Dự án ấm cúng với các chi tiết nội thất được chăm chut kỹ lưỡng với đường nét tối giản, phối hợp hài hòa. Không gian tổng thể mang đến cảm giác thư giãn, thanh lịch, phù hợp với tiêu chuẩn nghỉ dưỡng cao cấp tại một trong những điểm du lịch nổi tiếng của Việt Nam.',
    mainImage: apacMain,
    gallery: [
      apacMain,
      apac1,
      apac2,
      apac3,
      apac4,
      apac5,
      apac6,
    ],
  },
  'kien-long-bank': {
    title: 'KIÊN LONG BANK',
    location: 'Quận 1 - Thành phố Hồ Chí Minh',
    description: 'Không gian nội thất văn phòng giao dịch Kiên Long Bank  phong cách hiện đại trắng đặc trưng phản ánh hình ảnh một ngân hàng đang đổi mới và hướng tới trải nghiệm khách hàng tối ưu.',
    mainImage: bankMain,
    gallery: [
      bankMain,
      bank1,
      bank2,
      bank3,
      bank4,
      bank5,
      bank6,
      bank7,
    ],
  },
  'pizza-4ps': {
    title: 'PIZZA 4P\'S',
    location: 'Aeon Tân Phú - Thành phố Hồ Chí Minh',
    description: 'Dự án Pizza 4P\'s mang phong cách đương đại, tối giản nhưng tinh tế, cột gỗ tự nhiên tạo điểm nhấn ấm áp. Không gian sử dụng tông màu tối làm nền, kết hợp ánh sáng vàng dịu để tạo bầu không khí gần gũi nhưng vẫn sang trọng. Thiết kế tập trung vào việc mang lại trải nghiệm ẩm thực hiện đại, đồng thời phản ánh sự sáng tạo và phong cách đặc trưng của thương hiệu Pizza 4P\'s.',
    mainImage: pizzaMain,
    gallery: [
      pizzaMain,
      pizza1,
      pizza2,
      pizza3,
      pizza4,
      pizza5,
      pizza6,
    ],
  },
  'coffee-shop': {
    title: 'COFFEE SHOP',
    location: 'TP Buôn Ma Thuột - Đắk Lắk',
    description: 'Không gian quán cà phê hiện đại mang phong cách ấm áp và tối giản. Thiết kế kết hợp gỗ tự nhiên, ánh sáng vàng nhẹ nhàng, và các mảng kính lớn tạo cảm giác thoáng đãng, gần gũi với thiên nhiên. Bố cục bàn ghế được sắp xếp linh hoạt, vừa thích hợp cho nhóm bạn trò chuyện, vừa phù hợp cho khách muốn ngồi làm việc hay thư giãn một mình. Tổng thể mang lại không khí thân thiện, trẻ trung nhưng vẫn sang trọng và tinh tế.',
    mainImage: coffeeMain,
    gallery: [
      coffeeMain,
      coffee1,
      coffee2,
      coffee3,
      coffee4,
    ],
  },
  'penthouse-masteri': {
    title: 'PENTHOUSE MASTERI',
    location: 'Thảo Điền - Thành phố Hồ Chí Minh',
    description: 'Dự án thiết kế nội thất căn hộ này mang phong cách hiện đại tối giản với gam màu trung tính và chất liệu tự nhiên, tạo cảm giác sang trọng nhưng vẫn ấm áp, gần gũi. Không gian được sắp xếp hài hòa, tinh tế, thể hiện lối sống hiện đại và gu thẩm mỹ thanh lịch của gia chủ.',
    mainImage: penthouseMasteriMain,
    gallery: [
      penthouseMasteriMain,
      penthouseMasteri1,
      penthouseMasteri2,
      penthouseMasteri3,
      penthouseMasteri4,
      penthouseMasteri5,
      penthouseMasteri6,
      penthouseMasteri7,
      penthouseMasteri8,
    ],
  },
  'phuc-long-coffee': {
    title: 'PHÚC LONG COFFEE',
    location: 'Quận 1 - Thành phố Hồ Chí Minh',
    description: 'Không gian quán cà phê được thiết kế theo phong cách hiện đại và ấm cúng, kết hợp giữa nội thất gỗ tự nhiên, tông màu trung tính và ánh sáng vàng dịu. Cách bố trí bàn ghế đa dạng tạo sự linh hoạt cho từng nhóm khách, đồng thời các mảng xanh và chi tiết trang trí tinh tế mang lại cảm giác th�� giãn, gần gũi. Toàn bộ không gian mang một không khí thân thiện và sang trọng, lý tưởng cho việc gặp gỡ, làm việc hoặc thưởng thức cà phê trong một môi trường thoải mái.',
    mainImage: phuclongMain,
    gallery: [
      phuclongMain,
      phuclong1,
      phuclong2,
      phuclong3,
      phuclong4,
      phuclong5,
    ],
  },
}

const relatedProjects = [
  { id: 'balisa-hotel', title: 'BALISA HOTEL', image: hotelMain },
  { id: 'penthouse-mr-quang', title: 'PENTHOUSE MR QUANG MUSICIAN', image: penthouseMrQuangMain },
  { id: 'chung-cu-estalla', title: 'CHUNG CƯ ESTALLA', image: estellaMain },
  { id: 'apec-mandala', title: 'APEC MANDALA CHARM BAY', image: apacMain },
  { id: 'kien-long-bank', title: 'KIÊN LONG BANK', image: bankMain },
  { id: 'pizza-4ps', title: 'PIZZA 4P\'S', image: pizzaMain },
  { id: 'coffee-shop', title: 'COFFEE SHOP', image: coffeeMain },
  { id: 'penthouse-masteri', title: 'PENTHOUSE MASTERI', image: penthouseMasteriMain },
  { id: 'phuc-long-coffee', title: 'PHÚC LONG COFFEE', image: phuclongMain },
]

function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData[id] || projectsData['balisa-hotel']
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const visibleThumbnails = 5

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
  }

  const openModal = () => {
    setIsModalOpen(true)
    setModalImageIndex(visibleThumbnails)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleModalPrevImage = () => {
    setModalImageIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))
  }

  const handleModalNextImage = () => {
    setModalImageIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="project-detail-page">
      <div className="decorative-backgrounds">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/749e8bb56e07407988bd87c97087e5653a235d52?width=4446" 
          alt="" 
          className="bg-element bg-project-detail" 
        />
      </div>

      <nav className="top-bar-project-detail">
        <div className="nav-gradient-overlay"></div>
        
        <Link to="/">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/7f72041ef34cad65b0d872a3b74684809edc9a8d?width=472" 
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
            <g clipPath="url(#clip0_291_1825)">
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

      <section className="project-detail-section">
        <div className="project-detail-content">
          <div className="gallery-container">
            <div className="main-image-wrapper">
              <button className="gallery-nav-btn prev-btn" onClick={handlePrevImage} aria-label="Previous image">
                <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
                  <ellipse cx="19" cy="18" rx="19" ry="18" fill="#333333"/>
                  <path d="M16.7644 22.797C17.2764 23.283 17.2764 24.072 16.7644 24.559C16.2524 25.045 15.4223 25.045 14.9103 24.559L9.6662 19.574C9.1542 19.088 9.1542 18.299 9.6662 17.812L14.9103 12.827C15.4223 12.341 16.2524 12.341 16.7644 12.827C17.2764 13.314 17.2764 14.103 16.7644 14.59L13.7584 17.447L28.0737 17.447C28.7978 17.447 29.3848 18.005 29.3848 18.693C29.3848 19.381 28.7978 19.939 28.0737 19.939L13.7584 19.939L16.7644 22.797Z" fill="#999999"/>
                </svg>
              </button>
              
              <img 
                src={project.gallery[currentImageIndex]} 
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="main-gallery-image"
              />
              
              <button className="gallery-nav-btn next-btn" onClick={handleNextImage} aria-label="Next image">
                <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
                  <ellipse cx="19" cy="18" rx="19" ry="18" fill="#333333"/>
                  <path d="M21.236 13.203C20.724 12.717 20.724 11.928 21.236 11.441C21.748 10.955 22.578 10.955 23.09 11.441L28.334 16.426C28.846 16.912 28.846 17.701 28.334 18.188L23.09 23.173C22.578 23.659 21.748 23.659 21.236 23.173C20.724 22.686 20.724 21.897 21.236 21.41L24.242 18.553H9.926C9.202 18.553 8.615 17.995 8.615 17.307C8.615 16.619 9.202 16.061 9.926 16.061H24.242L21.236 13.203Z" fill="#999999"/>
                </svg>
              </button>
            </div>

            <div className="thumbnails-wrapper">
              {project.gallery.slice(0, visibleThumbnails).map((img, index) => (
                <button
                  key={index}
                  className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
              {project.gallery.length > visibleThumbnails && (
                <button
                  className="thumbnail more-images"
                  onClick={openModal}
                  aria-label="View all images"
                >
                  <img src={project.gallery[visibleThumbnails]} alt="More images" />
                  <div className="overlay">
                    <span>+{project.gallery.length - visibleThumbnails}</span>
                  </div>
                </button>
              )}
            </div>
          </div>

          <div className="project-info">
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            
            <div className="project-location">
              <span className="location-label">ĐỊA ĐIỂM</span>
              <p className="location-text">{project.location}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="related-projects-section">
        <h2 className="related-projects-title">DỰ ÁN KHÁC</h2>

        <div className="related-projects-scroll">
          <div className="related-projects-list">
            {relatedProjects.filter(relatedProject => relatedProject.id !== id).map((relatedProject) => (
              <Link
                to={`/projects/${relatedProject.id}`}
                key={relatedProject.id}
                className="related-project-card"
              >
                <img src={relatedProject.image} alt={relatedProject.title} />
                <h3>{relatedProject.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2 className="contact-title">LIÊN HỆ</h2>
        
        <div className="contact-content">
          <div className="contact-logo">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/d1682680b989f76c744017adddb23fd7d50ca7b9?width=240" alt="SAIGON ID" />
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
                <p className="contact-text">256 Xô Viết Nghệ Tĩnh,<br />Phường Lang Biang - ��à Lạt, tỉnh Lâm Đồng</p>
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
                <g clipPath="url(#clip0_291_1928)">
                  <path d="M35.6871 14.7921C35.4084 12.0585 33.8781 9.00606 31.1 5.63459C27.1449 1.87954 22.9596 0 18.5401 0H17.4599C16.2041 0 14.7142 0.24428 12.994 0.73284C8.38876 2.25707 4.98278 4.81494 2.77203 8.40848C1.37693 10.5464 0.452246 13.3486 0 16.8149C0.0686445 16.8149 0.102967 16.8553 0.102967 16.9361C0.0343222 17.0532 0 17.1925 0 17.356V17.5639C0 22.4596 1.66766 26.7557 5.00499 30.4542C8.9359 34.1507 13.1979 36 17.791 36H18.209C19.4648 36 21.2031 35.7153 23.4239 35.146C27.8091 33.6339 31.1868 30.9367 33.5591 27.0525C35.1864 23.9011 36 21.1292 36 18.7328V17.251C36 16.9017 35.895 16.0821 35.6871 14.7921ZM23.006 10.5363H20.878C19.598 10.6514 18.96 11.2571 18.96 12.3493V14.9132C18.96 15.0525 19.0287 15.1231 19.168 15.1231H22.796V15.3311C22.576 17.6689 22.3963 18.8378 22.2549 18.8378H19.168C19.0529 18.8378 18.9822 18.9125 18.96 19.0639V28.9704H15.1745L15.122 28.3264V19.1689C15.017 18.9489 14.912 18.8378 14.807 18.8378H12.994V15.1231H14.807C15.017 15.0061 15.122 14.895 15.122 14.7921L15.017 11.4953C15.1563 10.7382 15.2956 10.1689 15.4349 9.78533C16.1799 7.94818 17.7789 7.02961 20.232 7.02961H20.773C22.261 7.02961 23.006 7.13459 23.006 7.34455V10.5363Z" fill="black"/>
                  <path d="M18.9602 12.3489V14.9129C18.9602 15.0522 19.0288 15.1228 19.1681 15.1228H22.7962V15.3308C22.5761 17.6686 22.3964 18.8375 22.2551 18.8375H19.1681C19.053 18.8375 18.9824 18.9122 18.9602 19.0636V28.9701H15.1746L15.1221 28.3261V19.1686C15.0171 18.9485 14.9121 18.8375 14.8072 18.8375H12.9941V15.1228H14.8072C15.0171 15.0057 15.1221 14.8947 15.1221 14.7917L15.0171 11.495C15.1564 10.7379 15.2957 10.1686 15.4351 9.78502C16.1801 7.94787 17.7791 7.0293 20.2321 7.0293H20.7732C22.2611 7.0293 23.0061 7.13428 23.0061 7.34424V10.536H20.8782C19.5981 10.6511 18.9602 11.2568 18.9602 12.3489Z" fill="white"/>
                </g>
              </svg>
            </a>
            <a href="#" aria-label="Email">
              <svg width="36" height="35" viewBox="0 0 36 35" fill="none">
                <g clipPath="url(#clip0_291_1931)">
                  <path d="M21.6206 17.4399C23.4122 15.6024 24.9776 14.1174 26.3148 12.9829L26.1936 12.7781C23.7617 14.8087 21.0328 17.0204 18.0091 19.4153C17.2537 18.8816 16.5023 18.2967 15.759 17.6625C12.1757 14.7122 10.0468 13.0164 9.37216 12.5753H9.26713C12.1172 15.1829 13.8219 16.8057 14.3794 17.4399L9.05706 23.5828V23.7876C11.081 21.9718 13.0705 20.0672 15.0258 18.0702L18.0091 20.7763C19.8472 19.0963 20.7662 18.1608 20.7662 17.9678H20.8712L26.8399 23.6852V23.4646L21.6206 17.4399ZM21.6206 17.4399C23.4122 15.6024 24.9776 14.1174 26.3148 12.9829L26.1936 12.7781C23.7617 14.8087 21.0328 17.0204 18.0091 19.4153C17.2537 18.8816 16.5023 18.2967 15.759 17.6625C12.1757 14.7122 10.0468 13.0164 9.37216 12.5753H9.26713C12.1172 15.1829 13.8219 16.8057 14.3794 17.4399L9.05706 23.5828V23.7876C11.081 21.9718 13.0705 20.0672 15.0258 18.0702L18.0091 20.7763C19.8472 19.0963 20.7662 18.1608 20.7662 17.9678H20.8712L26.8399 23.6852V23.4646L21.6206 17.4399ZM29.7182 4.15171C25.937 1.38456 22.4588 0 19.2836 0H16.2983C13.2281 0.295425 10.3134 1.36683 7.5563 3.21619C2.51877 7.05081 0 11.7914 0 17.4399C0 20.5143 0.814005 23.4587 2.44403 26.2712C6.29389 32.091 11.4829 35 18.0091 35C21.6044 35 24.9716 33.9956 28.1124 31.9886C33.3722 28.0989 36 23.248 36 17.4399C36 12.461 33.9054 8.03162 29.7182 4.15171ZM27.9044 23.6852C27.9044 24.2761 27.5489 24.6207 26.8399 24.7231H9.16209C8.54604 24.7231 8.19054 24.3765 8.09763 23.6852V12.4551C8.09763 12.0809 8.30769 11.7697 8.7258 11.5196H27.2762C27.6943 11.8032 27.9044 12.1274 27.9044 12.4551V23.6852ZM26.8399 12.4551H8.7258C8.30769 11.7697 8.30769 11.1805 8.7258 11.5196H27.2762C27.6943 11.8032 27.9044 12.1274 27.9044 12.4551ZM27.2762 11.5195H8.72583C8.30772 11.7697 8.09766 12.0808 8.09766 12.455V23.6851C8.19057 24.3764 8.54607 24.7231 9.16212 24.7231H26.84C27.5489 24.6206 27.9044 24.276 27.9044 23.6851V12.5752C27.9044 12.1537 27.6944 11.8031 27.2762 11.5195ZM26.84 23.6851L20.8713 17.9677H20.7662C20.7662 18.1607 19.8472 19.0962 18.0091 20.7762L15.0258 18.0701C13.0706 20.0672 11.081 21.9717 9.05709 23.7876V23.5827L14.3794 17.4399C13.8219 16.8057 12.1172 15.1828 9.26716 12.5752H9.37219C10.0468 13.0164 12.1758 14.7121 15.759 17.6624C16.5023 18.2966 17.2537 18.8815 18.0091 19.4153C21.0329 17.0203 23.7617 14.8086 26.1936 12.778L26.3148 12.9829C24.9776 14.1173 23.4122 15.6023 21.6206 17.4399L26.84 23.4646V23.6851Z" fill="black"/>
                  <path d="M27.2762 11.5195H8.72583C8.30772 11.7697 8.09766 12.0808 8.09766 12.455V23.6851C8.19057 24.3764 8.54607 24.7231 9.16212 24.7231H26.84C27.5489 24.6206 27.9044 24.276 27.9044 23.6851V12.5752C27.9044 12.1537 27.6944 11.8031 27.2762 11.5195ZM26.84 23.6851L20.8713 17.9677H20.7662C20.7662 18.1607 19.8472 19.0962 18.0091 20.7762L15.0258 18.0701C13.0706 20.0672 11.081 21.9717 9.05709 23.7876V23.5827L14.3794 17.4399C13.8219 16.8057 12.1172 15.1828 9.26716 12.5752H9.37219C10.0468 13.0164 12.1758 14.7121 15.759 17.6624C16.5023 18.2966 17.2537 18.8815 18.0091 19.4153C21.0329 17.0203 23.7617 14.8086 26.1936 12.778L26.3148 12.9829C24.9776 14.1173 23.4122 15.6023 21.6206 17.4399L26.84 23.4646V23.6851Z" fill="white"/>
                </g>
              </svg>
            </a>
            <a href="#" aria-label="Phone">
              <svg width="36" height="34" viewBox="0 0 36 34" fill="none">
                <g clipPath="url(#clip0_291_1934)">
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

      {isModalOpen && (
        <div className="gallery-modal-overlay" onClick={closeModal}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close gallery">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="modal-gallery-container">
              <button className="modal-gallery-nav prev-btn" onClick={handleModalPrevImage} aria-label="Previous image">
                <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
                  <ellipse cx="19" cy="18" rx="19" ry="18" fill="#333333"/>
                  <path d="M16.7644 22.797C17.2764 23.283 17.2764 24.072 16.7644 24.559C16.2524 25.045 15.4223 25.045 14.9103 24.559L9.6662 19.574C9.1542 19.088 9.1542 18.299 9.6662 17.812L14.9103 12.827C15.4223 12.341 16.2524 12.341 16.7644 12.827C17.2764 13.314 17.2764 14.103 16.7644 14.59L13.7584 17.447L28.0737 17.447C28.7978 17.447 29.3848 18.005 29.3848 18.693C29.3848 19.381 28.7978 19.939 28.0737 19.939L13.7584 19.939L16.7644 22.797Z" fill="#999999"/>
                </svg>
              </button>

              <img
                src={project.gallery[modalImageIndex]}
                alt={`${project.title} - Image ${modalImageIndex + 1}`}
                className="modal-gallery-image"
              />

              <button className="modal-gallery-nav next-btn" onClick={handleModalNextImage} aria-label="Next image">
                <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
                  <ellipse cx="19" cy="18" rx="19" ry="18" fill="#333333"/>
                  <path d="M21.236 13.203C20.724 12.717 20.724 11.928 21.236 11.441C21.748 10.955 22.578 10.955 23.09 11.441L28.334 16.426C28.846 16.912 28.846 17.701 28.334 18.188L23.09 23.173C22.578 23.659 21.748 23.659 21.236 23.173C20.724 22.686 20.724 21.897 21.236 21.41L24.242 18.553H9.926C9.202 18.553 8.615 17.995 8.615 17.307C8.615 16.619 9.202 16.061 9.926 16.061H24.242L21.236 13.203Z" fill="#999999"/>
                </svg>
              </button>
            </div>

            <div className="modal-image-counter">
              {modalImageIndex + 1} / {project.gallery.length}
            </div>

            <div className="modal-thumbnails">
              {project.gallery.map((img, index) => (
                <button
                  key={index}
                  className={`modal-thumbnail ${modalImageIndex === index ? 'active' : ''}`}
                  onClick={() => setModalImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <BackToTopButton />
    </div>
  )
}

export default ProjectDetail
