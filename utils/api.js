const apiUrl = 'https://api.github.com/users' 
export const fetchUser = (user) => {
  if (user) {
    return fetch(`${apiUrl}/${user}`)
      .then(data => data.json())
  }
}
