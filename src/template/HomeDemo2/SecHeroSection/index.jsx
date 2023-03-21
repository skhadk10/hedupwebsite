
import Div from '../../../components/Div';
import Atag from '../../../components/Atag';
import H3Tag from '../../../components/H3Tag';
import Section from '../../../components/Section';
import H1Tag from '../../../components/H1Tag';
import SpanTag from '../../../components/SpanTag';

const SecHeroSection = () => {

    return (

      <Section className="hero-section ico-header5 curved-section relative section-padding-100" id="home">
        <Div className="hero-section-content">
          <Div className="container ">
            <Div className="row align-items-center">
              <Div className="col-12 col-lg-5 col-md-12">
                <Div className="welcome-content text-left">
                  <Div className="promo-section">
                    <H3Tag className="special-head gradient-text cyan">All Cyber Security Services You Expect </H3Tag>
                  </Div>
                  <Div className="cd-intro v2 text-left">
                    <H1Tag className="is-full-width thin w-text" style={{lineHeight: '1.7'}}>
                      We Are Much More an IT &
                      <SpanTag className="gradient-text cyan bolder is-hidden" style={{display: 'inline'}}>Cyber Security Company<SpanTag className="o-text">.</SpanTag></SpanTag>
                    </H1Tag>
                  </Div>
                  <p className="g-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quaerat est, a labore excepturi rem sed eius facere error! Dolore in perspiciatis porro dolor debitis </p>
                  <Div className="info-btn-group fadeInUp w-text" data-wow-delay="0.4s">
                    <Atag href="#" className="btn more-btn mr-3">Learn More</Atag>
                    <Atag href="#" className="btn more-btn video-btn v2  mr-3"><i className="fa fa-play" /> </Atag>Watch Demo
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Section>
    );
}

export default SecHeroSection;