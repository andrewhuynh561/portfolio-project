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
      src:portfolio,
      demo:'https://andrew561-portfolio.netlify.app/',
      code:'https://github.com/andrewhuynh561/portfolio-project',
    },
    {
      id: 2,
      src: reservation,
      demo:'https://github.com/andrewhuynh561/Reservation-restaurant',
      code:'https://github.com/andrewhuynh561/Reservation-restaurant',
    },
    {
      id: 3,
      src: AI,
      demo:'https://github.com/andrewhuynh561/Information-Extraction-Tool',
      code:'https://github.com/andrewhuynh561/Information-Extraction-Tool',
    },
    {
      id: 4,
      src: web,
      demo:'https://laxme-website.netlify.app/',
      code:'https://github.com/andrewhuynh561/Laxme-Website',
    },
    {
      id: 5,
      src: recipe,
      demo:'https://recipe-list-1.netlify.app/',
      code:'https://github.com/andrewhuynh561/recipe-app',
    },
    {
      id: 6,
      src: weather,
      demo:'https://weather-site561.netlify.app/',
      code:'https://github.com/andrewhuynh561/weather-app-1',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Click to view my project below</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                onClick={() => window.location.href=demo}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                 onClick={() => window.location.href=code}
                >
                  Code
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