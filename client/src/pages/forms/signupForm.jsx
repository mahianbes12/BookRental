import '../styles/signup.css';
import Grop16 from '../../assets/vectors/Group16_x2.svg';
import Group110 from '../../assets/vectors/Group110_x2.svg';
import BookRent4 from '../../assets/vectors/BookRent4_x2.svg';
import Vector94 from '../../assets/vectors/Vector58_x2.svg';
function SignupForm() {
  return (
    <div className="register">
      <div className="frame-1948754931">
        <img className="group-1" src={Grop16} />
      </div>
      <div className="frame-1948754932">
        <div className="form">
          <div className="group-2">
            <img className="group-11" src={Group110} />
            <img className="book-rent" src={BookRent4} />
          </div>
          <div className="custom-section-headings">
            <div className="box">
              <span className="section-heading">
              Singup into Book Rent
              </span>
            </div>
            <div className="divider-horizontal">
              <div className="divider">
              </div>
            </div>
          </div>
          <div className="custom-forms-email-password">
            <div className="frame-1948754933">
              <div className="text-field">
                {/* <span className="value">
                john@gmail.com
                </span> */}
                <div className="input">
                  <span className="value">
                  john@gmail.com
                  </span>
                </div>
                <div className="label-container">
                  <span className="label">
                  Email address
                  </span>
                </div>
              </div>
              <div className="text-field-1">
                {/* <span className="value-1">
                **********
                </span> */}
                <div className="input-1">
                  <span className="value-1">
                  **********
                  </span>
                </div>
                <div className="label-container-1">
                  <span className="label-1">
                  Password
                  </span>
                </div>
              </div>
              <div className="text-field-2">
                {/* <span className="value-2">
                **********
                </span> */}
                <div className="input-2">
                  <span className="value-2">
                  **********
                  </span>
                </div>
                <div className="label-container-2">
                  <span className="label-2">
                  Coniform Password
                  </span>
                </div>
              </div>
              <div className="text-field-3">
                {/* <span className="value-3">
                Addis Ababa
                </span> */}
                <div className="input-3">
                  <span className="value-3">
                  Addis Ababa
                  </span>
                </div>
                <div className="label-container-3">
                  <span className="label-3">
                  Location
                  </span>
                </div>
              </div>
              <div className="text-field-4">
                {/* <span className="value-4">
                0911555555
                </span> */}
                <div className="input-4">
                  <span className="value-4">
                  0911555555
                  </span>
                </div>
                <div className="label-container-4">
                  <span className="label-4">
                  Phone Number
                  </span>
                </div>
              </div>
            </div>
            <div className="form-control-label-checkbox">
              <div className="checkbox">
                <img className="vector-12" src={Vector94} />
              </div>
              <div className="form-label">
                <span className="label-5">
                I accept the Terms and Conditions
                </span>
              </div>
            </div>
            <div className="button">
              <span className="button-1">
              Sign in
              </span>
            </div>
          </div>
        </div>
        <p className="already-have-an-account-login">
        <span className="already-have-an-account-login-sub-0"></span><span></span>
        </p>
      </div>
    </div>
  )
}

export default SignupForm;