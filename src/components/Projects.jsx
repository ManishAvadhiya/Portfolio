import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { ArrowUpRightIcon } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const Projects = () => {

  return (
    <div className="border-b border-neutral-900 pb-4" id="projects">
      <motion.h1
        className="my-20 text-center sm:text-6xl  text-4xl "
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((p, i) => (
          <div key={i} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={p.image}
                alt={p.title}
                height={150}
                width={"sm:100px"}
                
                className="mb-6  rounded "
              />
            </motion.div>
            <motion.div
              className="w-full px-6 lg:w-3/4"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h6 className="mb-2 font-semibold ">{p.title}</h6>
              <p className="mb-4 text-neutral-400 ">{p.description}</p> 
              <div className="flex flex-wrap gap-3 ">
              {p.technologies.map((t, i) => (
                <span
                key={i}
                className=" rounded  px-2 py-1 text-sm font-bold text-neutral-900 bg-neutral-300"
                >
                  {t}
                </span>
              ))}
              </div>
              <div className="flex justify-start items-center gap-4">
              <button className="bg-neutral-300 mt-3 py-1 rounded-full sm:px-3 px-3 text-black flex justify-center items-center   font-bold ">
                <a href={p.link} target="_blank">Visit</a>
                <ArrowUpRightIcon className="ml-2 sm:size-4 size-3" />
              </button>
              <button className="bg-neutral-300 mt-3 py-1 rounded-full sm:px-3 px-3 text-black flex justify-center items-center   font-bold ">
                <a href={p.git} target="_blank">GitHub</a>
                <BsGithub className="ml-2 sm:size-4 size-3" />
              </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
