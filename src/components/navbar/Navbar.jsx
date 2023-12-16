import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Shaikh Rameez
        </motion.span>
        <div className="social" >
          <a href="https://github.com/johanirony" target='_blank'>
            <img src="/github.png" alt="" />
          </a>
          
          
          
          <a href="https://www.linkedin.com/in/rameezshaikh0811/" target='_blank'>
            <img src="/linkedin1.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
