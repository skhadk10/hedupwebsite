import SectionHeading from '../SectionHeading'
import Div from '../Div';
import ImgTag from '../ImgTag';
import Section from '../Section';

const OurFeatures = ({data , ClassSec , IdSec="" , ClassBox , ClassHead=""}) => {
  return(
      <Section className={ClassSec} id={IdSec}>
        <Div className="container">
          <SectionHeading title='OUR FEATURES' text=' Why Choose Us'  textDown="HedUp is well known for its expertise, comprehensive services, technology, and customer support, all of which can help to improve the performance, reliability, and security of their ICT Telecommunications systems." />
          <Div className="row">
            {data && data.map((item , key) => (
              <Div className="col-12 col-md-6 col-lg-4" key={key}>
                <Div className={ClassBox} data-wow-delay="0.2s">
                  <Div className="service_icon">
                    <ImgTag src={item.img} alt="" />
                  </Div>
                  <h6 className={ClassHead}>{item.title}</h6>
                  <p>{item.text}</p>
                </Div>
              </Div>
            ))}
          </Div>
        </Div>
      </Section>
  )
}

export default OurFeatures