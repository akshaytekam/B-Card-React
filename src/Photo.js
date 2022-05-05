import React from "react";
import pro from "./profil.jpg";
import "./styles.css";

export default function Photo() {
  return (
    <>
      <div className="profil-photo">
        <img src={pro} />
      </div>
    </>
  );
}
