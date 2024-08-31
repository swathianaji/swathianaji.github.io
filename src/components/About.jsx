import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center pt-0 mb-2">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className=" text-center text-lg-start px-5">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              <span class="wave">👋</span> Hi, I'm <span className="text-primary">Swathi Anaji,</span> a Software Engineer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
               with over 5 years of experience
               in software development and cloud technologies. I'm currently pursuing an MS in Software 
               Engineering at ASU. My experience includes developing scalable web applications, designing 
               RESTful APIs, and implementing cloud-based solutions using Python, Java, and AWS. I've worked 
               on enhancing system efficiency and building full-stack applications that solve real-world problems. 
               I'm passionate about software development and always looking to expand my skills and contribute to 
               impactful projects. 
            </p>
           
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          {/* <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Swathi Anaji Revanasiddappa
                </li>
                <li>
                  <span className="fw-600 me-2">Degree:</span>
                 Master of Science
                </li>
                <li>
                  <span className="fw-600 me-2">Program:</span> Software Engineering
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">CGPA:</span>3.9/4
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div> */}
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        {/* <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>10</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>250</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>650</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projects Done
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>38</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Get Awards
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* projects rewards counting end */}
        <div className="row">

        <div className="d-flex col-md-12 mt-5 justify-content-center">
        <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
        </div>
        </div>
        

      </div>
    </section>
  );
};

export default AboutUs;
