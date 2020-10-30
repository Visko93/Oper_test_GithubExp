//https://api.github.com/users/%7BUSERNAME%7D
//https://api.github.com/users/{USERNAME}/repos

function searchCharacters(search, type) {
  const queryString = type === "repos" ? `${search}/repos` : `${search}`;

  return fetch(`https://api.github.com/users/${queryString}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
