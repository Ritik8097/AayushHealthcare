import { BrowserRouter as Router, Route, Switch, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Pdf from "./Pdf";
import AdminPage from "./AdminPage";
import LifeCycle from "./LifeCycle";
import AboutUs from "./AboutUs";
import WaterRisk from "./WaterRisk";
import Ayurveda from "./Ayurveda";
import ErrorPage from "./ErrorPage";
import CsrAtAayush from "./CsrAtAayush";
import Investors from "./Investors";
import CompanyIntro from "./CompanyIntro";
import ModernScience from "./ModernScience";
import HealthWellness from "./HealthWellness";
import MissionVision from "./MissionVision";
import Malnutrition from "./Malnutrition";
import HealthCheck from "./HealthCheck";
import OurProduct from "./OurProduct";
import Sustnability from "./Sustnability";
import PressRelease from "./PressRelease";
import Career from "./Career";
import Support from "./Support";
import InTheNews from "./InTheNews";
import Library from "./Library";
import PrivacyPolicy from "./PrivacyPolicy";
import ProductCarousel from "./ProductPage";
import ProductGummies from "./ProductPageGummies";
import ProductPageSleep from "./ProductPageSleep";
import AayushVenture from "./AayushVenture";
import Health from "./Health";
import PageTransition from "./PageTransition";
import { AnimatePresence } from "framer-motion";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Blog4 from "./Blog4";
import Blog5 from "./Blog5";
import Blog6 from "./Blog6";

import './index.css'
import Healthh from "./Healthh";
import FranchiseOnBoardForm from "./FranchiseOnBoardForm";
import DoctorOnboardForm from "./DoctorOnBoardForm";
import PathologyOnBoardForm from "./PathologyOnBoardForm";
import HealthAgentForm from "./HealthAgentForm";
import HospitalOnBoardForm from "./HospitalOnBoardForm";
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Layout /></PageTransition>} />
        <Route path="sustainability" element={<PageTransition><Sustnability /></PageTransition>} />
        <Route path="newsroom/in-the-news" element={<PageTransition><PressRelease/></PageTransition>} />
        <Route path="/career" element={<PageTransition><Career /></PageTransition>} />
        <Route path="support" element={<PageTransition><Support /></PageTransition>} />
        <Route path="newsroom/press-release" element={<PageTransition><InTheNews /></PageTransition>} />
        <Route path="newsroom/library" element={<PageTransition><Library /></PageTransition>} />
        <Route path="privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        
        <Route path="growth-accelerator" element={<PageTransition><AayushVenture /></PageTransition>} />
        {/* this is for about us only name health*/}
        <Route path="about-us" element={<PageTransition><Health /></PageTransition>} />
         <Route path="pan-masala" element={<PageTransition><ProductCarousel /></PageTransition>} />
    <Route path="gummies" element={<PageTransition><ProductGummies /></PageTransition>} />
    <Route path="gummies-sleep" element={<PageTransition><ProductPageSleep /></PageTransition>} />
        <Route path="healthcare" element={<PageTransition><Healthh /></PageTransition>} />
        <Route path="pan-masala" element={<PageTransition><ProductCarousel /></PageTransition>} />
        <Route path="gummies" element={<PageTransition><ProductGummies /></PageTransition>} />
        <Route path="gummies-sleep" element={<PageTransition><ProductPageSleep /></PageTransition>} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/Blog3" element={<Blog3 />} />
        <Route path="/Blog4" element={<Blog4 />} />
    <Route path="/nutraceuticals-vs-traditional" element={<Blog5 />} />
     <Route path="/top-7-ayurvedic-ingredients" element={<Blog6 />} />

        <Route path="ourproduct" element={<PageTransition><OurProduct /></PageTransition>} />
        <Route path="csr-at-aayush/health-check" element={<PageTransition><HealthCheck/></PageTransition>} />
        <Route path="csr-at-aayush/malnutrition" element={<PageTransition><Malnutrition/></PageTransition>} />
        <Route path="investors" element={<PageTransition><Investors/></PageTransition>} />
        <Route path="wellness/modern-science" element={<PageTransition><ModernScience/></PageTransition>} />
        <Route path="about/company-intro" element={<PageTransition><CompanyIntro/></PageTransition>} />
        <Route path="wellness/health-wellness" element={<PageTransition><HealthWellness/></PageTransition>} />
        <Route path="about/mission-vision" element={<PageTransition><MissionVision/></PageTransition>} />
        <Route path="ayurveda" element={<PageTransition><Ayurveda/></PageTransition>} />
        <Route path="sustainability/csr-at-aayush" element={<PageTransition><CsrAtAayush/></PageTransition>} />
        <Route path="sustainability/waterrisk" element={<PageTransition><WaterRisk/></PageTransition>} />
        <Route path="about" element={<PageTransition><AboutUs/></PageTransition>} />
        <Route path="pdf" element={<PageTransition><Pdf/></PageTransition>} />
        <Route path="sustainability/lifecycle" element={<PageTransition><LifeCycle/></PageTransition>} />
        <Route path="adminpage" element={<PageTransition><AdminPage/></PageTransition>} />
        <Route path="*" element={<PageTransition><ErrorPage /></PageTransition>} />

        <Route path="Doctor" element={<PageTransition><DoctorOnboardForm/></PageTransition>} />
        <Route path="franchise" element={<PageTransition><FranchiseOnBoardForm /></PageTransition>} />
        <Route path="Pathology" element={<PageTransition><PathologyOnBoardForm /></PageTransition>} />
        <Route path="Agent" element={<PageTransition><HealthAgentForm/></PageTransition>} />
        <Route path="Hospital" element={<PageTransition><HospitalOnBoardForm/></PageTransition>} />
        
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
    <AnimatedRoutes />
  </Router>
  );
}


export default App;
