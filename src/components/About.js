import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex  text-black flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div variants={fadeIn("right",0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 aabouts bg-about bg-contain bg-no-repeat h-[620px] rounded-full mix-blend-darken bg-top "></motion.div>
          {/* text */}
          <motion.div variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I'm a Passionate Developer</h3>
            <p className="mb-6">
            I am a passionate software developer with experience in developing web applications using various technologies. I enjoy solving problems and writing clean and efficient code. In my free time, I like to learn new technologies and work on personal projects.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
               
              </div>
              <div>
                
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg"> Contact me</button>
              <a href="#" className="text-gradient btn-link">My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
