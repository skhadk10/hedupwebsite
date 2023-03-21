import Div from "../Div";
import Atag from "../Atag";
import ImgTag from "../ImgTag";
import Section from "../Section";
import SpanTag from "../SpanTag";
import H3Tag from "../H3Tag";
import ITag from "../ITag";
import { Link } from "react-router-dom";

const PaymentPlatform = ({
  addBackColor = "payment-section-gradient",
  data,
  img1,
  img2,
  img3,
}) => {
  return (
    <Section className={`relative section-padding-100-70 ${addBackColor}`}>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
            <Div className="ab-wrapper">
              <ImgTag className="abso-img1" src={img1} alt="" />
              <ImgTag
                className="wow abso-img2 floating animated"
                data-wow-delay="0.2s"
                src={img2}
                alt=""
              />
              <ImgTag className="abso-img3" src={img3} alt="" />
            </Div>
          </Div>
          <Div className="col-12 col-lg-6 offset-lg-0">
            <Div className="who-we-contant mt-s">
              <Div className="mb-15 text-left" data-wow-delay="0.2s">
                <SpanTag className="gradient-text blue">
                  {" "}
                  Telecommunication services{" "}
                </SpanTag>
              </Div>
              <h4 data-wow-delay="0.3s">
                Wireline And Wireless Services
              </h4>
              <p data-wow-delay="0.4s">
                Hedup is a leading provider of customized telecommunications
                solutions for clients, offering both wireless and wireline
                telecommunication services. They provide end-to-end services for
                network design, installation, and maintenance. Hedup has the
                expertise to deliver reliable and high-performing
                telecommunications systems that meet their unique needs.
              </p>
              {data &&
                data.map((item, key) => (
                  <Div
                    className={`services-block-four v2 ${
                      item.checkFirst && "mt-30"
                    }`}
                  >
                    <Div className="inner-box">
                      <Div className="icon-font-box">
                        <ITag className="fa fa-check" />
                      </Div>
                      <H3Tag>
                        <Link to={item.path}> <Atag >{item.title}</Atag></Link>
                      </H3Tag>
                      <Div className="text width-80">
                        {item.text}
                      </Div>
                    </Div>
                  </Div>
                ))}
            </Div>
          </Div>
        </Div>
      </Div>
    </Section>
  );
};

export default PaymentPlatform;
