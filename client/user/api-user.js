// creating a user
const create = (user) => {
    return fetch('/api/users/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
      .then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

// listing users
const list = () => {
    return fetch('/api/users/', {
      method: 'GET',
    }).then(response => {
      return response.json()
    }).catch((err) => console.log(err))
}