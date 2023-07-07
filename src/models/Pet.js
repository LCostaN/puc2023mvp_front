export default class Pet {
  constructor(name, src, history) {
    this.name = name || ''
    this.src = src || 'https://placehold.co/300x400'
    this.history = history || []
  }

  static fromJson(json) {
    return new Pet(json.name, json.src, json.history)
  }
}
