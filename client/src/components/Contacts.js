import React, { useState } from "react";
import Add from "./Add";
import Contact from "./Contact";
import "./Contacts.scss";

export default function Contacts() {
  const [contacts, setContacts] = useState([
    {
      name: "John Smith",
      loc: "Rivera State",
      coords: "",
      company_name: "Twitter, Inc.",
      company_address1: "795 Folsom Ave, Suite 600",
      company_address2: "San Francisco, CA 94107",
      phone: "(123) 456-7890",
      image: "john_smith.jpg",
      title: "Graphics designer",
    },
    {
      name: "Alex Johnatan",
      loc: "Rivera State",
      coords: "",
      company_name: "Twitter, Inc.",
      company_address1: "795 Folsom Ave, Suite 600",
      company_address2: "San Francisco, CA 94107",
      phone: "(123) 456-7890",
      image: "alex_jonathan.jpg",
      title: "CEO",
    },
    {
      name: "Monica Smith",
      loc: "Rivera State",
      coords: "",
      company_name: "Twitter, Inc.",
      company_address1: "795 Folsom Ave, Suite 600",
      company_address2: "San Francisco, CA 94107",
      phone: "(123) 456-7890",
      image: "monica_smith.jpg",
      title: "Marketing manager",
    },
    {
      name: "Michael Zimber",
      loc: "Rivera State",
      coords: "",
      company_name: "Twitter, Inc.",
      company_address1: "795 Folsom Ave, Suite 600",
      company_address2: "San Francisco, CA 94107",
      phone: "(123) 456-7890",
      image: "michael_zimber.jpg",
      title: "Sales manager",
    },
    {
      name: "Sandra Smith",
      loc: "Rivera State",
      coords: "",
      company_name: "Twitter, Inc.",
      company_address1: "795 Folsom Ave, Suite 600",
      company_address2: "San Francisco, CA 94107",
      phone: "(123) 456-7890",
      image: "sandra_smith.jpg",
      title: "Graphics designer",
    },
    {
      name: "Janet Carton",
      loc: "Rivera State",
      coords: "",
      company_name: "Twitter, Inc.",
      company_address1: "795 Folsom Ave, Suite 600",
      company_address2: "San Francisco, CA 94107",
      phone: "(123) 456-7890",
      image: "janeth_carton.jpg",
      title: "Graphics designer",
    },
    {
      name: "Alex Johnatan",
      loc: "Rivera State",
      coords: "",
      company_name: "Twitter, Inc.",
      company_address1: "795 Folsom Ave, Suite 600",
      company_address2: "San Francisco, CA 94107",
      phone: "(123) 456-7890",
      image: "alex_jonathan.jpg",
      title: "CEO",
    },
  ]);

  return (
    <div className="contacts d-flex flex-wrap flex-row justify-content-center">
      {contacts.map((contact, i) => {
        return (
          <Contact
            contact={contact}
            contacts={contacts}
            setContacts={setContacts}
            key={i}
            index={i}
          />
        );
      })}
      <Add setContacts={setContacts} contacts={contacts} />
    </div>
  );
}
