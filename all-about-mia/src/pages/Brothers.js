import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Brothers = () => {
  // List of brothers with their bio and image
  const brothers = [
    {
      name: 'John',
      image: 'john.jpg',
      bio: 'John bought a mansion and always likes having guests.',
    },
    {
      name: 'Jake',
      image: 'jake.jpg',
      bio: 'Jake is almost as good at ping pong, disc golf, and pickleball as John is',
    },
    {
      name: 'Peter',
      image: 'peter.jpg',
      bio: 'Peter is a bit of a brute, but I still miss him',
    },
  ];

  const [selectedBrother, setSelectedBrother] = useState(null);

  return (
    <motion.div
      className="page brothers"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h1>My Brothers</h1>

      {/* Show list of brothers if no brother is selected */}
      {!selectedBrother ? (
        <ul>
          {brothers.map((brother, index) => (
            <motion.li
              key={index}
              onClick={() => setSelectedBrother(brother)}
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9, rotate: 10 }}
            >
              {brother.name}
            </motion.li>
          ))}
        </ul>
      ) : (
        <motion.div
          className="brother-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={selectedBrother.image} alt={selectedBrother.name} />
          <h2>{selectedBrother.name}</h2>
          <p>{selectedBrother.bio}</p>
          <button onClick={() => setSelectedBrother(null)}>Back to List</button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Brothers;
