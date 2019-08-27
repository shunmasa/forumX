import React from "react";
import "./footer.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCompass from "@fortawesome/fontawesome-free-solid/faCompass";
import faPhone from "@fortawesome/fontawesome-free-solid/faPhone";

import faEnvelope from "@fortawesome/fontawesome-free-solid/faEnvelope";

const Footer = () => {
  return (
    <footer className="bck_b_dark">
      <div className="container">
        <div className="logo">
          Forum <span>X</span>
        </div>
        <div className="wrapper">
          <div className="left">
            <h2> Content information</h2>
            <div className="business_nfo">
              <div className="tag">
                <FontAwesomeIcon icon={faCompass} className="icon" />
                <div className="nfo">
                  <div>Address</div>
                  <div>
                    289 Tuam St, Christchurch Central, Christchurch 8011
                  </div>
                </div>
              </div>

              <div className="tag">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div className="nfo">
                  <div>Phone</div>
                  <div>09-555 5490</div>
                </div>
              </div>

              <div className="tag">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <div className="nfo">
                  <div>Email</div>
                  <div>forum_X@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <h2>Description</h2>
            <div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae dicta veniam eveniet fugit facilis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
