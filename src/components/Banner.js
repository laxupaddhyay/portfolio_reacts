import React from "react";
// Images
import Image from "../assets/IMG_20220703_042916_3-removebg-preview-_1_.svg";
// Icons
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

import  PDF from "./Lakshya_Upaddhyay_Resume.pdf";


const Banner = () => {
  
  return (
    
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center lg:gap-x-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[0.8] lg:text-[70px]"
            >
              LAKSHYA <span> UPADDHYAY</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-black mr-4">I am </span>
              <TypeAnimation
                sequence={[
                  "A Front-end",
                  2000,
                  "A React",
                  2000,
                  "A Nextjs",
                  2000,
                  "A Deveops",
                  2000,
                  " a AI",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
              <span className="text-black">Developer</span>
            </motion.div>
            <motion.p variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
               className="mb-8 text-black max-w-lg mx-auto lg:mx-0">
              I am confident in my ability to contribute to the success of your
              team. And I am always learning new technologies that are relevant
              to my position as a developer.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
               className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href={PDF} download className="text-gradient btn-link">
                {" "}
                My Resume
              </a>
            </motion.div>
            {/* socials */}
            <motion.div variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
               className="flex text-black text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://github.com/laxupaddhyay">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/lakshya-upaddhyay/">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/laxupaddhyay">
                <FaTwitter />
              </a>
            </motion.div>
          </div> {/* text */}
          <motion.div variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
               className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

