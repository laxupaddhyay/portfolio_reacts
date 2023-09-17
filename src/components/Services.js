import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const service = [
  {
    name: "Full-Stack Developer",
    description:
      "Proficient in full-stack development, I enjoy building end-to-end solutions that bridge the gap between front-end and back-end. I have good hands on Tailwind , Bootstrap and React.js",
    
  },
  {
    name: "AI Developer",
    description:
      "i love to develop and train AI models and konws various python libraies to do so",
   
  },
   {
    name: "Deveops Developer",
    description:
      " I have good hands on deveops tools like AWS, Docker,Kubernatives ",
    
  },
 
  {
    name: "Next.js Developer",
    description:
      "Passionate Next.js developer in building modern and performant web applications. Proficient in leveraging React.js and Next.js to create responsive and SEO-friendly websites.",
    link: "Learn more",
  },
 
];
const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex text-black flex-col lg:flex-row">
          <motion.div variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
               className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-soft-dark mb-12 lg:mb-0">
            <h2 className="h2 font-bold text-black mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Passionate software engineer skilled in developing robust and scalable applications using cutting-edge technologies.
            </h3>
            <button   onClick={() => (window.location.href = 'https://github.com/laxupaddhyay')} className="btn text-black btn-lg">See my </button>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
               className="flex-1">
            {/* Service list */}
            <div>
              {service.map((service, index) => {
                // distructure service
                const { name, description } = service;
                return (
                  <div className="border-b border-black/20 h-[146px] mb-[38px] flex" key={index}>
                    <div className="max-w-[476px]">
                        <h4 className="text-[20px] text-black tracking-wider font-primary font-semibold mb-6">{name}</h4>
                        <p className="font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                    
                     
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
