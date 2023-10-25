import React from 'react'
import "./styles.css"
import gradientImg from "../../../assets/gradient.png"
import iphoneImg from "../../../assets/iphone.png" 
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';
import BasicButton from '../../Common/Button';

const MainComponent = () => {
  return (
    <div className="landingPage-container">
      <div className="left-container">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="para"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Link to="/dashboard"><BasicButton variant="contained" text="Dashboard"/></Link>
          <Link><BasicButton text="Share" variant="outlined"/></Link>
        </motion.div>
      </div>
      <div className="right-container">
        <img src={gradientImg} alt="gradient" className="gradient" />
        <motion.img
          src={iphoneImg}
          alt="iphone"
          className="iphone"
          inherit={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default MainComponent
