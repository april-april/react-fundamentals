// fetch sign-in auth API endpoint
const signin = (user) => {
    return fetch('/auth/signin/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
    })
      .then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

// fetch sign-out auth API endpoint
const signout = () => {
    return fetch('/auth/signout/', {
      method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

export { signin, signout }
