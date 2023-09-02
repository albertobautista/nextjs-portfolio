"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-screen flex flex-col  items-center justify-center flex-shrink-0 snap-center p-10 h-screen"
          >
            <Link href={"/"}>
              <motion.img
                initial={{
                  y: -300,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-[500px] md:h-[300px] object-contain cursor-pointer"
              />
            </Link>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {index + 1}
                </span>{" "}
                UPS clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore impedit dolores atque reprehenderit delectus cupiditate
                hic, harum autem, quas corrupti animi odit! Quidem vitae veniam,
                fuga dolores quam accusantium ad!
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
