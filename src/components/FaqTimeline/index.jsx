import SectionHeading from '../SectionHeading'

import SingleFAQArea from './SingleFAQArea'


const FaqTimeline = ({data , img}) => {
  return (
	<div className="faq-timeline-area transparent section-padding-100-85" id="faq">
		<div className="container">
		  <SectionHeading title='Our Platform FAQ' text='Frequently Questions' />
		  <div className="row align-items-center">
		    <div className="col-12 col-lg-6 col-md-12">
		      <div className="wrapper-counter">
		        <img src={img} alt="" />
		      </div>
		    </div>
		    <div className="col-12 col-lg-6 col-md-12">
		      <div className="faq-area mt-s ">
		        <dl style={{marginBottom: 0}}>
		          {data && data.map((item , key) => (
		              <>
		                  <SingleFAQArea key={key} text={item.text} ID={item.ID} />
		              </>
		          ))}
		        </dl>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
  );
}

export default FaqTimeline