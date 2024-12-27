import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

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
            <motion.div className="w-full lg:w-1/4" initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}>
              <img
                src={p.image}
                alt={p.title}
                height={150}
                width={150}
                className="mb-6 rounded "
              />
            </motion.div>
            <motion.div className="w-full max-w-xl lg:w-3/4" initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}>
              <h6 className="mb-2 font-semibold ">{p.title}</h6>
              <p className="mb-4 text-neutral-400 ">{p.description}</p>
              {p.technologies.map((t, i) => (
                <span
                  key={i}
                  className="mr-2 rounded  px-2 py-1 text-sm font-bold text-neutral-900 bg-neutral-300"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
