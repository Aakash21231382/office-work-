import React from "react";
import { FaDownload } from "react-icons/fa";
import Location from "../assets/images/Location.png";
import Certificate from "../assets/images/Certificate.png";

const CourseCard = ({ course }) => {
  return (
    <>
      <div className="course-card ">
        <div
          className={`ribbon ${course.ribbonColor === "blue" ? "ribbon-blue" : "ribbon-orange"}`}
        >
          <span>{course.ribbon}</span>
        </div>

        <div className="course-logo">
          <img src={course.logo} alt={course.title} />
        </div>

        <div className="course-location">
          <img src={Location} alt="Location" />
          <p>{course.location}</p>
        </div>

        <h3 className="course-title">{course.title}</h3>

        <div className="course-features">
          {course.features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <img src={Certificate} alt="Certificate" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="course-buttons">
          <button className="view-btn">View Program</button>
          <button className="brochure-btn">
            Brochure <FaDownload size={13} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
