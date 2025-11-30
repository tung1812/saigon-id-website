// src/pages/Furniture.jsx
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import './Furniture.css'
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

  const furnitureImages = Object.values(
    import.meta.glob('../assets/img/Furniture/Chair/*.jpg', {
      eager: true,
      as: 'url',
    })
  )

  const sliderRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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

  return (
    <div className="furniture-page">

      <div className="bg-layer bg-a" aria-hidden="true">
        <img src={bg} alt={t("infrastructure.bg.a")} loading="lazy" />
      </div>

      <div className="bg-layer bg-b" aria-hidden="true">
        <img src={bg1} alt={t("infrastructure.bg.b")} loading="lazy" />
      </div>

      <Header />

      <section className="furniture-hero-section">
        <div className="hero-image-container">
          <img 
            src={furnitureHero}
            alt={t("furniture.hero.alt")} 
            className="hero-furniture-image"
          />
        </div>

        <div className="hero-text-content">
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
              <div key={index} className="gallery-item">
                <img src={image} alt={`${t("furniture.gallery.a11y.item_alt_prefix")} ${index + 1}`} />
              </div>
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
        <div className="section-text-content">
          <p className="section-description">{t("furniture.design_build.description")}</p>
          <h2 className="section-title right-align">{t("furniture.design_build.title")}</h2>
        </div>

        <div className="section-image-container">
          <img 
            src={furniture}
            alt={t("furniture.design_build.image_alt")}
            className="section-image"
          />
        </div>
      </section>

      <section className="hospitality-section">
        <div className="section-text-content">
          <h2 className="section-title">{t("furniture.hospitality.title")}</h2>
          <p className="section-description">{t("furniture.hospitality.description")}</p>
        </div>

        <div className="section-image-container">
          <img 
            src={diningTable}
            alt={t("furniture.hospitality.image_alt")}
            className="section-image"
          />
        </div>
      </section>

      <ContactFooter />
      <BackToTopButton />
    </div>
  )
}

export default Furniture
