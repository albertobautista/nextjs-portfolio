import { motion } from "framer-motion";
import React from "react";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[500px] xl:w-[700px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png"
        alt="Placeholder"
        className="w-28 h-28 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Google</h4>
        <p className="font-bold text-2xl mt-1">Google</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png"
            alt="Place"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png"
            alt="Place"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png"
            alt="Place"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png"
            alt="Place"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started working on</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>fsdf</li>
          <li>fsdf</li>
          <li>fsdf</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
