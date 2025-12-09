import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import '../App.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

import Header from "../components/Header";
import ContactFooter from "../components/ContactFooter";
import BackToTopButton from '../components/BackToTopButton'

import bg from '../assets/img/Bg/bg.png'
import bg1 from '../assets/img/Bg/bg1.png'
import bg2 from '../assets/img/Bg/bg2.png'

import hero1 from '../assets/img/Home/Hero/1.png'
import hero2 from '../assets/img/Home/Hero/2.png'
import hero3 from '../assets/img/Home/Hero/3.png'
import hero4 from '../assets/img/Home/Hero/4.jpg'
import hero5 from '../assets/img/Home/Hero/5.jpg'
import nhamaygo from '../assets/img/Home/nha may go.jpg'
import thietke from '../assets/img/Home/thiet ke.jpg'
import thicong from '../assets/img/Home/thi cong.jpg'
import nhahang from '../assets/img/Home/nha hang.jpg'
import chebiengo from '../assets/img/Home/che bien go.jpg'

import balisaHotelImg from '../assets/img/Home/Hotel.png'
import penthouseMrQuangImg from '../assets/img/Home/mrquang.png'
import estellaThumb from '../assets/img/Home/estella.jpg'
import kienLongThumb from '../assets/img/Home/kienlong.png'
import pizzaThumb from '../assets/img/Home/4ps.jpg'


import ancuong from '../assets/img/Logo/an cuong.png'
import dupont from '../assets/img/Logo/du pont.png'
import hafele from '../assets/img/Logo/hafele.png'
import oacacia from '../assets/img/Logo/oacacia.png'
import rubio from '../assets/img/Logo/rubio.png'

import experience from "../assets/img/Home/icons/experience.png";
import projects   from "../assets/img/Home/icons/project.png";
import factory    from "../assets/img/Home/icons/factory.png";
import site       from "../assets/img/Home/icons/site.png";

function Home() {
  const { t } = useTranslation();
  useScrollAnimation();

  const heroImages = [hero1, hero2, hero3, hero4, hero5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000);
    return () => clearInterval(autoSlideInterval);
  }, [heroImages.length]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // i18n-driven stats labels
  const STATS = [
    { src: experience, number: "10+",  label: t("home.stats.years_experience") },
    { src: projects,   number: "120+", label: t("home.stats.successful_projects") },
    { src: factory,    number: "49+",  label: t("home.stats.factory_staff") },
    { src: site,       number: "60+",  label: t("home.stats.site_staff") },
  ];

  return (
    <div className="app">
      <Header />
      {/* Backgrounds */}
      <div className="bg-shelf" aria-hidden="true">
        <div className="bg-layer bg-a" aria-hidden="true">
          <img src={bg} alt="" loading="lazy" />
        </div>
        <div className="bg-layer bg-b" aria-hidden="true">
          <img src={bg1} alt="" loading="lazy" />
        </div>
        <div className="bg-layer bg-c" aria-hidden="true">
          <img src={bg2} alt="" loading="lazy" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src={heroImages[currentImageIndex]}
            alt={t("home.hero.alt")}
            className="hero-image"
          />
          <div className="hero-gradient-overlay"></div>
        </div>

        {/* <div className="section-fader" aria-hidden="true" /> */}
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-intro">
          <div className="section-badge about-badge" data-animation="fade">{t("home.badge.about")}</div>
          <div className="about-copy">
            <p className="about-description" data-animation="fade">{t("home.about.description")}</p>
            <Link to="/about" className="section-link about-link">
              {t("home.link.about")}
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid stagger-animation">
          {STATS.map((s, i) => (
            <div className="stat-card" key={i} data-animation={i === 0 ? "slide-left" : "slide-right"}>
              <img className="stat-icon" src={s.src} alt="" aria-hidden="true" />
              <div className="stat-info">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure Section */}
        <div className="infrastructure-section">
          <Link to="/infrastructure" className="section-link" data-animation="fade">
            {t("home.link.infrastructure")}
          </Link>

          <div className="infrastructure-content">
            <div className="infrastructure-text" data-animation="slide-left">
              <h2 className="section-title">{t("home.infrastructure.title")}</h2>
              <p className="section-description">{t("home.infrastructure.description")}</p>
            </div>

            <div className="factory-image-wrapper" data-animation="slide-right">
              <img
                src={nhamaygo}
                alt={t("home.factory_image_alt")}
                className="factory-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="section-badge clients-badge">{t("home.clients.badge")}</div>

        <div className="clients-carousel-wrapper">
          <div className="clients-carousel">
            <div className="client-card">
              <img src={oacacia} alt={t("home.clients.alt_generic")} />
            </div>
            <div className="client-card">
              <img src={rubio} alt={t("home.clients.alt_generic")} />
            </div>
            <div className="client-card">
              <img src={hafele} alt={t("home.clients.alt_generic")} />
            </div>
            <div className="client-card">
              <img src={dupont} alt={t("home.clients.alt_generic")} />
            </div>
            <div className="client-card">
              <img src={ancuong} alt={t("home.clients.alt_generic")} />
            </div>
            <div className="client-card">
              <img src={oacacia} alt={t("home.clients.alt_generic")} />
            </div>
            <div className="client-card">
              <img src={rubio} alt={t("home.clients.alt_generic")} />
            </div>
            <div className="client-card">
              <img src={hafele} alt={t("home.clients.alt_generic")} />
            </div>
            <div className="client-card">
              <img src={dupont} alt={t("home.clients.alt_generic")} />
            </div>
            <div className="client-card">
              <img src={ancuong} alt={t("home.clients.alt_generic")} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="services-header">
          <div className="services-header-grid">
            <div className="section-badge" data-animation="fade">{t("home.badge.services")}</div>

            <h2 className="services-title" data-animation="fade">
              <div className="line1">{t("home.services.title_line1")}</div>
              <div className="line2">{t("home.services.title_line2")}</div>
            </h2>
          </div>

          <Link to="/furniture" className="section-link" data-animation="fade">
            {t("home.services.all_link")}
          </Link>
        </div>

        <div className="services-grid stagger-animation">
          {/* 01 */}
          <div className="service-card" data-animation="slide-left">
            <div className="service-order">{t("home.services.items.design.order")}</div>
            <div className="service-image-wrapper">
              <img src={thietke} alt={t("home.services.items.design.alt")} />
            </div>
            <h3 className="service-title">
              {t("home.services.items.design.title_line1")}<br />
              {t("home.services.items.design.title_line2")}
            </h3>
          </div>

          {/* 02 */}
          <div className="service-card" data-animation="slide-right">
            <div className="service-order">{t("home.services.items.manufacture_construct.order")}</div>
            <div className="service-image-wrapper">
              <img src={thicong} alt={t("home.services.items.manufacture_construct.alt")} />
            </div>
            <h3 className="service-title">
              {t("home.services.items.manufacture_construct.title_line1")}<br />
              {t("home.services.items.manufacture_construct.title_line2")}
            </h3>
          </div>

          {/* 03 */}
          <div className="service-card" data-animation="slide-left">
            <div className="service-order">{t("home.services.items.loose_furniture.order")}</div>
            <div className="service-image-wrapper">
              <img src={chebiengo} alt={t("home.services.items.loose_furniture.alt")} />
            </div>
            <h3 className="service-title">
              {t("home.services.items.loose_furniture.title_line1")}<br />
              {t("home.services.items.loose_furniture.title_line2")}
            </h3>
          </div>

          {/* 04 */}
          <div className="service-card" data-animation="slide-right">
            <div className="service-order">{t("home.services.items.restaurant_hotel_setup.order")}</div>
            <div className="service-image-wrapper">
              <img src={nhahang} alt={t("home.services.items.restaurant_hotel_setup.alt")} />
            </div>
            <h3 className="service-title">
              {t("home.services.items.restaurant_hotel_setup.title_line1")}<br />
              {t("home.services.items.restaurant_hotel_setup.title_line2")}
            </h3>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="projects-inner">
          <div className="projects-header">
            <div className="projects-header-grid">
              <div className="section-badge projects-badge" data-animation="fade">{t("home.projects.badge")}</div>

              <h2 className="projects-title" data-animation="fade">
                <div className="line1">{t("home.projects.title_line1")}</div>
                <div className="line2">{t("home.projects.title_line2")}</div>
              </h2>
            </div>

            <Link to="/projects" className="section-link projects-link" data-animation="fade">
              {t("home.projects.all_link")}
            </Link>
          </div>
        </div>


        <div className="projects-grid stagger-animation">
          {/* Row 1 */}
          <div className="projects-row row-1">
            <Link to="/projects/balisa-hotel" className="home-project-card large" data-animation="slide-left">
              <div className="project-card-wrapper">
                <div className="project-media">
                  <img src={balisaHotelImg} alt={t("projects.alts.balisa_hotel")} />
                </div>
                <h3 className="home-project-title">{t("projects.grid.balisa_hotel")}</h3>
              </div>
            </Link>

            <Link to="/projects/penthouse-mr-quang" className="home-project-card small" data-animation="slide-right">
              <div className="project-card-wrapper">
                <div className="project-media">
                  <img src={penthouseMrQuangImg} alt={t("projects.alts.penthouse_mr_quang")} />
                </div>
                <h3 className="home-project-title">{t("projects.grid.penthouse_mr_quang")}</h3>
              </div>
            </Link>
          </div>

          {/* Row 2 */}
          <div className="projects-row row-2 center">
            <Link to="/projects/chung-cu-estalla" className="home-project-card large" data-animation="fade">
              <div className="project-card-wrapper">
                <div className="project-media">
                  <img src={estellaThumb} alt={t("projects.alts.estella_apartment")} />
                </div>
                <h3 className="home-project-title">{t("projects.grid.estella_apartment")}</h3>
              </div>
            </Link>
          </div>

          {/* Row 3 */}
          <div className="projects-row row-3">
            <Link to="/projects/kien-long-bank" className="home-project-card small" data-animation="slide-left">
              <div className="project-card-wrapper">
                <div className="project-media">
                  <img src={kienLongThumb} alt={t("projects.alts.kien_long_bank")} />
                </div>
                <h3 className="home-project-title">{t("projects.grid.kien_long_bank")}</h3>
              </div>
            </Link>

            <Link to="/projects/pizza-4ps" className="home-project-card large" data-animation="slide-right">
              <div className="project-card-wrapper">
                <div className="project-media">
                  <img src={pizzaThumb} alt={t("projects.alts.pizza_4ps")} />
                </div>
                <h3 className="home-project-title">{t("projects.grid.pizza_4ps")}</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactFooter />
      <BackToTopButton />
    </div>
  )
}

export default Home
