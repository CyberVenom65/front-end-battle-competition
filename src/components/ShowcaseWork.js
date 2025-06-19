import React from "react";

const works = [
  {
    title: "Project One",
    description: "Description of project one.",
    image: "/cards.png",
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    image: "/graph.png",
  },
  {
    title: "Project Three",
    description: "Description of project three.",
    image: "/stats.png",
  },
];

export default function ShowcaseWork() {
  return (
    <section className="showcase-work max-w-6xl mx-auto p-8 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Showcase Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {works.map((work, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {work.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
