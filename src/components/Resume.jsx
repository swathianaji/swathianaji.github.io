import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "Aug 2023 - May 2025",
      title: "Master's Degree",
      place: "Arizona State University",
      desc: "Master of Science in Software Engineering; CGPA: 3.9/4.0",
    },
    {
      yearRange: "Aug 2015 - May 2018",
      title: "Bachelor's Degree",
      place: "R V College of Engineering",
      desc: "Bachelor of Engineering in Electronics and Telecommunication Engineering; CGPA: 3.3/4.0",
    },
   
  ];

  const experienceDetails = [
    {
      yearRange: "Jun 2024 - Aug 2024",
      title: "Software Engineer Intern",
      place: "Web4Site.net",
      desc: "Developed a responsive user interface with React.js, meticulously converting Figma UI designs into dynamic components to offer sports bar owners an effective marketing platform. Additionally, I implemented a serverless architecture on AWS, utilizing Lambda functions to integrate the frontend with DynamoDB, enabling real-time updates.",
    },
    {
      yearRange: "Dec 2022 - Jun 2023",
      title: "Senior Software Engineer",
      place: "Accenture, IASS Automation",
      desc: "Led the creation of a Python-based web app with Flask and MySQL, automating requirements gathering and enhancing project management efficiency by 40%. Developed a Tableau dashboard for data analytics, aiding 25+ managers in tracking progress, and collaborated with DevSecOps to automate CI/CD pipelines, cutting manual effort by 50%.",
    },
    {
      yearRange: "Oct 2020 - Dec 2022",
      title: "Senior Software Engineer",
      place: "Accenture, AT&T Gateway",
      desc: "Managed a 7-member offshore team across India and the USA, achieving a 99.98% delivery rate through close collaboration with business, STEM, and QA teams. Automated web vulnerability detection with Python, improving security and cutting manual testing time by 50%, while implementing SAST and DAST programs to reduce post-deployment defects by 40%.",
    },
    {
      yearRange: "Oct 2020 - Dec 2022",
      title: "Software Engineer",
      place: "Accenture, Anthem Inc.",
      desc: "Designed a MySQL database and RESTful APIs with Java and Spring Boot, improving JCL abend code management and reducing error resolution time by 40%. Optimized the weekly data backup process, achieving a 75% improvement in execution speed, enhancing system reliability, and supporting seamless DevOps operations.",
    },
  ];

  const skills = [
    {
      name: "Python",
      percent: 90,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Java",
      percent: 80,
    },
    {
      name: "Spring Boot",
      percent: 75,
    },
    {
      name: "SQL",
      percent: 70,
    },
    {
      name: "API Design",
      percent: 90,
    },
    {
      name: "Amazon Web Services (AWS)",
      percent: 60,
    },
    {
      name: "Git (Version Control)",
      percent: 99,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="">
          {/* My Education */}
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
              <div className="row d-flex justify-content-between">

              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div className="col-md-6">
                  <div
                    key={index}
                    className={
                      "bg-white  rounded p-4 mb-4 " +
                      (darkTheme ? "bg-dark" : "bg-white border")
                    }
                  >
                    <p className="badge bg-primary text-2 fw-400">
                      {value.yearRange}
                    </p>
                    <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                      {value.title}
                    </h3>
                    <p className={darkTheme ? "text-primary" : "text-danger"}>
                      {value.place}
                    </p>
                    <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                      {value.desc}
                    </p>
                  </div>
                  </div>
                ))}
              </div>
          </div>
          <div className="">
          {/* My Experience */}
            <h2
              className={
                "text-6 fw-600 mb-4 mt-5" + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            <div className="row d-flex justify-content-between">
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div className="col-md-6">
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")} style={{textWrap: 'pretty'}}>
                    {value.desc}
                  </p>
                </div>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-5 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          Top Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
