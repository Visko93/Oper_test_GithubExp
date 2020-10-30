import React, { useState, useEffect } from "react";

import useDebounce from "../../hooks/useDebounce";
import DisplayUser from "../DisplayUser";

import logo from "../../assets/png/logo.png";
import track from "../../assets/svg/track.svg";
import sinc from "../../assets/svg/sinc.svg";
import "./style.css";

function SearchComponent(props) {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState({});

  const debouncedUsername = useDebounce(username, 500);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
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
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [username]);

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    setUsername(value);
  };
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="form">
        <form>
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
              onChange={handleChange}
            />
            <button className="form__button" onClick={handleChange}>
              Procurar
            </button>
          </div>
        </form>
        {!username ? (
          <img src={sinc} alt="" width={50} style={{ marginTop: "2em" }} />
        ) : (
          <DisplayUser isLoading={isLoading} userData={userData} />
        )}
      </div>
    </>
  );
}

export default SearchComponent;
