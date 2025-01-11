import React, { useRef } from "react";
import CustomHook from "../CustomHook/CustomHook";
import "./style.css";
import avatar from "../../assets/google_ad_3d (1).png";

function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="Home">
      <div className="content">
        <div className="name">
          Google ADS <span>Specialist</span>
        </div>
        <div className="des">
          Hello, my name is Temirlan Baisalov <br />I am an experienced Google Ads specialist with over 3 years of experience in creating and optimizing campaigns on the Google Ads platform. My strengths include strategic planning, performance analysis, and implementing solutions that drive business growth.
        </div>

        <a
          href="#contactMe"
          className="animation active "
        >
          Contact me
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </section>
  );
}

export default Home;
