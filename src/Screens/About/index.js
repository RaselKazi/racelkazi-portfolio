import Ztext from "react-ztext";
import img from "../../assets/img/IMG20210527150225.jpg"
import Fade from 'react-reveal/Fade';

const index = () => {
  return (
    <section className="about--section" id="about">
      <div className="container">
        <div className="row">
        <Fade left cascade>
          <div className="col-md-6">
            <h5 className="about--sub--title">ABOUT US</h5>
            <h3 className="about--title">
            Some things about me.!
            </h3>
            <div className="bar"></div>
            <div className="about--content">
              <div>
                <i className="fas fa-user"></i>
              </div>
              <div>
                <h4>I'm a Junior Web Developer.</h4>
                <p>
                I love creating new things and find solutions to real-life problems. I am passionate about solving problems using novel ideas and iterating quickly on my ideas to optimize them for scalability. and my expertise areas are HTML, CSS, Bootstrap, JavaScript, ES6, React js, MongoDB, Express.js, Node JS, and Typescript. I love to learn new things. Now I'm learning Python, Data structure and Algorithm</p>
                <p>
                I also improve myself every day, optimizing my workflow in every step of my life. I'm always determined to achieve my goals.  I'm currently seeking an opportunity to extend my web development skills and knowledge.
                </p>
              </div>
            </div>
          </div>
          </Fade>
          <Fade right cascade>
          <div className="col-md-6">
            <div className="about-img">
              <img src={img} className="about-img-1"/>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default index;
