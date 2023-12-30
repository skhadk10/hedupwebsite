import {
  FeaturesContent,
  PlatformContent,
  ServicesContent
} from '../../data/data-containers/data-about.js'


import {
  AboutAbout11,
  AboutAbout12,
  AboutDotted1,
  AboutCoreImgAppo
} from '../../utils/allImgs'

import Header from '../../layouts/Header'
import FooterWith from '../../layouts/Footer/FooterWith'

import Breadcumb from '../../components/Breadcumb'
import OurFeatures from '../../components/OurFeatures'
import PaymentPlatform from '../../components/PaymentPlatform'
import AboutUs from '../../components/AboutUs'
import FooterPages from '../../layouts/Footer/FooterPages/index.jsx'

const AboutContainer = () => {

  return (
    <div>
      <Header Title="About" />
      <Breadcumb title='About us' text='Home' />
      <OurFeatures
        data={FeaturesContent}
        ClassSec="section-padding-100-70 relative"
        ClassBox="service_single_content text-center mb-100 fadeInUp"
      />
      <PaymentPlatform
        data={PlatformContent}
        img1={AboutAbout11}
        img2={AboutAbout12}
        img3={AboutDotted1}
      />
      {/* <AboutUs
        firstClass="about-us-area section-padding-100-70 clearfix"
        data={ServicesContent}
        img={AboutCoreImgAppo}
      /> */}
      <FooterPages/>
    </div>
  );
}

export default AboutContainer