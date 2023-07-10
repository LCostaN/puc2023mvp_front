export default class Pet {
  constructor(name, src) {
    this.name = name || ''
    this.src = src || 'https://placehold.co/300x400'
  }

  static fromJson(json) {
    return new Pet(json.name, json.src)
  }
}
