import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function infoProcess(event) {
    const { name, value } = event.target;
    setContact(prevValue => {
      switch (name) {
        case "fName":
          var info = {
            fName: value,
            lName: prevValue.lName,
            email: prevValue.email
          };
          break;
        case "lName":
          var info = {
            fName: prevValue.fName,
            lName: value,
            email: prevValue.email
          };
          break;
        case "email":
          var info = {
            fName: prevValue.fName,
            lName: prevValue.lName,
            email: value
          };
          break;
        default:
          break;
      }
      return info;
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={infoProcess}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={infoProcess}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={infoProcess}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
