import {BallCanvas} from './canvas';
import { Tilt } from 'react-tilt';

import { SectionWrapper } from '../hoc';
import { technologies } from '../constants/constants';
import {motion} from 'framer-motion';
import { styles } from "../styles";
import { textVariant,fadeIn } from "../utils/motion";


const Tech = () => {
  return (
    <>
    
        <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Languages, Frameworks, Databases & Tools I have worked on</p>
      <h2 className={styles.sectionHeadText}>Skills</h2>
    </motion.div>
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      {technologies.map((technology) =>(
         <Tilt className='flex justify-evenly items-center flex-col'>
        <div className='mt-10 w-28 h-28 key={technology.name}'>
          {/* <BallCanvas icon={technology.icon}/> */}
          <img
          src={technology.icon}
          alt='web-development'
          className='w-24 h-24 object-contain'
        />
        </div>
        </Tilt>
      ))
      }
    </div>
    
    </>
  )
}

export default SectionWrapper(Tech,"");