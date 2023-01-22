import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Team = ({ data }) => {
  const teammates = data.allContentfulInnobiEmployee.nodes;

  const teammateHtml = teammates.map((teammate) => {
    const renderedImage = getImage(teammate.image);
    return (
      <div className="relative container flex flex-col max-w-6xl mx-auto my-16 px-6 text-gray-900 md:flex-row md:px-0">
        <GatsbyImage image={getImage(teammate.image)} alt={teammate.name} />
        <div className="pr-0 md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center uppercase md:text-5xl md:mt-0 md:text-left">
            {teammate.name}
          </h2>
          <p className="max-w-md text-center md:text-left">
            {renderRichText(teammate.about)}
          </p>
        </div>
      </div>
    );
  });

  return (
    <section id="team" className="bg-gray-100 py-16">
      <div class="container mx-auto px-3">
        <h2 class="text-4xl mb-6 font-bold text-center">Employee Profile</h2>
      </div>
      {teammateHtml}
    </section>
  );
};

export default function MyTeam(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulInnobiEmployee(
            sort: { order: ASC, fields: contentful_id }
          ) {
            distinct(field: contentful_id)
            nodes {
              name
              about {
                raw
              }
              image {
                gatsbyImageData(
                  width: 730
                  height: 500
                  placeholder: BLURRED
                  formats: [AUTO]
                )
              }
            }
          }
        }
      `}
      render={(data) => <Team data={data} {...props} />}
    />
  );
}
