import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { CopyrightIcon } from "lucide-react";

const Contact = () => {

  return (
    <div className="border-b  border-neutral-900 pb-4" id="contact">
      <motion.h1
        className="my-20 text-center sm:text-6xl  text-4xl "
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
      >
        Contact
      </motion.h1>
      <motion.form
            action="https://api.web3forms.com/submit"
            method="POST"
            className=" max-w-6xl p-5 md:p-12"
            id="form"
            initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          >
            <p className="text-gray-100 font-bold text-xl mb-4">
              Get in touch
            </p>
            <input type="hidden" name="access_key" value="e133fe72-bb46-4499-b474-0af936c4a06e" />
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full text-white rounded-md py-2 pl-2 pr-4 bg-neutral-700 placeholder:text-neutral-300"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md text-white py-2 pl-2 pr-4 bg-neutral-700 placeholder:text-neutral-300"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md text-white py-2 pl-2 pr-4 bg-neutral-700 placeholder:text-neutral-300"
            />
            <button
              type="submit"
              className=" py-2 px-5 rounded-xl text-white font-semibold text-xl bg-black border-white border-2 border-opacity-30"
            >
              Send 
            </button>
          </motion.form>

      <motion.div className="text-center sm:flex gap-3 sm:items-center sm:justify-around tracking-tighter">
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
