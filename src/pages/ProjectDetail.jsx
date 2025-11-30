import { useState, useEffect,useLayoutEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import './ProjectDetail.css'
import Header from "../components/Header";
import ContactFooter from "../components/ContactFooter";
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
import penthouseMrQuangMain from '../assets/img/Project/mrquang/main.jpg'
import penthouseMrQuang1 from '../assets/img/Project/mrquang/mrquang1.jpg'
import penthouseMrQuang2 from '../assets/img/Project/mrquang/mrquang2.jpg'
import penthouseMrQuang3 from '../assets/img/Project/mrquang/mrquang3.jpg'
import penthouseMrQuang4 from '../assets/img/Project/mrquang/mrquang4.jpg'
import penthouseMrQuang5 from '../assets/img/Project/mrquang/mrquang5.jpg'
import penthouseMrQuang6 from '../assets/img/Project/mrquang/mrquang6.jpg'
import penthouseMrQuang7 from '../assets/img/Project/mrquang/mrquang7.jpg'
import penthouseMrQuang8 from '../assets/img/Project/mrquang/mrquang8.jpg'
import penthouseMrQuang9 from '../assets/img/Project/mrquang/mrquang9.jpg'
import penthouseMrQuang10 from '../assets/img/Project/mrquang/mrquang10.jpg'
import penthouseMrQuang11 from '../assets/img/Project/mrquang/mrquang11.jpg'

// Estella Images
import estellaMain from '../assets/img/Project/estella/estella (5).jpg'
import estella1 from '../assets/img/Project/estella/estella (2).jpg'
import estella2 from '../assets/img/Project/estella/estella (3).jpg'
import estella3 from '../assets/img/Project/estella/estella (4).jpg'
import estella4 from '../assets/img/Project/estella/estella (1).jpg'
import estella5 from '../assets/img/Project/estella/estella (6).jpg'
import estella6 from '../assets/img/Project/estella/estella (7).jpg'
import estella7 from '../assets/img/Project/estella/estella (8).jpg'
import estella8 from '../assets/img/Project/estella/estella (9).jpg'
import estella9 from '../assets/img/Project/estella/estella (10).jpg'
import estella10 from '../assets/img/Project/estella/estella (11).jpg'
import estella11 from '../assets/img/Project/estella/estella (12).jpg'
import estella12 from '../assets/img/Project/estella/estella (13).jpg'

// APAC Mandala Images
import apacMain from '../assets/img/Project/apac/apac (4).jpg'
import apac1 from '../assets/img/Project/apac/apac (2).jpg'
import apac2 from '../assets/img/Project/apac/apac (3).jpg'
import apac3 from '../assets/img/Project/apac/apac (1).jpg'
import apac4 from '../assets/img/Project/apac/apac (5).jpg'
import apac5 from '../assets/img/Project/apac/apac (6).jpg'
import apac6 from '../assets/img/Project/apac/apac (7).jpg'

// Kien Long Bank Images
import bankMain from '../assets/img/Project/kien long/Bank (8).jpg'
import bank1 from '../assets/img/Project/kien long/Bank (2).jpg'
import bank2 from '../assets/img/Project/kien long/Bank (3).jpg'
import bank3 from '../assets/img/Project/kien long/Bank (4).jpg'
import bank4 from '../assets/img/Project/kien long/Bank (5).jpg'
import bank5 from '../assets/img/Project/kien long/Bank (6).jpg'
import bank6 from '../assets/img/Project/kien long/Bank (7).jpg'
import bank7 from '../assets/img/Project/kien long/Bank (1).jpg'

// Pizza 4P's Images
import pizzaMain from '../assets/img/Project/pizza/4p (2).jpg'
import pizza1 from '../assets/img/Project/pizza/4p (1).jpg'
import pizza2 from '../assets/img/Project/pizza/4p (3).jpg'
import pizza3 from '../assets/img/Project/pizza/4p (4).jpg'
import pizza4 from '../assets/img/Project/pizza/4p (5).jpg'
import pizza5 from '../assets/img/Project/pizza/4p (6).jpg'
import pizza6 from '../assets/img/Project/pizza/4p (7).jpg'

// Coffee Shop Images
import coffeeMain from '../assets/img/Project/coffee/coffeeBmt (2).jpg'
import coffee1 from '../assets/img/Project/coffee/coffeeBmt (1).jpg'
import coffee2 from '../assets/img/Project/coffee/coffeeBmt (3).jpg'
import coffee3 from '../assets/img/Project/coffee/coffeeBmt (4).jpg'
import coffee4 from '../assets/img/Project/coffee/coffeeBmt (5).jpg'

// Penthouse Masteri Images
import penthouseMasteriMain from '../assets/img/Project/Penthouse/penthouseMasteri (2).png'
import penthouseMasteri1 from '../assets/img/Project/Penthouse/penthouseMasteri (1).jpg'
import penthouseMasteri2 from '../assets/img/Project/Penthouse/penthouseMasteri (3).jpg'
import penthouseMasteri3 from '../assets/img/Project/Penthouse/penthouseMasteri (4).jpg'
import penthouseMasteri4 from '../assets/img/Project/Penthouse/penthouseMasteri (5).jpg'
import penthouseMasteri5 from '../assets/img/Project/Penthouse/penthouseMasteri (6).jpg'
import penthouseMasteri6 from '../assets/img/Project/Penthouse/penthouseMasteri (7).jpg'
import penthouseMasteri7 from '../assets/img/Project/Penthouse/penthouseMasteri (8).jpg'
import penthouseMasteri8 from '../assets/img/Project/Penthouse/penthouseMasteri (9).jpg'
import penthouseMasteri9 from '../assets/img/Project/Penthouse/penthouseMasteri (2).jpg'

// Phuc Long Coffee Images
import phuclongMain from '../assets/img/Project/phuclong/fucklong (1).png'
import phuclong1 from '../assets/img/Project/phuclong/fucklong (2).jpg'
import phuclong2 from '../assets/img/Project/phuclong/fucklong (3).jpg'
import phuclong3 from '../assets/img/Project/phuclong/fucklong (4).jpg'
import phuclong4 from '../assets/img/Project/phuclong/fucklong (5).jpg'
import phuclong5 from '../assets/img/Project/phuclong/fucklong (1).jpg'
import phuclong6 from '../assets/img/Project/phuclong/fucklong (6).jpg'

// Background
import bg from '../assets/img/Bg/bg4.png'

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
      penthouseMrQuang9,
      penthouseMrQuang10,
      penthouseMrQuang11,
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
      penthouseMasteri9,
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
      phuclong6,
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

  useLayoutEffect(() => {
    window.scrollTo(0, 0);   // instant, before paint
  }, [id]);

  useEffect(() => {
    if (!isModalOpen) return;

    // compute scrollbar width
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    const { style } = document.body;
    const prevOverflow = style.overflow;
    const prevPaddingRight = style.paddingRight;

    style.overflow = 'hidden';
    // add compensation so layout width doesn’t change
    if (scrollBarWidth > 0) style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      style.overflow = prevOverflow;
      style.paddingRight = prevPaddingRight;
    };
  }, [isModalOpen]);

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
  
  const { t } = useTranslation();

  const title = t(`project_detail.projectsData.${id}.title`, { defaultValue: t("project_detail.projectsData.balisa-hotel.title") });
  const description = t(`project_detail.projectsData.${id}.description`, { defaultValue: t("project_detail.projectsData.balisa-hotel.description") });
  const location = t(`project_detail.projectsData.${id}.location`, { defaultValue: t("project_detail.projectsData.balisa-hotel.location") });

  const slugToKey = (slug) => slug.replace(/-/g, "_");

  return (
    <div className="project-detail-page">
      {/* Backgrounds */}
      <div className="bg-layer bg-a" aria-hidden="true">
        <img src={bg} alt="" loading="lazy" />
      </div>

      <Header />

      <section className="project-detail-section">
        <div className="project-detail-content">
          <div className="gallery-container">
            <div className="main-image-wrapper">
              <button className="gallery-nav-btn prev-btn" onClick={handlePrevImage} aria-label={t("project_detail.a11y.main_image_prev")}>
                <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
                  <ellipse cx="19" cy="18" rx="19" ry="18" fill="#333333"/>
                  <path d="M16.7644 22.797C17.2764 23.283 17.2764 24.072 16.7644 24.559C16.2524 25.045 15.4223 25.045 14.9103 24.559L9.6662 19.574C9.1542 19.088 9.1542 18.299 9.6662 17.812L14.9103 12.827C15.4223 12.341 16.2524 12.341 16.7644 12.827C17.2764 13.314 17.2764 14.103 16.7644 14.59L13.7584 17.447L28.0737 17.447C28.7978 17.447 29.3848 18.005 29.3848 18.693C29.3848 19.381 28.7978 19.939 28.0737 19.939L13.7584 19.939L16.7644 22.797Z" fill="#999999"/>
                </svg>
              </button>
              
              <img 
                src={project.gallery[currentImageIndex]} 
                alt={`${project.title} - ${t("project_detail.labels.image_alt_prefix")} ${currentImageIndex + 1}`}
                className="main-gallery-image"
              />
              
              <button className="gallery-nav-btn next-btn" onClick={handleNextImage} aria-label={t("project_detail.a11y.main_image_next")}>
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
                  aria-label={`${t("project_detail.a11y.thumb_view")} ${index + 1}`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
              {project.gallery.length > visibleThumbnails && (
                <button
                  className="thumbnail more-images"
                  onClick={openModal}
                  aria-label={t("project_detail.a11y.open_gallery")}
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
            <h1 className="project-detail-title">{title}</h1>
            <p className="project-description">{description}</p>
            <hr />
            <div className="project-location">
              <span className="location-label">{t("project_detail.labels.location").toUpperCase()}</span>
              <p className="location-text">{location}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="related-projects-section">
        <h2 className="related-projects-title">{t("project_detail.related.title")}</h2>

        <div className="related-projects-scroll">
    <div className="related-projects-list">
      {relatedProjects
        .filter((rp) => rp.id !== id)
        .map((rp) => {
          const key = slugToKey(rp.id);
          return (
            <Link
              to={`/projects/${rp.id}`}
              key={rp.id}
              className="related-project-card"
            >
              <img
                src={rp.image}
                alt={t(`projects.alts.${key}`, {
                  defaultValue: t("projects.alts.coffee_shop"),
                })}
              />
              <h3>{t(`projects.grid.${key}`, { defaultValue: rp.title })}</h3>
            </Link>
          );
        })}
    </div>
        </div>
      </section>

      <ContactFooter />

      {isModalOpen && (
        <div className="gallery-modal-overlay" onClick={closeModal}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label={t("project_detail.a11y.close_gallery")}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="modal-gallery-container">
              <button className="modal-gallery-nav prev-btn" onClick={handleModalPrevImage} aria-label={t("project_detail.a11y.main_image_prev")}>
                <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
                  <ellipse cx="19" cy="18" rx="19" ry="18" fill="#333333"/>
                  <path d="M16.7644 22.797C17.2764 23.283 17.2764 24.072 16.7644 24.559C16.2524 25.045 15.4223 25.045 14.9103 24.559L9.6662 19.574C9.1542 19.088 9.1542 18.299 9.6662 17.812L14.9103 12.827C15.4223 12.341 16.2524 12.341 16.7644 12.827C17.2764 13.314 17.2764 14.103 16.7644 14.59L13.7584 17.447L28.0737 17.447C28.7978 17.447 29.3848 18.005 29.3848 18.693C29.3848 19.381 28.7978 19.939 28.0737 19.939L13.7584 19.939L16.7644 22.797Z" fill="#999999"/>
                </svg>
              </button>

              <img
                src={project.gallery[modalImageIndex]}
                alt={`${project.title} - ${t("project_detail.labels.image_alt_prefix")} ${modalImageIndex + 1}`}
                className="modal-gallery-image"
              />

              <button className="modal-gallery-nav next-btn" onClick={handleModalNextImage} aria-label={t("project_detail.a11y.main_image_next")}>
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
                  aria-label={`${t("project_detail.a11y.thumb_view")} ${index + 1}`}
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
