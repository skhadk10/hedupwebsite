const SecTable = ({
	text1,
	text2,
	text3,
	text4,
	text5,
	text6,
	text7,
	text8,
	setActive=false
}) => {
	return(
	    <div className="col-lg-4 col-md-6">
	      <div className={`single_price_table_content text-center wow fadeInUp ${setActive && "active"}`} data-wow-delay="0.2s">
	        <div className="price_table_text">
	          <h5>{text1}</h5>
	          <h1>{text2}</h1>
	          <p>{text3}</p>
	        </div>
	        <div className="table_text_details">
	          <p>{text4}</p>
	          <p>{text5}</p>
	          <p>{text6}</p>
	          <p>{text7}</p>
	          <p>{text8}</p>
	        </div>
	        <div className="table_btn mt-50">
	          <a href="#" className="btn more-btn">Start</a>
	        </div>
	      </div>
	    </div>
	)
}

export default SecTable