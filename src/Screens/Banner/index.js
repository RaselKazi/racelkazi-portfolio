import { Link } from "react-scroll";
import Particle from "../../comp/Particle";
import Fade from 'react-reveal/Fade';
import Shake from 'react-reveal/Shake';
import ResumePDF from "../../assets/racel-kazi-resume.pdf"

var cubes = [1, 2, 3, 4, 5];

const index = () => {
  return (
    <section style={{ position: "relative", overflow: "hidden" }} id="banner">
      <div className="background">
        {cubes.map((item, i) => (
          <div key={i} className="cube"></div>
        ))}
      </div>

      <div className="banner--section">
        <div className="banner--content">
        <Fade top>
          <h1>Hi There! <span className="wave">👋🏻</span></h1>
          <Shake>
          <h1 className="heading-name">
                I'M
                <strong className="main-name"> RASEL KAZI</strong>
          </h1>
          </Shake>
          <p>
          I'm a Junior Web Developer. I'm passionate about coding and problem-solving. I love creating new things and find solutions to real-life problems. I always looking to deliver a high-quality product.</p>

          </Fade>
          <div className="">
            <div className="home-icon">
              <a
                target="_blank"
                href="https://www.facebook.com/freelancer.raselkazi"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/rasel-kazi-4197a41b9/">
                <i className="fab fa-linkedin-in"> </i>
              </a>
              <a
                target="_blank"
                href="https://github.com/RaselKazi"
              >
                <i className="fab fa-github"> </i>
              </a>
              <a
                target="_blank"
                href="https://medium.com/@raselkazi080"
              >
                <i className="fab fa-medium-m"> </i>
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=8801830225388&text=hi"
              >
                <i className="fab fa-whatsapp"> </i>
              </a>
            </div>
          </div>
          <div className="banner--btn">
            <Link to="" className="cus-btn primary-btn m-1 my-md-0"><span onClick={() => window.open(ResumePDF)}>Download CV</span>
            </Link>
            <Link to="about" className="cus-btn secondary-btn m-1 my-md-0">
              <span>More About</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
