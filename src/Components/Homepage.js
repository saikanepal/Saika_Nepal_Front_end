import React, { useRef } from 'react';
import Navbar from './Navbar';
import AboutSaikaPage from './AboutSaikaPage';
import OurServices from './OurServices';
import ContactForm from './Forms/ContactForm';
import Cards from './Cards';
import Footer from './Footer';
import Career from './Career';
import Pricing from './Pricing';
import WhatsAppChatButton from './WhatsApp/WhatsAppChatButton';
const Homepage = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const ourplansRef = useRef(null);

  return (
    <div>
      <Navbar aboutRef={aboutRef} servicesRef={servicesRef} contactRef={contactRef} projectRef={projectRef} ourplansRef={ourplansRef}/>
      <div ref={aboutRef}>
        <AboutSaikaPage contactRef={contactRef}/>
      </div>
      <div ref={servicesRef}>
        <OurServices contactRef={contactRef} />
      </div>
      <div ref={contactRef}>
        <ContactForm/>
      </div>
      <div  ref={projectRef}>
        <Career/>
      </div>
      <div ref={ourplansRef}>
        <Pricing/>
      </div>
      <WhatsAppChatButton phoneNumber={process.env.REACT_APP_NUMBER} />
      <Footer/>
    </div>
  );
}

export default Homepage;
