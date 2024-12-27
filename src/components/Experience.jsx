import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center sm:text-6xl  text-4xl"
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
      >
        Experiences
      </motion.h1>

      <div>
        {EXPERIENCES.map((e, i) => (
          <div key={i} className="flex flex-wrap gap-4 lg:justify-center mb-8 ">
            <motion.div className="w-full lg:w-1/4 " initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}>
              <p className="mb-2 text-sm text-neutral-400 ">{e.year}</p>
            </motion.div>
            <motion.div className="w-full max-w-xl lg:w-3/4 " initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}>
              <h6 className="mb-2 font-semibold ">
                {e.role} - <span className="text-sm ">{e.company} </span>
              </h6>
              <p className="mb-4 text-neutral-400 ">{e.description}</p>
              {e.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="mt-4 mr-2 rounded-md text-neutral-900 bg-neutral-300  px-2 py-1 text-sm  font-medium transform hover:scale-110 transition duration-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
