import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Nav = () => {
  // https://github.com/bradtraversy/tailwind-course-projects/blob/main/website-projects/shortly/index.html
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <StaticImage src="../images/logo.svg" alt="innobi" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
