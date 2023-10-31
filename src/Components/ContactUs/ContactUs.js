import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faEdgeLegacy,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="footer">
      <div className="container my-5">
        <footer className="text-center text-lg-start text-white">
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    <Link className="footer-item" to="/">
                    Alokchitrer Khela
                    </Link>
                  </h6>
                  <p>
                    Providing better gadgets.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    <Link className="footer-item" to="/FeaturedProducts">
                      PRODUCTS
                    </Link>
                  </h6>
                  <p>*</p>
                  <p>*</p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    <Link className="footer-item" to="/services">
                      SERVICES
                    </Link>
                  </h6>
                  <p>Home Delivery</p>
                  <p>Waste Management</p>
                  <p>24/7 Customer Support</p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> Dhaka, Bangladesh
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i>{" "}
                    md.azmi.siddique@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 880 1882400479
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row justify-content-center">
                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <Link className="footer-item" to="/">
                    <FontAwesomeIcon
                      className="icons"
                      icon={faEdgeLegacy}
                      size="2xl"
                    />
                  </Link>
                  <Link className="footer-item" to="/">
                    <FontAwesomeIcon
                      className="icons"
                      icon={faFacebook}
                      size="2xl"
                    />
                  </Link>
                  <Link className="footer-item" to="/">
                    <FontAwesomeIcon
                      className="icons"
                      icon={faInstagram}
                      size="2xl"
                    />
                  </Link>
                  <Link className="footer-item" to="/">
                    <FontAwesomeIcon
                      className="icons"
                      icon={faTwitter}
                      size="2xl"
                    />
                  </Link>
                </div>
              </div>
              <div className="p-3 d-flex align-items-center justify-content-center">
                © 2023 Copyright:
                <a className="text-white" href="https://md-azmi-siddique.github.io/Md-Azmi-Siddique/">
                  Md Azmi Siddique
                </a>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
    // </div>
  );
};

export default ContactUs;
