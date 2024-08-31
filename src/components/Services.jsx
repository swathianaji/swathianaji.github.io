import React from "react";
import SkillsList from "./SkillsList";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Programming Languages",
      desc: ["Python", "Java", "SQL", "JavaScript", "C"],
      icon: "fas fa-code",
    },
    {
      name: "Databases",
      desc: [ "MySQL", "PostgreSQL", "MongoDB"],
      icon: "fas fa-database",
    },
    {
      name: "Cloud Technologies",
      desc: ["AWS", "Azure"],
      icon: "fas fa-cloud",
    },
    {
      name: "Development Tools",
      desc: ["Git", "GitHub", "Postman", "Selenium"],
      icon: "fas fa-screwdriver-wrench",
    },
    {
      name: "Web Development Technologies",
      desc: ["Spring Boot", "React.js", "Node.js", "Flask", "REST API", "JSON", "HTML5", "CSS", "Bootstrap 5"],
      icon: "fas fa-desktop",
    },
    {
      name: "Methodologies",
      desc: ["CI/CD", "SDLC", "Agile", "Scrum", "Jira", "JUnit"],
      icon: "fa-brands fa-jira",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Skills
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Technical Skills
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {(typeof service.desc === 'string') ? service.desc : <SkillsList skills={service.desc} />}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
