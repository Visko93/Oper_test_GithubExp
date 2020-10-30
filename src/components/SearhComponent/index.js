import React, { useState, useEffect, useRef } from "react";

import { searchUser } from "../../tools/api/api";
import DisplayUser from "../DisplayUser";

import logo from "../../assets/png/logo.png";
import sinc from "../../assets/svg/sinc.svg";
import notFound from "../../assets/svg/notFound.svg";
import "./style.css";

function SearchComponent(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [username, setUsername] = useState("");

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    searchUser(searchName).then((data) => {
      if (data.message !== "Not Found") {
        const {
          name,
          login,
          location,
          bio,
          company,
          followers,
          following,
          avatar_url,
          public_repos,
          public_gists,
          subscriptions_url,
        } = data;
        setUserData({
          name,
          login,
          location,
          bio,
          company,
          followers,
          following,
          avatar_url,
          public_repos,
          public_gists,
          subscriptions_url,
        });
        setIsLoading(false);
        setIsError(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    });
  }, [searchName]);

  console.log(`This: ${isError}`);
  function handleSubmit(e) {
    e.preventDefault();

    setSearchName(username);
  }
  const Results = () => {
    if (username === "" || !userData)
      return <img src={sinc} alt="" width={50} style={{ marginTop: "2em" }} />;
    if (isError)
      return (
        <img src={notFound} alt="" width={50} style={{ marginTop: "2em" }} />
      );
    else if (userData)
      return <DisplayUser isLoading={isLoading} userData={userData} />;
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <header className="form__header">
            <img src={logo} alt="github logo" className="form__header-icon" />
            <h1 className="form__header-title">Explorer</h1>
          </header>
          <div className="form__inputFrame">
            <label htmlFor="username" className="form__label"></label>
            <input
              className="form__input"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="form__button" type="submit">
              Procurar
            </button>
          </div>
        </form>
        {<Results />}
      </div>
    </>
  );
}

export default SearchComponent;
