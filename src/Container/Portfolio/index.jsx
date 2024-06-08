import React, { useState } from "react";
import PageHeaderContent from '../../Component/Pageheader';
import { BsInfoCircleFill } from "react-icons/bs";
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.png';
import image8 from '../../images/image8.jpg';
import image9 from '../../images/image9.jpg';
import image10 from '../../images/image10.jpg';
import "./style.scss";

const portfolioData = [
  {
    id: 1,
    name: "Calculator",
    image: image1,
    link: "https://yogaprasadmk.github.io/Basic_Calculator/",
    category: "Development"
  },
  {
    id: 2,
    name: "Amazon Clone",
    image: image2,
    link: "https://amazonclonebyyogaprasad.netlify.app/",
    category: "Development"
  },
  {
    id: 3,
    name: "Tech E-Commerce",
    image: image3,
    link: "https://beamish-hotteok-4b4ac9.netlify.app/shop",
    category: "Development"
  },
  {
    id: 4,
    name: "Rock Paper Scissor",
    image: image4,
    link: "https://65d644b4bb7e8ce7d6cbafe2--visionary-sprinkles-161117.netlify.app/",
    category: "Development"
  },
  {
    id: 5,
    name: "Todo List App",
    image: image5,
    link: "https://65d847d78e8d87b26049fbb6--starlit-fenglisu-199ac5.netlify.app/",
    category: "Development"
  },
  {
    id: 6,
    name: "Codechef",
    image: image6,
    link: "https://www.codechef.com/users/yogaprasad_mk",
    category: "Profiles"
  },
  {
    id: 7,
    name: "Hackerrank",
    image: image7,
    link: "https://www.hackerrank.com/profile/yogaprasad_mk",
    category: "Profiles"
  },
  {
    id: 8,
    name: "Leetcode",
    image: image8,
    link: "https://leetcode.com/u/Yogaprasad_mk/",
    category: "Profiles"
  },
  {
    id: 9,
    name: "Github",
    image: image9,
    link: "https://github.com/Yogaprasadmk",
    category: "Profiles"
  },
  {
    id: 10,
    name:"Linkedin",
    image: image10,
    link: "https://www.linkedin.com/in/yogaprasadmk/",
    category:"Profiles",
  }
];

const Portfolio = () => {
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleFilter = (category) => {
    setFilteredCategory(category);
  };

  const filteredItems =
    filteredCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filteredCategory);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          <li
            className={filteredCategory === "All" ? "active" : ""}
            onClick={() => handleFilter("All")}
          >
            All
          </li>
          <li
            className={filteredCategory === "Development" ? "active" : ""}
            onClick={() => handleFilter("Development")}
          >
            Development
          </li>
          <li
            className={filteredCategory === "Profiles" ? "active" : ""}
            onClick={() => handleFilter("Profiles")}
          >
            Profiles
          </li>
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem ${item.name.trim()}`}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt="" src={item.image} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
