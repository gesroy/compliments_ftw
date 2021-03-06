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

export function saveComplimentOnServer(inReviewText) {
  return fetch('http://localhost:3001/compliments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ text: inReviewText }),
  })
    .then(res => res.json())

    .catch(() => {
      return []
    })
}

export function saveComplimentToReviewOnServer(tempCompliment) {
  return fetch('http://localhost:3001/complimentsToReview', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ text: tempCompliment }),
  })
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
