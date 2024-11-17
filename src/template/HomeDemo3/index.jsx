import {
  OurMainContent,
  FeaturesContent,
  PlatformContent,
  ServicesBlockInfo,
  OurServiceContent
} from '../../data/data-containers/data-HomeDemo3.js';

import {
  HomeDemo3About11,
  HomeDemo3About12,
  HomeDemo3Dotted1
} from '../../utils/allImgs'

import './style/HomeDemo3.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import OurFeatures from '../../components/OurFeatures'
import OurService from '../../components/OurService'
import PaymentPlatform from '../../components/PaymentPlatform'

import SecHeroSection from './SecHeroSection'
import SecOurMain from './SecOurMain'
import SecHowITWorks from './SecHowITWorks'
import { ServiceSingleInfo } from '../../data/data-containers/data-Services.js';

const HomeDemo3 = () => {

    return (
      <div>
        <Header Title="Hedup Trust" />
        <SecHeroSection />
        <div className="clearfix" />
        <SecOurMain OurMainContent={OurMainContent} />
        <div className="clearfix" />
        <PaymentPlatform
          data={PlatformContent}
          img1={HomeDemo3About11}
          img2={HomeDemo3About12}
          img3={HomeDemo3Dotted1}
          addBackColor=""
        />
        <OurFeatures
          data={FeaturesContent}
          ClassSec="section-padding-100-70 relative sky-bg"
          IdSec="feet"
          ClassBox="service_single_content text-center mb-100 fadeInUp"
          ClassHead="bold"
        />
        {/* <SecHowITWorks ServicesBlockInfo={ServicesBlockInfo} /> */}
        <OurService data={ServiceSingleInfo} />
        <FooterPages />
      </div>
    );
};

export default HomeDemo3