//https://api.github.com/users/%7BUSERNAME%7D
//https://api.github.com/users/{USERNAME}/repos

export function searchUser(search, type) {
  const queryString = type === "repos" ? `${search}/repos` : `${search}`;

  return fetch(`https://api.github.com/users/${queryString}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
