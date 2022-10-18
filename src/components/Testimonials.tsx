import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-16">
      <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
        <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
        <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

        <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-blue">
              <StaticImage src="../images/rebase.svg" alt="" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            System Architecture
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            We design systems that are built to last. Our knowledge of IaaS and
            cloud-based best practices gives us an edge for configuration and
            deployment of scalable reporting solutions.
          </p>
        </div>

        <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-blue">
              <StaticImage src="../images/dashboard.svg" alt="" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Reporting and Analytics
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Data is the new oil. Once extracted and refined, we provide your
            company with the tools it needs to draw the most value.
          </p>
        </div>

        <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3">
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-blue">
              <StaticImage src="../images/science.svg" alt="" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Data Science
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Collecting data is one thing, learning from it is another. With our
            end-to-end approach to systems design we help you not only get the
            data you need, but help you configure the necessary machine learning
            and AI models.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
