import '../styles/uploadBook.css';
import vector72 from '../../assets/vectors/Vector72_x2.svg';
import Group1 from '../../assets/vectors/Graph1_x2.svg';
import BookRent6 from '../../assets/vectors/BookRent6_x2.svg';
import vector113 from '../../assets/vectors/Vector113_x2.svg';
import vector30 from '../../assets/vectors/Vector30_x2.svg';
import Group11 from '../../assets/vectors/Group11_x2.svg';
import Group4 from '../../assets/vectors/Group4_x2.svg';
import Group8 from '../../assets/vectors/Group8_x2.svg';
import Component13 from '../../assets/vectors/Component13_x2.svg';
import Group35 from '../../assets/vectors/Group35_x2.svg';
// import Group42 from '../../assets/vectors/';
import Logout from '../../assets/vectors/Logout_x2.svg';
import vector1 from '../../assets/vectors/Vector1_x2.svg';
import vector56 from '../../assets/vectors/Vector56_x2.svg';
// import vector16 from '../../assets/vectors/';


export default function OwnerBookUpload() {
  return (
    <div className="owner-book-upload">
      <div className="frame-2">
        <div className="frame-3">
          <div className="lucidemenu">
            <img className="vector" src={vector72} />
          </div>
          <div className="group-2">
            <img className="group-1" src={Group11} />
            <img className="book-rent" src={BookRent6} />
          </div>
        </div>
        <div className="line-1">
        </div>
        <div className="frame-7">
          <div className="frame-5">
            <div className="component-1">
              <img className="vector-9" src={vector113} />
            </div>
            <div className="dashboard">
            Dashboard
            </div>
          </div>
          <div className="frame-8">
            <div className="component-11">
              <img className="vector-10" src={vector30} />
            </div>
            <div className="dashboard-1">
            Book Upload
            </div>
          </div>
          <div className="frame-12">
            <div className="component-12">
              <img className="group" src={Group8} />
            </div>
            <div className="dashboard-2">
            Other
            </div>
          </div>
          <div className="frame-11">
            <div className="component-13">
              <img className="group-1" src={Group8} />
            </div>
            <div className="dashboard-3">
            Other
            </div>
          </div>
          <div className="frame-9">
            <div className="component-14">
              <img className="group-2" src={Group8} />
            </div>
            <div className="dashboard-4">
            Other
            </div>
          </div>
        </div>
        <div className="line-2">
        </div>
        <div className="frame-81">
          <div className="frame-71">
            <img className="component-15" src={Component13} />
            <div className="dashboard-5">
            Notification
            </div>
          </div>
          <div className="frame-6">
            <div className="component-16">
              <img className="group-3" src={Group35} />
            </div>
            <div className="dashboard-6">
            Setting
            </div>
          </div>
          <div className="frame-10">
            <div className="component-17">
              <img className="group-4" src={Group4} />
            </div>
            <div className="dashboard-7">
            Login as Admin
            </div>
          </div>
        </div>
        <div className="line-3">
        </div>
        <div className="logout">
          <div className="frame-39997">
            <img className="logout-1" src={Logout} />
          </div>
          <span className="logout-2">
          Logout
          </span>
        </div>
      </div>
      <div className="frame-1948754920">
        <div className="frame-39998">
          <p className="owner-book-upload-1">
          <span className="owner-book-upload-1-sub-0"></span><span>Owner/Book upload</span>
          </p>
        </div>
        <div className="frame-1948754919">
          <div className="upload-new-book">
            <div className="filter">
              <span className="upload-new-book-1">
              Upload new Book
              </span>
            </div>
            <div className="frame-1948754934">
              <div className="frame-1948754927">
                <div className="frame-40166">
                  <div className="content">
                    <div className="input-2">
                      <div className="label">
                      Search book by name or Author
                      </div>
                      <div className="content-1">
                        <span className="value">
                        Search...
                        </span>
                        <div className="arrow-drop-up-filled">
                          <img className="vector-26" src={vector1} />
                        </div>
                      </div>
                    </div>
                    <div className="active">
                    </div>
                  </div>
                  <div className="menu">
                    <div className="paper">
                      <div className="menu-item">
                        <span className="value-1">
                        Book 1
                        </span>
                      </div>
                      <div className="menu-item-1">
                        <span className="value-2">
                        Book 2
                        </span>
                      </div>
                      <div className="divider-horizontal">
                        <div className="divider">
                        </div>
                      </div>
                      <div className="menu-item-2">
                        <span className="value-3">
                        Add
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-1948754939">
                  <div className="input">
                    <div className="frame-21">
                      <span className="book-quantity">
                      Book Quantity
                      </span>
                    </div>
                    <div className="chevron-down">
                      <img className="vector-7" src={vector56} />
                    </div>
                  </div>
                  <div className="input-1">
                    <span className="rant-price-for-2-weeks">
                    Rant price for 2 weeks
                    </span>
                  </div>
                </div>
              </div>
              <div className="frame-1948754928">
                <div className="material-symbolsupload">
                  <img className="vector-8" src="assets/vectors/Vector16_x2.svg" />
                </div>
                <div className="frame-40058">
                  <span className="upload-book-cover">
                  Upload Book Cover
                  </span>
                </div>
              </div>
            </div>
            <div className="frame-1948754925">
              <div className="filter-1">
                <span className="submit">
                Submit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}