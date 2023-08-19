import {
  ServiceSingleInfo,
  ServicesBlockInfo,
  ServiceMultipleInfo,
} from "../../data/data-containers/data-Services.js";

import { ServicesCoreImgAppo } from "../../utils/allImgs";

import Header from "../../layouts/Header";
import FooterWith from "../../layouts/Footer/FooterWith";

import SectionHeading from "../../components/SectionHeading";
import Breadcumb from "../../components/Breadcumb";
import SecContent from "./SecContent";
import SubSecContent from "./SecContent/SubIndex.jsx";

const FiberServicesContainer = () => {
  return (
    <>
      <Header Title="Services" />
      <Breadcumb title="Services" text="Home" />
      <section className=" section-padding-100-70">
        <div className="container-fluid">
          <SectionHeading title="OUR SERVICES" text="Fiber Services" />
          <div className="col">
            {ServiceMultipleInfo && ServiceMultipleInfo[1] && (
              <SubSecContent
                img={ServiceMultipleInfo[1].img}
                title={ServiceMultipleInfo[1].title}
                text0={ServiceMultipleInfo[1].text0}
                text1={ServiceMultipleInfo[1].text1}
                text2={ServiceMultipleInfo[1].text2}
                text3={ServiceMultipleInfo[1].text3}
                text4={ServiceMultipleInfo[1].text4}
                text5={ServiceMultipleInfo[1].text5}
              />
            )}
          </div>
        </div>
      </section>
      <section className="about-us-area special section-padding-0-100 clearfix cir-right">
        <div className="container">
          <SectionHeading title="How IT Works" text=" How Our Platform Works" />
          <div className="row">
            <div className="col-md-6">
            {ServicesBlockInfo &&
                ServicesBlockInfo[17] && (
                  <div
                    className="services-block-four how"
                 
                    style={{ marginBottom: `${ ServicesBlockInfo[17].checkLast ? 0 : "30px"}` }}
                  >
                    <div className="inner-box">
                      <div className="step">{ ServicesBlockInfo[17].Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          { ServicesBlockInfo[17].title}
                        </a>
                      </h3>
                      <div className="text">
                        <p>{ ServicesBlockInfo[17].text}</p>
                      </div>
                    </div>
                  </div>
                )}
           {ServicesBlockInfo &&
                ServicesBlockInfo[18] && (
                  <div
                    className="services-block-four how"
                 
                    style={{ marginBottom: `${ ServicesBlockInfo[18].checkLast ? 0 : "30px"}` }}
                  >
                    <div className="inner-box">
                      <div className="step">{ ServicesBlockInfo[18].Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          { ServicesBlockInfo[18].title}
                        </a>
                      </h3>
                      <div className="text">
                        <p>{ ServicesBlockInfo[18].text}</p>
                      </div>
                    </div>
                  </div>
                )}
            {ServicesBlockInfo &&
                ServicesBlockInfo[19] && (
                  <div
                    className="services-block-four how"
                 
                    style={{ marginBottom: `${ ServicesBlockInfo[19].checkLast ? 0 : "30px"}` }}
                  >
                    <div className="inner-box">
                      <div className="step">{ ServicesBlockInfo[19].Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          { ServicesBlockInfo[19].title}
                        </a>
                      </h3>
                      <div className="text">
                        <p>{ ServicesBlockInfo[19].text}</p>
                      </div>
                    </div>
                  </div>
                )}
            </div>
            <div className="col-md-6">
              <div className="service-img-wrapper">
                <div className="image-box">
                {ServicesBlockInfo &&
                ServicesBlockInfo[20] && (
                  <div
                    className="services-block-four how"
                 
                    style={{ marginBottom: `${ ServicesBlockInfo[20].checkLast ? 0 : "30px"}` }}
                  >
                    <div className="inner-box">
                      <div className="step">{ ServicesBlockInfo[20].Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          { ServicesBlockInfo[20].title}
                        </a>
                      </h3>
                      <div className="text">
                        <p>{ ServicesBlockInfo[20].text}</p>
                      </div>
                    </div>
                  </div>
                )} {ServicesBlockInfo &&
                  ServicesBlockInfo[21] && (
                    <div
                      className="services-block-four how"
                   
                      style={{ marginBottom: `${ ServicesBlockInfo[21].checkLast ? 0 : "30px"}` }}
                    >
                      <div className="inner-box">
                        <div className="step">{ ServicesBlockInfo[21].Step}</div>
                        <h3>
                          <a className="normal" href="#">
                            { ServicesBlockInfo[21].title}
                          </a>
                        </h3>
                        <div className="text">
                          <p>{ ServicesBlockInfo[21].text}</p>
                        </div>
                      </div>
                    </div>
                  )} {ServicesBlockInfo &&
                    ServicesBlockInfo[22] && (
                      <div
                        className="services-block-four how"
                     
                        style={{ marginBottom: `${ ServicesBlockInfo[22].checkLast ? 0 : "30px"}` }}
                      >
                        <div className="inner-box">
                          <div className="step">{ ServicesBlockInfo[22].Step}</div>
                          <h3>
                            <a className="normal" href="#">
                              { ServicesBlockInfo[22].title}
                            </a>
                          </h3>
                          <div className="text">
                            <p>{ ServicesBlockInfo[22].text}</p>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterWith />
    </>
  );
};

export default FiberServicesContainer;
