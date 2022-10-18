import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  // https://github.com/bradtraversy/tailwind-course-projects/blob/main/website-projects/shortly/index.html
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
        <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            Expert Data Engineering
          </h1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            We make your data simple, performant and actionable.
            <br />
            You drive your business forward.
          </p>
          <div className="mx-auto lg:mx-0">
            <a
              href="mailto:sales@innobi.io"
              className="py-5 px-10 text-2xl font-bold text-white bg-blue rounded-full lg:py-4 hover:opacity-70"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
          <StaticImage src="../images/work-chat.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
