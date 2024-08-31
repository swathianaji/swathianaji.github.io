import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { auto } from "@popperjs/core";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const projectsData = [
    {
      title: "Random Quiz Generator",
      projectInfo:
        "Constructed a microservice architecture using Java and Spring Boot for a quiz application, featuring service registry with Netflix Eureka and OpenFeign, and an API Gateway for request routing, laying groundwork for 10x scalability.",
      technologies: "Java, Spring Boot, Maven, Netflix Eureka, Spring Cloud, PostgreSQL",
      industry: "Art & Design",
      date: "July 2024",
      url: {
        name: "github.com/swathianaji/random-quiz-generator",
        link: "https://github.com/swathianaji/random-quiz-generator",
      },
      thumbImage: "images/projects/project-1.jpg",
    },
    {
      title: "Comprehensive Trip Manager",
      projectInfo:
        "Developed a full stack API-driven web app with Flask, React.js, and Postgres, supporting group travel by enabling trip invitations, destination and activity management, expense tracking, and a dashboard for trip analytics visualization.",
      technologies: "Python, Flask, React.js, PostgreSQL",
      date: "July 2024",
      url: {
        name: "github.com/swathianaji/Travel-Planner",
        link: "https://github.com/swathianaji/Travel-Planner",
      },
      thumbImage: "images/projects/project-2.avif",
    },
    {
      title: "Serverless File Storage Hub",
      projectInfo:
        "Architected AWS infrastructure as code (IaC) using CDK, deploying API Gateway, S3 bucket, DynamoDB table, and Lambda functions to enable direct file uploads to S3 bucket with presigned URLs and insert metadata in DynamoDB.",
      technologies: "AWS CDK, CloudFormation, API Gateway, S3, DynamoDB, Lambda",
      date: "June 2024",
      url: {
        name: "github.com/swathianaji/serverless-file-storage-hub",
        link: "https://github.com/swathianaji/serverless-file-storage-hub",
      },
      thumbImage: "images/projects/project-3.jpg",
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Projects
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item "
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded" style={{border: '1px solid lightgray'}}>
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                          style={{minHeight: '220px', minWidth: auto}}
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
