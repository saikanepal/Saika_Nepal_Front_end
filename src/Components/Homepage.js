import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";
import AboutSaikaPage from "./AboutSaikaPage";
import OurServices from "./OurServices";
import ContactForm from "./Forms/ContactForm";
import Footer from "./Footer";
import Career from "./Career";
import WhatsAppChatButton from "./WhatsApp/WhatsAppChatButton";
import YourWebsite from "./YourWebsite";

const Homepage = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const websiteRef = useRef(null);
  const ourplansRef = useRef(null);

  const [aboutAnimated, setAboutAnimated] = useState(false);
  const [servicesAnimated, setServicesAnimated] = useState(false);
  const [contactAnimated, setContactAnimated] = useState(false);
  const [projectAnimated, setProjectAnimated] = useState(false);
  const [websiteAnimated, setWebsiteAnimated] = useState(false);

  const aboutInView = useInView(aboutRef, { margin: "-100px 0px" });
  const servicesInView = useInView(servicesRef, { margin: "-100px 0px" });
  const contactInView = useInView(contactRef, { margin: "-100px 0px" });
  const projectInView = useInView(projectRef, { margin: "-100px 0px" });
  const websiteInView = useInView(websiteRef, { margin: "-100px 0px" });

  useEffect(() => {
    if (aboutInView && !aboutAnimated) {
      setAboutAnimated(true);
    }
    if (servicesInView && !servicesAnimated) {
      setServicesAnimated(true);
    }
    if (contactInView && !contactAnimated) {
      setContactAnimated(true);
    }
    if (projectInView && !projectAnimated) {
      setProjectAnimated(true);
    }
    if (websiteInView && !websiteAnimated) {
      setWebsiteAnimated(true);
    }
  }, [aboutInView, servicesInView, contactInView, projectInView, websiteInView]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  const firstVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <div>
      <Navbar
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        projectRef={projectRef}
        ourplansRef={ourplansRef}
        websiteRef={websiteRef}
      />
      <motion.div
        ref={aboutRef}
        initial="hidden"
        animate={aboutAnimated ? "visible" : "hidden"}
        variants={firstVariant}
      >
        <AboutSaikaPage contactRef={contactRef} />
      </motion.div>
      <motion.div
        ref={websiteRef}
        initial="hidden"
        animate={websiteAnimated ? "visible" : "hidden"}
        variants={variants}
      >
        <YourWebsite />
      </motion.div>
      <motion.div
        ref={servicesRef}
        initial="hidden"
        animate={servicesAnimated ? "visible" : "hidden"}
        variants={variants}
      >
        <OurServices contactRef={contactRef} />
      </motion.div>
      <motion.div
        ref={contactRef}
        initial="hidden"
        animate={contactAnimated ? "visible" : "hidden"}
        variants={variants}
      >
        <ContactForm />
      </motion.div>
      <motion.div
        ref={projectRef}
        initial="hidden"
        animate={projectAnimated ? "visible" : "hidden"}
        variants={variants}
      >
        <Career />
      </motion.div>
      <WhatsAppChatButton phoneNumber={process.env.REACT_APP_NUMBER} />
      <Footer />
    </div>
  );
};

export default Homepage;
