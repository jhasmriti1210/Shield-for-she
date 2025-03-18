import React from "react";
import "../../styles/footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import logo from "../../images/logo.png";
import { useAuth } from "../../context/auth";

const Footer = (props) => {
  const [auth, setAuth] = useAuth();

  return (
    <>
      {auth?.user?.role ? (
        <>
          <div>
            <section id="contact" className="footer_wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 footer_logo mb-4 mb-lg-0">
                    <img decoding="async" src={logo} width={150} />
                    {/* <h1 className='text-sm' style={{fontSize:'25px'}}>WOMEN SECURE</h1> */}

                    <p className="footer_text" style={{ textAlign: "justify" }}>
                      Shield For She  , we're dedicated to making Secure website
                      for women saftey and we give our best at what we do
                    </p>
                  </div>
                  <div className="col-lg-4 px-lg-5 mb-4 mb-lg-0">
                    <h3 className="footer_title">Contact</h3>
                    <p className="footer_text">
                      <a>ShieldForShe@gmail.com</a>
                      <br />
                      <a className="footer-address">
                        DELHI SKILL AND ENTERPENEURSHIP UNIVERSITY, <br />
                        OKHLA  <br />
                        DELHI, India
                      </a>
                    </p>
                  </div>
                  <div className="col-lg-3 mb-4 mb-lg-0">
                    <h3 className="footer_title">Social Media</h3>
                    <p>
                      
                    </p>
                  </div>
                  <div className="col-12 footer_credits text-center">
                    <span>
                      © 2025 <a>Women Safety</a>™. All Rights Reserved.
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
          <div>
            <section id="contact" className="footer_wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 footer_logo mb-4 mb-lg-0">
                    <img decoding="async" src={logo} width={150} />
                    {/* <h1 className='text-sm' style={{fontSize:'25px'}}>WOMEN SECURE</h1> */}

                    <p className="footer_text" style={{ textAlign: "justify" }}>
                    Shield For She, we're dedicated to making Secure website
                      for women saftey and we give our best at what we do
                    </p>
                  </div>
                  <div className="col-lg-4 px-lg-5 mb-4 mb-lg-0">
                    <h3 className="footer_title">Contact</h3>
                    <p className="footer_text">
                    <a>ShieldForShe@gmail.com</a>
                      <br />
                      <a className="footer-address">
                        Delhi Skill and Enterpreneurship University, <br />
                         <br />
                        
                      </a>
                    </p>
                  </div>
                  <div className="col-lg-3 mb-4 mb-lg-0">
                    <h3 className="footer_title">Social Media</h3>
                    <p>
                      
                      
                    </p>
                  </div>
                  <div className="col-12 footer_credits text-center">
                    <span>
                      © 2025 <a> Sheid For She </a>™. All Rights Reserved.
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
