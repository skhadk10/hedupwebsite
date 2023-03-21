import ServiceBox from "./ServiceBox";
import Div from "../../../components/Div";
import Section from "../../../components/Section";

const SecOurMain = ({ OurMainContent }) => {
  return (
    <Section
      className="section-padding-0-0 relative clearfix"
      style={{ marginTop: "-50px" }}
    >
      <Div className="container">
        <Div className="has-shadow agency-sec">
          <Div className="row">
            {OurMainContent && OurMainContent.map((item , key) => (
                  <ServiceBox
                    key={key}
                    img={item.img}
                    title={item.title}
                    text1={item.text1}
                    text2={item.text2}
                    text3={item.text3}
                  />
              ))}
       

           
          </Div>
        </Div>
      </Div>
    </Section>
  );
};

export default SecOurMain;
