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
