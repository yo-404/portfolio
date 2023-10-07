import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from "../styles";
import { services } from '../constants/constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-24 h-24 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

 
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I'm a software developer with experience in Web Developement, and have worked with frameworks like React, Node.js, and
      Three.js. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. I also contribute to open source projects on Github .Let's work together to bring your ideas to life!
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    <motion.div variants={textVariant()}>
      <p className='mt-16 text-white text-[20px] text-left'>In my Free time?</p>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      🍁 I love football ⚽ and have been playing it with friends since school time.
      <br/><br/>🍁 I also like playing multiplayer FPS games. Why? Due to the intricate strategies, but that's not all. It also promotes teamwork, boosted my self reliance and improved my social interaction capacity.
      <br/><br/>🍁 I find immense joy and fascination in immersing myself in the world of anime. The intricate storytelling, breathtaking animation, and the profound emotions that emanate from the screen all conspire to create an enchanting experience that resonates deep within my soul 💕. 
      
    </motion.p>    

  </>
  );
};

export default SectionWrapper(About,"about")