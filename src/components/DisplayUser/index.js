import React, { useEffect, useState } from "react";
import {
  MdLanguage,
  MdSupervisorAccount,
  MdViewCarousel,
  MdLocationSearching,
} from "react-icons/md";

import "./style.css";

import { TransverseLoading } from "react-loadingg";

const Container = () => (
  <TransverseLoading
    color={"#57b952"}
    style={{
      position: "absolute",
      height: "250px",
      width: "250px",
      left: `${window.innerWidth + 250}`,
      top: `${window.innerHeight + 250}`,
    }}
  />
);
//https://api.github.com/users/%7BUSERNAME%7D
//https://api.github.com/users/{USERNAME}/repos
function DisplayUser(props) {
  const [user, setUser] = useState({});
  const [isLoading, setisLoading] = useState(false);

  const username = "visko93";
  useEffect(() => {
    setisLoading(true);
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
        setUser({
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
        setisLoading(false);
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err);
      });
  }, [username]);
  console.log(user);

  return (
    <div className="userdata">
      {isLoading ? (
        <Container />
      ) : (
        <div className="userCard">
          <img
            className="userCard__img"
            src={user.avatar_url}
            alt={`Foto do usuário ${user.name}`}
          />
          <div className="userCard__info">
            <h2 className="userCard__info-username">{user.login}</h2>
            <h4 className="userCard__info-name">{user.name}</h4>
            <ul className="userCard__list">
              <li className="userCard__list-item">
                <MdLanguage />
                {` Local: ${user.location}`}
              </li>
              <li className="userCard__list-item">
                <MdLocationSearching />
                {` Bio: ${user.bio}`}
              </li>
              <li className="userCard__list-item">
                <MdViewCarousel />
                {` Repositories: ${user.public_repos}`}
              </li>
              <li className="userCard__list-item">
                <MdSupervisorAccount />
                {` Followers: ${user.followers}`}
              </li>
            </ul>
          </div>
        </div>
      )}
      {console.log(<Container />)}
    </div>
  );
}

export default DisplayUser;
