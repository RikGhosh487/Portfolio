import PropTypes from "prop-types";
import React from "react";

function TimelineCard({ timelineItem }) {
  const [expandedItem, setExpandedItem] = React.useState(null);

  const handleToggle = (index) => {
    setExpandedItem((prev) => (prev === index ? null : index));
  };

  return (
    <React.Fragment>
      <div className="timeline-info-card">
        <span>
          <h4 className="h4 timeline-item-title">{timelineItem["title"]}</h4>
          <span style={{ display: "flex" }}>
            <h5 className="h5">{timelineItem["subtitle"]}</h5>
            {timelineItem["location"] && (
              <span style={{ paddingLeft: 10 }}>
                {timelineItem["location"]}
              </span>
            )}
          </span>
          <span>
            {timelineItem["time"]}{" "}
            <em>{timelineItem["done"] !== undefined ? "(Expected)" : ""} </em>{" "}
          </span>
        </span>
        <div className="icon-box">
          <button
            className="timeline-accordion-toggle"
            onClick={() => handleToggle(timelineItem["id"])}
          >
            {expandedItem === timelineItem["id"] ? (
              <ion-icon
                name="chevron-up-outline"
                aria-hidden="true"
              ></ion-icon>
            ) : (
              <ion-icon
                name="chevron-down-outline"
                aria-hidden="true"
              ></ion-icon>
            )}
          </button>
        </div>
      </div>
      {timelineItem["description"].map((desc, idx) => (
        <p
          className="timeline-text"
          style={
            expandedItem === timelineItem["id"]
              ? { display: "block" }
              : { display: "none" }
          }
          key={desc.toString() + idx.toString()}
        >
          {desc}
        </p>
      ))}
    </React.Fragment>
  );
}

TimelineCard.propTypes = {
  timelineItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    location: PropTypes.string,
    time: PropTypes.string.isRequired,
    done: PropTypes.bool,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default TimelineCard;
