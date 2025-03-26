import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16 md:py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div className="text-base md:text-xl mt-6 md:mt-10 space-y-4 md:space-y-6">
          <div>
            <p className="text-xl md:text-2xl font-semibold">AI Research Assistant</p>
            <p className="italic text-gray-300">Arcana Construct Pty Ltd</p>
            <p className="text-sm text-gray-400">Industry-Linked Project – Mar 2024 – Jun 2024</p>
          </div>

          <p className="text-base md:text-lg text-gray-300">
            During my time as an AI Research Assistant at Arcana Construct, I was
            involved in developing innovative AI tools to solve real-world
            problems. Some of my key contributions include:
          </p>

          <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-300">
            <li className="ml-2">
              Developed an AI-based tool using Python that automated table extraction from large PDF files, achieving an 80% accuracy rate and reducing manual work time by 40%.
            </li>
            <li className="ml-2">
              Automated the recognition of two table types from warehouse blueprints using the YOLOv8 model and PDF libraries.
            </li>
            <li className="ml-2">
              Managed tasks and project timelines using Jira, following Agile methodologies to ensure efficient collaboration and timely delivery.
            </li>
            <li className="ml-2">
              Created detailed documentation for user guidelines and tool evaluation.
            </li>
            <li className="ml-2">
              Collaborated with cross-functional teams to ensure the solution met client requirements and business objectives.
            </li>
          </ul>
          
          <p className="mt-4 text-sm md:text-base">
            <strong className="text-gray-300">Skills:</strong> Python, GitHub, VSCode, Jira, Pandas, pdfplumber, YOLOv8
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
