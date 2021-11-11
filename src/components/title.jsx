import React, { memo } from "react";

import "../styles/title.scss";
 
const Title = memo(() => {
  return (
    <section className="title_container">
      <div className="title_background"></div>
      <div className="title_filter"></div>{" "}
      <div className="title_contents">
        <h1>Mahmoud Cali</h1>
        <div className="line"></div>
        <h1></h1>
        <h2>Full Stack Software Developer</h2>
        
          <a href="https://drive.google.com/file/d/1wDnmk-VvjPfAV2PdjIXulaglOLOg6RRS/view?usp=sharing">Download CV</a>
      </div>
    </section>
  );
});

export default Title;
