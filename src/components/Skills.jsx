import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import mongodb from "../assets/mongodb.jpg";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
import csharp from "../assets/csharp.png";
import dotnet from "../assets/dotnet.png";
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import vscode from "../assets/vscode.png";
import arcgis from "../assets/arc.png";
import bootstrap from "../assets/bootstrap.png"; // Bootstrap logo
import jira from "../assets/jira.png";
import azure from "../assets/azure.png"; // Azure logo
// import aws from "../assets/aws.png"; // AWS logo

const Skills = () => {
  const frontendTechs = [
    { id: 1, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 2, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 3, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 4, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: bootstrap, title: "Bootstrap", style: "shadow-purple-500" },
  ];

  const backendTechs = [
    { id: 7, src: nextjs, title: "Next JS", style: "shadow-white" },
    { id: 8, src: nodejs, title: "Node JS", style: "shadow-green-400" },
    { id: 9, src: express, title: "Express JS", style: "shadow-gray-500" },
    { id: 10, src: csharp, title: "C#", style: "shadow-green-700" },
    { id: 11, src: dotnet, title: "ASP.NET Core", style: "shadow-purple-500" },
    { id: 12, src: mysql, title: "MySQL", style: "shadow-blue-700" },
    { id: 13, src: mongodb, title: "MongoDB", style: "shadow-green-400" },
  ];

  const tools = [
    { id: 14, src: git, title: "Git", style: "shadow-red-500" },
    { id: 15, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 16, src: vscode, title: "VS Code", style: "shadow-blue-500" },
    { id: 17, src: arcgis, title: "ArcGIS", style: "shadow-green-600" },
    { id: 18, src: jira, title: "Jira", style: "shadow-blue-600" },
  ];

  const cloudTechs = [
    { id: 19, src: azure, title: "Azure", style: "shadow-blue-700" },
    // { id: 20, src: aws, title: "AWS", style: "shadow-orange-500" },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-8"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">
            Here are some of the technologies and tools I have worked with:
          </p>
        </div>

        {/* Front-End Skills */}
        <div className="mt-8">
          <p className="text-3xl font-semibold mb-4">Front-End</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4">
            {frontendTechs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt={title} className="w-16 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back-End Skills */}
        <div className="mt-8">
          <p className="text-3xl font-semibold mb-4">Back-End</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4">
            {backendTechs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt={title} className="w-16 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Technologies */}
        <div className="mt-8">
          <p className="text-3xl font-semibold mb-4">Cloud</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4">
            {cloudTechs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt={title} className="w-16 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-8">
          <p className="text-3xl font-semibold mb-4">Tools</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4">
            {tools.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt={title} className="w-16 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
