import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Sisters = () => {
  // List of sisters with their bio and image
  const sisters = [
    {
      name: 'Lydia',
      image: 'lydia.jpg',
      bio: 'Lydia cares very deeply about everyone around her',
    },
    {
      name: 'Rachel',
      image: 'rachel.jpg',
      bio: 'Rachel bought an RV and loves taking road trips',
    },
    {
      name: 'Laura',
      image: 'laura.jpg',
      bio: 'Laura created an entire company on her own and is very creative',
    },
    {
      name: 'Kathleen',
      image: 'kathleen.jpg',
      bio: 'Kathleen is a talented chef and loves blessing other people',
    },
    {
      name: 'Jamey',
      image: 'jamey.jpg',
      bio: 'Jamey is the smartest and loves talking and asking questions.',
    },
  ];

  const [selectedSister, setSelectedSister] = useState(null);

  return (
    <motion.div
      className="page sisters"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h1>My Sisters</h1>

      {/* Show list of sisters if no sister is selected */}
      {!selectedSister ? (
        <ul>
          {sisters.map((sister, index) => (
            <motion.li
              key={index}
              onClick={() => setSelectedSister(sister)}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
            >
              {sister.name}
            </motion.li>
          ))}
        </ul>
      ) : (
        <motion.div
          className="sister-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={selectedSister.image} alt={selectedSister.name} />
          <h2>{selectedSister.name}</h2>
          <p>{selectedSister.bio}</p>
          <button onClick={() => setSelectedSister(null)}>Back to List</button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Sisters;
