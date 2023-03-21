import { Link } from "react-router-dom";

const SecContent = ({
  img,
  title,
  text0,
  text1,
  text2,
  text3,
  text4,
  text5,
  path,
}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      {/* Content */}
      <div
        className="service_single_content text-center mb-100 fadeInUp"
        data-wow-delay="0.2s"
      >
        {/* Icon */}
        <div className="service_icon">
          <img src={img} alt="" />
        </div>
        <h6 className="bold">{title}</h6>
        <p>
          {text0}
        </p>
        {/* <p>{text1}</p> */}
        {/* <p>{text2}</p>
        <p>{text3}</p>
        <p>{text4}</p>
        <p>{text5}</p> */}
        <Link to={path} className="btn more-btn">Read More</Link>
      </div>
    </div>
  );
};

export default SecContent;
