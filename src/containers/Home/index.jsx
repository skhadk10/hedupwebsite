import data from '../../data/data-containers/data-Home.js';

import FooterHome from '../../layouts/Footer/FooterHome'
import Header from "../../layouts/Header"
import Div from '../../components/Div';
import Atag from '../../components/Atag';
import H3Tag from '../../components/H3Tag';
import Section from '../../components/Section';
import H1Tag from '../../components/H1Tag';

import SectionHeading from '../../components/SectionHeading'
import SectionDemo from './SectionDemo'

const HomeContainer = () => {

    return (
      <>
        <Header
          Title="Home"
          headInHome={true}
        />
        <Section className="hero-section blue-bg relative section-padding" id="home">
          <Div className="hero-section-content">
            <Div className="container h-100">
              <Div className="row h-100 mb-50 align-items-center">
                {/* Welcome Content */}
                <Div className="col-12 col-lg-8 col-md-12 col-lg-offset-2">
                  <Div className="welcome-content text-center">
                    <Div className="promo-section">
                      <H3Tag className="special-head gradient-text cyan">Creative Cyber Security & IT Template</H3Tag>
                    </Div>
                    <H1Tag className="w-text wow fadeInUp" data-wow-delay="0.2s">Creative Cyber Security and Managed IT Services Template</H1Tag>
                    <p className="g-text wow fadeInUp" data-wow-delay="0.3s">it is our new Landing Page created for Cyber Security & Managed IT Services. It’s also a perfect for Cyber Security & Managed IT Services website.</p>
                    <Div className="info-btn-group wow fadeInUp" data-wow-delay="0.4s">
                      <Atag href="#" className="btn more-btn mr-3">choose demo</Atag>
                      <Atag href="#" className="btn more-btn"> Learn more</Atag>
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Section>
        <Section className="demo section-padding-100-70" id="demo">
          <Div className="container">
            <SectionHeading
              title='Creative Crypto designs'
              text='Choose a demo'
              textDown="Template will be a perfect platform for presenting your Cyber Security & IT Company. This Landing Page comes in great and clean design"
            />
            <SectionDemo data={data} />
          </Div>
        </Section>
        <FooterHome />
      </>
    );
}

export default HomeContainer;

