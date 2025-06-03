import { useState } from "react";

const experienceData = [
  {
    company: "IT School",
    role: "Front-end Mentor",
    duration: "October 2023 – End of 2023",
    points: [
      "Got invited to join the company toward the end of the year.",
      "Initially worked under my mentor as an apprentice to learn the workflow and best practices.",
      "Later began teaching independent groups.",
    ],
  },
  {
    company: "Coders Planet",
    role: "Front-end Mentor",
    duration: "2024 (Full Year)",
    points: [
      "Signed a contract with a new company at the beginning of the year.",
      "Made progress in both work and personal development throughout the year.",
    ],
  },
  {
    company: "Chust IT Serves",
    role: "Front-end Mentor",
    duration: "January 2025 – Present",
    points: [
      "Took a short break at the beginning of the year, and everything fell into place",
      "Currently working at the same company.",
    ],
  },
];

export default function Worked() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row relative">
      {/* Tabs */}
      <div className="flex md:flex-col ">
        {experienceData.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 text-left w-full border-l-2 transition-all duration-300 ${
              activeIndex === index
                ? "border-cyan-400 text-cyan-400 bg-cyan-950"
                : "border-transparent text-gray-400 hover:text-cyan-300"
            }`}>
            {item.company}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="ml-0 md:ml-10 mt-6 md:mt-0">
        <h3 className="text-xl font-semibold text-white">
          {experienceData[activeIndex].role}{" "}
          <span className="text-cyan-400">
            @ {experienceData[activeIndex].company}
          </span>
        </h3>
        <p className="text-sm  text-gray-400 mt-1">
          {experienceData[activeIndex].duration}
        </p>
        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300 max-w-[400px]">
          {experienceData[activeIndex].points.map((point, idx) => (
            <li key={idx} className="relative pl-4 ">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
