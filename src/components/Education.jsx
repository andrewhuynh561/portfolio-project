import React from "react";
import unisa from "../assets/unisa.png"; 

export const education = [
  {
    id: 0,
    src: unisa,
    school: "University of South Australia",
    date: "Feb 2022 - Present",
    desc: "Developed a solid foundation in understanding computer systems, algorithms, and software project cycles.",
    degree: "Bachelor of Information Technology (Software Development)",
  },
];

const Education = () => {
  return (
    <div
      name="education"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>

        <div className="space-y-8">
          {education.map(({ id, src, school, date, desc, degree }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              {/* University Logo */}
              <img
                src={src}
                alt={school}
                className="w-24 h-24 object-contain md:mr-8 mb-4 md:mb-0"  // Removed the rounded-full class
              />
              
              {/* Education Info */}
              <div>
                <h3 className="text-2xl font-bold text-white">{school}</h3>
                <p className="text-lg text-gray-300">{degree}</p>
                <p className="text-sm text-gray-400 mt-2">{date}</p>
                <p className="text-sm mt-4 text-gray-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
