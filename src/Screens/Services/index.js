import {useState} from 'react'
import Bounce  from 'react-reveal/Bounce';
const Index = () => {

    const [services, setservices] = useState([
        {
            'id':'1',
            'icon':'javascript',
            'title':'javascript'
        },
        {
            'id':'2',
            'icon':'typescript',
            'title':'Typescript'
        },
        {
            'id':'1',
            'icon':'node-js',
            'title':'Node js'
        },
        {
            'id':'1',
            'icon':'express-109',
            'title':'Express js'
        },
        {
            'id':'1',
            'icon':'mongodb-icon-1',
            'title':'MongoDb'
        },
        {
            'id':'3',
            'icon':'nextjs-3',
            'title':'Next js'
        },
        {
            'id':'3',
            'icon':'react',
            'title':'React'
        },
        {
            'id':'3',
            'icon':'redux',
            'title':'Redux'
        },
        {
            'id':'3',
            'icon':'react-router',
            'title':'React Router'
        },

        {
            'id':'1',
            'icon':'graphql',
            'title':'Graph qi'
        },
        {
            'id':'1',
            'icon':'firebase-1',
            'title':'Firebase'
        },

        {
            'id':'1',
            'icon':'html5-2',
            'title':'Html 5'
        },
        {
            'id':'1',
            'icon':'css',
            'title':'Css'
        },
        {
            'id':'1',
            'icon':'sass',
            'title':'Sass'
        },
        {
            'id':'1',
            'icon':'tailwindcss',
            'title':'Tailwind Css'
        },
        {
            'id':'1',
            'icon':'bootstrap-5-1',
            'title':'Bootstrap'
        },
        {
            'id':'1',
            'icon':'material-ui-1',
            'title':'Material UI'
        },
        {
            'id':'1',
            'icon':'npm',
            'title':'Npm'
        },
        {
            'id':'1',
            'icon':'heroku-4',
            'title':'Heroku'
        },
        {
            'id':'1',
            'icon':'netlify',
            'title':'Netlify'
        },

    ]);

    return (
        <section id="services" className="service--section">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-8">
                        <h5 className="about--sub--title">Skills</h5>
                        <h3 className="about--title">Leading the way in Creative Digital Agency</h3>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="row">

                    {
                        services.map ((service) => (
                            <Bounce  left cascade>
                            <div className="col-lg-3 col-md-4 col-sm-6" key={service.id}>

                                <div className="service-box my-4">
                                    <div className="icon">
                                        <img src={require(`../../assets/icon/${service.icon}.svg`).default} alt={service.title}/>
                                    </div>
                                    <div className="service-title">
                                        <h3>{service.title}</h3>
                                    </div>
                                </div>

                            </div>
                            </Bounce>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Index
