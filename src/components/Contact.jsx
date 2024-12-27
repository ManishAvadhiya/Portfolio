import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { CopyrightIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="contact">
      <motion.h1
        className="my-20 text-center sm:text-6xl  text-4xl "
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
      >
        Contact
      </motion.h1>
      <motion.div className="text-center tracking-tighter">
        <motion.p
          className="my-4 "
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          className="my-4 "
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          className="my-4 underline"
          href="#"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {CONTACT.email}
        </motion.a>
        <motion.div
          className="my-4 "
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="flex justify-center items-center gap-3"><CopyrightIcon className="w-6"/> 2024 Manish Avadhiya</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
