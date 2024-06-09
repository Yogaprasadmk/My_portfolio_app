import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import MyPdf from "../../resumesample/Resume_Updated.docx";
function Home() {
  const navigate = useNavigate();
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Yogaprasad M K
          <br />
          Aspiring Software Engineer
        </h1>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(600px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact-me">
            <div className="contact-me__buttons-wrapper">
              <button onClick={() => navigate("/contact")}>Hire Me</button>
              <a href={MyPdf} download="My_File.pdf">
                Download Resume
              </a>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
}
export default Home;
