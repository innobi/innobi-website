import * as React from "react";
import type { HeadFC } from "gatsby";
import "../styles/global.css";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Team />
      <Testimonials />
      <CallToAction />
    </React.Fragment>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <React.Fragment>
    <title>innobi</title>
    <meta
      name="description"
      content="innobi specializes in data engineering and analysis. We offer extensive Cloud, BI and Software experience to build scalable, performant and effective data solutions for clients"
    />
  </React.Fragment>
);
