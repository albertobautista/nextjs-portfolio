"use client";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        // viewport={{ once: true }}
        className="-mb-20  mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
        src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png"
      />
      <div className="space-y-10  px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="decoration-[#F7AB0A]/50 underline">little</span>{" "}
          background
        </h4>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, eaque,
          molestias vel iusto perferendis omnis architecto culpa recusandae
          debitis minima hic. Iusto mollitia harum reiciendis ad molestiae
          obcaecati repellat! Animi.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
