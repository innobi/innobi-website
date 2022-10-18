import React from "react";

const Team = () => {
  return (
    <section id="team">
      <div className="relative container flex flex-col max-w-6xl mx-auto my-16 px-6 text-gray-900 md:flex-row md:px-0">
        <img
          src="https://tailwindfromscratch.com/website-projects/loopstudios/images/desktop/image-interactive.jpg"
          alt="Will Ayd"
        />
        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
            Will Ayd
          </h2>
          <p className="max-w-md text-center md:text-left">
            Will Ayd is the owner and founder of innobi. Will brings 15 years of
            experience in enterprise analytics, balanced with his contributions
            to open-source tools like pandas.
          </p>
        </div>
      </div>
      <div className="relative container flex flex-col max-w-6xl mx-auto my-16 px-6 text-gray-900 md:flex-row md:px-0">
        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
            Jibeom Suh
          </h2>
          <p className="max-w-md text-center md:text-left">
            Jibeom "Joe" Suh is a rising graduate student at the University of
            Southern California. With a degree in business analytics, Jibeom has
            found his niche leading the Tableau Student User Group and
            developing a variety of dashboards for the USC football program.
          </p>
        </div>
        <img
          src="https://tailwindfromscratch.com/website-projects/loopstudios/images/desktop/image-interactive.jpg"
          alt="Jibeom Suh"
        />
      </div>
    </section>
  );
};

export default Team;
