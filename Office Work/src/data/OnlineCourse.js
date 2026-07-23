// src/data/OnlineCourseData.js

import COURSE1 from "../assets/images/course/courses1.png";
import COURSE2 from "../assets/images/course/courses2.png";
import COURSE3 from "../assets/images/course/courses3.png";


import Image1 from '../assets/images/course/image1.png'
import Image2 from '../assets/images/course/image2.png'

// import HTML from "../assets/icons/html.png";
// import CSS from "../assets/icons/css.png";
// import JS from "../assets/icons/javascript.png";
// import REACT from "../assets/icons/react.png";
// import NODE from "../assets/icons/node.png";
// import MONGO from "../assets/icons/mongodb.png";
// import PYTHON from "../assets/icons/python.png";
// import FIGMA from "../assets/icons/figma.png";

export const courseCategories = [
  "Popular Programs",
  "ChatGPT & AI",
  "Data Science",
  "Technology",
  "Management",
  "Marketing",
  "Career Planning",
  "Soft Skills",
  "Law",
  "Study Abroad",
];

export const courseFeatures = [
  "Real world projects",
  "Unlimited AI mock interviews",
  "Priority Access to top opportunities",
];

export const onlineCourses = [
  {
    id: 1,

    title: "Web Developer Course",

    subtitle: "with Placement Assistance",

    image: COURSE1,

    duration: "4 Months",

    brochure: "#",

    program: "#",

    skills: [
      Image1
    ],

    extraSkills: 6,

    features: [
      "Master 8+ in-demand skills & tools",
      "Unlimited mock AI interviews",
      "Priority access to top opportunities",
    ],
  },

  {
    id: 2,

    title: "Data Science Course",

    subtitle: "with Placement Assistance",

    image: COURSE2,

    duration: "6 Months",

    brochure: "#",

    program: "#",

    skills: [
      Image2
    ],

    extraSkills: 8,

    features: [
      "Master 10+ in-demand skills & tools",
      "Unlimited mock AI interviews",
      "Priority access to top opportunities",
    ],
  },

  {
    id: 3,

    title: "Digital Marketing Course",

    subtitle: "with Placement Assistance",

    image: COURSE3,

    duration: "3 Months",

    brochure: "#",

    program: "#",

    skills: [
    Image1
    ],

    extraSkills: 8,

    features: [
      "Master 8+ in-demand skills & tools",
      "Unlimited mock AI interviews",
      "Priority access to top opportunities",
    ],
  },
];