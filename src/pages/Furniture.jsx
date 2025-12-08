// src/pages/Furniture.jsx
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import './Furniture.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Header from "../components/Header";
import ContactFooter from "../components/ContactFooter";
import BackToTopButton from '../components/BackToTopButton'
import { useTranslation } from "react-i18next";

import furnitureHero from '../assets/img/Furniture/dinner-room-japanese-style-with-long-table-wooden-chairs-room-japandi3d-rendering.jpg'
import furniture from '../assets/img/Furniture/furniture.png'
import diningTable from '../assets/img/Furniture/dining-table-setting-restaurant.jpg'

import bg from '../assets/img/Bg/bg5.png'
import bg1 from '../assets/img/Bg/bg6.png'

function Furniture() {
  const { t } = useTranslation();
  useScrollAnimation();

  const furnitureImages = Object.values(
    import.meta.glob('../assets/img/Furniture/Chair/*.jpg', {
      eager: true,
      as: 'url',
    })
  )

  const sliderRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  const checkScroll = () => {
    if (sliderRef.current) {
      setCanScrollLeft(sliderRef.current.scrollLeft > 0)
      setCanScrollRight(
        sliderRef.current.scrollLeft <
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10
      )
    }
  }

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 320
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
      setTimeout(checkScroll, 500)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  useEffect(() => {
    if (!isModalOpen) return;

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    const { style } = document.body;
    const prevOverflow = style.overflow;
    const prevPaddingRight = style.paddingRight;

    style.overflow = 'hidden';
    if (scrollBarWidth > 0) style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      style.overflow = prevOverflow;
      style.paddingRight = prevPaddingRight;
    };
  }, [isModalOpen]);

  const openModal = (imageIndex) => {
    setModalImageIndex(Number(imageIndex) || 0)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleModalPrevImage = () => {
    setModalImageIndex((prev) => (prev === 0 ? furnitureImages.length - 1 : prev - 1))
  }

  const handleModalNextImage = () => {
    setModalImageIndex((prev) => (prev === furnitureImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="furniture-page">
      <div className="bg-shelf" aria-hidden="true">
        <div className="bg-layer bg-a" aria-hidden="true">
          <img src={bg} alt={t("infrastructure.bg.a")} loading="lazy" />
        </div>

        <div className="bg-layer bg-b" aria-hidden="true">
          <img src={bg1} alt={t("infrastructure.bg.b")} loading="lazy" />
        </div>
      </div>

      <Header />

      <section className="furniture-hero-section">
        <div className="hero-image-container" data-animation="slide-left">
          <img
            src={furnitureHero}
            alt={t("furniture.hero.alt")}
            className="hero-furniture-image"
          />
        </div>

        <div className="hero-text-content" data-animation="slide-right">
          <h1 className="section-title">{t("furniture.hero.title")}</h1>
          <p className="section-description">{t("furniture.hero.description")}</p>
        </div>
      </section>

      <section className="furniture-gallery">
        <div className="gallery-slider-container">
          <button
            className={`slider-nav-btn slider-nav-prev ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={() => scroll('left')}
            aria-label={t("furniture.gallery.a11y.scroll_left")}
            disabled={!canScrollLeft}
          >
            {/* left chevron */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div className="gallery-slider" ref={sliderRef} onScroll={checkScroll} onLoad={checkScroll}>
            {furnitureImages.map((image, index) => (
              <button
                key={index}
                className="gallery-item"
                onClick={() => openModal(index)}
                aria-label={`${t("furniture.gallery.a11y.item_alt_prefix")} ${index + 1}`}
              >
                <img src={image} alt={`${t("furniture.gallery.a11y.item_alt_prefix")} ${index + 1}`} />
              </button>
            ))}
          </div>

          <button
            className={`slider-nav-btn slider-nav-next ${!canScrollRight ? 'disabled' : ''}`}
            onClick={() => scroll('right')}
            aria-label={t("furniture.gallery.a11y.scroll_right")}
            disabled={!canScrollRight}
          >
            {/* right chevron */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>

      <section className="design-construction-section">
        <div className="section-text-content" data-animation="slide-right">
          <p className="section-description">{t("furniture.design_build.description")}</p>
          <h2 className="section-title right-align">{t("furniture.design_build.title")}</h2>
        </div>

        <div className="section-image-container" data-animation="slide-left">
          <img
            src={furniture}
            alt={t("furniture.design_build.image_alt")}
            className="section-image"
          />
        </div>
      </section>

      <section className="hospitality-section">
        <div className="section-text-content" data-animation="slide-left">
          <h2 className="section-title">{t("furniture.hospitality.title")}</h2>
          <p className="section-description">{t("furniture.hospitality.description")}</p>
        </div>

        <div className="section-image-container" data-animation="slide-right">
          <img
            src={diningTable}
            alt={t("furniture.hospitality.image_alt")}
            className="section-image"
          />
        </div>
      </section>

      {isModalOpen && (
        <div className="gallery-modal-overlay" onClick={closeModal}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label={t("furniture.modal.close_button")}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="modal-gallery-container">
              <button className="modal-gallery-nav prev-btn" onClick={handleModalPrevImage} aria-label={t("furniture.modal.prev_button")}>
                <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
                  <ellipse cx="19" cy="18" rx="19" ry="18" fill="#333333"/>
                  <path d="M16.7644 22.797C17.2764 23.283 17.2764 24.072 16.7644 24.559C16.2524 25.045 15.4223 25.045 14.9103 24.559L9.6662 19.574C9.1542 19.088 9.1542 18.299 9.6662 17.812L14.9103 12.827C15.4223 12.341 16.2524 12.341 16.7644 12.827C17.2764 13.314 17.2764 14.103 16.7644 14.59L13.7584 17.447L28.0737 17.447C28.7978 17.447 29.3848 18.005 29.3848 18.693C29.3848 19.381 28.7978 19.939 28.0737 19.939L13.7584 19.939L16.7644 22.797Z" fill="#999999"/>
                </svg>
              </button>

              <img
                src={furnitureImages[modalImageIndex]}
                alt={`${t("furniture.gallery.a11y.item_alt_prefix")} ${modalImageIndex + 1}`}
                className="modal-gallery-image"
              />

              <button className="modal-gallery-nav next-btn" onClick={handleModalNextImage} aria-label={t("furniture.modal.next_button")}>
                <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
                  <ellipse cx="19" cy="18" rx="19" ry="18" fill="#333333"/>
                  <path d="M21.236 13.203C20.724 12.717 20.724 11.928 21.236 11.441C21.748 10.955 22.578 10.955 23.09 11.441L28.334 16.426C28.846 16.912 28.846 17.701 28.334 18.188L23.09 23.173C22.578 23.659 21.748 23.659 21.236 23.173C20.724 22.686 20.724 21.897 21.236 21.41L24.242 18.553H9.926C9.202 18.553 8.615 17.995 8.615 17.307C8.615 16.619 9.202 16.061 9.926 16.061H24.242L21.236 13.203Z" fill="#999999"/>
                </svg>
              </button>
            </div>

            <div className="modal-image-counter">
              {modalImageIndex + 1} / {furnitureImages.length}
            </div>

            <div className="modal-thumbnails">
              {furnitureImages.map((img, index) => (
                <button
                  key={index}
                  className={`modal-thumbnail ${modalImageIndex === index ? 'active' : ''}`}
                  onClick={() => setModalImageIndex(index)}
                  aria-label={`${t("furniture.gallery.a11y.item_alt_prefix")} ${index + 1}`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <ContactFooter />
      <BackToTopButton />
    </div>
  )
}

export default Furniture
