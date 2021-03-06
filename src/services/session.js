const API_URL = process.env.REACT_APP_API_URL;

export async function registerUser({ name, handle, password }) {
  return fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, handle, password })
  })
  .then((res) => res.json());
}

export function checkUser({ handle, password }) {
    return fetch(`${API_URL}/session`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ handle, password })
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