import React from 'react';
import '../../assets/css/technology/TopInstitutions.css'; 
import CourseCard from '../../component/CourseCard'; 
import { courses } from '../../data/coursesData'; 
import { FiFilter } from "react-icons/fi"; 

const TopInstitutions = () => {
  return (
    <section className="top-inst-section">
      <div className="top-inst-container container">
        
        <h2 className="top-inst-main-heading">
          Gen AI & Agentic <span>AI Courses</span> from Top Institutions
        </h2>

        <div className="top-inst-header-row">
          <h3>
            All Courses <span>({courses.length})</span>
          </h3>
          
          <button className="filter-btn">
            <FiFilter /> Filter
          </button>
        </div>

        {/* Yahan direct map chalega, toh sabhi 6 cards aayenge */}
        <div className="row g-4">
          {courses.map((course) => (
            <div className="col-lg-4 col-md-6 col-12" key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopInstitutions;


