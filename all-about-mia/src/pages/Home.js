import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="page home"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className="home-content">
        <h1>All About Mia</h1>
        <p>Hello! My name is Mia. I am 12 years old and live in Bellingham.</p>
        <p>I have 5 sisters, 3 brothers, and 5 siblings-in-law. I love spending time with my family and having fun!</p>
        <img src="aboutmia.jpg" alt="Mia having fun" />
        <p>Here is the rest of the gang</p>
        <img src="family.jpg" alt="Mia's family" />
      </div>
    </motion.div>
  );
};

export default Home;
