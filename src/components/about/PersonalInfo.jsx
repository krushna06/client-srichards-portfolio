import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Sam", hasColor: "" },
  { meta: "last name", metaInfo: "Richards", hasColor: "" },
  { meta: "Age", metaInfo: "X Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "X", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "langages", metaInfo: "English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
