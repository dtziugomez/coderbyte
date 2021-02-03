import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let addedName = {
          userFirstname: props.newuserFirstname.replace(/\#/g, ""),
          userLastname: props.newuserLastname.replace(/\#/g, ""),
          userPhone: props.newuserPhone.replace(/\#/g, ""),
        };

        props.addPersons(addedName);
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        id="userFirstname"
        type="text"
        defaultValue="Coder"
        onChange={props.onSelectedItemChanged}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        id="userLastname"
        type="text"
        defaultValue="Byte"
        onChange={props.onSelectedItemChanged2}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        id="userPhone"
        type="text"
        defaultValue="8885559999"
        onChange={props.onSelectedItemChanged3}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable(props) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>

      <tbody>
        {props.persons.map((contact, index) => (
          <tr key={index}>
            <td>{contact.userFirstname}</td>
            <td>{contact.userLastname}</td>
            <td>{contact.userPhone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application(props) {
  const initialFormState = {
    userFirstname: "Coder",
    userLastname: "Byte",
    userPhone: "8885559999",
  };
  const [user, setUser] = useState(initialFormState);
  const [persons, setPersons] = useState([
    {
      userFirstname: "",
      userLastname: "",
      userPhone: "",
    },
  ]);
  const [newuserFirstname, setNewFirstname] = useState("");
  const [newuserLastname, setNewuserLastname] = useState("");
  const [newuserPhone, setNewuserPhone] = useState("");

  const handleInputChange = (event) => {
    let name = event.target.value;
    setNewFirstname(name.replace(/\#/g, ""));
  };
  const handleInputChange2 = (event) => {
    let sname = event.target.value;
    setNewuserLastname(sname.replace(/\#/g, ""));
  };
  const handleInputChange3 = (event) => {
    let phone = event.target.value;
    setNewuserPhone(phone.replace(/\#/g, ""));
  };
  const handleaddPersons = (person) => {
    setPersons(persons.concat(person));
    document.getElementById("userFirstname").value = "";
    document.getElementById("userLastname").value = "";
    document.getElementById("userPhone").value = "";
  };
  return (
    <section>
      <PhoneBookForm
        user={user}
        persons={persons}
        onSelectedItemChanged={handleInputChange}
        onSelectedItemChanged2={handleInputChange2}
        onSelectedItemChanged3={handleInputChange3}
        addPersons={handleaddPersons}
        newuserFirstname={newuserFirstname}
        newuserLastname={newuserLastname}
        newuserPhone={newuserPhone}
      />
      <InformationTable persons={persons} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
