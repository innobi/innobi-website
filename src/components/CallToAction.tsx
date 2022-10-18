import React from "react";

const CallToAction = () => {
  return (
    <section id="cta" class="py-24 bg-blue-dark">
      <div class="flex flex-col p-2 space-y-6">
        <h5 class="mx-auto space-y-10 text-4xl font-bold text-center text-white">
          Empower Your Data
        </h5>
        <button class="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-blue hover:bg-blueLight md:text-base md:py-3 focus:outline-none">
          <a href="mailto:sales@innobi.io">Contact Us</a>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
