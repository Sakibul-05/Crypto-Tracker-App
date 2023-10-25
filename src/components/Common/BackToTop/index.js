import React, { useEffect, useRef } from "react";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import "./styles.css";

const BackToTopButton = () => {
  const myButtonRef = useRef(null);

  useEffect(() => {
    const myButton = myButtonRef.current;

    const scrollFunction = () => {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        myButton.style.display = "flex";
      } else {
        myButton.style.display = "none";
      }
    };

    window.onscroll = () => {
      scrollFunction();
    };

    return () => {
      // Clean up the event listener when the component unmounts
      window.onscroll = null;
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="top-btn" id="myBtn" ref={myButtonRef} onClick={topFunction}>
      <NorthRoundedIcon className="top-icon" sx={{ fontSize: "2rem" }} />
    </div>
  );
};

export default BackToTopButton;
