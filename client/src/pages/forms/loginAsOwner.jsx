import '../styles/loginAsOwner.css';
import Grop16 from '../../assets/vectors/Group16_x2.svg';
import Group110 from '../../assets/vectors/Group110_x2.svg';
import BookRent4 from '../../assets/vectors/BookRent4_x2.svg';
import Vector94 from '../../assets/vectors/Vector33_x2.svg';

function LoginAsOwner() {
  return (
    <div className="login-as-owner">
      <div className="frame-1948754931">
        <img className="group-1" src={Grop16} />
      </div>
      <div className="frame-1948754932">
        <div className="form">
          <div className="group-3">
            <img className="group-11" src={Group110} />
            <img className="book-rent" src={BookRent4} />
          </div>
          <div className="custom-section-headings">
            <div className="box">
              <span className="section-heading">
              Login as Book Owner
              </span>
            </div>
            <div className="divider-horizontal">
              <div className="divider">
              </div>
            </div>
          </div>
          <div className="custom-forms-email-password">
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
            <div className="form-control-label-checkbox">
              <div className="checkbox">
                <img className="vector-12" src={Vector94} />
              </div>
              <div className="form-label">
                <span className="label-2">
                Remember me
                </span>
              </div>
            </div>
            <div className="button">
              <span className="button-1">
              Login
              </span>
            </div>
          </div>
        </div>
        <p className="haven-not-an-account-sign-up">
        <span className="haven-not-an-account-sign-up-sub-0"></span><span></span>
        </p>
      </div>
    </div>
  )
}

export default LoginAsOwner;