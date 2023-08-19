import SectionHeading from "../../../components/SectionHeading";

import { ServicesCoreImgAppo } from "../../../utils/allImgs";

const SecHowITWorks = ({ ServicesBlockInfo }) => {
  return (
    <section className="about-us-area special section-padding-100 clearfix cir-right">
      <div className="container">
        <SectionHeading title="How IT Works" text=" How Our Platform Works" />
        <div className="row align-items-center">
          <div className="services-column col-lg-6 col-xs-12">
            {ServicesBlockInfo && ServicesBlockInfo[0] && (
              <div
                className="services-block-four how"
                style={{
                  marginBottom: `${
                    ServicesBlockInfo[0].checkLast ? 0 : "30px"
                  }`,
                }}
              >
                <div className="inner-box">
                  <div className="step">{ServicesBlockInfo[0].Step}</div>
                  <h3>
                    <a className="normal" href="#">
                      {ServicesBlockInfo[0].title}
                    </a>
                  </h3>
                  <div className="text">
                    We have many NBN register Telecommunication contractor for
                    Installation and Maintenance.
                  </div>
                </div>
              </div>
            )}
            {ServicesBlockInfo && ServicesBlockInfo[1] && (
              <div
                className="services-block-four how"
                style={{
                  marginBottom: `${
                    ServicesBlockInfo[1].checkLast ? 0 : "30px"
                  }`,
                }}
              >
                <div className="inner-box">
                  <div className="step">{ServicesBlockInfo[1].Step}</div>
                  <h3>
                    <a className="normal" href="#">
                      {ServicesBlockInfo[1].title}
                    </a>
                  </h3>
                  <div className="text">
                    providing ongoing maintenance and repair services for the
                    NBN network. This involves detecting and resolving network
                    issues, performing upgrades and maintenance tasks, and
                    testing and troubleshooting network problems.
                  </div>
                </div>
              </div>
            )}
            {ServicesBlockInfo && ServicesBlockInfo[2] && (
              <div
                className="services-block-four how"
                style={{
                  marginBottom: `${
                    ServicesBlockInfo[2].checkLast ? 0 : "30px"
                  }`,
                }}
              >
                <div className="inner-box">
                  <div className="step">{ServicesBlockInfo[2].Step}</div>
                  <h3>
                    <a className="normal" href="#">
                      {ServicesBlockInfo[2].title}
                    </a>
                  </h3>
                  <div className="text">
                  Our technician sets up the NBN connection box and modem/router in your home, establishes a stable connection, conducts tests, and upon success, your ISP activates the service, allowing you to enjoy high-speed internet.
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-12 col-lg-6 mt-s">
            <div className="service-img-wrapper">
              <div className="image-box">
                <img
                  src={ServicesCoreImgAppo}
                  className="center-block img-responsive phone-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecHowITWorks;
