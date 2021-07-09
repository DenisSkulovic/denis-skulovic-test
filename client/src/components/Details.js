import React, { useState } from "react";
import "./Details.scss";

export default function Details(props) {
  // ******************************************************************
  const handleNameInput = (e) => props.setName(e.target.value);
  const handleLocInput = (e) => props.setLoc(e.target.value);
  const handleCompNameInput = (e) => props.setCompany_name(e.target.value);
  const handleCompAddress1Input = (e) =>
    props.setCompany_address1(e.target.value);
  const handleCompAddress2Input = (e) =>
    props.setCompany_address2(e.target.value);
  const handlePhoneInput = (e) => props.setPhone(e.target.value);

  return (
    <div className="details-container p-3 mb-2">
      <div className="name">
        <span style={{ display: props.editing ? "none" : "block" }}>
          {props.contact.name}
        </span>
        <input
          className="form-control"
          onChange={(e) => handleNameInput(e)}
          name="name"
          placeholder="Full Name"
          type="text"
          value={props.name}
          hidden={props.editing ? false : true}
          required
        />
      </div>
      <div className="location mb-2">
        <span style={{ display: props.editing ? "none" : "block" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>{" "}
          {props.contact.loc}
        </span>{" "}
        <span style={{ display: props.editing ? "none" : "block" }}>
          {props.contact.coords}
        </span>
        <input
          className="form-control"
          onChange={(e) => handleLocInput(e)}
          name="loc"
          placeholder="Location"
          type="text"
          value={props.loc}
          hidden={props.editing ? false : true}
          required
        />
      </div>
      <div className="company">
        <div className="company-name">
          <span style={{ display: props.editing ? "none" : "block" }}>
            {props.contact.company_name}
          </span>
          <input
            className="form-control"
            onChange={(e) => handleCompNameInput(e)}
            name="company_name"
            placeholder="Company Name"
            type="text"
            value={props.company_name}
            hidden={props.editing ? false : true}
            required
          />
        </div>
        <div className="company-address1">
          <span style={{ display: props.editing ? "none" : "block" }}>
            {props.contact.company_address1}
          </span>
          <input
            className="form-control"
            onChange={(e) => handleCompAddress1Input(e)}
            name="company_address1"
            placeholder="Company Address 1"
            type="text"
            value={props.company_address1}
            hidden={props.editing ? false : true}
            required
          />
        </div>
        <div className="company-address2">
          <span style={{ display: props.editing ? "none" : "block" }}>
            {props.contact.company_address2}
          </span>
          <input
            className="form-control"
            onChange={(e) => handleCompAddress2Input(e)}
            name="company_address2"
            placeholder="Company Address 2"
            type="text"
            value={props.company_address2}
            hidden={props.editing ? false : true}
            required
          />
        </div>
        <div className="phone">
          <span style={{ display: props.editing ? "none" : "block" }}>
            P: {props.contact.phone}
          </span>
          <input
            className="form-control"
            onChange={(e) => handlePhoneInput(e)}
            name="phone"
            placeholder="Phone"
            type="tel"
            value={props.phone}
            hidden={props.editing ? false : true}
            required
          />
        </div>
      </div>
    </div>
  );
}
