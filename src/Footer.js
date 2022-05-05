import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFaceLaughSquint } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function Footer() {
  return (
    <>
      <div className="footer-icons">
        <FontAwesomeIcon
          icon={faCoffee}
          style={{ width: "40px", height: "30px", color: "white" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faFaceLaughSquint}
          style={{ width: "40px", height: "30px", color: "white" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faCoffee}
          style={{ width: "40px", height: "30px", color: "white" }}
        ></FontAwesomeIcon>
      </div>
    </>
  );
}
