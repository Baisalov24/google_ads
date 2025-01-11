import React, { useRef, useState } from "react";
import CustomHook from "../CustomHook/CustomHook";
import "./style.css";
import primaLogo from "./companyLogo/Case-logo-prima.jpg"
import jfsLogo from "./companyLogo/Case-logo-jfc.jpg"
import smaLogo from "./companyLogo/Case-logo-sma.jpg"
import mamontLogo from "./companyLogo/Case-logo-min.jpg"
import airpodsLogo from "./companyLogo/Case-logo-airpods4.jpg"
import vtrendeLogo from "./companyLogo/Case-logo-vtrende.jpg"


function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [listSkills] = useState([
    {
      name: "Prima Construction-construction company",
      des: "My role in this project was to drive new customer acquisition through Google Ads. I was responsible for developing and optimizing targeted campaigns to generate high-quality leads. With a budget of $8,000, I successfully managed the campaigns to achieve a total of 13,800 leads, resulting in a cost per lead (CPL) of $0.50. My tasks included keyword research, ad copy optimization, campaign structuring, and continuous performance analysis to maximize ROI. Additionally, I used conversion tracking and A/B testing to improve campaign effectiveness and ensure that the goals were met within the allocated budget.",
      icon: primaLogo,
    },
    {
      name: "JFC Gym",
      des: "In this project, my objective was to drive lead generation for JFC Gym through Google Ads. With a budget of $2,500, I developed and optimized search and display campaigns to attract high-quality leads. As a result, I generated a total of 5,400 leads, achieving a cost per lead (CPL) of $0.40. My responsibilities included keyword research, ad copywriting, bid management, and continuous monitoring of campaign performance to ensure efficient budget allocation. I also implemented conversion tracking and used A/B testing to refine ad performance, which helped in optimizing ROI and achieving the desired lead generation goals.",
      icon: jfsLogo,
    },
    {
      name: "SMA Group",
      des: "For the SMA Group project, my primary goal was to generate high-quality leads through Google Ads. With a budget of $25,000, I focused on optimizing search and display campaigns to achieve an optimal cost per lead (CPL) of $0.35. As a result, I generated approximately 71,429 leads. My tasks included conducting in-depth keyword research, optimizing ad copy, managing bidding strategies, and continuously analyzing campaign performance. By closely monitoring the results and making necessary adjustments, I successfully maximized lead generation while ensuring that the campaigns stayed within budget. Additionally, I used conversion tracking and A/B testing to enhance the effectiveness of the campaigns and improve ROI.",
      icon: smaLogo,
    },
    {
      name: "Mamont.toys",
      des: "For the Mamont.toys project, my main goal was to drive sales through Google Ads. With a budget of $2,800, I successfully generated 850 sales, achieving a cost per sale (CPS) of $3.10. My responsibilities included setting up and optimizing search and shopping campaigns, conducting thorough keyword research, and refining ad copy to increase conversion rates. I continuously monitored campaign performance, adjusted bidding strategies, and implemented A/B testing to improve ad effectiveness. By leveraging conversion tracking, I was able to maximize sales while staying within the allocated budget and ensuring high ROI.",
      icon: mamontLogo,
    },
    {
      name: "AirPods store",
      des: "For the AirPods store project, my primary goal was to drive sales through Google Ads. With a budget of $6,000, I successfully generated 2,500 sales, achieving a cost per sale (CPS) of $2.40. My tasks included setting up and optimizing search and shopping campaigns, performing detailed keyword research, and refining ad copy to maximize conversions. I also continuously monitored campaign performance, adjusted bidding strategies, and conducted A/B testing to improve campaign effectiveness. By utilizing conversion tracking, I ensured the campaigns delivered optimal results within the allocated budget.",
      icon: airpodsLogo,
    },
    {
      name: "Vtrende - shoe store",
      des: "For the Vtrende shoe store project, my goal was to drive sales through Google Ads. With a budget of $1,200, I successfully generated approximately 316 sales, achieving a cost per sale (CPS) of $3.80. My responsibilities included creating and optimizing search and shopping campaigns, performing thorough keyword research, and crafting compelling ad copy to improve conversion rates. I closely monitored campaign performance, adjusted bidding strategies, and used A/B testing to optimize results. By leveraging conversion tracking, I ensured that the campaigns delivered high-quality results while staying within budget.",
      icon: vtrendeLogo,
    },
  ]);
  return (
    <section ref={scrollTab} className="Skills1 Projects">
      <div className="title" ref={(el) => el && divs.current.push(el)}>
      Work Showcase
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
      In this section, I showcase the results of my work through real case studies. Here, you'll find examples of how I have successfully managed Google Ads campaigns, improved ROI, and helped businesses achieve their marketing goals. 
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className={"item"}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <img className="companyLogo" alt='logo' src={value.icon}/>
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
