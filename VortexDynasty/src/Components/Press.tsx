import React from "react";

const Press = () => {
  const articles = [
    {
      title: "Vortex Dynasty Takes Johannesburg by Storm",
      date: "January 10, 2025",
      summary:
        "Since its inception in 2011, Vortex Dynasty has transformed the nightlife of Johannesburg. Known for its electrifying events and innovative tech-driven experiences, the club has become a cultural powerhouse.",
    },
    {
      title: "Innovators of the Night: The Legacy of Vortex Dynasty",
      date: "February 5, 2025",
      summary:
        "Vortex Dynasty continues to redefine nightlife by integrating cutting-edge technology with the vibrant rhythms of Amapiano and Afrobeat. Their recent 'Vortex Wave' event saw record-breaking attendance.",
    },
    {
      title: "Breaking Barriers: How Vortex Dynasty Empowers Local Artists",
      date: "February 12, 2025",
      summary:
        "By providing a platform for emerging talent, Vortex Dynasty has become a launchpad for local artists. Collaborations with international DJs and musicians have propelled the club into the global spotlight.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 text-center mb-12">
          Vortex Dynasty in the Press
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h2 className="text-2xl font-bold text-blue-400">{article.title}</h2>
              <p className="text-sm text-gray-400 mb-3">{article.date}</p>
              <p className="text-gray-300 leading-relaxed">{article.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Press;
