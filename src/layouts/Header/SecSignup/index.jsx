const SecSignup = ({Signupinfo , SignupIco}) => {

  return (
      <div id="signup-popup" className="white-popup modal fade">
        <div className="modal-dialog modal-dialog-scrollabl">
          <div class="modal-content">
            <div className="top-form-header modal-header">
              <h4 className="modal-title">Signup Form</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            <form action="#" method="post" className="modal-body" id="main_Signup_form" noValidate>
              <div className="row">
                {Signupinfo && Signupinfo.map((item , key) => (
                    <div key={key} className="col-12 col-md-12">
                      <div className="group">
                        <input type={item.Type} name="name" id={item.NameInput} required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>{item.Label}</label>
                      </div>
                    </div>
                ))}
                <div className="col-12 col-sm-5 text-left ">
                  <button type="submit" className="btn more-btn">Login</button>
                </div>
                <div className="col-12 col-sm-7 text-left">
                  <p className="mb-0 mt-10">Don't have an account? <a href>Sign up</a></p>
                </div>
              </div>
            </form>

            <div className="other-accounts text-center modal-footer">
              <p className="w-text">Login with other account</p>
              <div className="footer-social-info">
                {SignupIco && SignupIco.map((item , key) => (
                    <a key={key} href="#"><i className={item.nameIco} aria-hidden="true" /></a> 
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SecSignup;