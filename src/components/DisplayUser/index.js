import React from "react";
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
function DisplayUser({ isLoading, userData }) {
  return (
    <div className="userdata">
      {isLoading ? (
        <Container />
      ) : (
        <div className="userCard">
          <img
            className="userCard__img"
            src={userData.avatar_url}
            alt={`Foto do usuário ${userData.name}`}
          />
          <div className="userCard__info">
            <h2 className="userCard__info-username">{userData.login}</h2>
            <h4 className="userCard__info-name">{userData.name}</h4>
            <ul className="userCard__list">
              <li className="userCard__list-item">
                <MdLanguage />
                <strong> Local: </strong>
                {userData.location}
              </li>
              <li className="userCard__list-item">
                <MdLocationSearching />
                <strong> Bio: </strong>
                {userData.bio}
              </li>
              <li className="userCard__list-item">
                <MdViewCarousel />
                <strong> Repositories: </strong>
                {userData.public_repos}
              </li>
              <li className="userCard__list-item">
                <MdSupervisorAccount />
                <strong> Followers: </strong>
                {userData.followers}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayUser;
