import {
  ServicesContent,
  WhoWeHafe1,
  WhoWeHafe2,
  FeaturesContent,
  PlatformContent,
  OurServiceContent
} from '../../data/data-containers/data-HomeDemo4.js';

import {
  HomeDemo4About11,
  HomeDemo4About12,
  HomeDemo4Dotted1,
  HomeDemo4coreImgMap,
  HeaderHeaderIll,
  shield,
  AboutCoreImgAppo
} from '../../utils/allImgs'

import './style/HomeDemo4.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../components/HeroSection1_4'
import OurFeatures from '../../components/OurFeatures'
import WhoWeContant from '../../components/WhoWeContant'
import OurService from '../../components/OurService'
import PaymentPlatform from '../../components/PaymentPlatform'

import SecAboutUs from './SecAboutUs'

const HomeDemo4 = () => {

    return (
      <div>
        <Header Title="Home Template4" />
        <SecHeroSection
          ClassSec="hero-section ico-bg1 relative hidden"
          imgUp={HeaderHeaderIll}
          imgDown={shield}
        />
        <div className="clearfix" />
        <OurFeatures
          data={FeaturesContent}
          ClassSec="section-padding-100-70 relative"
          IdSec="feet"
          ClassBox="service_single_content text-center mb-100"
          ClassHead="bold"
        />
        <SecAboutUs
          firstClass="about-us-area section-padding-0-70 clearfix"
          data={ServicesContent}
          img={AboutCoreImgAppo}
        />
        <PaymentPlatform
          data={PlatformContent}
          img1={HomeDemo4About11}
          img2={HomeDemo4About12}
          img3={HomeDemo4Dotted1}
        />
        <WhoWeContant
          img={HomeDemo4coreImgMap}
          WhoWeHafe1={WhoWeHafe1}
          WhoWeHafe2={WhoWeHafe2}
          ClassSec="what-we-do section-padding-100-70"
        />
        <OurService data={OurServiceContent} />
        <FooterPages />
      </div>
    );
};

export default HomeDemo4
