import PropTypes from "prop-types";
import { Fragment, useState } from "react";

function About({ interests, recents }) {
  const [modalActive, setModalActive] = useState(false);
  const [modalInfo, setModalInfo] = useState(undefined);

  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <h4>Hi, I'm Rik — welcome to my personal website!</h4>

        <p>
          Here, you'll find a selection of projects I've worked on, along with
          my resume and a bit about my journey so far.
        </p>

        <p>
          I'm a passionate and driven Computer Science graduate with a strong
          foundation in Mathematics, particularly in Statistics and Applied
          Mathematics. I recently earned both my Master's and Bachelor's degrees
          in Computer Science with High Honors from The University of Texas at
          Austin, specializing in Applications Engineering and System Design.
          Additionally, I hold a Bachelor's degress in Mathematics, also with
          High Honors, from UT Austin.
        </p>

        <p>
          Currently, I'm working as an Associate Software Engineer at NOV, where
          I contribute to innovative solutions that improve the operational
          efficiency of the DP&A within Rig Technologies. My work allows me to
          apply my skills in software development, systems programming, and data
          analysis in real-world, impactful ways.
        </p>

        <p>
          I'm especially passionate about solving complex problems through
          technology and am always eager to grow, collaborate, and contribute to
          forward-thinking teams. With experience across a variety of
          programming languages and analytical tools, I thrive in environments
          that encourage continuous learning and innovation.
        </p>

        <p>
          Outside of work, I enjoy exploring new technologies, contributing to
          open-source projects, and staying up to date with the latest in
          software development and data science.
        </p>

        <p>Feel free to reach out — I'd love to connect!</p>
      </section>

      {Array.isArray(interests) && interests.length !== 0 && (
        <section className="service">
          <h3 className="h3 service-title">Fields of Interest</h3>
          <ul className="service-list">
            {interests.map((int, idx) => (
              <li
                className="service-item"
                key={int.toString() + idx.toString()}
              >
                <div className="service-icon-box">
                  <img src={int["img"]} alt={int["alt"]} width={40} />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{int["title"]}</h4>

                  <p className="service-item-text">{int["text"]}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(recents) && recents.length !== 0 && (
        <Fragment>
          <section className="recents">
            <h3 className="h3 recents-title">Recent Projects</h3>
            <ul className="recents-list has-scrollbar">
              {recents.map((rec, idx) => (
                <li
                  className="recents-item"
                  key={rec.toString() + idx.toString()}
                >
                  <button
                    className="content-card"
                    onClick={() => {
                      setModalActive(true);
                      setModalInfo(rec);
                    }}
                  >
                    <figure className="recents-avatar-box">
                      <img src={rec["img"]} alt={rec["alt"]} width={60} />
                    </figure>
                    <h4 className="h4 recents-item-title">{rec["name"]}</h4>
                    <div className="recents-text">
                      <p>{rec["small_info"]}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <div className={`modal-container ${modalActive ? "active" : ""}`}>
            <div className="overlay"></div>
            <div className="projects-modal">
              <button
                className="modal-close-btn"
                onClick={() => {
                  setModalActive(false);
                  setModalInfo(undefined);
                }}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>

              {modalInfo !== undefined && (
                <Fragment>
                  <div className="modal-img-wrapper">
                    <figure className="modal-avatar-box">
                      <img src={modalInfo["img"]} alt={modalInfo["alt"]} />
                    </figure>
                  </div>
                  <div className="modal-content">
                    <h4 className="h3 modal-title">{modalInfo["name"]}</h4>
                    <time dateTime={modalInfo["date"]}>
                      {modalInfo["date"]}
                    </time>

                    <div className="data-model-text">
                      <p className="data-desc">{modalInfo["desc"]}</p>
                      <p>{modalInfo["small_info"]}</p>
                      <p className="read-more">
                        To read more about this project, visit the Projects
                        page!
                      </p>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </article>
  );
}

About.propTypes = {
  interests: PropTypes.array,
  recents: PropTypes.array,
};

About.defaultProps = {
  interests: [],
  recents: [],
};

export default About;
