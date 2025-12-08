// src/pages/Projects.jsx
import { Link } from 'react-router-dom'
import './Projects.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Header from "../components/Header";
import ContactFooter from "../components/ContactFooter";
import BackToTopButton from '../components/BackToTopButton'
import { useTranslation } from "react-i18next";

import balisaHotelImg from '../assets/img/Project/Hotel/Hotel.png'
import penthouseMrQuangImg from '../assets/img/Project/mrquang/main.jpg'
import estellaThumb from '../assets/img/Project/estella/estella (5).jpg'
import apacThumb from '../assets/img/Project/apac/apac (4).jpg'
import kienLongThumb from '../assets/img/Project/kien long/Bank (5).jpg'
import pizzaThumb from '../assets/img/Project/pizza/4p (2).jpg'
import coffeeThumb from '../assets/img/Project/coffee/coffeeBmt (2).jpg'
import penthouseMasteriThumb from '../assets/img/Project/Penthouse/penthouseMasteri (2).png'
import phucLongThumb from '../assets/img/Project/phuclong/fucklong (1).png'
import bg from '../assets/img/Bg/bg.png'

function Projects() {
  const { t } = useTranslation();
  useScrollAnimation();

  return (
    <div className="projects-page">
      <div className="bg-shelf" aria-hidden="true">
        <div className="bg-layer bg-a" aria-hidden="true">
          <img src={bg} alt={t("projects.alts.bg")} loading="lazy" />
        </div>
      </div>


      <Header />

      <section className="all-projects-section">
        <div className="projects-container stagger-animation">
          {/* Row 1 */}
          <div className="projects-row">
            <Link to="/projects/balisa-hotel" className="project-card" data-animation="slide-left">
              <img
                src={balisaHotelImg}
                alt={t("projects.alts.balisa_hotel")}
                className="project-image"
              />
              <h3 className="project-title">{t("projects.grid.balisa_hotel")}</h3>
            </Link>

            <Link to="/projects/penthouse-mr-quang" className="project-card" data-animation="fade">
              <img
                src={penthouseMrQuangImg}
                alt={t("projects.alts.penthouse_mr_quang")}
                className="project-image"
              />
              <h3 className="project-title">{t("projects.grid.penthouse_mr_quang")}</h3>
            </Link>

            <Link to="/projects/chung-cu-estalla" className="project-card" data-animation="slide-right">
              <img
                src={estellaThumb}
                alt={t("projects.alts.estella_apartment")}
                className="project-image"
              />
              <h3 className="project-title">{t("projects.grid.estella_apartment")}</h3>
            </Link>
          </div>

          {/* Row 2 */}
          <div className="projects-row">
            <Link to="/projects/apec-mandala" className="project-card" data-animation="slide-left">
              <img
                src={apacThumb}
                alt={t("projects.alts.apec_mandala")}
                className="project-image"
              />
              <h3 className="project-title">{t("projects.grid.apec_mandala")}</h3>
            </Link>

            <Link to="/projects/kien-long-bank" className="project-card" data-animation="fade">
              <img
                src={kienLongThumb}
                alt={t("projects.alts.kien_long_bank")}
                className="project-image"
              />
              <h3 className="project-title">{t("projects.grid.kien_long_bank")}</h3>
            </Link>

            <Link to="/projects/pizza-4ps" className="project-card" data-animation="slide-right">
              <img
                src={pizzaThumb}
                alt={t("projects.alts.pizza_4ps")}
                className="project-image"
              />
              <h3 className="project-title">{t("projects.grid.pizza_4ps")}</h3>
            </Link>
          </div>

          {/* Row 3 */}
          <div className="projects-row">
            <Link to="/projects/coffee-shop" className="project-card" data-animation="slide-left">
              <img
                src={coffeeThumb}
                alt={t("projects.alts.coffee_shop")}
                className="project-image"
              />
              <h3 className="project-title">{t("projects.grid.coffee_shop")}</h3>
            </Link>

            <Link to="/projects/penthouse-masteri" className="project-card" data-animation="fade">
              <img
                src={penthouseMasteriThumb}
                alt={t("projects.alts.penthouse_masteri")}
                className="project-image"
              />
              <h3 className="project-title">{t("projects.grid.penthouse_masteri")}</h3>
            </Link>

            <Link to="/projects/phuc-long-coffee" className="project-card" data-animation="slide-right">
              <img
                src={phucLongThumb}
                alt={t("projects.alts.phuc_long_coffee")}
                className="project-image"
              />
              <h3 className="project-title">{t("projects.grid.phuc_long_coffee")}</h3>
            </Link>
          </div>
        </div>
      </section>

      <ContactFooter />
      <BackToTopButton />
    </div>
  )
}

export default Projects
