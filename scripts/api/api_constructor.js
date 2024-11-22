export default class API {
  constructor(path) {
    this.path = path
  }

  async get() {
    try {
      const response = await fetch(this.path)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()

      return data
    } catch (error) {
      console.error('Error fetching the JSON file:', error)

      throw error
    }
  }
}
