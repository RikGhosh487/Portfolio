import PropTypes from "prop-types";
import TimelineCard from "./TimelineCard";

function Resume({ education, experience, publication, language, skill }) {
  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {Array.isArray(education) && education.length !== 0 && (
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline" aria-hidden="true"></ion-icon>
            </div>
            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            {education.map((edu, idx) => (
              <li
                className="timeline-item"
                key={edu.toString() + idx.toString()}
              >
                <TimelineCard
                  timelineItem={{
                    id: idx,
                    title: edu["title"],
                    subtitle: edu["uni"],
                    time: edu["time"],
                    description: edu["texts"],
                  }}
                />
              </li>
            ))}
          </ol>
        </section>
      )}

      {Array.isArray(experience) && experience.length !== 0 && (
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="briefcase-outline" aria-hidden="true"></ion-icon>
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            {experience.map((exp, idx) => (
              <li
                className="timeline-item"
                key={exp.toString() + idx.toString()}
              >
                <TimelineCard
                  timelineItem={{
                    id: idx,
                    title: exp["title"],
                    subtitle: exp["emp"],
                    location: exp["location"],
                    time: exp["time"],
                    description: exp["texts"],
                  }}
                />
              </li>
            ))}
          </ol>
        </section>
      )}

      {Array.isArray(publication) && publication.length !== 0 && (
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="newspaper-outline" aria-hidden="true"></ion-icon>
            </div>
            <h3 className="h3">Publications</h3>
          </div>

          <ol className="timeline-list">
            {publication.map((pub, idx) => (
              <li
                className="timeline-item"
                key={pub.toString() + idx.toString()}
              >
                <h4 className="h4 timeline-item-title">{pub["title"]}</h4>
                <h5 className="h5">
                  <a
                    href={pub["href"]}
                    target="_blank"
                    rel="noreferrer"
                    className="publication-link"
                  >
                    {pub["article"]}
                  </a>
                </h5>
                <span>{pub["time"]}</span>
                {pub["texts"].map((txt, i) => (
                  <p
                    className="timeline-text"
                    key={txt.toString() + i.toString()}
                  >
                    {txt}
                  </p>
                ))}
              </li>
            ))}
          </ol>
        </section>
      )}

      {Array.isArray(language) && language.length !== 0 && (
        <section className="skill">
          <h3 className="h3 skills-title">Programming Languages</h3>
          <ul className="skills-list content-card">
            {language.map((lang, idx) => (
              <li
                className="skills-item"
                key={lang.toString() + idx.toString()}
              >
                <div className="title-wrapper">
                  <h5 className="h5">{lang["name"]}</h5>
                  <data value={lang["val"]}>{lang["level"]}</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${lang["val"]}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(skill) && skill.length !== 0 && (
        <section className="skill">
          <h3 className="h3 skills-title">Skills</h3>
          <ul className="skills-list content-card">
            {skill.map((skl, idx) => (
              <li className="skills-item" key={skl.toString() + idx.toString()}>
                <div className="title-wrapper">
                  <h5 className="h5">{skl["name"]}</h5>
                </div>
                {skl["texts"] !== undefined &&
                  skl["texts"].map((txt, i) => (
                    <p
                      className="timeline-text"
                      key={txt.toString() + i.toString()}
                    >
                      {txt}
                    </p>
                  ))}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

Resume.propTypes = {
  education: PropTypes.array,
  experience: PropTypes.array,
  publication: PropTypes.array,
  language: PropTypes.array,
  skill: PropTypes.array,
};

Resume.defaultProps = {
  education: [],
  experience: [],
  publication: [],
  language: [],
  skill: [],
};

export default Resume;
