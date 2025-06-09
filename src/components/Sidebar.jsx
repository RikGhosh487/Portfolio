// Imports
import { useState, Fragment } from "react";
import PropTypes from "prop-types";

function Sidebar({ image, alt, socials }) {
  // React hooks for state
  const [contactsActive, setContactsActive] = useState(false);

  const toggleActive = () => {
    setContactsActive(!contactsActive);
  };

  return (
    <aside className={`sidebar ${contactsActive ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={image} alt={alt} width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Rik Ghosh">
            Rik Ghosh
          </h1>
          <p className="title">Associate Software Engineer @ NOV</p>
        </div>

        <button className="info-more-btn" onClick={toggleActive}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info-more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:rikghosh487@gmail.com" className="contact-link">
                rikghosh487@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Tomball, Texas, USA</address>
            </div>
          </li>
        </ul>
        {socials.length !== 0 && (
          <Fragment>
            <div className="separator"></div>

            <ul className="social-list">
              {socials.map((item, idx) => (
                <li
                  className="social-item"
                  key={item.toString() + idx.toString()}
                >
                  <a
                    href={item["link"]}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <ion-icon name={`logo-${item["logo"]}`}></ion-icon>
                  </a>
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  image: PropTypes.string.isRequired, // Image object
  alt: PropTypes.string,
  socials: PropTypes.array,
};

Sidebar.defaultProps = {
  alt: "",
  socials: [],
};

export default Sidebar;
