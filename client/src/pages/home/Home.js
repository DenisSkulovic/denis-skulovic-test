import React, { useState } from "react";
import "./Home.scss";
import Contacts from "../../components/Contacts";

export default function Home() {
  return (
    <div className="home-page">
      <div className="main">
        <Contacts />
      </div>
    </div>
  );
}
