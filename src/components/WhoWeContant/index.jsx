import SectionHeading from '../SectionHeading'
import Article from "./Article"

import Div from '../Div';
import ImgTag from '../ImgTag';
import Section from '../Section';

const WhoWeContant = ({img , WhoWeHafe1 , WhoWeHafe2 , ClassSec}) => {
  return (
    <Section className={ClassSec}>
      <Div className="container">
        <SectionHeading title='OUR EXPECTED GROWTH' text='Our Global Growth' />
        <Div className="clearfix" />
        <Div className="row align-items-center">
          <Div className="col-12 col-lg-3">
            <Div className="row">
              {WhoWeHafe1 && WhoWeHafe1.map((item , key) => (
                <Article key={key} text={item.text} />
              ))}
            </Div>
          </Div>
          <Div className="col-12 col-lg-6">
            <Div className="map-container">
              <ImgTag src={img} className="mb-30" alt="saas" />
            </Div>
          </Div>
          <Div className="col-12 col-lg-3 ">
            <Div className="row">
              {WhoWeHafe2 && WhoWeHafe2.map((item , key) => (
                <Article key={key} text={item.text} />
              ))}
            </Div>
          </Div>
        </Div>
      </Div>
    </Section>
  );
}

export default WhoWeContant