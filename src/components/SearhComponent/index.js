import React, { useState } from "react";

import DisplayUser from "../DisplayUser";

import logo from "../../assets/png/logo.png";
import "./style.css";

function SearchComponent(props) {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { value, name } = e.target;

    setUser(([name]: value));
  };

  return (
    <>
      <div className="form">
        <form>
          <header className="form__header">
            <img src={logo} alt="github logo" className="form__header-icon" />
            <h1 className="form__header-title">Explorer</h1>
          </header>
          <div className="form__inputFrame">
            <label htmlFor="username" className="form__label">
              <input
                className="form__input"
                type="text"
                name="username"
                id="username"
                value={user}
                onChange={handleChange}
              />
            </label>
            <button className="form__button" onClick={handleSubmit}>
              Procurar
            </button>
          </div>
        </form>
        <DisplayUser props={user} />
      </div>
    </>
  );
}

export default SearchComponent;
