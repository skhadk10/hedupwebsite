import Div from "../../../components/Div";
import Atag from "../../../components/Atag";
import H3Tag from "../../../components/H3Tag";
import Section from "../../../components/Section";
import H1Tag from "../../../components/H1Tag";
import SpanTag from "../../../components/SpanTag";

const SecHeroSection = () => {
  return (
    <Section
      className="hero-section ico-bg4 relative section-padding"
      id="home"
    >
      <Div className="hero-section-content">
        <Div className="container h-100">
          <Div className="row h-100 mb-50 align-items-center">
            <Div className="col-12 col-lg-6 col-md-12">
              <Div className="welcome-content">
                <Div className="promo-section">
                  <H3Tag className="special-head gradient-text cyan">
                    Increase Your Internet Speed 
                  </H3Tag>
                </Div>
                <H1Tag className="w-text wow fadeInUp" data-wow-delay="0.2s">
                  Spend Less Time on Internet Issues.
                  <SpanTag className="gradient-text cyan">
                    Hed Up Trust
                  </SpanTag>{" "}
                  Help You With Your NBN Services
                </H1Tag>
                <p className="g-text wow fadeInUp" data-wow-delay="0.3s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae soluta, dignissimos aut, assumenda dolore totam natus
                  qui cum vel omnis voluptates.
                </p>
                <Div
                  className="info-btn-group wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <Atag href="/contact-us" className="btn more-btn mr-3">
                    contact us
                  </Atag>
                  <Atag href="/about-us" className="btn more-btn">
                    {" "}
                    Learn more
                  </Atag>
                </Div>
              </Div>
            </Div>
            <Div className="col-lg-6 col-md-12"></Div>
          </Div>
        </Div>
      </Div>
    </Section>
  );
};

export default SecHeroSection;
