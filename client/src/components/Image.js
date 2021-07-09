import React, { useState } from "react";
import "./Image.scss";

export default function Image({ contact, editing }) {
  const [title, setTitle] = useState(contact["title"]);

  const handleTitleInput = (e) => setTitle(e.target.value);
  return (
    <div className="image-container p-3 d-flex align-items-center flex-column nowrap">
      <div className="image mb-2">
        <img src={`./images/${contact.image}`} alt="" />
      </div>
      <div className="title text-center">
        <span style={{ display: editing ? "none" : "block" }}>
          {contact.title}
        </span>
        <input
          className="form-control"
          onChange={(e) => handleTitleInput(e)}
          type="text"
          name="title"
          placeholder="Job Title"
          value={title}
          hidden={editing ? false : true}
          required
        />
      </div>
    </div>
  );
}
