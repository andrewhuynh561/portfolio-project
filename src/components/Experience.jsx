import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div className="text-xl mt-10 space-y-6">
          <p className="text-2xl font-semibold">AI Researcher</p>
          <p className="italic">Arcana Construct Pty Ltd</p>
          <p className="text-sm text-gray-400">Mar 2024 – Jun 2024</p>

          <p className="text-lg">
            During my time as an AI Researcher at Arcana Construct, I was
            involved in developing innovative AI tools to solve real-world
            problems. Some of my key contributions include:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              Developed an AI tool using Python to extract tables from large
              PDF files, automating the processing of up to 20 files
              simultaneously.
            </li>
            <li>
              Utilized the YOLOv8 model and PDF libraries to automate the
              recognition of two table types from warehouse blueprints.
            </li>
            <li>
            Managed tasks and project timelines using Jira, following Agile methodologies to ensure efficient collaboration and timely delivery.
            </li>
            <li>
              Created detailed documentation for user guidelines and tool
              evaluation.
            </li>
            <li>
              Collaborated with cross-functional teams to ensure the solution
              met client requirements and business objectives.
            </li>
          </ul>
          <p className="mt-4">
            <strong>Skills:</strong> Python, GitHub, VSCode, Jira, Pandas, pdfplumber, YOLOv8
          </p>
                    
        </div>
      </div>
    </div>
  );
};

export default Experience;
