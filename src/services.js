export function save(text, data) {
  localStorage.setItem(text, JSON.stringify(data))
}

export function load(text) {
  const dataString = localStorage.getItem(text)
  try {
    return JSON.parse(dataString)
  } catch (error) {
    return { error }
  }
}

export function loadCompliments() {
  return fetch('http://localhost:3001/compliments')
    .then(res => res.json())
    .catch(() => {
      return []
    })
}

export function loadComplimentsToReview() {
  return fetch('http://localhost:3001/complimentstoreview')
    .then(res => res.json())
    .catch(() => {
      return []
    })
}
