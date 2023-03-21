import Div from "../Div";
import SpanTag from "../SpanTag";

const FiberSectionHeading = ({
  title,
  text,
  textDown,
  addWhite = false,
  ClassTextDown = "",
}) => {
  return (
    <Div className="section-heading text-center">
      <Div
        className="mb-15 justify-content-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <SpanTag className="gradient-text blue">{title}</SpanTag>
      </Div>
      <h2
        className={`${addWhite && "w-text"}`}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {text}
      </h2>
      <p className={ClassTextDown} data-aos="fade-up" data-aos-delay="400">
        {textDown}
      </p>
    </Div>
  );
};

export default FiberSectionHeading;
