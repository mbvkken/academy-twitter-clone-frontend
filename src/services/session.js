const API_URL = 'http://localhost:3334';

export function checkUser(handle, password) {
    return fetch(`${API_URL}/session`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify( {handle, password} )
    })
    .then((result) => result.json());
}

export function checkSession() {
    return fetch(`${API_URL}/session`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem('twitter_clone_token')
      }
    })
    .then((res) => res.status === 200);
  }