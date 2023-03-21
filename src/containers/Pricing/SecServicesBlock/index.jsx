const SecServicesBlock = ({img , text}) => {
	return(
      <div className="services-block-four transparent">
        <div className="inner-box">
          <div className="icon-icon bg4">
            <img src={img} alt="" />
          </div>
          <h3><a className="normal" href="#">{text}</a></h3>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicin elit. Laudantium modi assumenda beatae provide nt dolor consectetur aliquam posuere tortor,.</p>
        </div>
      </div>
	)
}

export default SecServicesBlock