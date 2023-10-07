import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from "../styles";
import { socials } from '../constants/constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";

const SocialCard = ({ index, title, icon, source_code_link }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[4px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        onClick={() => window.open(source_code_link, "_blank")}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-30 h-30 object-contain'
        />

        <h3 className='text-white text-[20px] text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

 
const Socials = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Lets connect on</p>
      <h2 className={styles.sectionHeadText}>Socials</h2>
    </motion.div>

    {/* <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I'm a software developer with experience in Web Developement, and have worked with frameworks like React, Node.js, and
      Three.js. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. I also contribute to open source projects on Github .Let's work together to bring your ideas to life!
    </motion.p> */}

    <div className='mt-20 flex flex-wrap gap-10'>
      {socials.map((socials, index) => (
        <SocialCard key={socials.title} index={index} {...socials} />
      ))}
    </div>
  </>
  );
};

export default SectionWrapper(Socials,"socials");