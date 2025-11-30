// src/pages/About.jsx
import { Link } from 'react-router-dom'
import './About.css'
import Header from "../components/Header";
import ContactFooter from "../components/ContactFooter";
import BackToTopButton from '../components/BackToTopButton'
import { useTranslation } from "react-i18next";

import about from '../assets/img/About/about us.jpg'
import nhamaygo from '../assets/img/About/nha may go.jpg'

import globe from '../assets/img/About/icons/globe.png'
import target from '../assets/img/About/icons/target.png'
import atom from '../assets/img/About/icons/atom.png'

import bg3 from '../assets/img/Bg/bg3.png'

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* Decorative Background */}
      <div className="bg-layer bg-a" aria-hidden="true">
        <img src={bg3} alt={t("projects.alts.bg")} loading="lazy" />
      </div>

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1 className="about-hero-title">{t("about.hero.title")}</h1>
            <p className="about-hero-description">
              {t("about.hero.description")}
            </p>
          </div>
          
          <div className="about-hero-image-wrapper">
            <img 
              src={about}
              alt={t("about.factory.image_alt_office")}
              className="about-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Mission - Values - Vision */}
      <section className="mission-values-section">
        <h2 className="section-main-title">
          {t("about.mvv.title_line1")}<br />{t("about.mvv.title_line2")}
        </h2>

        <div className="mission-values-grid">
          {/* Mission */}
          <div className="mission-value-item">
            <div className="mission-value-card">
              <img className='mission-icon' src={globe} alt="" />
              <h3 className="mission-value-title">{t("about.mvv.mission_title")}</h3>
            </div>
            <p className="mission-value-description">
              {t("about.mvv.mission_description")}
            </p>
          </div>

          {/* Core Values */}
          <div className="mission-value-item">
            <div className="mission-value-card">
              <img className='mission-icon' src={target} alt="" />
              <h3 className="mission-value-title">
                {t("about.mvv.values_title_line1")}<br />{t("about.mvv.values_title_line2")}
              </h3>
            </div>
            <p className="mission-value-description">
              {t("about.mvv.values_description")}
            </p>
          </div>

          {/* Vision */}
          <div className="mission-value-item">
            <div className="mission-value-card">
              <img className='mission-icon' src={atom} alt="" />
              <h3 className="mission-value-title">
                {t("about.mvv.vision_title_line1")}<br />{t("about.mvv.vision_title_line2")}
              </h3>
            </div>
            <p className="mission-value-description">
              {t("about.mvv.vision_description")}
            </p>
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section className="about-factory-section">
        <h2 className="section-main-title">{t("about.factory.title")}</h2>
        
        <div className="about-factory-content">
          <div className="about-factory-image-container">
            <img 
              src={nhamaygo}
              alt={t("about.factory.image_alt_factory")}
              className="about-factory-main-image"
            />
          </div>
          
          <div className="about-factory-text-content">
            <p className="about-factory-description">
              {t("about.factory.description")}
            </p>
            <Link to="/infrastructure" className="about-factory-link">
              {t("about.factory.link")}
            </Link>
          </div>
        </div>
      </section>

      <ContactFooter />
      <BackToTopButton />
    </div>
  )
}

export default About
