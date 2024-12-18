import React, { useState } from "react";
import home from "../assets/portfolio/home1.jpeg";
import recipe from "../assets/portfolio/recipe.jpg";
import AI from "../assets/portfolio/AI.jpg";
import reservation from "../assets/portfolio/reservation.png";
import web from "../assets/portfolio/web.jpg";
import weather from "../assets/portfolio/weather.jpg";
import media from "../assets/media.mp4";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolios = [
    {
      id: 1,
      src: home,
      demo: 'https://roadsafetyapp.azurewebsites.net/',
      code: 'https://github.com/andrewhuynh561/Road-Safety-SA/tree/main',
      title: "Road Safety SA",
      description: "I developed an interactive web application that visualizes road crash data and expiation notices in South Australia. I used ASP.NET MVC, Azure Cloud Services, and tools like ArcGIS API and D3.js to build dynamic maps, dashboards, and insights that identify high-risk areas and traffic offence trends.This project is now showcased on the official Data SA website (official South Australian Government data platform) as a success story for the impactful use of open data!",
      skills: ["ASP.Net MVC", "ArcGIS API", "D3.js", "Boostrap", "SQL server","Azure"],
    },
    {
      id: 2,
      src: reservation,
      demo: media,
      code: 'https://github.com/andrewhuynh561/Reservation-restaurant',
      title: "Reservation Web",
      description: "Collaborated with four Unisa students to develop a full-stack restaurant reservation system, contributing to reservation booking and account management features.",
      skills: ["React", "Node.js", "Express.js", "SQL Lite", "JavaScript","Jira" ,"JSON Web Tokens","GitHub"],
    },
    {
      id: 3,
      src: AI,
      demo: 'https://github.com/andrewhuynh561/Information-Extraction-Tool',
      code: 'https://github.com/andrewhuynh561/Information-Extraction-Tool',
      title: "AI Information Extraction Tool",
      description: "AI tools automate the extraction of key data from blueprint designs, improving accuracy and efficiency in analyzing complex plans.",
      skills: ["Python", "YOLOv8", "Machine Learning", "pdfplumber"],
    },
    {
      id: 4,
      src: web,
      demo: 'https://laxme-website.netlify.app/',
      code: 'https://github.com/andrewhuynh561/Laxme-Website',
      title: "Business Website",
      description: "A static website for a small business with responsive design.",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 5,
      src: recipe,
      demo: 'https://recipe-list-1.netlify.app/',
      code: 'https://github.com/andrewhuynh561/recipe-app',
      title: "Recipe App",
      description: "A recipe management app to browse, save, and manage recipes.",
      skills: ["React", "API", "Tailwind"],
    },
    {
      id: 6,
      src: weather,
      demo: 'https://weather-site561.netlify.app/',
      code: 'https://github.com/andrewhuynh561/weather-app-1',
      title: "Weather App",
      description: "A weather forecasting app using an external API to display live data.",
      skills: ["JavaScript", "API", "Bootstrap"],
    },
  ];

  // Open Modal when a card is clicked
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-900 to-black w-full text-white py-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Click on the project to view more details.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.src}
                alt={project.title}
                className="rounded-t-lg duration-200 hover:scale-105 w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-2 py-1 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-lg w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button className="text-white text-xl" onClick={closeModal}>
                &times;
              </button>
            </div>
            <img
              src={selectedProject.src}
              alt={selectedProject.title}
              className="mt-4 rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-white">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {selectedProject.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 px-2 py-1 text-xs rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <a
                href={selectedProject.demo}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-200"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.code}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
