import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-lg-start text-color">
          <div className="container-fluid p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color">
                   Advocate/Lawyer Management System
                  </h5>

                  <p>
                  The Advocate/Lawyer Management System is a comprehensive platform designed to streamline the management of legal professionals and their services. It allows clients to book appointments, receive legal advice, and access a directory of experienced advocates and lawyers. The system also offers features for managing case files, scheduling, and client interactions, ensuring efficient and organized legal practice management..
                  </p>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">About us</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="">
                        About Services
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="">
                        Partners
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="">
                        Global Network
                      </a>
                    </li>
               
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Contact us</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="">
                       Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="">
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Careers</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="">
                       Trainee
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="">
                        Internship
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="">
                       Bootcamps
                      </a>
                    </li>
              
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-color">
                       Whatsapp
                      </a>
                    </li>
                    <li>
                     <p>+91-121-0687543</p>
                    </li>
                
                  </ul>
                </div>
              </div>
            </section>

            <hr className="mb-4" />

            <section className="container " style={{ backgroundColor: "#132238",height:"70px" }}>
              <p className="d-flex pt-3 justify-content-center align-items-center text-emphasis">
                <span className="me-3 " style={{color:"#fff"}}>Register as a User</span>
                <Link to="/user/patient/register" className="active">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-rounded text-emphasis "
                  >
                    Sign up!
                  </button>
                </Link>
              </p>
            </section>

            <hr className="mb-4" />
          </div>

          <div className="text-center">
            © 2024 Copyright: Designed and Developed by &nbsp;
            <a className="text-color-3" href="https://www.codewitharrays.in" target="_blank">
              codewitharrays.in
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
