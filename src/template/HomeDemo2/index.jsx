import {
  ServiceLeftBox,
  ServiceRightBox,
  FeaturesContent,
  PlatformContent,
  WhoWeHafe1,
  WhoWeHafe2,
  OurServiceContent,
} from '../../data/data-containers/data-HomeDemo2.js';

import {
  HomeDemo2About11,
  HomeDemo2About12,
  HomeDemo2Dotted1,
  HomeDemo2coreImgMap,
} from '../../utils/allImgs'

import './style/HomeDemo2.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import OurFeatures from '../../components/OurFeatures'
import WhoWeContant from '../../components/WhoWeContant'
import OurService from '../../components/OurService'
import PaymentPlatform from '../../components/PaymentPlatform'

import SecHeroSection from './SecHeroSection'

let HomeDemo2 = () => {

    return (
      <div>
        <Header Title="Home Template2" />
        <SecHeroSection />
        <div className="clearfix" />
        <WhoWeContant
          img={HomeDemo2coreImgMap}
          WhoWeHafe1={WhoWeHafe1}
          WhoWeHafe2={WhoWeHafe2}
          ClassSec="what-we-do section-padding-100-70"
        />
        <PaymentPlatform
          data={PlatformContent}
          img1={HomeDemo2About11}
          img2={HomeDemo2About12}
          img3={HomeDemo2Dotted1}
        />
        <OurFeatures
          data={FeaturesContent}
          ClassSec="section-padding-100-70 relative"
          IdSec="feet"
          ClassBox="service_single_content text-center mb-100 fadeInUp"
          ClassHead="bold"
        />
        <OurService data={OurServiceContent} />  
        <FooterPages />
      </div>
    );
};

export default HomeDemo2