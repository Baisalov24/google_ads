import React, { useState, useRef } from "react";
import "./style.css";
import CustomHook from "../CustomHook/CustomHook";

function Projects() {
  const [listProjects] = useState([
    {
      name: "◉ Google Ads:",
      des: "Setup and optimization of campaigns",
    },
    {
      name: "◉ Analytics:",
      des: "Experience with Google Analytics, Google Tag Manager, Google Data Studio",

     
    },
    {
      name: "◉ SEO & SEM :",
      des: "Campaign optimization for increased search engine visibility",

    },
    {
      name: "◉ Keyword Research :",
      des: "Identifying and selecting effective keywords, setting up ad groups",

      
    },
    {
      name: "◉ A/B Testing :",
      des: "Designing and conducting tests to improve CTR and conversions.",

    },
    {
      name: "◉ Conversion Optimization :",
      des: "Setting up and analyzing goals, tracking conversions.",

    },
    {
      name: "◉ Budget Management :",
      des: "Managing advertising budgets, optimizing CPC, improving ROI.",

      
    },
    {
      name: "◉ Marketing Reporting :",
      des: "Creating performance reports, analyzing metrics, and ROI",

    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section ref={scrollTab} className="Projects1 Skills">
      <div className="title" ref={(el) => el && divs.current.push(el)}>My Skills</div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div className="item" key={key} ref={(el) => el && divs.current.push(el)}>
            <div className="images">
              <span className="mainValue">{value.name} </span> <span>{value.des}</span>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
