/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop.jpeg";

const imageAltText = "desktop with laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "MERN Stack Developer",
    description:
      "Elevating web development with the MERN stack. From dynamic front-end interfaces in React to robust back-end solutions in Node.js, I specialize in crafting scalable, modern applications powered by MongoDB for flexible data management.",
    url: "https://www.linkedin.com/in/husnainali11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    title: "Cyber Security Analyst",
    description:
      "Protect your organization and provide cybersecurity consultancy.Securing digital landscapes with expert cybersecurity services – from penetration testing to incident response, I ensure robust defense against evolving threats. Explore my proven track record and client-centric approach for unparalleled protection.",
    url: "https://www.linkedin.com/in/husnainali11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    title: "Cloud Computing",
    description:
      "Empowering businesses in the cloud era with cutting-edge solutions. From seamless migrations to optimizing cloud security, I specialize in ensuring your digital assets thrive in the dynamic world of cloud computing.",
    url: "https://www.linkedin.com/in/husnainali11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Navigating the decentralized future with blockchain expertise. From smart contract development to secure blockchain implementations, I pave the way for transparent, tamper-resistant, and efficient solutions.",
    url: "https://www.linkedin.com/in/husnainali11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
