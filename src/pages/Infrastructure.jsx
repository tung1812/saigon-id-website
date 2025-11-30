// src/pages/Infrastructure.jsx
import { Link } from 'react-router-dom'
import './Infrastructure.css'
import Header from "../components/Header";
import ContactFooter from "../components/ContactFooter";
import BackToTopButton from '../components/BackToTopButton'
import { useTranslation } from "react-i18next";

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
import bg from '../assets/img/Bg/bg.png'
import bg1 from '../assets/img/Bg/bg2.png'

function Infrastructure() {
  const { t } = useTranslation();

  return (
    <div className="infrastructure-page">
      <div className="bg-layer bg-a" aria-hidden="true">
        <img src={bg} alt={t("infrastructure.bg.a")} loading="lazy" />
      </div>

      <div className="bg-layer bg-b" aria-hidden="true">
        <img src={bg1} alt={t("infrastructure.bg.b")} loading="lazy" />
      </div>     

      <Header />

      <section className="factory-production-section">
        <div className="factory-hero-image">
          <img 
            src={infraHero}
            alt={t("infrastructure.factory.hero_alt")}
          />
        </div>

        <div className="factory-text-block">
          <h2 className="factory-section-title">{t("infrastructure.factory.title")}</h2>
          <p className="factory-section-description">
            {t("infrastructure.factory.description")}
          </p>
        </div>

        <div className="factory-images-grid">
          <div className="factory-row-3">
            <div className="factory-image-box">
              <img src={infra1} alt={t("infrastructure.factory.images_alt")} />
            </div>
            <div className="factory-image-box">
              <img src={infra2} alt={t("infrastructure.factory.images_alt")} />
            </div>
            <div className="factory-image-box">
              <img src={infra3} alt={t("infrastructure.factory.images_alt")} />
            </div>
          </div>
          <div className="factory-row-2">
            <div className="factory-image-box-wide">
              <img src={infra4} alt={t("infrastructure.factory.images_alt")} />
            </div>
            <div className="factory-image-box-wide">
              <img src={infra5} alt={t("infrastructure.factory.images_alt")} />
            </div>
          </div>
        </div>
      </section>

      <section className="painting-area-section">
        <div className="painting-text-block">
          <h2 className="painting-section-title">{t("infrastructure.painting.title")}</h2>
          <p className="painting-section-description">
            {t("infrastructure.painting.description")}
          </p>
        </div>

        <div className="painting-images-grid">
          <div className="painting-row">
            <div className="painting-image-box">
              <img src={paint1} alt={t("infrastructure.painting.image_alt")} />
            </div>
            <div className="painting-image-box">
              <img src={paint2} alt={t("infrastructure.painting.image_alt")} />
            </div>
          </div>
          <div className="painting-row">
            <div className="painting-image-box">
              <img src={paint3} alt={t("infrastructure.painting.image_alt")} />
            </div>
            <div className="painting-image-box">
              <img src={paint4} alt={t("infrastructure.painting.image_alt")} />
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
      <BackToTopButton />
    </div>
  )
}

export default Infrastructure
