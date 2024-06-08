import React from "react";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
import "./style.scss";
const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContactmePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home_text_wrapper">
        <h1>
          Hello, I'm Yogaprasad M K
          <br />
          Aspiring MERN Stack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.3}
        delay={0.7}
        start={{ transform: "translateY(500px)" }}
        end={{ transform: "translatex(0px)" }}
      >
        <div className="home_contactme">
          <button onClick={handleNavigateToContactmePage}>HIRE ME</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
