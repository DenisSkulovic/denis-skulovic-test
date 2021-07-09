import React, { useState } from "react";
import Image from "./Image";
import Details from "./Details";
import Tools from "./Tools";
import "./Contact.scss";

export default function Contact({ contact, index, setContacts, contacts }) {
  // ******************************************************************
  const [name, setName] = useState(contact.name);
  const [loc, setLoc] = useState(contact.loc);
  const [company_name, setCompany_name] = useState(contact.company_name);
  const [company_address1, setCompany_address1] = useState(
    contact.company_address1
  );
  const [company_address2, setCompany_address2] = useState(
    contact.company_address2
  );
  const [phone, setPhone] = useState(contact.phone);
  // ******************************************************************
  const [editing, setEditing] = useState(
    contact["name"].length === 0 ? true : false
  );

  // ******************************************************************
  const fetchCoords = async (loc) => {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${loc.toLowerCase()}&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8`
    );
    const json = await res.json();
    if (json["results"].length === 0) {
      if (json["error_message"]) {
        alert(json["error_message"]);
      }
      return "";
    }
    return json["results"]["geometry"]["location"];
  };

  // ******************************************************************
  const validatePhoneNumber = (number) => {
    const strPhone = `${number}`;
    const match = strPhone.match(/[^\d(),\- +]/);
    if (match) {
      alert(
        "Invalid phone number. Phone can only contain numbers, ), (, + and -."
      );
      return false;
    }
    return true;
  };

  // ******************************************************************
  const handleSubmit = async (e) => {
    e.preventDefault();

    const coords = await fetchCoords(e.target.loc.value);
    const image = contacts[index]["image"];

    if (!validatePhoneNumber(e.target.phone.value)) {
      return;
    }

    const data = {
      name: e.target.name.value,
      company_name: e.target.company_name.value,
      company_address1: e.target.company_address1.value,
      company_address2: e.target.company_address2.value,
      phone: e.target.phone.value,
      title: e.target.title.value,
      loc: e.target.loc.value,
      coords: coords,
      image: image,
    };
    const newContacts = [...contacts];
    newContacts[index] = data;

    setContacts(newContacts);
    setEditing(false);
  };

  // ******************************************************************
  return (
    <div className="contact mx-2 my-3 col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-3">
      <form
        action="#"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="contact-inner-wrapper d-flex">
          <div className="left-part col-5">
            <Image contact={contact} editing={editing} />
          </div>
          <div className="right-part col-7">
            <Details
              contact={contact}
              editing={editing}
              name={name}
              loc={loc}
              company_name={company_name}
              company_address1={company_address1}
              company_address2={company_address2}
              phone={phone}
              setName={setName}
              setLoc={setLoc}
              setCompany_name={setCompany_name}
              setCompany_address1={setCompany_address1}
              setCompany_address2={setCompany_address2}
              setPhone={setPhone}
            />
          </div>
        </div>
        <Tools
          index={index}
          editing={editing}
          setEditing={setEditing}
          setContacts={setContacts}
          contacts={contacts}
          setName={setName}
          setLoc={setLoc}
          setCompany_name={setCompany_name}
          setCompany_address1={setCompany_address1}
          setCompany_address2={setCompany_address2}
          setPhone={setPhone}
        />
      </form>
    </div>
  );
}
