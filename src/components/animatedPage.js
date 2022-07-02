import { motion } from "framer-motion";

// const animations = {
//   initial: { opacity: 0, scale: 0.1 },
//   animate: { opacity: 1, scale: 1 },
//   exit: { opacity: 1, scale: 0 },
// };

const animations = {
  initial: { opacity: 0, y: 600 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -600 },
};
const AnimatedPage = ({ children }) => {
  return (
    <div style={{ backgroundColor: "var(--backgroundColor)" }}>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedPage;
