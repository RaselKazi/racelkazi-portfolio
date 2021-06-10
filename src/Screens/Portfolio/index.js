import { useState } from "react";
import OwlCarousel from "react-owl-carousel2";
import Fade from 'react-reveal/Fade';


const options = {
  items: 4,
  nav: true,
  rewind: true,
  autoplay: true,
  margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
};

const Index = () => {
  const [sliders, setSliders] = useState([
    {
      id: "1",
      url:"Apartment_hunt",
      title: "Apartment Hunt",
      type: "Responsive MERN Stack project with firebase authentication and dashboard functionality for customer and admin",
      demo:"https://apartment-hun.web.app/",
      source:"https://github.com/RaselKazi/apartment-hunt-clien",
      icon: ['html5-2','css','sass','bootstrap-5-1','javascript','react','redux','firebase-1','node-js','express-109','mongodb-icon-1','jwt-3',]
    },
    {
      id: "2",
      url:"Creative_agency",
      title: "Creative Agency",
      type: "A full-stack responsive service selling web app. That's also multipage. This app has an admin dashboard",
      demo:"https://creative-agency-76e4b.web.app/",
      source:"https://github.com/RaselKazi/creative-agency-client",
      icon: ['html5-2','css','bootstrap-5-1','javascript','react','firebase-1','node-js','express-109','mongodb-icon-1','jwt-3','heroku-4']
    },
    {
      id: "3",
      url:"Red_onion",
      title: "Red-Onion",
      type: "A simple page food delivery react web application with firebase authentication.There different types of food items for lunch and dinner.",
      demo:"https://red-onion-abbee.web.app/",
      source:"https://github.com/RaselKazi/Red-Onion",
      icon: ['html5-2','css','bootstrap-5-1','javascript','react','redux','firebase-1','netlify',]
    },

    {
      id: "4",
      url:"react-shopping-cart",
      title: "React Shopping Cart",
      type: "A responsive Shopping Cart react project with redux where can Shopping",
      demo:"https://react-redux-shopping-car-9e29a.web.app/",
      source:"https://github.com/RaselKazi/React-Redux-Shopping-Cart",
      icon: ['html5-2','css','material-ui-1','javascript','react','redux','react-router','firebase-1',]
    },

    {
      id: "5",
      url:"Volunteer-network",
      title: "Volunteer-Network",
      type: "A Volunteer-Network web app, Where people can join as a volunteer, admin can see all volunteers and adds volunteer",
      demo:"https://volunteer-network-e62ce.web.app/",
      source:"https://github.com/RaselKazi/10--volunteer-client",
      icon: ['html5-2','css','bootstrap-5-1','javascript','react','react-router','firebase-1','node-js','express-109','mongodb-icon-1','jwt-3','heroku-4',]
    },
    {
      id: "6",
      url:"Travel_guru",
      title: "Travel-Guru",
      type: "A Travel Agency responsive website. There any people who pick the date and book his / her interesting place where can want to go",
      demo:"https://react-travel-guru-a040c.web.app/",
      source:"https://github.com/RaselKazi/travel-guru",
      icon: ['html5-2','css','bootstrap-5-1','javascript','react','react-router','firebase-1','npm']
    },
    {
      id: "7",
      url:"react_landing_page",
      title: "React Landing Page",
      type: "A responsive React Landing Page website.Created with highly reusable components, can be updated from remote file.",
      demo:"https://react-landing-page-24419.web.app/",
      source:"https://github.com/RaselKazi/react_landing_page",
      icon: ['html5-2','css','bootstrap-5-1','javascript','react','react-router']
    },
    {
      id: "8",
      url:"hamro-journey",
      title: "Hamro Journey",
      type: "This is simple HTML Template created using HTML, CSS, javascript, Bootstrap",
      demo:"https://raselkazi.github.io/hamro-journey/",
      source:"https://github.com/RaselKazi/hamro-journey",
      icon: ['html5-2','css','bootstrap-5-1','javascript']
    },
    // {
    //   id: "1",
    //   url:"Creative_agency",
    //   title: "Doctor’s Portal",
    //   type: "A full-stack responsive Doctor's appointment booking web app. Where you can pick the date and time for fix an appointment with a doctor",
    //   demo:"https://www.google.com",
    //   source:"https://www.google.com",
    //   icon: ['html5-2','css','sass','tailwindcss','bootstrap-5-1','material-ui-1','typescript','javascript','react','redux','react-router','nextjs-3','graphql','apollo-graphql-compact','firebase-1','node-js','express-109','mongodb-icon-1','jwt-3','netlify','heroku-4','npm']
    // },


  ]);

  return (
    <section id="portfolio" className="protfolio--section">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8">
            <h5 className="about--sub--title">portfolio</h5>
            <h3 className="about--title">Some of our latest Projects</h3>
            <div className="bar"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel options={options}>
              {sliders.map((slider) => (
                <Fade right cascade>
                <div className="portfolio--item" key={slider.id}>
                   <div className="card-thumbnail" style={{ backgroundImage: `url(${require(`../../assets/img/projects/${slider.url}.png`).default})` }}>
                  </div>
                  <div className="portfolio--text">
                    <h3>{slider.title}</h3>
                    <p>{slider.type}</p>
                  </div>
                  <div className="portfolio--icon">
                    <p>Technology:</p>
                    {
                          slider.icon.map(i=><img src={require(`../../assets/icon/${i}.svg`).default} alt=""/>)
                    }
                  </div>
                  <div className="portfolio--btn">
                  <a target="_blank" href={slider.demo}><button className="por-btn primary-portfolio-btn">Demo</button></a>
                  <a target="_blank" href={slider.source}><button className="por-btn secondary-portfolio-btn">Code</button></a>
                  </div>
                </div>
                </Fade>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
