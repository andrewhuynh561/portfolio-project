import React from "react";
import portfolio from "../assets/portfolio/portfolio.jpg";
import recipe from "../assets/portfolio/recipe.jpg";
import AI from "../assets/portfolio/AI.jpg";
import reservation from "../assets/portfolio/reservation.png";
import web from "../assets/portfolio/web.jpg";
import weather from "../assets/portfolio/weather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio,
      demo: 'https://andrew561-portfolio.netlify.app/',
      code: 'https://github.com/andrewhuynh561/portfolio-project',
      title: "Personal Portfolio",
      description: "A portfolio to showcase my skills, projects, and experiences.",
      skills: ["React", "Tailwind", "JavaScript"],
    },
    {
      id: 2,
      src: reservation,
      demo: 'https://github.com/andrewhuynh561/Reservation-restaurant',
      code: 'https://github.com/andrewhuynh561/Reservation-restaurant',
      title: "Reservation Web",
      description: "A web application to manage reservations for a restaurant.",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      src: AI,
      demo: 'https://github.com/andrewhuynh561/Information-Extraction-Tool',
      code: 'https://github.com/andrewhuynh561/Information-Extraction-Tool',
      title: "AI Information Extraction Tool",
      description: "An AI tool developed to extract tables from large PDFs using Python.",
      skills: ["Python", "YOLOv8", "Machine Learning"],
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
          <p className="py-6">Click on the live demo or source code to view my projects.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, title, description, skills }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt={title}
                className="rounded-t-lg duration-200 hover:scale-105 w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-gray-400 mt-2">{description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-2 py-1 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between p-4">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-200"
                  onClick={() => window.location.href = demo}
                >
                  Live Demo
                </button>
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-200"
                  onClick={() => window.location.href = code}
                >
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
